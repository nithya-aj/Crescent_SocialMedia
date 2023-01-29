import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const secret = process.env.JWT_KEY;
const authMiddleWare = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token, "token from authmiddleware.js");
        if (token) {
            const decoded = jwt.verify(token, secret);
            console.log(decoded,"decoded token from authMiddleware.js");
            req.body._id = decoded?.id;
        }
        next()
    }catch(error){
        console.log(error, 'error from authMiddleware');
    }
}

export default authMiddleWare;