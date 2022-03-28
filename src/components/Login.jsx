import React from 'react';
import './login.css';

export default function login() {
	return (
		<div>
			<div className="login-form">
				<form action="#">
					<h1>Login</h1>
					<p>User name</p>
					<input type="text" name="user" placeholder="User Name" />
					<p>Password</p>
					<input type="password" name="password" placeholder="Password" />
					<br />
					<br />
					<button type="submit">Login</button>
					<h4>
						Don't have an account? <a href="#">Sign up</a>
					</h4>
				</form>
			</div>
		</div>
	);
}
