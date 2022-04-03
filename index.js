const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users")

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL).then(() => 
console.log("DB Connection Successful")
).catch(error => console.log(error))

app.use(express.json());
app.use("/users", userRoute);

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
})
