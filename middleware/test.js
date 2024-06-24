exports.testMiddleware = (req,res,next)=>{
    console.log('middleware');
    next()
}