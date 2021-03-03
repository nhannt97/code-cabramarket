// server.js
const server = require('express')();
const next = require('next');
const axios = require('axios');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })
const handle = app.getRequestHandler()
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

app.prepare().then(async () => {
    try {
        // twilio verify
        const twilioService = await client.verify.services.create({
            friendlyName: 'Cabramarket Online',
            codeLength: parseInt(process.env.VERIFY_CODE_LENGTH),
        })
        if (!twilioService.sid) throw new Error("Start twilio service failure");

        server.get('/api/twilio/verify', (req, res) => twilioHandle.verify(req, res, twilioService))
        server.get('/api/twilio/check', (req, res) => twilioHandle.check(req, res, twilioService))

        //nexmo verify
        server.get('/api/nexmo/verify', nexmoHandle.verify)
        server.get('/api/verify/control', nexmoHandle.control)
        server.get('/api/verify/check', nexmoHandle.check)

        // render pages
        server.all('*', (req, res) => {
            return handle(req, res)
        })

        // start
        server.listen(process.env.PORT || 3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    } catch (e) {
        console.log(e)
    }
})

const twilioHandle = {
    verify: async (req, res, twilioService) => {
        try {
            const { to } = req.query;
            if (!to) throw new Error("Verify failure");

            const twilioVerify = await client.verify.services(twilioService.sid)
                .verifications
                .create({ from: process.env.TWILIO_SEND_FROM, to: '+' + to, channel: 'sms' })
            if (!twilioVerify.sid) throw new Error("Verify failure");

            res.status(200).send(twilioVerify)
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    },
    check: async (req, res, twilioService) => {
        try {
            const { to } = req.query;
            if (!to) throw new Error("Verify failure");

            const twilioVerify = await client.verify.services(twilioService.sid)
                .verifications
                .create({ from: process.env.TWILIO_SEND_FROM, to: '+' + to, channel: 'sms' })
            if (!twilioVerify.sid) throw new Error("Verify failure");

            res.status(200).send(twilioVerify)
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    }
}

const nexmoHandle = {
    verify: async (req, res) => {
        try {
            const { number } = req.query;
            if (!number) throw new Error("Verify failure");
            
            const nexmoVerify = await axios.get(process.env.BASE_URL_NEXMO_API, {
                api_key: process.env.NEXMO_API_KEY,
                api_secret: process.env.NEXMO_API_SECRET,
                code_length: parseInt(process.env.VERIFY_CODE_LENGTH),
                brand: process.env.NEXMO_BRAND,
                sender_id: process.env.NEXMO_SENDER_ID
            })
            if (nexmoVerify.error_text) throw new Error(nexmoVerify.error_text)

            res.status(200).send(nexmoVerify)
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    },
    control: async (req, res) => {
        try {
            const { request_id } = req.query;
            if (!request_id) throw new Error("Verify failure");

            const nexmoCancel = await axios.get(process.env.BASE_URL_NEXMO_API, {
                api_key: process.env.NEXMO_API_KEY,
                api_secret: process.env.NEXMO_API_SECRET,
                cmd: 'cancel',
                request_id
            })
            if (nexmoCancel.error_text) throw new Error(nexmoCancel.error_text)

            res.status(200).send(nexmoCancel)
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    },
    check: async (req, res) => {
        try {
            const { request_id, code } = req.query;
            if (!request_id || !code) throw new Error("Verify failure");

            const nexmoCheck = await axios.get(process.env.BASE_URL_NEXMO_API, {
                api_key: process.env.NEXMO_API_KEY,
                api_secret: process.env.NEXMO_API_SECRET,
                code,
                request_id
            })
            if (nexmoCheck.error_text) throw new Error(nexmoCheck.error_text)

            res.status(200).send(nexmoCheck)
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    }
}
