const mp = document.getElementById("mp");
const fs = require('fs');
const customTitlebar = require('custom-electron-titlebar');
const { Themebar } = require('custom-electron-titlebar');
const notifier = require('node-notifier');
const RPC = require('discord-rpc')

var titlebar = new customTitlebar.Titlebar({
	backgroundColor: customTitlebar.Color.fromHex('#e5576e'),
	maximizable: false,
	menu: null,
	iconsTheme: Themebar.mac
});
titlebar.setHorizontalAlignment('left');
mp.volume = 0.2
var play_count
fs.readFile("play_count.txt", {"encoding": "UTF8"}, (err, data)=>{
	play_count = eval(data)
	var p_c = document.getElementById("play_count")
	p_c.innerText = "총 재생횟수 : " + play_count
})
const clientId = '823125008397369355';
var st = Date.now()
const client = new RPC.Client({ transport: 'ipc' });
client.on('ready', () => {
	client.setActivity({
		details: `당신이 모르는 것 듣는 중`,
		state: `ラム#0202가 제작함`,
		startTimestamp: st,
		largeImageKey: 'ram',
		largeImageText: '무라카와 리에 - 당신이 모르는 것',
		buttons: [
			{
				label: `들은 횟수 : ${play_count}`,
				url: "https://www.youtube.com/watch?v=zsxjsGV5wRM"
			}
		]
	  });
});

mp.addEventListener('ended', (event) => {
	fs.readFile("play_count.txt", {"encoding": "UTF8"}, (err, data)=>{
		play_count = eval(data)
		play_count++
		fs.writeFile("play_count.txt", play_count.toString(), ()=>{
			var p_c = document.getElementById("play_count")
			p_c.innerText = "총 재생횟수 : " + play_count
		})
		mp.play()
		client.setActivity({
		details: `당신이 모르는 것 듣는 중`,
		state: `ラム#0202가 제작함`,
		startTimestamp: st,
		largeImageKey: 'ram',
		largeImageText: '무라카와 리에 - 당신이 모르는 것',
		buttons: [
			{
				label: `들은 횟수 : ${play_count}`,
				url: "https://www.youtube.com/watch?v=zsxjsGV5wRM"
			}
		]
	  });
	})
});

client.login({ clientId });