"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const utils = require('./Utils').utils;
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
    // test case 1 of unit test
    //test
    if (utils.add(2, 3) === 5) {
    }
    else {
        console.log("UnitTest Case 1: utils.add(2, 3) === 5");
        process.exit(1);
    }
    if (utils.add(3, 3) === 6) {
    }
    else {
        console.log("UnitTest Case 2: utils.add(3, 3) === 6");
        process.exit(1);
    }
    //user email doesn't have a valid format
    if (utils.add_user("test1234", "testnoassigning", "password") === false) {
    }
    else {
        console.log("UnitTest Case 3: utils.add_user(\"test\", \"testnoassigning\", \"password\") === false");
        process.exit(1);
    }
    //user password is less than 6 characters
    if (utils.add_user("test1234", "test@example.com", "123") === false) {
    }
    else {
        console.log("UnitTest Case 4: utils.add_user(\"test1234\", \"test@example.com\", \"123\") === false");
        process.exit(1);
    }
});
unit_test();
