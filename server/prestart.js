const fs = require('fs');

const config = require('./config');

function exec() {
  const file = 'static/app.js';

  if (fs.existsSync(file)) {
    const encoding = 'utf8';
    const searchValue = '"__JWT_CONFIG__"';
    const obj = Object.assign(
      { enabled: config.security.enabled, url: jwtConfig.url }, jwtConfig.credentials);

    const sb = [];
    Object.keys(obj).forEach(key => {
      let value = obj[key];

      if (value !== true && value !== false) {
        value = `"${obj[key]}"`;
      }

      sb.push(`${key}:${value}`);
    });

    const replaceValue = `{${sb.join(',')}}`;
    const content = fs.readFileSync(file, encoding).replace(searchValue, replaceValue);

    fs.writeFileSync(file, content, encoding);
    console.log(`Replaced ${searchValue} with ${replaceValue} in file ${file}`);
  }
  else {
    console.log(`File ${file} does not exist`);
  }
}

exports.exec = exec;
