const express = require('express')

const app = express()
const port = 8877
const caseData = require('./data/case')

app.use(express.static('public'))
app.set("view engine", 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/case/:id', (req, res, next) => {
	let { id } = req.params
	const data = caseData.filter(x => x.id === id )
	if( data.length ) {
		const itemData = data[0];
		res.render('detail', {
			id:'asasda',
			title: itemData.title,
			desc: itemData.desc,
			imgs: itemData.imgs
		})
	} else {
		next()
	}
})

app.all('*', (req, res) => {
	res.send('404 Not Found')
})


app.listen(port, () => {
	console.log(`Server Run At Port ${port}`)
})