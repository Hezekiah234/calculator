
function allOne(val) {
    // display.innerHTML += ''
    document.getElementById('display').value += val;
}




// function plus( ){
//   var  num1=  (Number(document.getElementsByClassName("first-line").value))
//   var num2= (Number(document.getElementsByClassName("second-line").value))  
//   var answer = num1 + num2
// }

function myAnswer(){
  try{
    document.getElementById('display').value = eval(document.getElementById('display').value).toFixed(1);
   }catch (error){
    document.getElementById('display').value = '';
   }
  //  if (display === ""){
  //   document.getElementById('display').value += val;
  //  } else {
  //   document.getElementById('display').value =""
  //  }
//  if (display.value= true){
//   // display.innerHTML += value + ""
//   document.getElementById("one").value =''
//   document.getElementById("two").value =''
//   document.getElementById("three").value =''
//   document.getElementById("four").value =''
//   document.getElementById("five").value =''
//   document.getElementById("six").value =''
//   document.getElementById("seven").value =''
//   document.getElementById("eight").value =''
//   document.getElementById("nine").value =''
//   document.getElementById("zero").value =''
//   document.getElementById("division").value =''
//   document.getElementById("minus").value =''
//   document.getElementById("plus").value =''
//   document.getElementById("answer").value =''
//   document.getElementById("point").value =''
//  }

}

// var one = (Number(document.getElementById("first-line").value)) 
// var answer = one
