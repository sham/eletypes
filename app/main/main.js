// Native
const { format } = require('url');

// Packages
const { BrowserWindow, app } = require('electron');
const isDev = require('electron-is-dev');
const prepareNext = require('electron-next');
const { resolve } = require('app-root-path');

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./app/renderer');

  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 600,
    show: false
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
  
  mainWindow.setResizable(false);
  mainWindow.setMaximizable(false);
  mainWindow.setMovable(false);
  mainWindow.center();

  const devPath = 'http://localhost:8000/app';

  const prodPath = format({
    pathname: resolve('app/renderer/out/app/index.html'),
    protocol: 'file:',
    slashes: true
  });

  const url = isDev ? devPath : prodPath;
  mainWindow.loadURL(url);
  mainWindow.setMenu(null);

  if (isDev) mainWindow.webContents.openDevTools();
});

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit);