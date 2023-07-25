const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRY } = require('../constants')

/**
 * Generate new token with user id
 *
 * @param user
 */

const generateJwtToken = async (user) => {
    const { username } = user;
	const token = jwt.sign({ username }, JWT_SECRET, {
		expiresIn: JWT_EXPIRY,
	});
    
	return token;
}

/**
 * Get token from request header
 *
 * @param req
 */

 const getTokenFromRequest = (req) => {

	const authorization = req.headers.authorization

	if (authorization && authorization.split(' ')[0] === 'Bearer') {
		return req.headers.authorization.split(' ')[1].trim()
	}

	return null
}

/**
 * Validate token
 *
 * @param token
 */

const verifyToken = (token) =>
    new Promise((resolve, reject) => {
        jwt.verify(token, JWT_SECRET, (err, payload) => {
            if (err) {
                return reject(err)
            }
            resolve(payload)
        })
})

const serializeUser = user => {
    return {
        username : user.username
    }
}

module.exports = { 
    generateJwtToken,
    getTokenFromRequest,
    verifyToken,
    serializeUser
}