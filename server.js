const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>', )
})

app.get('/users', (req, res) => {
    res.json([
        { name: 'John', email: 'example', id: 1 },
        { name: 'Jane', email: 'example', id: 2 },
        { name: 'Jim', email: 'example', id: 3 }
    ])
})

app.get('/users/:id', (req, res) => {

    fetch('http://localhost:3000/users/').then(
        res => res.json()
    ).then(
        data => {
            const user = data.find(user => user.id === parseInt(req.params.id))

            if (!user) {
                res.status(404).send('User not found')
            }

            res.json(user)
        }
    )

})

app.get('/hello', (req, res) => {
    res.send('Hello World!  ' + Date())
})

app.get('/hello/:name', (req, res) => {
    res.send(`Hello ${req.params.name}!`)
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
