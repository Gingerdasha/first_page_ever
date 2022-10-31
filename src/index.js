function visit() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  let emoji = prompt("What is your favourite animal emoji?");

  alert(
    "Thank you, " + name + "! Will be in touch by email! Kisses from " + emoji
  );
}
let visitButton = document.querySelector(".visit-button");
visitButton.addEventListener("click", visit);
