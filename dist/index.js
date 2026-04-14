import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose, { contentModel, userModel } from './db.js';
import JWT from 'jsonwebtoken';
import { AuthMiddleware } from './auth.js';
const app = express();
app.use(express.json());
app.use(cors());
app.post('/api/v1/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        await userModel.create({ username, password });
        res.send({
            message: "signed up successful !",
            success: true
        }).status(200);
    }
    catch (e) {
        console.log(e);
    }
});
app.post('/api/v1/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await userModel.findOne({ username, password });
        if (user) {
            let token = JWT.sign({ id: user._id.toString() }, `${process.env.jwt_secret}`);
            console.log("SECRET USED:", process.env.jwt_secret); // add this
            console.log("TOKEN:", token);
            res.json({ message: "logged in ", success: true, token: token }).status(200);
        }
        else {
            res.json({ message: "invalid login details ", success: false });
        }
    }
    catch (e) {
        console.log(e);
    }
});
app.post('/api/v1/content', AuthMiddleware, async (req, res) => {
    const title = req.body.title;
    const type = req.body.type;
    const link = req.body.link;
    const userId = req.id;
    try {
        await contentModel.create({
            title: title,
            type: type,
            link: link,
            tags: [],
            userId: userId ? new mongoose.Types.ObjectId(userId) : null
        });
        res.json({ message: "content added !" });
    }
    catch (e) {
        console.error(e);
    }
});
app.get('api/v1/content', (req, res) => {
});
app.delete('api/v1/content', (req, res) => {
});
app.post('api/v1/brain/share', (req, res) => {
});
app.get('api/v1/brain/:shareId', (req, res) => {
});
app.listen(8000);
//# sourceMappingURL=index.js.map