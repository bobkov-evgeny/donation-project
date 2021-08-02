"use strict";
import { Settings as appSettings } from "../core/settings";
import * as Utils from "../core/utils/index";

export class DonateList {
	#container;
	#donates;

	constructor(donates) {
		this.#container = document.createElement("div");
		this.#container.className = "donates-container";
		this.#donates = donates;
	}

	// ПОД ВОПРОСОМ
	updateDonates(donates) {
		this.#donates = donates;
		document.querySelector(".donates-container__donates").remove();

		const donatesContainerHTML = document.createElement("div");
		donatesContainerHTML.className = "donates-container__donates";

		const currentDonates = this.#donates;
		currentDonates.forEach((donate) => {
			const donateItemHTML = document.createElement("div");
			donateItemHTML.className = "donate-item";
			donateItemHTML.textContent = `${Utils.getFormattedTime(donate.date)} - `;

			const amountHTML = document.createElement("b");
			amountHTML.textContent = `${donate.amount}${appSettings.currency}`;

			donateItemHTML.append(amountHTML);

			donatesContainerHTML.append(donateItemHTML);
		});

		this.#container.append(donatesContainerHTML);
	}

	render() {
		const titleHTML = document.createElement("h2");
		titleHTML.className = "donates-container__title";
		titleHTML.textContent = "Список донатов.";

		const donatesContainerHTML = document.createElement("div");
		donatesContainerHTML.className = "donates-container__donates";

		const currentDonates = this.#donates;
		currentDonates.forEach((donate) => {
			const donateItemHTML = document.createElement("div");
			donateItemHTML.className = "donate-item";
			donateItemHTML.textContent = `${Utils.getFormattedTime(donate.date)} - `;

			const amountHTML = document.createElement("b");
			amountHTML.textContent = `${donate.amount}${appSettings.currency}`;

			donateItemHTML.append(amountHTML);

			donatesContainerHTML.append(donateItemHTML);
		});

		this.#container.append(titleHTML, donatesContainerHTML);

		return this.#container;
	}
}
