import React from "react";
import {NavBar} from "./navBar";
import {FormField} from "./formField";

export const App = () => {
	return (
		<div className="container">
			<NavBar/>
			<main className="main-content">
				<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
				<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
			</main>
		</div>
	)
}