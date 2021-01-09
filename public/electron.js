const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');

let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
        show: false
    });

    // and load the index.html of the app.
    const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../../build/index.html')}`;

    mainWindow.loadURL(startURL);

    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();
    
    app.on('activate', function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});