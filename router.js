const router = require("express").Router()
const nodemailer = require("nodemailer")

router.post("/contact", (req, res) => {
    let data = req.body
    
    let sentEmail = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        auth: {
            user: "addykyaw5@gmail.com",
            pass: "762045086phyo"
        }
    })

    let mailForm = {
        form: data.email,
        to: "addykyaw5@gmail.com",
        subject: `message from ${data.name}`,
        html: `
         <h3>Informations</h3>
         <ul>
           <li>Name: ${data.name}</li>
           <li>Email: ${data.email}</li>
         </ul>
         <h3>Messages</h3>
         <p>${data.message}</p>
        `
    }

    sentEmail.sendMail(mailForm, (error) => error)
})

module.exports = router