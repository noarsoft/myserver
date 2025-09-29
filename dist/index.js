"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const cors_1 = __importDefault(require("cors"));
const path = require("path");
const app = Express();
const mongoURI = "mongodb+srv://iampop242_db_user:test1234@cluster0.fbcapr5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose_1.default
    .connect(mongoURI)
    .then(() => {
    console.log("MongoDB connected");
})
    .catch((error) => {
    console.error("MongoDB connection error:", error);
});
app.use(Express.json());
app.use((0, cors_1.default)());
app.use(Express.static(path.join(__dirname, "public")));
// Routes
app.use("/api", UserRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Hello, World!123");
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
