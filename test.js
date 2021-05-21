const { app, BrowserWindow } = require('electron')
const fs = require("fs")
const readline = require('readline');

fs.writeFile("song.txt", process.argv[2], ()=>{
		
})

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
  win.loadFile('res/test.html')
}

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  app.quit()
})