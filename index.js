const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())
const catagory = require('./data/catagory.json');
const news = require('./data/news.json')
app.get('/', (req, res) => {
    res.send('news api runnig')
})
app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/catagory/:id', (req, res) => {
    const id = req.params.id
    if (id === '08') {
        res.send(news)
    } else {
        const catagorySelected = news.filter(n => n.category_id === id)
        res.send(catagorySelected)
    }
})
app.get('/news-catagories', (req, res) => {
    res.send(catagory)
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const select = news.find(n => n._id === id)
    res.send(select)
})

app.listen(port, () => {
    console.log('running port', port);
})