const jwt = require("jsonwebtoken");

const createJSONWebToken = (payload, secretKey, expiresIn) => {
    if (typeof payload !== 'object' || !payload) {
        throw new Error('Payload must be a non-empty object');
    }

    if (typeof secretKey !== 'string' || secretKey === '') {
        throw new Error('Secret key must be a non-empty string');
    }


    try {
        let token = jwt.sign(payload, secretKey, { expiresIn });
        return token;
    } catch (error) {
        console.log('Failed to sign the JWT', error);
        throw error;
    }
}

module.exports = createJSONWebToken;
