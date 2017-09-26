import Express from 'express'
import React from 'react'
import App from './App'
import { renderToString } from 'react-dom/server'
var request = require('request');

const app = Express()
const port = 8080
const host = '0.0.0.0';

app.get('/test', function (req, res) {
	request('http://127.0.0.1:3004/data', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			const preloadedState = JSON.parse(body);
			const html = renderToString(
				<App state={preloadedState}>
				</App>
			)
			res.send(renderFullPage(html, preloadedState))
		}
	})
})

function renderFullPage(html, preloadedState) {
	return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
      dupa
        <div id="root">${html}</div>
      </body>
    </html>
    `
}

app.listen(port, host, function () {
	console.log('Example app listening on port 8080!')
})