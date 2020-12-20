// on change percent display in real time
function percent_A1(){
	var scored = document.getElementById("scored-A1").value;
	var total = document.getElementById("total-A1").value;
	var percentage = ((scored / total) * 100).toFixed(2);

	console.log(percentage);

	document.getElementById('display_percent-A1').innerHTML = percentage;
}

function percent_A2(){
	var scored = document.getElementById("scored-A2").value;
	var total = document.getElementById("total-A2").value;
	var percentage = ((scored / total) * 100).toFixed(2);

	console.log(percentage);

	document.getElementById('display_percent-A2').innerHTML = percentage;
}

function percent_A3(){
	var scored = document.getElementById("scored-A3").value;
	var total = document.getElementById("total-A3").value;
	var percentage = ((scored / total) * 100).toFixed(2);

	console.log(percentage);

	document.getElementById('display_percent-A3').innerHTML = percentage;
}

function percent_A4(){
	var scored = document.getElementById("scored-A4").value;
	var total = document.getElementById("total-A4").value;
	var percentage = ((scored / total) * 100).toFixed(2);

	console.log(percentage);

	document.getElementById('display_percent-A4').innerHTML = percentage;
}

// Mean of grades

function mean(){
	var a1 = document.getElementById("scored-A1").value / document.getElementById("total-A1").value;
	var a2 = document.getElementById("scored-A2").value / document.getElementById("total-A2").value;
	var a3 = document.getElementById("scored-A3").value / document.getElementById("total-A3").value;
	var a4 = document.getElementById("scored-A4").value / document.getElementById("total-A4").value;

	var mean = (((a1 + a2 + a3 + a4) / 4) * 100).toFixed(2);

	document.getElementById('result').innerHTML = mean;
}

// Weight of grades

function weighted(){
	var a1 = document.getElementById("scored-A1").value / document.getElementById("total-A1").value;
	var a2 = document.getElementById("scored-A2").value / document.getElementById("total-A2").value;
	var a3 = document.getElementById("scored-A3").value / document.getElementById("total-A3").value;
	var a4 = document.getElementById("scored-A4").value / document.getElementById("total-A4").value;

	var w1 = document.getElementById("weight-A1").value;
	var w2 = document.getElementById("weight-A2").value;
	var w3 = document.getElementById("weight-A3").value;
	var w4 = document.getElementById("weight-A4").value;
	
	var sumOfW = w1*1 + w2*1 + w3*1 + w4*1;
	var sumOfPercent = a1*w1 + a2*w2 + a3*w3 + a4*w4;

	var weighted = ((sumOfPercent / sumOfW) * 100).toFixed(2);

	document.getElementById('result').innerHTML = weighted;
}




