"use strict";
import moment from "moment";

export const calculateSumOfNumbers = (numbersArr) => {
	return numbersArr.reduce((acc, number) => (acc += number), 0);
};

export const getFormattedTime = (date) =>
	moment(date).format("MMMM Do YYYY, h:mm:ss a");
