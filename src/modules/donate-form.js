"use strict";

export default class DonateForm {
	#form;
	#amount;
	#createNewDonate;

	constructor(totalAmount, createNewDonate) {
		this.#form = document.createElement("form");
		this.#form.className = "donate-form";
		this.#amount = totalAmount;
		this.#createNewDonate = createNewDonate;
	}

	updateTotalAmount(newAmount) {
		this.#amount = newAmount;
		document.querySelector(
			"#total-amount"
		).textContent = `Всего: ${newAmount}$`;
	}

	#submitListener(e) {
		e.preventDefault();

		const inputValue = e.target.querySelector("input").value;
		const inputDate = new Date();

		this.#createNewDonate({ amount: inputValue, date: inputDate });
	}

	render() {
		const titleHTML = document.createElement("h1");
		titleHTML.id = "total-amount";
		titleHTML.textContent = `Всего: ${this.#amount}$`;

		const labelHTML = document.createElement("label");
		labelHTML.className = "donate-form__input-label";
		labelHTML.textContent = "Введите сумму в $";

		const inputHTML = document.createElement("input");
		inputHTML.className = "donate-form__donate-input";
		inputHTML.name = "amount";
		inputHTML.type = "number";
		inputHTML.max = "100";
		inputHTML.min = "0";
		inputHTML.required = "";

		const buttonHTML = document.createElement("button");
		buttonHTML.className = "donate-form__submit-button";
		buttonHTML.type = "submit";
		buttonHTML.textContent = "Задонатить";

		labelHTML.append(inputHTML);

		this.#form.addEventListener("submit", this.#submitListener.bind(this));

		this.#form.append(titleHTML, labelHTML, buttonHTML);

		return this.#form;
	}
}
