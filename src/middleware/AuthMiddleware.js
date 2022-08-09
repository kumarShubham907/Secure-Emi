
import jwt_decode from "jwt-decode";

async function AuthMiddleware(req, res, next) {

  const session = req.headers.authorization;
  try {
   jwt_decode(session)
   next();

  } catch (error) {
    res.status(404).json({ message: "UNAUTHORIZED"})
    console.log("ERROR", error)
  }

}

export default AuthMiddleware;



