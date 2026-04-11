import express from 'express';
import { userModel } from './db.js';
const app = express();
app.get('/', (req, res) => {
    res.json({
        message: "signed up successful !"
    });
});
app.post('/api/v1/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        await userModel.create({
            username,
            password
        });
        res.send({
            message: "signed up successful !"
        });
    }
    catch (e) {
        console.log(e);
    }
});
app.listen('8000');
//# sourceMappingURL=index.js.map