const express = require("express")
const helmet = require("helmet")

const authRouter = require("./auth/auth-router")
const userRouter = require("./users/users-router")
const authenticator = require("./auth/authenticator")

const server = express()

server.use(helmet())
server.use(express.json())

server.use("/api/users", authenticator, userRouter)
server.use("/api/auth", authRouter)

server.get("/", (req, res) => {
    res.json({api: "up"})
})

module.exports = server