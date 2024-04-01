

const userLogin = async (req, res, next) => {
    try {
        if(req.body) {
            console.log("reqBody", req.body);
            res.status(200).send("Successfull");
            next();
        }
    } catch (error) {
        console.log("error");
        res.status(500).send("Internal server error");
        next();
    }
};

const userRegister = async (req, res, next) => {
    try {
        if(!!req.body) {
            
        }
    } catch (error) {
        
    }
} 

const userResetPassword = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}

const userApiHandler = {
    userLogin,
    userRegister,
    userResetPassword
};

module.exports = userApiHandler;