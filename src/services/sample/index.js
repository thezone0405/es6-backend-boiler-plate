import express from 'express'

const app = express()

app.get('/foo/:bar', async (req, res, err) => {
    res.status(200)
    res.send(JSON.stringify({data:req.params.bar}))
})

export default app