const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 802,
    height: 552,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
	icon:"ram.png",
    resizable: false,
    frame: false,
    autoHideMenuBar: true
  })
  win.loadFile('index.html')
}

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  app.quit()
})