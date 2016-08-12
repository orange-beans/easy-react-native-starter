## easy-react-native-starter

Set up your react-native projects with a few commands.

## Updates

* Updated react-native to 0.31
* Updated react ro 15.2.1
* Updated Gradel Plugin to 2.1.0
* Updated Gradel Wrapper to 2.14.1


## Tools / Libraries included

#### React / React-Native:
* react-native-router-flux
* react-redux

#### Redux:
* redux
* redux-thunk

#### Linting:
* eslint
* babel-eslint


## To Install
#### Clone into a local folder:
```bash
$ git clone https://github.com/orange-beans/React-SPA-boilerplate.git
```
#### Then install dependent modules:
```bash
$ npm install
```

## To Use (Android)
#### Start packager:
```bash
$ npm run start-android
```

#### Set device port
```bash
$ npm run set-android-port
```

#### Build debug/release
```bash
$ npm run build-android-debug
```
```bash
$ npm run build-android-release
```

#### Install debug/release to device
```bash
$ npm run install-android-debug
```
```bash
$ npm run install-android-release
```

## To Use (IOS)
#### (Under development)


## Things to note
For the release build, a dummy keystore is used to quickly test the release version.
To use your own keystore, please see [this article](https://facebook.github.io/react-native/docs/signed-apk-android.html) for instructions on how to create a keystore.
