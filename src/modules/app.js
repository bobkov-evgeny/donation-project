"use strict";
import DonateForm from "./donate-form.js";
import { DonateList } from "./donate-list.js";

export class App {
	#state;
	#donateForm;
	#donateList;

	constructor() {
		this.#state = {
			donates: [{ amount: 1, date: new Date() }],
			totalAmount: 1,
		};
		this.#donateForm = new DonateForm(
			this.#state.totalAmount,
			this.#createNewDonate.bind(this)
		);
		this.#donateList = new DonateList(this.#state.donates);
	}

	#createNewDonate(newDonate) {
		this.#state.donates.push(newDonate);
		this.#state.totalAmount += +newDonate.amount;

		this.#donateForm.updateTotalAmount(this.#state.totalAmount);
		this.#donateList.updateDonates(this.#state.donates);
	}

	run() {
		document.body.append(this.#donateForm.render(), this.#donateList.render());
	}
}
