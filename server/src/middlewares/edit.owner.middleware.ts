const editOwnerMiddleware=(req:any, res:any, next:any)=>{
    if (req.user==null){
        return res.status(401).json({
            'text':'Vartotojas nėra prisijungęs'
        });
    }
    if (req.user.type==0 || req.user.type==1){
        next();
    }else{
        return res.status(401).json({
            'text':'Vartotojas neturi teisių atlikti veiksmus'
        });
    }
};


export {editOwnerMiddleware};