"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Get the current working directory
const currentDirectory = process.cwd();
// console.log(`Current directory: ${currentDirectory}`);
// Load environment variables from a custom path starting from the root directory
let env_path = path_1.default.resolve(currentDirectory, '../server.env');
// console.log(env_path);
dotenv_1.default.config({ path: env_path });
// Now you can access your environment variables
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
];
const app = (0, express_1.default)();
const port = Number(process.env.PORT);
const customAddress = String(process.env.IP);
app.get("/api/people", (req, res) => {
    res.json(people);
});
app.listen(port, customAddress, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    console.log(`[server]: Server is also accessible at http://${customAddress}:${port}`);
});
