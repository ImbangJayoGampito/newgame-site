import { User, UserAuth } from '../../../models/User'
import { tryFail } from '../../../models/error-handling'
import "ts-error-as-value/lib/globals";

export function UserLogin(username: string, password: string, loginExecute: (result: Result<User, Error>) => void): void {
    let userCheck: UserAuth = {
        username: username,
        password: password
    };
    tryFail(async () => {
        const response = await fetch("api/user/login", {
            method: "POST",
            body: JSON.stringify(userCheck),
            // ...
        });
        if (!response.ok) {
            return err(new Error("Not responding and I don't know why meow"))
        }
        return response.json();
    }).then((data) => { loginExecute(data) }).catch((err) => { loginExecute(err(new Error("Error while handling promise, reason: " + err))) })


}
export function GatherDummyUsers(callback: (result: Result<User[], Error>) => void): void {
    tryFail(async () => {
        const response = await fetch("api/user/dummydata", {
            method: "GET"
        })
        if (!response.ok) {
            return err(new Error("Response that should respond, did not respond meow"))
        }
        let chars: User[] = await response.json()

        return chars
    }).then((data) => { callback(data) }).catch((err) => { callback(err(new Error("Error while handling promise, reason: " + err))) })


}
function UserSignup(username: string, password: string): Boolean {
    return false;
}
function ValidateUsername(username: string) {

}
function ValidatePassword(password: string) {

}