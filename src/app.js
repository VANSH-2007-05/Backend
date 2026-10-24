// import express from "express"
// import cors from "cors"
// import cookieParser from "cookie-parser"

// const app = express()

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))

// app.use(express.json({limit: "16kb"}))
// app.use(express.urlencoded({extended : true , limit : "16kb"}))
// app.use(express.static("public"))
// app.use(cookieParser())

// // routes import

// import userRouter from './routes/user.routes.js'


// // routes declaration

// app.use("/api/v1/users", userRouter)

// // http://localhost:8000/api/v1/users/register


// // Global error-handling middleware
// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500
//     const message = err.message || "Something went wrong"

//     return res.status(statusCode).json({
//         success: false,
//         statusCode,
//         message,
//         errors: err.errors || []
//     })
// })


// export { app }

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middlewares
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes import
import userRouter from "./routes/user.routes.js";

// Routes declaration
app.use("/api/v1/users", userRouter);

// Example: http://localhost:8000/api/v1/users/register

// Global error-handling middleware
app.use((err, req, res, next) => {
  console.error("Error caught:", err); // full error in terminal

  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    errors: err.errors || [],
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined
  });
});


export { app };
