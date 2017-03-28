var jwt  = require("jsonwebtoken");

function generateToken(data) {
  var d = {
    merchantId: data.merchantId,
    subscriptionId: data.subscriptionId,
    allowedPlansId: data.allowedPlansId
  }
  
  return token = jwt.sign(d, 'MySup3r53cR3T!!!', { expiresIn: 60 * 60 * 24});
}

module.exports = generateToken;

