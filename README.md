# React Electron Starter
A starter kit to build Desktop Application with React.js + Electron.js.

## How to run
* Clone this repository.
```cmd
git clone https://github.com/michaelsusanto81/react-electron-starter.git
```

* Install dependencies.
```cmd
npm install
npm install electron electron-builder --save-dev
```

* Run application.
```cmd
npm run dev
```

## Customization
Follow these steps to configure this starter project.
* React source code is located in **src** folder.
* Electron source code is located in **public/electron.js**.
* Change **public/favicon.ico** with your own logo. (At least **256x256** for production icon).
* Change **public/index.html**.
    * Meta tag: description
    * Title
* Change **public/manifest.json**'s data.

## Production
To create desktop installer for this project, follow these steps.
* Change **license.txt** to your own End-User License Agreement (EULA).
* Change **package.json**'s
    * "name": your application name
    * "author": your name
    * "description": your application description
    * "build":
        * "appId": your application id
        * "nsis":
            * "uninstallDisplayName": your application display name
* Build the project and the installer.
```cmd
npm run build-installer
```
* The output is located in **dist** folder.