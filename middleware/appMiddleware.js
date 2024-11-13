const appMiddleware = (req,res,next)=>{
    //logic
    console.log('Inside application specific middleware');
    next()
}

module.exports = appMiddleware