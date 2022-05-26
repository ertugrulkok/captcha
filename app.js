let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
console.log(alphabets.length);
let cratus = document.getElementById('status');
cratus.innerText = "Captcha Generator";

 function generate  () {

let first = alphabets[Math.floor(Math.random() * alphabets.length)];
let second = Math.floor(Math.random() * 10);
let third = Math.floor(Math.random() * 10);
let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
let sixth = Math.floor(Math.random() * 10);
captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
console.log(captcha);
document.getElementById('generated-captcha').value = captcha;
document.getElementById("entered-captcha").value = '';
cratus.innerText = "Captcha Generator"
}

 function check()  {
let userValue = document.getElementById("entered-captcha").value;
console.log(captcha);
console.log(userValue);
if(userValue == captcha){
    cratus.innerText = "Correct!!"
}else{
    cratus.innerText = "Try Again!!"
    document.getElementById("entered-captcha").value = '';
}
}