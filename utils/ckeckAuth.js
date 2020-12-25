const {AuthebticationError}=require("apollo-server");
const jwt=require("jsonwebtoken");
const {SECRETKEY}=require("../config");

module.exports=(context)=>{
    const authHeader=context.req.headers.authorization;
    if(authHeader){
        const token=authHeader.split('Bearer ')[1];
        if(token){
            try{
                const user=jwt.verify(token,SECRETKEY);
                return user;
            }catch(err){
                throw new AuthebticationError("Invalid/Expired tokken");
            }
        }
        throw new Error("Authentication token must be 'Bearer [token]");
    }
    throw new Error("Autherized header must be provided");
};

