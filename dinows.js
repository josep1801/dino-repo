const dot1 = document.querySelector('#dot1')
const dot2 = document.querySelector('#dot2')
const dot3 = document.querySelector('#dot3')
const carContain = document.querySelector('.carousel-container')

let counter = 0
let size = carContain.children[0].clientWidth

carContain.children[1].style.display="none"
carContain.children[2].style.display="none"
dot1.style.background="#717171"
dot2.style.background="#bbb"
dot3.style.background="#bbb"

dot1.addEventListener ('click', function() {
  // slideShow=1
  // console.log(slideShow)
  counter = 0
  console.log(counter)
  carContain.style.transform= 'translateX(' + (size * counter) + 'px)'
  dot1.style.background="#717171"
  dot2.style.background="#bbb"
  dot3.style.background="#bbb"
  carContain.children[0].style.display="initial"
  carContain.children[1].style.display="none"
  carContain.children[2].style.display="none"
  carContain.children[0].style.visibility="visible"
  carContain.children[1].style.visibility="hidden"
  carContain.children[2].style.visibility="hidden"
  console.log("hi")
  // setTimeout(function() {console.log('bye')},2000)
}
)

dot2.addEventListener ('click', function() {
  // slideShow=2
  // console.log(slideShow)'
  counter = 1
  console.log(counter)
  dot1.style.background="#bbb"
  dot2.style.background="#717171"
  dot3.style.background="#bbb"
  console.log("hey")
  carContain.style.transform= 'translateX(' + (-size * counter) + 'px)'
  carContain.children[0].style.display="initial"
  carContain.children[1].style.display="initial"
  carContain.children[2].style.display="none"
  carContain.children[0].style.visibility="hidden"
  carContain.children[1].style.visibility="visible"
  carContain.children[2].style.visibility="hidden"}
)

dot3.addEventListener ('click', function() {
  // slideShow=3
  // console.log(slideShow)
  counter = 2
  console.log(counter)
  dot1.style.background="#bbb"
  dot2.style.background="#bbb"
  dot3.style.background="#717171"
  console.log("hello")
  carContain.style.transform= 'translateX(' + (-size * counter) + 'px)'
  carContain.children[0].style.display="initial"
  carContain.children[1].style.display="initial"
  carContain.children[2].style.display="initial"
  carContain.children[0].style.visibility="hidden"
  carContain.children[1].style.visibility="hidden"
  carContain.children[2].style.visibility="visible"
}
)

setInterval(function() {
  counter ++
  if (counter == 1) {
  carContain.style.transform= 'translateX(' + (-size * 1) + 'px)'
  carContain.children[0].style.display="initial"
  carContain.children[1].style.display="initial"
  carContain.children[2].style.display="none"
  carContain.children[0].style.visibility="hidden"
  carContain.children[1].style.visibility="visible"
  carContain.children[2].style.visibility="hidden"
  dot1.style.background="#bbb"
  dot2.style.background="#717171"
  dot3.style.background="#bbb"
  carContain.classList.add('fade')
  setTimeout(function() {
    carContain.classList.remove('fade')}
    ,3000)
}
  if (counter == 2) {
  carContain.style.transform= 'translateX(' + (-size * 2) + 'px)'
  dot1.style.background="#bbb"
  dot2.style.background="#bbb"
  dot3.style.background="#717171"
  carContain.children[0].style.display="initial"
  carContain.children[1].style.display="initial"
  carContain.children[2].style.display="initial"
  carContain.children[0].style.visibility="hidden"
  carContain.children[1].style.visibility="hidden"
  carContain.children[2].style.visibility="visible"
  carContain.classList.add('fade')
  setTimeout(function() {
    carContain.classList.remove('fade')}
    ,3000)
  }
  if (counter >= 3) {
  counter = 0
  carContain.style.transform= 'translateX(' + (-size * 0) + 'px)'
  dot1.style.background="#717171"
  dot2.style.background="#bbb"
  dot3.style.background="#bbb"
  carContain.children[0].style.display="initial"
  carContain.children[1].style.display="none"
  carContain.children[2].style.display="none"
  carContain.children[0].style.visibility="visible"
  carContain.children[1].style.visibility="hidden"
  carContain.children[2].style.visibility="hidden"
  carContain.classList.add('fade')
  setTimeout(function() {
    carContain.classList.remove('fade')}
    ,3000)
  // carContain.classList.add('fade')
  }
}
  ,6000)