# BLE Pod Service

This is an prototype exploration demonstrating BLE connectivity with a RPI based peripheral running a node (js) based app, that could be controlled by an Android or iOS BLE app

The peripheral represents a camera pod, a flight instrument used in aerial surveys, that controls the operation of 1 DSLR cameraa, and logs IMU data generated from a 9 DOF module attached to the RPi

To run the peripheral example:

    node peripheral

On the phone, until the Android app is complete, you can inspect the service using a scanner such as Nordic's [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en_US) or the iOS app [LightBlue Explorer](https://itunes.apple.com/us/app/lightblue-explorer/id557428110?mt=8). You can also use a [web app](http://strangesast.github.io/bleno-web-pizza-example) using [Web Bluetooth](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web).

### Where are we at
 * Simple node app that advertises a camerapod on the RPi. Nothing functions yet, just want to see if bleno is a possibility

### Requirements
 * Install [node](https://nodejs.org/en/download/)
 * Install [bleno](https://github.com/noble/bleno)
 * To let the app run without root permissions:
```sudo setcap cap_net_raw+eip $(eval readlink -f `which node`)```

### Running the app
 * On the RPi, cd into the camera pod home directory and run:
```node peripheral```
