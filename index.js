const express = require("express")
const cors = require("cors")
const port = 3000
const app = express()
 
app.use(express.json())
app.use(cors())
app.use(express.static(__dirname))
 
function BMILevel(BMI) {
    if (BMI < 18.5) return "Underweight"
    else if (BMI < 22.9) return "Normal"
    else if (BMI < 24.9) return "Overweight"
    else if (BMI < 30) return "Obese"
    return "Extremely Obese"
}
 
function calculateBMI(weight, height) {
    if (!weight || !height
        || weight <= 0 || height <= 0
        || isNaN(Number(weight)) || isNaN(Number(height))
    ) return { error: "weight and height must be positive numbers" }
    const heightInMeter = Number(height) / 100
    const BMIResult = (Number(weight) / (heightInMeter * heightInMeter)).toFixed(2)
    const LevelResult = BMILevel(BMIResult)
    return { BMI: BMIResult, Level: LevelResult }
}
 
app.get("/BMI", (req, res) => {
    const weight = req.query.weight
    const height = req.query.height
    const result = calculateBMI(weight, height)
    if (result.error) {
        return res.status(400).json({
            error: result.error
        })
    }
    res.json({
        BMI: result.BMI,
        Level: result.Level
    })
})
 
app.listen(port, () => {
    console.log("Server starts successfully")
    console.log("http://localhost:" + port)
})