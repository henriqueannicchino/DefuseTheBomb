import React from "react";
import { Link } from "react-router-dom";
import { } from "material-symbols";

import './results.css';

export default function results() {
	const preTestResult = JSON.parse(localStorage.preResult);
	const posTestResult = JSON.parse(localStorage.posResult);
	var preTestTotal = contCorrectAnswer(preTestResult);
	var posTestTotal = contCorrectAnswer(posTestResult);

	function checkResult() {
		const bombNum = localStorage.getItem('bombNum');
		const preTime = localStorage.getItem('preTime');
		const posTime = localStorage.getItem('posTime');

		return (
			<div>
				<ul className="userData">
					<li>Bombas desarmadas: {bombNum}</li>
					<li>Tempo do pré-teste: {preTime}</li>
					<li>Acertos no pré-teste: {preTestTotal}</li>
					<li>Tempo do pós-teste: {posTime}</li>
					<li>Acertos no pós-teste: {posTestTotal}</li>
				</ul>
			</div>
		)

	}
	function contCorrectAnswer(array) {
		var total = 0;

		array.forEach(element => {
			const num1 = element.num1;
			const num2 = element.num2;
			const num3 = element.num3;
			const op = element.op;
			const posInput = element.posInput;
			const userAnswer = parseInt(element.userAnswer);

			if (op === "+") {
				if (posInput === 0) {
					if (num1 === userAnswer) total++
				}
				else if (posInput === 1) {
					if (num2 === userAnswer) total++
				}
				else {
					if (num3 === userAnswer) total++
				}
			}
			else if (op === "-") {
				if (posInput === 0) {
					if (num1 === userAnswer) total++
				}
				else if (posInput === 1) {
					if (num2 === userAnswer) total++
				}
				else {
					if (num3 === userAnswer) total++
				}
			}
		});
		return total;
	}

	function checkTest(element, index) {
		const num1 = element.num1;
		const num2 = element.num2;
		const num3 = element.num3;
		const op = element.op;
		const posInput = element.posInput;
		const userAnswer = parseInt(element.userAnswer);

		if (op === "+") {
			if (posInput === 0) {
				return (
					<div key={index}>
						<span>{userAnswer}</span>
						<span>+</span>
						<span>{num2}</span>
						<span>=</span>
						<span>{num3}</span>
						{
							(num1 === userAnswer) ?
								<span className="material-symbols-rounded">check_circle</span> :
								<span className="material-symbols-rounded">cancel</span>
						}
					</div>
				);
			}
			else if (posInput === 1) {
				return (
					<div key={index}>
						<span>{num1}</span>
						<span>+</span>
						<span>{userAnswer}</span>
						<span>=</span>
						<span>{num3}</span>
						{
							(num2 === userAnswer) ?
								<span className="material-symbols-rounded">check_circle</span> :
								<span className="material-symbols-rounded">cancel</span>
						}
					</div>
				);
			}
			else {
				return (
					<div key={index}>
						<span>{num1}</span>
						<span>+</span>
						<span>{num2}</span>
						<span>=</span>
						<span>{userAnswer}</span>
						{
							(num3 === userAnswer) ?
								<span className="material-symbols-rounded">check_circle</span> :
								<span className="material-symbols-rounded">cancel</span>
						}
					</div>
				);
			}
		}

		else if (op === "-") {
			if (posInput === 0) {
				return (
					<div key={index}>
						<span>{userAnswer}</span>
						<span>-</span>
						<span>{num2}</span>
						<span>=</span>
						<span>{num3}</span>
						{
							(num1 === userAnswer) ?
								<span className="material-symbols-rounded">check_circle</span> :
								<span className="material-symbols-rounded">cancel</span>
						}
					</div>
				);
			}
			else if (posInput === 1) {
				return (
					<div key={index}>
						<span>{num1}</span>
						<span>-</span>
						<span>{userAnswer}</span>
						<span>=</span>
						<span>{num3}</span>
						{
							(num2 === userAnswer) ?
								<span className="material-symbols-rounded">check_circle</span> :
								<span className="material-symbols-rounded">cancel</span>
						}
					</div>
				);
			}
			else {
				return (
					<div key={index}>
						<span>{num1}</span>
						<span>-</span>
						<span>{num2}</span>
						<span>=</span>
						<span>{userAnswer}</span>
						{
							(num3 === userAnswer) ?
								<span className="material-symbols-rounded">check_circle</span> :
								<span className="material-symbols-rounded">cancel</span>
						}
					</div>
				);
			}
		}

	}

	return (
		<div className="main" >
			<h1>Resultados</h1>
			<div className="flex">
				<div>
					{checkResult()}
				</div>
				<div className="test">
					<div>Pré-teste</div>
					{preTestResult.map(checkTest)}
					{ }
				</div>
				<div className="test">
					<div>Pós-teste</div>
					{posTestResult.map(checkTest)}
				</div>
			</div>
			<div className="returnMenuButton">
				<Link to="/">
				<button className="buttonOver" >Menu principal</button>
				</Link>
			</div>
		</div>
	);
};