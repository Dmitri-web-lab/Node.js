const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

let uniqueID = 1;

const pathToFile = path.join(__dirname, 'users.json');
const readUsersData = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));

app.get('/', (req, res) => {
	let allUsers = [];
	readUsersData.forEach((element) => {
		allUsers.push(element.name);
	})
	res.send(`
		<h1>Пользователи: ${allUsers}</h1>
		<a href="/userAdd">Добавить пользователя</a><br>
		<a href="/userRemove">Удалить пользователя</a><br>
		<a href="/userPut">Обновить данные пользователя</a><br>
		`)
})
app.get('/userAdd', (req, res) => {
	uniqueID++;
	readUsersData.push({id: uniqueID, name: "sten"});
	fs.writeFileSync(pathToFile, JSON.stringify(readUsersData, null, 2));
	res.send(`<h1>Пользователь добавлен!</h1><a href="/">Вернуться на главную</a>`)
});
app.get('/userRemove', (req, res) => {
	for (let i = 0; i < readUsersData.length; i++) {
		if (readUsersData[i].id === 2) {
			readUsersData.splice(i, 1); 
			break;
		}
	}
	fs.writeFileSync(pathToFile, JSON.stringify(readUsersData, null, 2));
	res.send(`<h1>Пользователь удален</h1><a href="/">Вернуться на главную</a>`)
})
app.get('/userPut', (req, res) => {
	readUsersData.forEach((element) => {
		if (element.id === 1) {
			element.name = "bruce";
		}
	})
	fs.writeFileSync(pathToFile, JSON.stringify(readUsersData, null, 2));
	res.send(`<h1>Пользователь обновлен</h1><a href="/">Вернуться на главную</a>`)
})

const port = 3000;

app.listen(port, () => {
	console.log(`Сервер запущен на порту: ${port}`);
});