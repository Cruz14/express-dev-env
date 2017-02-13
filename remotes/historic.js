'use strict';

const influx = require('../helpers/influx');

exports.getMotionStats = (time, groupByTime) =>
  influx.query([`SELECT MEAN(temperature) AS temperature FROM aeotec_multisensor_6 
    WHERE time > now() - ${time} GROUP BY time(${groupByTime}) fill(previous)`,
    `SELECT SUM(motion)  FROM aeotec_multisensor_6 
    WHERE  time > now() - ${time}  GROUP BY externalId, time(${groupByTime}) fill(0)`]);

exports.getThermostatSetpoint = (time, groupByTime) =>
  influx.query(`SELECT MEAN(temperature) AS temperature, 
    LAST(heating_setpoint) AS heating_setpoint, 
    LAST(cooling_setpoint) AS cooling_setpoint FROM zwave_thermostat 
    WHERE time > now() - ${time} GROUP BY "name", time(${groupByTime})`);

exports.getThingTypeAlerts = (thingType, count) =>
  influx.query(`SELECT * FROM "${thingType}-alert" ORDER BY time DESC LIMIT ${count}`);

exports.get2WeeksUsage = () =>
  influx.query(['SELECT COUNT(motion) ' +
  'FROM aeotec_multisensor_6 WHERE time >= now() - 7d AND time <= now() - 1d ' +
  'AND motion = 1 GROUP BY time(1d), id',
    'SELECT COUNT(motion) FROM aeotec_multisensor_6 ' +
    'WHERE time >= now() - 14d AND time <= now() - 8d AND motion = 1 GROUP BY time(1d), id']);
