## easy-react-native-starter

Set up your react-native projects with a few commands.

## Updates

* react-native => 0.31
* react => 15.2.1
* Gradel Plugin => 2.1.0
* Gradel Wrapper => 2.14.1

## Tools / Libraries included

#### React / React-Native:
* react-native-router-flux
* react-native-material-kit
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
$ git clone https://github.com/orange-beans/easy-react-native-starter
```
#### Then install dependent modules:
```bash
$ npm install
```

## To Use (Android)
#### Start packager:
```bash
$ npm run android-start
```

#### Set device port
```bash
$ npm run android-set-port
```

#### Build debug/release
```bash
$ npm run android-build-debug
```
```bash
$ npm run android-build-release
```

#### Install debug/release to device
```bash
$ npm run android-install-debug
```
```bash
$ npm run android-install-release
```

## To Use (IOS)
#### (Under development)


## Things to note
For the release build, a dummy keystore is used to quickly test the release version.
To use your own keystore, please see [this article](https://facebook.github.io/react-native/docs/signed-apk-android.html) for instructions on how to create a keystore.
