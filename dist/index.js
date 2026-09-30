"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!x');
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
