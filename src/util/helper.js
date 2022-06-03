function printDate(){
    const today = new Date()
    console.log("print current date", today.getDate())
}
function printMonth(){
    const month = new Date()
    console.log("print current month", month.getMonth() +1)
}  
function getBatchinfo(){
    console.log("Radon, W3D3, the topic for today is Nodejs module system")
}
module.exports.date = printDate
module.exports.month = printMonth
module.exports.batchinfo = getBatchinfo