const Jwt = require("jsonwebtoken");

function genarateToken(payload, secretKey, option) {
  return Jwt.sign(payload, secretKey, option);
}
function decodedToken(token, secretKey) {
  const decodedToken = Jwt.verify(token, secretKey);
  if (decodedToken) {
    return decodedToken;
  } else {
    return null;
  }
}
function verifyToken(req, res, next) {
    if(req.url =='/signin'){
        console.log(req.headers.authorization);
    next();
    }else if (req.headers.authorization != null && req.headers.authorization.indexOf('Bearer') != 1) {
    const token=req.headers.authorization.split(' ')[1];
    const tokendata=decodedToken(token,process.env.SECRET_KEY);
    if(tokendata){
        next();
    }else{
        res.json({"error":"Invalid token"});
    }
  }else{
    res.json({"error":"Missing authorization"});
}
}

const authService = {
  genarateToken,
  decodedToken,
  verifyToken
};
module.exports = authService;
