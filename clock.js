console.debug('I am here')

const div = document.createElement('div')
document.body.appendChild(div)

const emojis = {
	"0": "0️⃣",
	"1": "1️⃣",
	"2": "2️⃣",
	"3": "3️⃣",
	"4": "4️⃣",
	"5": "5️⃣",
	"6": "6️⃣",
	"7": "7️⃣",
	"8": "8️⃣",
	"9": "9️⃣",
}

const unknown = "*️⃣"


function update() {
	const date = new Date()
	const [hour1, hour2] = slice(formatNumber(date.getHours()))
	const [minute1, minute2] = slice(formatNumber(date.getMinutes()))
	const [second1, second2] = slice(formatNumber(date.getSeconds()))

	const hours = `${emojify(hour1)}${emojify(hour2)}`
	const minutes = `${emojify(minute1)}${emojify(minute2)}`
	const seconds = `${emojify(second1)}${emojify(second2)}`

	div.innerText =  `${hours}:${minutes}:${seconds}`	
}

function formatNumber(number) {
	if (number < 10) {
		return `0${number}`
	}
	else {
		return `${number}`
	}
}

function slice(string) {
	const first = string.slice(0,1)
	const second = string.slice(1,2)

	return [first, second]
}


function emojify(string) {
	let result = emojis[string]

	if (result) {
		return result
	}
	else {
		return unknown
	}
}


update()

setInterval(() => {
	update()
}, 250)
