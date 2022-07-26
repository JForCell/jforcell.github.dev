const prod = ["Aquatide 5000", "product2", "product3"];
const randomint = function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};
const randomvle = randomint(0, 3);

const randomProd = prod[randomvle];
const randomLink = `${randomProd}.html`;
document.getElementById(
	"rdlink"
).innerHTML = `<a href="${randomLink}"><small>Learn more &rarr;</small></a>`;
document.getElementById("rdpd").innerHTML = randomProd;
