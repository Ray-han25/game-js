// ------------------dom-------------
const playerno1 = document.querySelector(".playerno1")
const divOne = document.querySelector('.inputno1')

// -----------same--------------
const h2 = document.querySelector('h2');
const p = document.querySelector('p');

// ---------------donTow--------
const divTow = document.querySelector('.inputno2')
const playerno2 = document.querySelector(".playerno2")



const handelNo1 = () => {
   if (playerno1.value == "") {
      alert("Write something.")
   } else if (playerno1.value < 0 || playerno1.value > 10) {
      alert("You write 0-10")
   } else {

      divOne.style = 'display:none;'
      divTow.style = 'display:flex;'
      h2.innerHTML = "PLAYER NO. 2";
   }
}
const handelNoTow=()=>{
  
if (playerno2.value == "") {
      alert("Write something.")
   } else if(playerno2.value<0||playerno2.value>10){
      alert('you write somting')
   }  else if(playerno1.value==playerno2.value){
     p.innerHTML='The second player wins. 🏆'
   }else{
      p.innerHTML='The first player is winning. 🏆'
   }
}