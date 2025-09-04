const questions = document.getElementsByClassName("question");
const icons = document.querySelectorAll('img');
const p = document.querySelectorAll('p');


for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function() {

    for (let j = 0; j < questions.length; j++) {
      if (j !== i) {
        questions[j].classList.remove("show");
        const otherDesc = questions[j].querySelector(".description");
        const otherIcon = questions[j].querySelector("img");
        if (otherDesc) otherDesc.classList.remove("show");
        if (otherIcon) otherIcon.src = 'image/plus-circle.svg';
      }
    }

    const desc = this.querySelector(".description");
    const icon = this.querySelector("img");
    questions[i].classList.toggle("show");
    desc.classList.toggle("show");


    if (desc.classList.contains("show")){
      icon.src = 'image/minus-circle.svg';
    } else {
      icon.src = 'image/plus-circle.svg';
    }
    
  });
}