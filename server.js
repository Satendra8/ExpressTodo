import {app} from "./app.js"
import { connectDB } from "./data/datbase.js"

connectDB();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})