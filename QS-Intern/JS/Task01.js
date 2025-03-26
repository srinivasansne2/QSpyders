// Simple OTP Login & Verify

let otp = Math.floor(Math.random()*10000)
alert("Your OTP Is : " + otp)
let verify= prompt("Enter The OTP")
if (otp==verify) {
    document.write("Login Succesfull")
}
else{
    document.write("Login Failed")
}