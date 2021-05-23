const fs = require('fs');
const RPC = require('discord-rpc')
const clientId = '823125008397369355';
const client = new RPC.Client({ transport: 'ipc' });
const st = Date.now()
const songs = {
	"1": {"color": "#e5576e", "name": "당신이 모르는 것", "author": "무라카와 리에", "url": "https://www.youtube.com/watch?v=zsxjsGV5wRM", "key": "ram"},
	"2": {"color": "#39ca25", "name": "천성의 약함", "author": "월피스 카터", "url": "https://www.youtube.com/watch?v=_rEUy4Vbe7k", "key": "tensei"},
	"3": {"color": "#d6b064", "name": "Believe in you", "author": "nonoc", "url": "https://www.youtube.com/watch?v=F9zvB35Is6o", "key": "believe"},
	"4": {"color": "#ffffff", "name": "생명에게 미움받고 있어", "author": "마후마후", "url": "https://www.youtube.com/watch?v=eq8r1ZTma08", "key": "inochi"},
	"5": {"color": "#ffc0cb", "name": "여자아이가 되고 싶어", "author": "마후마후", "url": "https://www.youtube.com/watch?v=ucbx9we6EHk", "key": "onna"},
	"6": {"color": "#ffffff", "name": "말 없는 흑백합", "author": "마후마후", "url": "https://www.youtube.com/watch?v=9dqLAKvWrCg", "key": "mal"},
	"7": {"color": "#0000FF", "name": "ADAMAS", "author": "월피스 카터", "url": "https://www.youtube.com/watch?v=aZQf96ZpuSY", "key": "adamas"},
	"8": {"color": "#39c5bb", "name": "거센 외로움이 덮쳐와", "author": "마후마후", "url": "https://www.youtube.com/watch?v=KhV57_EH3AA", "key": "moudoku"},
	"9": {"color": "#c0c0c0", "name": "윤회전생", "author": "마후마후", "url": "https://www.youtube.com/watch?v=vU3oF90WKpw", "key": "rinne"},
	"10": {"color": "#000000", "name": "닌자의 권유", "author": "마후마후", "url": "https://www.youtube.com/watch?v=tASF0Vj_-QE", "key": "ninja", "font": "white"},
	"11" : {"color": "#000000", "name": "새크리파이스", "author": "마후마후", "url": "https://www.youtube.com/watch?v=boLiYzE3xM8", "key": "sacri", "font": "white"},
	"12": {"color": "#000000", "name": "테오", "author": "ARAKI", "url": "https://www.youtube.com/watch?v=ici8UJP5bCg", "key": "teo", "font": "white"},
	"13": {"color": "#000000", "name": "히바나", "author": "마후마후, 소라후", "url": "https://www.youtube.com/watch?v=UVHZm80y7Fo", "key": "hibana", "font": "white"},
	"14": {"color": "#000000", "name": "쏘아올린 불꽃", "author": "마후마후", "url": "https://www.youtube.com/watch?v=t-wPaLrL2yA", "key": "tasang", "font": "white"},
	"15": {"color": "#000000", "name": "친애하는 도플갱어에게", "author": "마후마후", "url": "https://www.youtube.com/watch?v=AOP0Gk0QDS0", "key": "dop", "font": "white"},
	"16": {"color": "#000000", "name": "테러", "author": "마후마후", "url": "https://www.youtube.com/watch?v=inbeyw5J1zk", "key": "terror", "font": "white"},
	"17": {"color": "#000000", "name": "KING", "author": "마후마후, nqrse", "url": "https://www.youtube.com/watch?v=49cd2CtE30g", "key": "king", "font": "white"},
	"18": {"color": "#000000", "name": "ECHO", "author": "마후마후, nqrse", "url": "https://www.youtube.com/watch?v=jD1VhFHLc2I", "key": "echo", "font": "white"},
	"19": {"color": "#000000", "name": "RAIN", "author": "마후마후", "url": "https://www.youtube.com/watch?v=hnAJTv2DwPo", "key": "rain", "font": "white"},
	"20": {"color": "#000000", "name": "Pretender", "author": "마후마후", "url": "https://www.youtube.com/watch?v=rBTRhAhvs4s", "key": "pretender", "font": "white"},
	"21": {"color": "#000000", "name": "샤를", "author": "마후마후", "url": "https://www.youtube.com/watch?v=LhCVL3GjDX0", "key": "charles", "font": "white"},
	"22": {"color": "#000000", "name": "꽃내림", "author": "파지", "url": "https://www.youtube.com/watch?v=GeMFeUKvjm0", "key": "hana", "font": "white"},
	"23": {"color": "#000000", "name": "꽃에 망령", "author": "요루시카", "url": "https://www.youtube.com/watch?v=NxaudrNbvN0", "key": "ghost", "font": "white"},
	"24": {"color": "#000000", "name": "병명은 사랑이었다", "author": "마후마후", "url": "https://www.youtube.com/watch?v=D0nyXVrZkKQ", "key": "byoumei", "font": "white"},
	"25": {"color": "#000000", "name": "수꽃의 눈물", "author": "월피스 카터", "url": "https://www.youtube.com/watch?v=UI2Ybr9e7KY", "key": "adabana", "font": "white"},
	"26": {"color": "#000000", "name": "진흙속에 피다", "author": "월피스 카터", "url": "https://www.youtube.com/watch?v=40dJS_LC6S8", "key": "doro", "font": "white"},
	"27": {"color": "#000000", "name": "잊지못할 언어", "author": "월피스 카터", "url": "https://www.youtube.com/watch?v=m68uKYAuhrI", "key": "wasure", "font": "white"},
	"28": {"color": "#000000", "name": "COSMOS", "author": "월피스 카터", "url": "https://www.youtube.com/watch?v=QVVv4aICofc", "key": "cosmos", "font": "white"}
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
			font-size: 45px;
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
			font-size: 45px;
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
	body.innerHTML = `<video autoplay src="${songs[dataa].key}.mp4" id="mp" width="800"></video><div id="play_count"></div>`
	const ht = document.head;
	ht.innerHTML += `<style>${css}</style>`
	const mp = document.getElementById("mp");
	const customTitlebar = require('custom-electron-titlebar');
	const { Themebar } = require('custom-electron-titlebar');
	const notifier = require('node-notifier');

	var titlebar = new customTitlebar.Titlebar({
		backgroundColor: customTitlebar.Color.fromHex(songs[dataa].color),
		maximizable: false,
		menu: null,
		iconsTheme: Themebar.mac
	});
	titlebar.setHorizontalAlignment('left');
	console.log(songs[dataa].key)
	fs.readFile("res/play_count_" + songs[dataa].key + ".txt", {"encoding": "UTF8"}, (err, data)=>{
		var p_c = document.getElementById("play_count")
		var play_count = eval(data)
		if (play_count) {
			
		}
		else {
			play_count = 0
		}
		p_c.innerHTML += `<text id="voltext">볼륨</text><input id="vol-control" type="range" min="0" max="1000" step="1" oninput="SetVolume(this.value)" onchange="SetVolume(this.value)"></input>`
		window.SetVolume = function SetVolume(val)
		{
			mp.volume = val / 1000;
			document.getElementById("voltext").innerText = Math.floor(val / 10) + " / 100"
		}
		document.getElementById("vol-control").value = "500"
    	mp.volume = document.getElementById("vol-control").value / 1000;
		document.getElementById("voltext").innerText = Math.floor(500 / 10) + " / 100"
		p_c.innerHTML += "<text id='pcc'>총 재생횟수 : " + play_count + "</text>"
		p_c.innerHTML += `<input id="current-time" type="range" min="0" max="100" step="1"></input><text id="timetext">시간</text>`
		document.getElementById('current-time').value = 0
		document.getElementById('current-time').disabled = true;
		mp.onloadedmetadata = function() {
			document.getElementById("current-time").max = mp.duration
		}
		mp.addEventListener('timeupdate', ()=>{
			document.getElementById('current-time').value = mp.currentTime
			document.getElementById("timetext").textContent = Math.floor(mp.currentTime) + " / " + Math.floor(document.getElementById("current-time").max)
		})
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
	})

	mp.addEventListener('ended', (event) => {
		fs.readFile("res/play_count_" + songs[dataa].key + ".txt", {"encoding": "UTF8"}, (err, data)=>{
			var play_count = eval(data)
			if (play_count) {
				
			}
			else {
				play_count = 0
			}
			play_count++
			fs.writeFile("res/play_count_" + songs[dataa].key + ".txt", play_count.toString(), ()=>{
				var p_c = document.getElementById("play_count")
				document.getElementById('pcc').remove()
				document.getElementById('timetext').remove()
				document.getElementById('current-time').remove()
				p_c.innerHTML += "<text id='pcc'>총 재생횟수 : " + play_count + "</text>"
				p_c.innerHTML += `<input id="current-time" type="range" min="0" max="100" step="1"></input><text id="timetext">시간</text>`
				document.getElementById('current-time').value = 0
				document.getElementById('current-time').disabled = true;
				document.getElementById("current-time").max = mp.duration
				mp.addEventListener('timeupdate', ()=>{
					document.getElementById('current-time').value = mp.currentTime
					console.log(mp.currentTime + " / " + document.getElementById("current-time").max)
				})
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
