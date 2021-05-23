const fallback = require('express-history-api-fallback')
const express = require('express')
const app = express()
const root = `${__dirname}/dist`

app.use(express.static(root))
app.use(fallback('index.html', {root}))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`App running on port ${PORT}`))