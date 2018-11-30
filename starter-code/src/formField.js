import React from "react";

export const FormField = (props) => {
	const {label, type, placeholder} = props;
	return (
		<div className="columns">
			<div className="column is-half is-offset-one-quarter">
				<form>
					<div className="field">
						<label className="label">{label}</label>
						<div className="control">
							<input className="input" type={type} placeholder={placeholder} />
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}