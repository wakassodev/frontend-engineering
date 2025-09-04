const image = document.querySelectorAll("img");
const imageContainer = document.getElementsByClassName("image-container");

for (let i = 0; i < imageContainer.length; i++) {
  imageContainer[i].addEventListener("click", function() {

    for (let j = 0; j < imageContainer.length; j++) {
      if (j !== i) {
        imageContainer[j].classList.remove("expand")
      }
    }

    imageContainer[i].classList.toggle("expand")
  })

}

