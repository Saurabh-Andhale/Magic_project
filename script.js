let popup = document.getElementById("popup");
  function openpop(){
    popup.classList.add("open-popup");
  }
  function closePopup(){
    popup.classList.remove("open-popup");
  }
  function changecolor()
{
    document.body.style.backgroundColor=
        'rgb(' + Math.round(Math.random()* 545)+
        ','+ Math.round(Math.random()*239)+
        ','+ Math.round(Math.random()*255)+')'

}

  const ele=document.getElementById('x')
const type=document.getElementById('number')
let c = 0