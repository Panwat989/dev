const express = require("express")
const cors = require("cors")
const port = 3000
const app = express()
 
app.use(express.json())
app.use(cors())
app.use(express.static(__dirname))
 
app.get("/profile", (req, res) => {
    res.json({
        name: "ปัญญ์วัฒน์ สุภาพันธ์",
        nickname: "โอม",
        age: 17,
        hobby: "เล่นเกม"
    })
})
 
app.listen(port, () => {
    console.log("Server starts successfully")
    console.log("http://localhost:" + port)
})