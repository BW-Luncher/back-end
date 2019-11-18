const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET  || 'is it secret, is it safe?'

module.exports = (req,res,next) => {
    const {username, password} =req.body

    const token = req.headers.authorization

    if(token){
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err){
                res.status(401).json({message: 'invalid Credentials'})
            }else{
                res.decodedJwt =decodedToken
                next();
            }
        })
    }else{
        res.status(400).json({message: 'No credentials provided'})
    }
}

