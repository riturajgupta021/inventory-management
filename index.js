const express = require("express")
const connectToDb = require("./config/dbConnection")
const userRouter = require("./router/user.routes")
const productRoutes = require("./router/product.routes")
const app = express()   
const port = 3000  

app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello World")
})
app.use("/api",userRouter)
app.use("/api",productRoutes)
app.listen(port,()=>{
    connectToDb()
    console.log(`Server is running on port ${port}`)
})