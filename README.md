# easy-react-native-starter

Set up your react-native projects with a few commands.

# Tools / Libraries included

#### React / React-Native:
* react-native-router-flux
* react-redux

#### Redux:
* redux
* redux-thunk

#### Linting:
* eslint
* babel-eslint


# To Install
#### Clone into a local folder:
```bash
$ git clone https://github.com/orange-beans/React-SPA-boilerplate.git
```
#### Then install dependent modules:
```bash
$ npm install
```

# To Use (Android)
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

# To Use (IOS)
#### (Under development)


# Things to note
Before running Build release, make sure the keystore is properly set.
Please see [Create a Signed apk](https://facebook.github.io/react-native/docs/signed-apk-android.html) for instructions on how to create a release keystore.