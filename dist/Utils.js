"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
function hello() {
    return "Hello, world!";
}
function add(a, b) {
    return a + b;
}
function add_user(name, email, password) {
    name = name.trim();
    if (name.search(" ") !== -1) {
        console.log("Invalid name: contains spaces");
        return false;
    }
    password = password.trim();
    if (password.length < 6) {
        console.log("Invalid password: less than 6 characters");
        return false;
    }
    email = email.trim();
    const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regx.test(email)) {
        console.log("Invalid email format");
        return false;
    }
    return true;
}
exports.utils = {
    hello,
    add,
    add_user
};
