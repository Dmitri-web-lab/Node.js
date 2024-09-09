const http = require('http');
let homePageView = 1;
let aboutPageView = 1;
let newsPageView = 1;
let notFoundPageView = 1;

const generateAboutPage = (pageView ,count) => `
<html>
<body>
<h1>${pageView} page</h1>
<p>Количество просмотров этой страницы: ${count}</p>
<a href="/">Перейти на главную страницу!</a><br>
</body>
</html>
`;

const server = http.createServer((req, res) => {
		if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
		res.end(generateAboutPage(Home, homePageView++));
	} else if (req.url === '/about') {
		res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
		res.end(generateAboutPage(About, aboutPageView++));
	} else if (req.url === '/news') {
		res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
		res.end(generateAboutPage(News, newsPageView++));
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
		res.end(generateAboutPage(404, notFoundPageView++));

	}
})

const port = '3000';

server.listen(port);