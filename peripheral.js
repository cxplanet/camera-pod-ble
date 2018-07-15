var bleno = require('bleno');

var BlenoPrimaryService = bleno.PrimaryService;

var CamCtlCharacteristic = require('./cam-ctl-characteristic');

console.log('starting camera pod service');

bleno.on('stateChange', function(state) {
    console.log('on -> stateChange: ' + state);

    if (state === 'poweredOn') {
        bleno.startAdvertising('camerapod', ['ec00']);
    } else {
        bleno.stopAdvertising();
    }
});

bleno.on('advertisingStart', function(error) {
    console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));

    if (!error) {
        bleno.setServices([
            new BlenoPrimaryService({
                uuid: 'ec00',
                characteristics: [
                    new CamCtlCharacteristic()
                ]
            })
        ]);
    }
});
