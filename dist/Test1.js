"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
const unit_test = () => {
    //test case 1
    if ((0, Utils_1.add)(2, 3) === 5) {
    }
    else {
        console.log(1);
        return;
    }
    //test case 2
    if ((0, Utils_1.add)(-2, -3) === -1) {
    }
    else {
        console.log(2);
        return;
    }
};
