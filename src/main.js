// testing 
let testing_color = ["#1D5B79", "#468B97", "#EF6262", "#F3AA60"];
let denied_message = [
	"ACCESS DENIED!",
	"You are not allowed in",
	"You don't have access",
	"Please try again",
	"Just give up, You are useless",
];


let i = 0;

// pre image of the background
document.body.style.backgroundColor = `${testing_color[i]}`;


// for the selection of elements

// selecting elements
const input_bar = document.getElementById("input_bar");
const main_container = document.getElementById("main_container");
const another_container = document.getElementById("another_container");
const name_input = document.getElementById("name_bar");
const number_input = document.getElementById("number_bar");

// for the selection of elements

// changing to the background image in 5 s for testing 10 s for use
// setting up setinterval
setInterval(function () {
	
	document.body.style.backgroundColor = testing_color[i];
	
	// incrementing the i valueaaaaaaa
	if (i == testing_color.length) {
		i = 0;
	}
	else {
		i++;
	}
	
}, 5000);


// checking if the inputs are equal
another_container.addEventListener("submit", function (e) {
	e.preventDefault();
	
	if (number_input.value == 9808867133) {
		location.href = "./ppl/ashok_chhetri/another.html";
	}
	else {
		alert(denied_message[Math.floor(Math.random()  * denied_message.length)] + " " + name_input.value);
		// console.log(Math.ceil(Math.random()) * denied_message.length);
	}
	
	name_input.value = '';
	number_input.value = '';
})
