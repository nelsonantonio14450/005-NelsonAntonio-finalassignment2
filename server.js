function requireHTTPS(req, res, next) {
    //membuat semua request yang sebelumnya http biasa menjadi https
    if (
        !req.secure && req.get('x-forwarded-proto') !== 'https'
    ) {
        return res.redirect('https://' + req.get('host') + req.url)
    }

    next();
}

//aplikasi express

const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app
    .use(requireHTTPS)
    .use(express.static('./dist/payment'))


    .get('/*', (req, res) => res.sendFile('index.html', { root: './dist/payment' }))

    .listen(port, () => {
        console.log(`my angular apps runnin hhtp://localhost:${port}`)
    })