function changeVocals (str) {
  //code di sini
  var newStr = ``;

  for (i=0;i<str.length;i++){
      if (str[i] == `a`){
          newStr += `b`;
      }
      else if (str[i] == `i`){
          newStr += `j`;
      }
      else if (str[i] == `u`){
        newStr += `v`;
      }
      else if (str[i] == `e`){
        newStr += `f`;
      }
      else if (str[i] == `o`){
        newStr += `p`;
      }
      else if (str[i] == `A`){
        newStr += `B`;
      }
      else if (str[i] == `I`){
        newStr += `J`;
      }
      else if (str[i] == `U`){
        newStr += `V`;
      }
      else if (str[i] == `E`){
        newStr += `F`;
      }
      else if (str[i] == `O`){
        newStr += `P`;
      }
      else{
        newStr += str[i];      }
      }
  return newStr;
}

function reverseWord (str) {
  //code di sini
  var balik = ``;
  for (i=str.length-1;i>=0;i--){
      balik += str[i];
  }
  return balik;
}

function setLowerUpperCase (str) {
  //code di sini
  var uppercase = str.toUpperCase();
  var display = ``;

  for (i=0;i<str.length;i++){
      if (str[i] == uppercase[i]){
          display += str[i].toLowerCase();
      }
      else{
          display += str[i].toUpperCase();
      }
  }
  return display;
}

function removeSpaces (str) {
  //code di sini
  var y = ``;
  for (i=0;i<str.length;i++){
      var check = false;
      if (str[i] == ` `){
        check = true;
      }
      if (!check){
          y += str[i];
      }
  }
  return y;
}

function passwordGenerator (name) {
  //code di sini
  if(name.length<5){
      return `Minimal karakter yang diinputkan adalah 5 karakter`
  }
  var display = changeVocals(name);
  display = reverseWord(display);
  display = setLowerUpperCase(display);
  display = removeSpaces(display);
  return display;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'