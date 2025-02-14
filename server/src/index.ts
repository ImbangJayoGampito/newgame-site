// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Person } from "@models/User"
import { meow } from "./meow";
import path from 'path';
import { cwd } from 'node:process';

// Get the current working directory

const currentDirectory = process.cwd();

// console.log(`Current directory: ${currentDirectory}`);


// Load environment variables from a custom path starting from the root directory
let env_path = path.resolve(currentDirectory, '../server.env');
// console.log(env_path);
dotenv.config({ path: env_path });


// Now you can access your environment variables
const people: Person[] = [

    { name: 'Alice', age: 30 },

    { name: 'Bob', age: 25 },

    { name: 'Charlie', age: 35 },

];

const app: Express = express();
const port: number = Number(process.env.PORT);
const customAddress: string = String(process.env.IP);
app.get("/api/people", (req: Request, res: Response) => {
    
    res.json(people);
});

app.listen(port, customAddress, () => {

    console.log(`[server]: Server is running at http://localhost:${port}`);

    console.log(`[server]: Server is also accessible at http://${customAddress}:${port}`);

});