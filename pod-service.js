// TODO - this is not functioning yet - eventually there is a CameraPod prototype (ie object)
// that surfaces the controls needed to bend the RPi to our will. This se
var util = require('util');
var bleno = require('bleno');

var CamControlCharacteristic = require('./camera-ctl-characteristic');
var ImuControlCharacteristic = require('./imu-ctl-characteristic');

function PodService(camerapod) {
    bleno.PrimaryService.call(this, {
        uuid: '13333333333333333333333333101299',
        characteristics: [
            new CamControlCharacteristic(camerapod),
            new ImuControlCharacteristic(camerapod),]
    });
}

util.inherits(PodService, bleno.PrimaryService);

module.exports = PodService;