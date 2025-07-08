
import { User } from '@models/User'
import { UserLogin } from '@api/userauth'
import { useEffect, useState } from 'react';
export function Login() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let registeredUser: User;
        UserLogin(username, password, (res) => {

        })
        // console.log(username)
        // console.log(password)
    }
    return (

        <div className="mt-4">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className='mt-4 bg-gray-600'
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required

                /><br
                ></br>
                <input
                    className='mt-1.5 bg-gray-600'
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required

                /><br
                    className='mt-4'></br>
                <button
                    className='mt-4' type="submit">Login</button>
            </form>

        </div>)
}