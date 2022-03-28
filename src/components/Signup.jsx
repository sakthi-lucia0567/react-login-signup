import React from 'react';
import './signup.css';

export default function signup() {
	return (
		<div>
			<div className="signup-form">
				<form action="#">
					<h1>Sign up</h1>
					<p>User name</p>
					<input type="text" name="user" placeholder="User Name" />
					<p>Password</p>
					<input type="password" name="password" placeholder="Password" />
					<p>Mobile no</p>
					<input type="number" name="mobile no" placeholder="Mobile no." />
					<br />
					<br />
					<button type="submit">signup</button>
					<h4>
						Already have an account? <a href="#">Login</a>
					</h4>
				</form>
			</div>
		</div>
	);
}
