import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepHealthInfo = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className=" container d-flex flex-column h-100 justify-content-center ">
				<div className=" sypmtopms d-flex flex-column justify-content-center">
					<img
						className="mx-auto"
						src="https://www.gstatic.com/images/icons/material/system_gm/2x/report_problem_covid_red_48dp.png"
						alt="report problem"
						style={{
							height: "3rem",
							width: "3rem"
						}}
						data-iml="79073346.79"
					/>
					<h3 className="text-center">Do you have any of these life-threatening symptoms?</h3>
				</div>

				<div>
					<ul className="lista">
						<li>Bluish lips or face</li>
						<li>Severe and constant pain or pressure in the chest</li>
						<li>
							Extreme difficulty breathing (gasping for air or cannot talk without catching your breath)
						</li>
						<li>Severe and constant dizziness or lightheadedness</li>
						<li>Serious disorientation (acting confused)</li>
						<li>Unconscious or very difficult to wake up</li>
						<li>Slurred speech (new or worsening)</li>
						<li>Seizures</li>
						<li>
							Signs of low blood pressure (too weak to stand, light headed, feeling cold, pale, clammy
							skin)
						</li>
					</ul>
				</div>

				<div className="botones  mx-auto justify-content-around">
					<button
						onClick={() => {
							actions.setSymptoms(true);
							history.push("/questions/4");
						}}
						type="button"
						className="boton-yes btn btn-primary">
						Yes
					</button>

					<button
						onClick={() => {
							actions.setSymptoms(false);
							history.push("/questions/4");
						}}
						type="button"
						className="boton-no btn btn-primary">
						No
					</button>
				</div>
			</div>
		</>
	);
};
