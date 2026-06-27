const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(express.static(__dirname))

app.get("/add", (req, res) => {
    const a = req.query.a
    const b = req.query.b
    if (!a || !b || isNaN(Number(a)) || isNaN(Number(b))) {
        return res.status(400).json({ error: "a และ b ต้องเป็นตัวเลขเท่านั้น" })
    }
    res.json({ result: Number(a) + Number(b) })
})

app.get("/subtract", (req, res) => {
    const a = req.query.a
    const b = req.query.b
    if (!a || !b || isNaN(Number(a)) || isNaN(Number(b))) {
        return res.status(400).json({ error: "a และ b ต้องเป็นตัวเลขเท่านั้น" })
    }
    res.json({ result: Number(a) - Number(b) })
})

app.get("/multiply", (req, res) => {
    const a = req.query.a
    const b = req.query.b
    if (!a || !b || isNaN(Number(a)) || isNaN(Number(b))) {
        return res.status(400).json({ error: "a และ b ต้องเป็นตัวเลขเท่านั้น" })
    }
    res.json({ result: Number(a) * Number(b) })
})

app.get("/divide", (req, res) => {
    const a = req.query.a
    const b = req.query.b
    if (!a || !b || isNaN(Number(a)) || isNaN(Number(b))) {
        return res.status(400).json({ error: "a และ b ต้องเป็นตัวเลขเท่านั้น" })
    }
    if (Number(b) === 0) {
        return res.status(400).json({ error: "ไม่สามารถหารด้วย 0 ได้" })
    }
    res.json({ result: Number(a) / Number(b) })
})

app.listen(port, () => {
    console.log("Server starts successfully")
    console.log("http://localhost:" + port)
})