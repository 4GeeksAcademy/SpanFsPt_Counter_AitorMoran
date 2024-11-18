import React from "react";
import { Digit } from "./contadorDigitos";
import { string } from "prop-types";


const Home = ({counter}) => {

	const formatoDigitos = counter.toString().padStart(6, "0")

	

	return (
		<div className="container d-flex justify-content-center pt-5">
			<div>
			<Digit num={<span className="fa-solid fa-clock"></span>} />
			</div>
			{formatoDigitos.split("").map((digito, index)=> (
				<div key={index}>
					<Digit num={parseInt(digito)}/>
				</div>
			))}
			
		</div>
	);
};

export default Home;
