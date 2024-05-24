const express = require("express")
require("dotenv").config()
const cors = require("cors")
const { connectDB } = require("./db/connectDB")
const router = require("./routes/routes")

const app = express()

const CorsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
}

app.use(cors(CorsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", router)

connectDB()
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err))

const PORT = process.env.PORT || 8080
app.listen(8080, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}`)
})
