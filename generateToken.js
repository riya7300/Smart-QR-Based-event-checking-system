const crypto = require("crypto");

function generateToken(eventId, studentId){

    const secret = "qr_super_secret";

    const token = crypto
        .createHmac("sha256", secret)
        .update(eventId + studentId + Date.now())
        .digest("hex");

    return token;
}

module.exports = generateToken;
