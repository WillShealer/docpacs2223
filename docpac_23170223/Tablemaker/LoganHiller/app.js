const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true}))


app.get('/', (req, res) => {
    res.render('tableEntry')
})

app.post('/', (req, res) => {
    console.log(req.body.table);
    res.send(req.body.table)
})













app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

