const jwt = require("jsonwebtoken");


function generateToken(payload) {
    const token = jwt.sign(payload, "picogarden");
    return token;
}

function verifyToken(token) {
    const decoded = jwt.verify(token, "picogarden");
    return decoded;
}

module.exports = {
    generateToken,
    verifyToken
}   