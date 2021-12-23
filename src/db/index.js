const {connect} = require("mongoose")
const mongoLocalURL = "mongodb://localhost:27017/dxcDB";

connect(mongoLocalURL)
.then(conn => {
console.log("Mongo Connected.....")
})
.catch(err => {
    console.log(err)
    process.exit(1)
})