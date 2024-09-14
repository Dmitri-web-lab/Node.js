const express = require('express');

const app = express();

const fs = require('fs')
const path = require('path')

// const counter = {
// 	home: 0,
// 	about: 0
// }
const pathToFile = path.join(__dirname, 'counter.json');
const readCounterData = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));

function counterViewingPage(page) {
if (page == "home") {
readCounterData.home += 1;
} else if (page == "about") {
	readCounterData.about += 1;
}
fs.writeFileSync(pathToFile, JSON.stringify(readCounterData, null, 2));
}

app.get('/', (req, res) => {
	counterViewingPage("home")
	res.send(`<h1>Корневая страница</h1><p>Просмотров: ${readCounterData.home}</p><a href="/about">Ссылка на страницу /about</a>`);
});

app.get('/about', (req, res) => {
	counterViewingPage("about")
	res.send(`<h1>Страница about</h1><p>Просмотров: ${readCounterData.about}</p><a href="/">Ссылка на страницу /</a>`);
});

const port = 3000;

app.listen(port, () => {
	console.log(`Сервер запущен на порту: ${port}`);
});
