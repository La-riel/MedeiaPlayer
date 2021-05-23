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
	const { Webhook, MessageBuilder } = require('discord-webhook-node');
	const hook = new Webhook("https://discord.com/api/webhooks/846013941909028944/x-rRsizj7qWkhWKGRibIBLBHoKqLekGY4xQ54CmveqYRyyvVDTsWWBeTrN1E_NqcEUkR");
	const IMAGE_URL = 'https://cdn.discordapp.com/avatars/823125008397369355/a0ae74b4ddae81bc69334597f6fd80e1.png?size=1024';
	hook.setUsername('Ram Player');
	hook.setAvatar(IMAGE_URL);
	var embed = new MessageBuilder()
	embed.setTitle("Ram Player")
	embed.setDescription("Ram Player가 종료되었습니다.")
	embed.setAuthor("ラム#0202", "https://avatars.githubusercontent.com/u/79322339?v=4", "https://github.com/RamWrath")
	embed.setURL("https://github.com/RamWrath/RamPlayer")
	hook.send(embed)
	setTimeout(()=>app.quit(),100)
})
