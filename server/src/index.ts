// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { UserAuth } from "@models/User"
import { meow } from "./meow";
import path from 'path';
import { cwd } from 'node:process';
import cors from 'cors';
import "ts-error-as-value/lib/globals";
import { User } from '@models/User'
// Get the current working directory

const currentDirectory = process.cwd();

// console.log(`Current directory: ${currentDirectory}`);


// Load environment variables from a custom path starting from the root directory
let env_path = path.resolve(currentDirectory, '../server.env');
// console.log(env_path);
dotenv.config({ path: env_path });


// Now you can access your environment variables

const app: Express = express();
const port: number = Number(process.env.PORT);
const customAddress: string = String(process.env.IP) || '127.0.0.1';


const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://imbangjayogampito:d7kALD4NMihM677Z@cluster0.5yqbz.mongodb.net/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("Connected to the database");
        // Perform database operations here
    } finally {
        await client.close();
    }
}

run().catch(console.dir);

app.use(cors());
app.get("/api/people", (req: Request, res: Response) => {


});
app.get("/api/user/dummydata", (req: Request, res: Response) => {
    const users: User[] = [

        {

            id: 1,

            username: "john_doe",

            password: "password123",

            email: "john@example.com"

        },

        {

            id: 2,

            username: "jane_smith",

            password: "securepassword",

            email: "jane@example.com"

        },

        {

            id: 3,

            username: "alice_jones",

            password: "mypassword",

            // email is optional

        },

        {

            id: 4,

            username: "bob_brown",

            password: "bobspassword",

            email: "bob@example.com"

        },

        {

            id: 5,

            username: "charlie_black",

            password: "charliespassword",

            email: "charlie@example.com"

        }

    ];
    res.json(users);
})
app.use('/assets', express.static(path.resolve(currentDirectory, '../client/dist/assets')));
app.get("*", (req: Request, res: Response) => {
    res.sendFile(
        path.resolve(currentDirectory, '../client/dist/index.html')
    );
});
app.get("/api/user/login", (req: Request, res: Response) => {

})
app.use((req, res, next) => {
    console.log('Time is meow meow meow meow:', Date.now())
    next()
})
app.get("/", (req: Request, res: Response) => {
    // console.log("meow moew" + req.body)
    res.send("meowwww")
})
app.post("/meow", (req: Request, res: Response) => {
    res.send("meow")
})
app.listen(port, customAddress, () => {

    console.log(`[server]: Server is running at http://localhost:${port}`);

    console.log(`[server]: Server is also accessible at http://${customAddress}:${port}`);

});