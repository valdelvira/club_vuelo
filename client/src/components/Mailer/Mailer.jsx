import { Mailer } from 'nodemailer-react'

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'bootcamp0122@gmail.com',
        pass: 'popino22'
    }
})

