// Using  Promises.......

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }












 //  Using   Try n Catch
/*
const asyncHandler = (fn) => async (req,res,next) => {
    try{
        await fn(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            success : false,
            message : error.message
        })
    }
} 
The purpose of this wrapper is to execute your original route function inside the try block, so errors from asynchronous operations can be handled in catch instead of being left unhandled by this wrapper.

*/