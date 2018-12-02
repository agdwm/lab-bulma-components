import React from "react";
import {NavBar} from "./navBar";
import {FormField} from "./formField";
import {CoolButton} from "./CoolButton";

export const App = () => {
	return (
		<div className="container">
			<NavBar/>
			<main className="main-content">
			<div className="columns">
				<div className="column is-half is-offset-one-quarter">
					<form>			
						<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
						<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
					</form>
				</div>
			</div>
				<div className="column is-half is-offset-one-quarter ">
					<div className="field is-text-centered main-buttons">
						<CoolButton isSmall isDanger className="is-rounded">Button 1</CoolButton>
						<CoolButton isSmall isSuccess>Button 2</CoolButton>
					</div>
				</div>
			</main>
		</div>
	)
}