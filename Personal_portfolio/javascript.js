//css animation trigger on scroll

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll(".animate");
  const skillLevels = document.querySelectorAll(".skill-level");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      
      if (entry.intersectionRatio > 0) {
        if (entry.target.classList.contains('skill-level')) {
          const skillLevel = entry.target;
          skillLevel.style.setProperty('--level', skillLevel.getAttribute('data-level'));
          skillLevel.classList.add('animates');
        
        }
      
        // Trigger typing animation and skill-level
        if (entry.target.classList.contains('typewriter')) {
          entry.target.classList.add("visible");
          entry.target.classList.add('typing');
        }
       
        
      }
      else{

        entry.target.classList.remove('typing');
        entry.target.classList.remove('animates');

      }
    });
  }, {
    threshold: 0.1 // 10% of the element should be visible to trigger the callback
  });

  skillLevels.forEach(skillLevel => {
    observer.observe(skillLevel);
});
  elements.forEach(element => {
    observer.observe(element);
  });
});


//Form validation

// // Retrieving input elements
const formCOntrol =document.querySelector('form');
const userName=document.getElementById('UserName');
const userEmail =document.getElementById('UserEmail');
const userMessage =document.getElementById('UserMessage');

formCOntrol.addEventListener('submit',(event)=>{
  event.preventDefault(); // prevent form from submitting
  ValidationCheck();
});

function ValidationCheck(){

    // Getting trimmed values from input fields
  let NameValue=userName.value ;
  let EmailValue=userEmail.value;
  let Message=userMessage.value;
  // Regular expression pattern for email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  // Variable to track if there are any errors
  let hasError=false;

  clearErrors();

  //performing validation check
  if(NameValue==""){
    Error(userName,"Enter name ");
    hasError=true;
  }
  if(!emailPattern.test(EmailValue)){
    Error(userEmail ,"Enter valid Email id");
    hasError=true;
  }
 if(Message==""){
  Error(userMessage,"Message can not be blank");
  hasError=true;
 }
  // Submit the form only if there are no errors
 if(!hasError){
  formCOntrol.submit();
 }

}

// Function to display error messages
function Error(field,Errortext){
  field.classList.add("shakeBox");
  setTimeout(() => {
    field.classList.remove("shakeBox")   
   }, 1000);
   const ErrorElement=document.createElement("h3");
   ErrorElement.classList.add("error-text");
   ErrorElement.textContent=Errortext;
   field.closest(".mb-3").appendChild(ErrorElement)

}

//clears the errors messages
function clearErrors(){
  const errorMessages=document.querySelectorAll(".error-text");
  errorMessages.forEach((error)=>{
    error.remove();
  })
}


