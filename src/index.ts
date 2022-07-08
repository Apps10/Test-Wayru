import dotenv from "dotenv"
import app from "./app";
dotenv.config();

const { PORT } = process.env;
app.listen(PORT||"3000",()=>{
    console.log(`Server Running PID ${process.pid} on port ${PORT||"3000"}`);
});