let images = document.querySelectorAll("#container img")
let currentImage = 0
let max = images.length
setInterval(function next() {
  images[currentImage].classList.remove("selected")
  currentImage++
  if (currentImage >= max)
    currentImage = 0
  images[currentImage].classList.add("selected")
}, 4000)
