const fs = require('fs');
const songs = {
	"1": {"color": "hex color (ex: #000000)", "name": "song name", "author": "singer", "url": "video url", "key": ".mp4 file name without .mp4"},
}
fs.readFile("song.txt", {"encoding": "UTF8"}, (err, dataa)=>{
	var css  = `
		@font-face {
			font-family: 'Bazzi';
			src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff') format('woff');
			font-weight: normal;
			font-style: normal;
		}

		#play_count {
			font-family: 'Bazzi';
			font-size: 50px;
			text-align: center;
		}

		#mp {
			top: 0px;
			left: 0px;
			border: 1px solid black;
		}

		.titlebar {
			border: 1px solid black;
		}

		.window-title {
			padding: 0;
			margin: 0;
			text-align: left;
			color: black;
			font-family: "Bazzi";
			font-size: 30px;
		}

		html {
			overflow-x: hidden;
			overflow-y: hidden;
		}

		body {
			overflow-x: hidden;
			overflow-y: hidden;
			margin: 0;
			padding: 0;
			background-color: ${songs[dataa].color};
			border: 1px solid black;
		}
		`
	if (songs[dataa].font != null) {
		css = `
		@font-face {
			font-family: 'Bazzi';
			src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff') format('woff');
			font-weight: normal;
			font-style: normal;
		}

		#play_count {
			font-family: 'Bazzi';
			font-size: 50px;
			color: ${songs[dataa].font};
			text-align: center;
		}

		#mp {
			top: 0px;
			left: 0px;
			border: 1px solid black;
		}

		.titlebar {
			border: 1px solid black;
		}

		.window-title {
			padding: 0;
			margin: 0;
			text-align: left;
			color: ${songs[dataa].font};
			font-family: "Bazzi";
			font-size: 30px;
		}

		html {
			overflow-x: hidden;
			overflow-y: hidden;
		}

		body {
			overflow-x: hidden;
			overflow-y: hidden;
			margin: 0;
			padding: 0;
			background-color: ${songs[dataa].color};
			border: 1px solid black;
		}
		`
	}
	console.log(dataa + " 헉 " + JSON.stringify(songs[dataa]))
	const body = document.body;
	body.innerHTML = `<video autoplay src="${songs[dataa].key}.mp4" id="mp" width="800"></video>
		<div id="play_count"></div>`
	const ht = document.head;
	ht.innerHTML += `<style>${css}</style>`
	const mp = document.getElementById("mp");

	const customTitlebar = require('custom-electron-titlebar');
	const { Themebar } = require('custom-electron-titlebar');
	const notifier = require('node-notifier');
	const RPC = require('discord-rpc')

	var titlebar = new customTitlebar.Titlebar({
		backgroundColor: customTitlebar.Color.fromHex(songs[dataa].color),
		maximizable: false,
		menu: null,
		iconsTheme: Themebar.mac
	});
	titlebar.setHorizontalAlignment('left');
	mp.volume = 0.2
	var play_count
	fs.readFile("res/play_count_" + songs[dataa].key + ".txt", {"encoding": "UTF8"}, (err, data)=>{
		play_count = eval(data)
		if (play_count == undefined) play_count = 0
		var p_c = document.getElementById("play_count")
		p_c.innerText = "총 재생횟수 : " + play_count
	})
	const clientId = '823125008397369355';
	var st = Date.now()
	const client = new RPC.Client({ transport: 'ipc' });
	client.on('ready', () => {
		client.setActivity({
			details: `${songs[dataa].name} 듣는 중`,
			state: `ラム#0202`,
			startTimestamp: st,
			largeImageKey: `${songs[dataa].key}`,
			largeImageText: `${songs[dataa].author} - ${songs[dataa].name}`,
			buttons: [
				{
					label: `들은 횟수 : ${play_count}`,
					url: `${songs[dataa].url}`
				}
			]
		  });
	});

	mp.addEventListener('ended', (event) => {
		fs.readFile("res/play_count_" + songs[dataa].key + ".txt", {"encoding": "UTF8"}, (err, data)=>{
			play_count = eval(data)
			if (play_count == undefined) play_count = 0
			play_count++
			fs.writeFile("res/play_count-" + songs[dataa].key + ".txt", play_count.toString(), ()=>{
				var p_c = document.getElementById("play_count")
				p_c.innerText = "총 재생횟수 : " + play_count
			})
			mp.play()
			client.setActivity({
				details: `${songs[dataa].name} 듣는 중`,
				state: `ラム#0202`,
				startTimestamp: st,
				largeImageKey: `${songs[dataa].key}`,
				largeImageText: `${songs[dataa].author} - ${songs[dataa].name}`,
				buttons: [
					{
						label: `들은 횟수 : ${play_count}`,
						url: `${songs[dataa].url}`
					}
			]
		  });
		})
	});

	client.login({ clientId });
})
