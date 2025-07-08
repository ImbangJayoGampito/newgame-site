import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UserLogin } from '@api/userauth';
import { useState } from 'react';
export function Login() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let handleSubmit = (e) => {
        e.preventDefault();
        let registeredUser;
        UserLogin(username, password, (res) => {
        });
        // console.log(username)
        // console.log(password)
    };
    return (_jsxs("div", { className: "mt-4", children: [_jsx("h2", { children: "Login" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { className: 'mt-4 bg-gray-600', type: "text", name: "username", placeholder: "Username", value: username, onChange: (e) => setUsername(e.target.value), required: true }), _jsx("br", {}), _jsx("input", { className: 'mt-1.5 bg-gray-600', type: "password", name: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), required: true }), _jsx("br", { className: 'mt-4' }), _jsx("button", { className: 'mt-4', type: "submit", children: "Login" })] })] }));
}
