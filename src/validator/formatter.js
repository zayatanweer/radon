function trimString(){
    const stringsomething="  funtionup "
    console.log("Before excute trim function",stringsomething+". ")
    console.log("after excute trim function", stringsomething.trim()+".")
}
function changetoLowerCase(){
    const changetoLowerString="TaNweEr zaYa"
    console.log("This is string before change to lowerCase",changetoLowerString)
    console.log("This is string after change to lowerCase",changetoLowerString.toLowerCase())
}
function changetoUpperCase(){
    const changetoUpperString="TaNweEr zaYa"
    console.log("This is string before change to lowerCase",changetoUpperString)
    console.log("This is string after change to upperCase",changetoUpperString.toUpperCase())
}
module.exports.string = trimString
module.exports.lowerCase = changetoLowerCase
module.exports.upperCase = changetoUpperCase   