function zero(){
  document.getElementById("result").value += "0";
}
function one(){
  document.getElementById("result").value += "1";
  }
  function two(){
  document.getElementById("result").value += "2";
  }
  function three(){
  document.getElementById("result").value += "3";
  }
  function four(){
  document.getElementById("result").value += "4";
  }
  function five(){
  document.getElementById("result").value += "5";
  }
  function six(){
  document.getElementById("result").value += "6";
  }
  function seven(){
  document.getElementById("result").value += "7";
  }
  function eight(){
  document.getElementById("result").value += "8";
  }
  function nine(){
  document.getElementById("result").value += "9";
  }
  function dzero(){
  document.getElementById("result").value += "00";
  }
  function plus(){
  document.getElementById("result").value += "+";
  }
  function minus(){
  document.getElementById("result").value += "-";
  }
  function times(){
  document.getElementById("result").value += "*";
  }
  function devide(){
  document.getElementById("result").value += "/";
  }
  function mod(){
  document.getElementById("result").value += "%";
  }
  function equal(){
  result = document.querySelector('#result').value;
  document.querySelector('#result').value = eval(result);

}
function clr(){
  document.getElementById("result").value = "";
  }
