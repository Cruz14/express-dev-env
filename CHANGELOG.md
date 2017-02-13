<a name="1.2.0"></a>
# [1.2.0](https://bitbucket.org/volteo/intel-iot-dashboard/compare/v1.1.0...v1.2.0) (2017-01-20)


### Bug Fixes

* **app:** influx query syntax fix for influx v1.1.0 ([ed108c3](https://bitbucket.org/volteo/intel-iot-dashboard/commits/ed108c3))
* **app:** rename variables modules ([39a972b](https://bitbucket.org/volteo/intel-iot-dashboard/commits/39a972b))


### Features

* **app:** change charts hover color and clean code modules ([0c58795](https://bitbucket.org/volteo/intel-iot-dashboard/commits/0c58795))



<a name="1.1.0"></a>
# [1.1.0](https://bitbucket.org/volteo/intel-iot-dashboard/compare/v1.0.11...v1.1.0) (2017-01-19)


### Bug Fixes

* **app:** add extra path to ws connection to differentiate from http connection ([74eddfc](https://bitbucket.org/volteo/intel-iot-dashboard/commits/74eddfc))
* **app:** add helpers folder to dist ([dfa722c](https://bitbucket.org/volteo/intel-iot-dashboard/commits/dfa722c))
* **app:** duplicated alerts on frontend from historical endpoint ([8db3522](https://bitbucket.org/volteo/intel-iot-dashboard/commits/8db3522))
* **app:** fix dependencies of client side ([958b30f](https://bitbucket.org/volteo/intel-iot-dashboard/commits/958b30f))
* **app:** fix for thermostat data log (thing type) ([d3e1e22](https://bitbucket.org/volteo/intel-iot-dashboard/commits/d3e1e22))
* **app:** fix map bounds ([484c3ee](https://bitbucket.org/volteo/intel-iot-dashboard/commits/484c3ee))
* **app:** fix map drawing on ws events ([f6aaf20](https://bitbucket.org/volteo/intel-iot-dashboard/commits/f6aaf20))
* **app:** fix routes of aqi querys ([5eca34e](https://bitbucket.org/volteo/intel-iot-dashboard/commits/5eca34e))
* **app:** fix thermostat control ([67744d7](https://bitbucket.org/volteo/intel-iot-dashboard/commits/67744d7))
* **app:** fix ws client connection ([d8afe38](https://bitbucket.org/volteo/intel-iot-dashboard/commits/d8afe38))
* **app:** fix ws connection for ie support ([f7b3798](https://bitbucket.org/volteo/intel-iot-dashboard/commits/f7b3798))
* **app:** map export route ([393a8f8](https://bitbucket.org/volteo/intel-iot-dashboard/commits/393a8f8))
* **app:** slider range min and max should come from thing type description ([108e32b](https://bitbucket.org/volteo/intel-iot-dashboard/commits/108e32b))
* **deploy:** fix deployment of css ([1e13d73](https://bitbucket.org/volteo/intel-iot-dashboard/commits/1e13d73))
* **security:** add auth0 to csp connect header ([fa7ae69](https://bitbucket.org/volteo/intel-iot-dashboard/commits/fa7ae69))
* **security:** add frameguard and csp headers ([00756e1](https://bitbucket.org/volteo/intel-iot-dashboard/commits/00756e1))
* **security:** add ws domain to csp connect header ([024b6ab](https://bitbucket.org/volteo/intel-iot-dashboard/commits/024b6ab))
* **security:** avoid infinite loop when security enabled in dev mode ([0cce19a](https://bitbucket.org/volteo/intel-iot-dashboard/commits/0cce19a))
* **security:** properly pass token when requesting graphs ([1e243ff](https://bitbucket.org/volteo/intel-iot-dashboard/commits/1e243ff))
* **security:** remove stack trace from error handler ([aa4866b](https://bitbucket.org/volteo/intel-iot-dashboard/commits/aa4866b))
* **security:** replace jwt config at runtime while in production mode ([d706252](https://bitbucket.org/volteo/intel-iot-dashboard/commits/d706252))
* **styles:** fix styles of navbar ([329936e](https://bitbucket.org/volteo/intel-iot-dashboard/commits/329936e))


### Features

* **app:** add busy icon on occupancy tab ([cfa9e84](https://bitbucket.org/volteo/intel-iot-dashboard/commits/cfa9e84))
* **app:** add motion free or busy ([b5666ec](https://bitbucket.org/volteo/intel-iot-dashboard/commits/b5666ec))
* **app:** apply env to front end ([c9f39fc](https://bitbucket.org/volteo/intel-iot-dashboard/commits/c9f39fc))
* **app:** backend endpoint to execute actions ([26a995b](https://bitbucket.org/volteo/intel-iot-dashboard/commits/26a995b))
* **app:** backend thermostat graph ([8a76747](https://bitbucket.org/volteo/intel-iot-dashboard/commits/8a76747))
* **app:** better thermostat graph ([83c21a3](https://bitbucket.org/volteo/intel-iot-dashboard/commits/83c21a3))
* **app:** better thermostat graph backend ([57c3bdc](https://bitbucket.org/volteo/intel-iot-dashboard/commits/57c3bdc))
* **app:** change map behavior ([9fe2837](https://bitbucket.org/volteo/intel-iot-dashboard/commits/9fe2837))
* **app:** change map image ([66f0a7d](https://bitbucket.org/volteo/intel-iot-dashboard/commits/66f0a7d))
* **app:** check token scopes on login and requests ([7ce8c36](https://bitbucket.org/volteo/intel-iot-dashboard/commits/7ce8c36))
* **app:** create map selection component and thermostat control changes ([daf11c8](https://bitbucket.org/volteo/intel-iot-dashboard/commits/daf11c8))
* **app:** create side panel component and thermostat control ([fc86eff](https://bitbucket.org/volteo/intel-iot-dashboard/commits/fc86eff))
* **app:** historic data from influxDB ([a6a7736](https://bitbucket.org/volteo/intel-iot-dashboard/commits/a6a7736))
* **app:** historical alerts endpoint ([41e5884](https://bitbucket.org/volteo/intel-iot-dashboard/commits/41e5884))
* **app:** live update of alerts model ([c01ec9d](https://bitbucket.org/volteo/intel-iot-dashboard/commits/c01ec9d))
* **app:** multiple style changes ([c5b5524](https://bitbucket.org/volteo/intel-iot-dashboard/commits/c5b5524))
* **app:** new graph week vs week occupancy ([a171025](https://bitbucket.org/volteo/intel-iot-dashboard/commits/a171025))
* **app:** power view model and controller ([efcdb4a](https://bitbucket.org/volteo/intel-iot-dashboard/commits/efcdb4a))
* **app:** refactor of client side ([daaa721](https://bitbucket.org/volteo/intel-iot-dashboard/commits/daaa721))
* **app:** send action thermostat ([3336fce](https://bitbucket.org/volteo/intel-iot-dashboard/commits/3336fce))
* **app:** site indicators and mobile navigation menu ([c3c0eb7](https://bitbucket.org/volteo/intel-iot-dashboard/commits/c3c0eb7))
* **app:** styles and thermostat controll ([a186762](https://bitbucket.org/volteo/intel-iot-dashboard/commits/a186762))
* **app:** thermostat control ([d072da6](https://bitbucket.org/volteo/intel-iot-dashboard/commits/d072da6))
* **app:** thermostat control changes ([a7697ba](https://bitbucket.org/volteo/intel-iot-dashboard/commits/a7697ba))
* **app:** thermostat graph ([9d2cf02](https://bitbucket.org/volteo/intel-iot-dashboard/commits/9d2cf02))
* **app:** websocket jwt security ([1aa0357](https://bitbucket.org/volteo/intel-iot-dashboard/commits/1aa0357))
* **security:** validate token in all backend routes ([414c81b](https://bitbucket.org/volteo/intel-iot-dashboard/commits/414c81b))



<a name="1.0.11"></a>
## [1.0.11](https://bitbucket.org/volteo/intel-iot-dashboard/compare/v1.0.10...v1.0.11) (2016-10-26)


### Features

* **app:** styles feats and chart changes ([118e59e](https://bitbucket.org/volteo/intel-iot-dashboard/commits/118e59e))



<a name="1.0.10"></a>
## [1.0.10](https://bitbucket.org/volteo/intel-iot-dashboard/compare/v1.0.9...v1.0.10) (2016-10-25)


### Features

* **app:** finish icons and features for maps ([eff84f0](https://bitbucket.org/volteo/intel-iot-dashboard/commits/eff84f0))



<a name="1.0.9"></a>
## [1.0.9](https://bitbucket.org/volteo/intel-iot-dashboard/compare/v1.0.8...v1.0.9) (2016-10-25)


### Features

* **app:** changes on styles and sample data ([ca520dc](https://bitbucket.org/volteo/intel-iot-dashboard/commits/ca520dc))



<a name="1.0.8"></a>
## [1.0.8](https://bitbucket.org/volteo/intel-iot-dashboard/compare/v1.0.7...v1.0.8) (2016-10-19)


### Features

* **app:** styling and views updates ([f85b042](https://bitbucket.org/volteo/intel-iot-dashboard/commits/f85b042))



<a name="1.0.7"></a>
## [1.0.7](https://bitbucket.org/volteo/intel-iot-dashboard/compare/v1.0.6...v1.0.7) (2016-10-13)


### Bug Fixes

* **app:** update config for axon services env var ([f718c9a](https://bitbucket.org/volteo/intel-iot-dashboard/commits/f718c9a))



<a name="1.0.6"></a>
## [1.0.6](https://bitbucket.org/volteo/intel-iot-dashboard/compare/v1.0.5...v1.0.6) (2016-10-13)


### Bug Fixes

* **app:** integrate .png on production ([73e9d31](https://bitbucket.org/volteo/intel-iot-dashboard/commits/73e9d31))
* **app:** proxy authorization header only ([d44536c](https://bitbucket.org/volteo/intel-iot-dashboard/commits/d44536c))


### Features

* **app:** map markers and api fixes ([dddf546](https://bitbucket.org/volteo/intel-iot-dashboard/commits/dddf546))



<a name="1.0.5"></a>
## [1.0.5](https://bitbucket.org/volteo/intel-iot-dashboard/compare/v1.0.4...v1.0.5) (2016-10-13)


### Features

* **app:** integrate auth0 tokens ([7963cb6](https://bitbucket.org/volteo/intel-iot-dashboard/commits/7963cb6))



<a name="1.0.4"></a>
## [1.0.4](https://bitbucket.org/volteo/intel-iot-dashboard/compare/v1.0.3...v1.0.4) (2016-10-13)


### Features

* **app:** create maps component ([085b6f9](https://bitbucket.org/volteo/intel-iot-dashboard/commits/085b6f9))
* **app:** endpoint to retrieve auth0 token ([2644880](https://bitbucket.org/volteo/intel-iot-dashboard/commits/2644880))
* **app:** server side proxy to thing service ([9307815](https://bitbucket.org/volteo/intel-iot-dashboard/commits/9307815))



<a name="1.0.3"></a>
## [1.0.3](https://bitbucket.org/volteo/intel-iot-dashboard/compare/v1.0.2...v1.0.3) (2016-10-06)


### Bug Fixes

* **app:** fix routes for sub-domains ([a0e1600](https://bitbucket.org/volteo/intel-iot-dashboard/commits/a0e1600))



<a name="1.0.2"></a>
## [1.0.2](https://bitbucket.org/volteo/intel-iot-dashboard/compare/v1.0.1...v1.0.2) (2016-10-04)


### Features

* **app:** create Thermostat view ([40d6791](https://bitbucket.org/volteo/intel-iot-dashboard/commits/40d6791))



<a name="1.0.1"></a>
## 1.0.1 (2016-09-28)


### Bug Fixes

* **app:** clean project dependencies ([76480eb](https://bitbucket.org/volteo/intel-iot-dashboard/commits/76480eb))
* **app:** fix npm dependencies error ([dad5b95](https://bitbucket.org/volteo/intel-iot-dashboard/commits/dad5b95))
* **app:** fix power indicators ([456e54b](https://bitbucket.org/volteo/intel-iot-dashboard/commits/456e54b))


### Features

* **app:** add Rooms Ocupancy View ([f3f86d2](https://bitbucket.org/volteo/intel-iot-dashboard/commits/f3f86d2))
* **app:** apply lint roules ([40c6a28](https://bitbucket.org/volteo/intel-iot-dashboard/commits/40c6a28))
* **app:** connect rooms to websockets service ([c315e3a](https://bitbucket.org/volteo/intel-iot-dashboard/commits/c315e3a))
* **app:** create share components ([61e626a](https://bitbucket.org/volteo/intel-iot-dashboard/commits/61e626a))
* **app:** create sharedComponents, features to power view ([f1d61bc](https://bitbucket.org/volteo/intel-iot-dashboard/commits/f1d61bc))
* **app:** create tables componet ([8a36b5d](https://bitbucket.org/volteo/intel-iot-dashboard/commits/8a36b5d))
* **app:** feats on rooms view ([0f072fb](https://bitbucket.org/volteo/intel-iot-dashboard/commits/0f072fb))
* **app:** feats to data indicators and table ([0dae403](https://bitbucket.org/volteo/intel-iot-dashboard/commits/0dae403))
* **app:** integrate docker ([df2b442](https://bitbucket.org/volteo/intel-iot-dashboard/commits/df2b442))
* **app:** integrate icons to big table component ([7de3aa2](https://bitbucket.org/volteo/intel-iot-dashboard/commits/7de3aa2))
* **app:** refact routes and create power view ([7f6e4ba](https://bitbucket.org/volteo/intel-iot-dashboard/commits/7f6e4ba))



