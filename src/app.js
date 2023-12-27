import  express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

//midleware means beach mai check krna bas like /route pe request aai ham bech mai check krte hai app use le sakte ho ya nhi bas ye hi  kam hai 
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//kha se deta aarha hai yebtana like json url rtc
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())






export default app