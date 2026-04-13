import JWT, {} from 'jsonwebtoken';
export function AuthMiddleware(req, res, next) {
    let token = req.headers.authorization?.split(" ")[1];
    if (token) {
        try {
            const decodeddata = JWT.verify(token, `${process.env.jwt_secret}`);
            if (decodeddata) {
                req.id = decodeddata.id;
                next();
            }
            else {
                res.json({ message: "you are not logged in!" });
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    else {
        res.json({ message: "token not provided !" });
    }
}
//# sourceMappingURL=auth.js.map