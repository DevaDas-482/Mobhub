const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const ProjectAModel = require("./models/projectA")


const app = express() 
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/projectA") 

app.post('/login', (req, res) => {
           const {email, password} = req.body
           ProjectAModelModel.findOne({email: email})
           .then(customers => {
            if(customers) {
                if(customers.password === password) {
                    res.json("Success")
                } else {
                    res.json("The Password is incorrect")
                }
            }
            else {
                res.json("No Record exited")
            }
           })
})
app.post('/register', (req, res) => {
            ProjectAModel.create.apply(req.body)
            .then(customers => res.json(customers))
            .catch(err = res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})