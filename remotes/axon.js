'use strict';

const rp = require('@volteo/request-promise');

const logger = require('../utils/logger');
const thingSvc = require('../config').axon.thingSvc;
const actionSvc = require('../config').axon.actionSvc;

exports.getThings = (qs, headers) =>
  new Promise((resolve, reject) => {
    const options = {
      url: `${thingSvc.url}/things`,
      qs,
      headers,
      json: true
    };
    rp(options, logger).then(resolve).catch(reject);
  });

exports.getThing = (id, headers) =>
  new Promise((resolve, reject) => {
    const options = {
      url: `${thingSvc.url}/things/${id}`,
      headers,
      json: true
    };
    rp(options, logger).then(resolve).catch(reject);
  });

exports.executeAction = (action, headers, body) =>
  new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url: `${actionSvc.url}/things/actions/${action}`,
      headers,
      body,
      json: true
    };
    rp(options, logger).then(resolve).catch(reject);
  });
