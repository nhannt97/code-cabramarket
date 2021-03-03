// server.js
const server = require('express')();
const next = require('next');
const axios = require('axios');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(async () => {
    try {
        server.get('/api', (req, res) => {res.send({code: 200})})
        // render pages
        server.all('*', (req, res) => {
            return handle(req, res)
        })

        // start
        server.listen(process.env.PORT || 3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    } catch (e) {
        console.log(e)
    }
})


