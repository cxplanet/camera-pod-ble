var util = require('util');
var bleno = require('../..');

var CamControlCharacteristic = require('./camera-control-characteristic');
var Cam1Characteristic = require('./camera-1-characteristic');
var Cam2Characteristic = require('./camera-2-characteristic');
var ImuCharacteristic = require('./imu-characteristic');

function PodService(camerapod) {
    bleno.PrimaryService.call(this, {
        uuid: '13333333333333333333333333101299',
        characteristics: [
            new PizzaCrustCharacteristic(pizza),
            new PizzaToppingsCharacteristic(pizza),
            new PizzaBakeCharacteristic(pizza)
        ]
    });
}

util.inherits(PodService, bleno.PrimaryService);

module.exports = PodService;