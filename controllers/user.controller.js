const User = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const generateToken = (user) => {
    console.log(user)
    return jwt.sign({ id: user._id }, "secret", { expiresIn: "30d" })
}

const userRegister = async (req, res) => {
    try {
        const { email, password } = req.body
        if ( !email || !password) {
            return res.status(400).json({ message: "Please enter all fields" })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            email,
            password: hashedPassword
        })
        const savedUser = await newUser.save()

        res.json({savedUser, token})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "Please enter all fields" })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "User does not exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" })
        }
        const token =  generateToken(user)
        console.log(token)
        res.json({ message: "Login successful" , token})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
module.exports = { userRegister, userLogin }