function orderMail() {
	const company = document.getElementById("comp").value;
	const product = document.getElementById("prod").value;
	const amount = document.getElementById("amount").value;
	const unit = document.getElementById("unit").value;
	const specInfo = document.getElementById("specinfo").value;
	// console.log(company + product + unit + specInfo);
	const link = `mailto:jforcell.dev@gmail.com?subject=Order&body=${company} has ordered ${product} for ${amount}${unit}%0D%0A${specInfo}`;
	window.open(link);
	console.log(link);
}
