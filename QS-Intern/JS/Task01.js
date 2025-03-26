let a = Math.floor(Math.random()*10000)
alert("Your OTP Is : " + a)
let b= prompt("Enter The OTP")
if (a==b) {
    document.write("Login Succesfull")
}
else{
    document.write("Login Failed")
}