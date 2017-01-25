console.log('treedbox.com');
//get elements
const text = document.querySelector('.text');
const radix = document.querySelector('.radix');
//get elements to set radix
const selector = document.querySelector('.selector');
const number = document.querySelector('.number');
//set default or receives selected element
let selected = 'text';
//set default or receives radix base
let base = 2;

//listener focus on text input element
  //set this text input element as selected
text.addEventListener('focus', () => selected = 'text');
//listener focus on radix input element
  //set this radix input element as selected
radix.addEventListener('focus', () => selected = 'radix');

//convert text to radix
function textToRadix(){
  //get each character as element array
  let binToText = [...text.value].map((e) =>{
    //get character UTF-16 code and convert to radix
    let code = e.charCodeAt(0).toString(base);
    return code;
  });
  //join binToText array with space between elements
  radix.value = binToText.join(' ');
}

//convert radix to text
function radixToText(){
   //split radix base on every space
   let arr = radix.value.split(' ');
   //get each radix base
    //convert to radix base
   let textToBin = arr.map((b) => parseInt(b, base));
   //spread array and set each char from char code
   text.value = String.fromCharCode(...textToBin);
}

//set radix base
function radixBase(e){
  //if target element contains class number
  e.target.classList.contains('number') ? (
    //set number value as radix base
    base = number.value,
    selector.value = ''
  ) : (
    //set selector value as radix base
    base = selector.value,
    number.value = ''
  );
  //if selected element is text input, call text to radix
  //else selected element is radix input, call radix to text
  selected == 'text' ? textToRadix() : radixToText();
}

//listener keyup on text input, call textToRadix function
text.addEventListener('keyup', textToRadix);
//listener keyup on radix input, call radixToText function
radix.addEventListener('keyup', radixToText);
//listener change on selector element
selector.addEventListener('change', radixBase);
//listener change on number input element
number.addEventListener('change', radixBase);
