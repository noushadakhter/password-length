#! /usr/bin/env node
const password = "pakkap";
console.log(password.length);
if (password.length < 6) {
    console.log("you password must be 6");
}
else {
    console.log("valid pass");
}
export {};
