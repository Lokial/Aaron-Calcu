

function run1 (){ 
  document.form.total.value += "1";
}

function run2 (){
  document.form.total.value += "2";
}

function run3 (){
  document.form.total.value += "3";
}

function run4 (){
  document.form.total.value += "4";
}

function run5 (){
  document.form.total.value += "5";
}

function run6 (){
  document.form.total.value += "6";
}

function run7 (){
  document.form.total.value += "7";
}

function run8 (){
  document.form.total.value += "8";
}

function run9 (){
  document.form.total.value += "9";
}

function run0 (){
  document.form.total.value += "0";
}

function runPlus (){
  document.form.total.value += "+";
}

function runMinus (){
  document.form.total.value += "-";
}

function runMultiply (){
  document.form.total.value += "*";
}

function runDivide (){
  document.form.total.value += "/";
}

function compute (){
  if(document.form.total.value.length === 0)
  
  return;
  
  var evaluate = eval(document.form.total.value)
  document.form.total.value = evaluate;
  
}

function runClear(){
  document.form.total.value = "";
}

