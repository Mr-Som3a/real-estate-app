
function errorHandler (err,req,res){
    res.status(500).json({message:err.message})
}
export default errorHandler