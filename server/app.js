const url = require('url');

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path');

const config = require('./config');

const app = express();
const isDevelopment = app.get('env') === 'development';

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/health', require('./controllers/health'));
app.use('/api', require('./controllers'));

if (isDevelopment) {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config.dev');
  const compiler = webpack(webpackConfig);

  const webpackDevOptions = {
    noInfo: true,
    historyApiFallback: true,
    publicPath: webpackConfig.output.publicPath,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };

  app.use(require('webpack-dev-middleware')(compiler, webpackDevOptions));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(helmet.frameguard({ action: 'deny' }));

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;

  next(err);
});

// error handler
app.use((err, req, res, next) => {
  const exception = { message: err.message };

  // development error handler will contain stacktrace
  if (isDevelopment) {
    exception.error = err.stack;
  }

  res.status(err.status || 500);
  res.send(exception);

  next('route');
});

module.exports = app;
