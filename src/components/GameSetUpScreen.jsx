import React from "react";
import { useState } from "react/cjs/react.development";
import { useGameState } from "../contexts/GameState";

export const GameSetupScreen = (props) => {
	const { dispatch } = useGameState();
	const [companyName, setCompanyName] = useState();
	const [techStack, setTechStack] = useState();

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`Company name: ${companyName}`);
		console.log(`Tech stack: ${techStack}`);
		dispatch({ type: "setUpCompany", payload: { companyName, techStack }});
		alert("Company details saved");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Choose your company name{" "}
					<input
						type="text"
						name="name"
						value={companyName}
                        required
						onChange={(event) => {
							event.preventDefault();
							setCompanyName(event.target.value);
						}}
					></input>
				</label>
				<label>
					Choose your tech stack{" "}
					<input
						type="text"
						name="stack"
						value={techStack}
                        required
						onChange={(event) => {
							event.preventDefault();
							setTechStack(event.target.value);
						}}
					></input>
				</label>
				<input type="submit" value="Save" />
			</form>
		</div>
	);
};

export default GameSetupScreen;
