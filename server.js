const express = require('express')
const fetch = require('node-fetch')
const app = express()

	app.get('/', (req, res) => res.send('   Starting BagusXd    '))
    
    app.listen(8080, () => {
		console.log('App listened on port', 8080)
	})

    let url = `https://q8nsgp-8080.preview.csb.app`
	if (/(\/\/|\.)undefined\./.test(url)) return
	setInterval(() => {
		fetch(url).catch(console.log)
	}, 30 * 1000)