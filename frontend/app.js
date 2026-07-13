const form = document.getElementById("feedbackForm");


form.addEventListener("submit", function(event){


event.preventDefault();



const name =
document.getElementById("name").value;


const email =
document.getElementById("email").value;


const rating =
document.getElementById("rating").value;


const message =
document.getElementById("message").value;



if(
name === "" ||
email === "" ||
rating === "" ||
message === ""
)

{

document.getElementById("response").innerHTML =
"Please complete all fields.";

return;

}



document.getElementById("response").innerHTML =
"Thank you! Your feedback has been submitted successfully.";



form.reset();



});