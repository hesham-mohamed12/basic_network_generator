const { app, BrowserWindow, Menu } = require('electron');
function createWindow() {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({ width: 1400, height: 900, title: 'Hotel Network Generator' });
  win.loadFile('index.html');
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
