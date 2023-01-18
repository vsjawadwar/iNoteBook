const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Vishalisagoodbo#y';
//This JWT_SECRET should be stored in environment variable but for now we are declaring again here with same value.

const fetchuser = (req, res, next) => {
    //Get the user from JWT token and and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Kindly authenticate using valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Kindly authenticate using valid token" });

    }
}
module.exports = fetchuser;