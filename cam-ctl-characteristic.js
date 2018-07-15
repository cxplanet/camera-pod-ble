var util = require('util');

var bleno = require('bleno');

var BlenoCharacteristic = bleno.Characteristic;

var CamCtlCharacteristic = function() {
  CamCtlCharacteristic.super_.call(this, {
    uuid: 'ec0e',
    properties: ['read', 'write', 'notify'],
    value: null
  });

  this._value = new Buffer(0);
  this._updateValueCallback = null;
};

util.inherits(CamCtlCharacteristic, BlenoCharacteristic);

CamCtlCharacteristic.prototype.onReadRequest = function(offset, callback) {
  console.log('CamCtlCharacteristic - onReadRequest: value = ' + this._value.toString('hex'));

  callback(this.RESULT_SUCCESS, this._value);
};

CamCtlCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
  this._value = data;

  console.log('CamCtlCharacteristic - onWriteRequest: value = ' + this._value.toString('hex'));

  if (this._updateValueCallback) {
    console.log('CamCtlCharacteristic - onWriteRequest: notifying');

    this._updateValueCallback(this._value);
  }

  callback(this.RESULT_SUCCESS);
};

CamCtlCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('CamCtlCharacteristic - onSubscribe');

  this._updateValueCallback = updateValueCallback;
};

CamCtlCharacteristic.prototype.onUnsubscribe = function() {
  console.log('CamCtlCharacteristic - onUnsubscribe');

  this._updateValueCallback = null;
};

module.exports = CamCtlCharacteristic;
