
/********************************** Local Storage 101 **********************************/

let header = document.getElementsByTagName( 'h1' )[0];
let input = document.getElementById( 'title' );
let submit = document.getElementById( 'submit' );
let reset = document.getElementById( 'reset' );
let siteName;

// nameSite sets the value of 'siteName' and displays it in the DOM
// LocalStorage.getItem gets an item called 'userInput' from local storage
// If 'userInput' does not exist in LocalStorage, 'siteName' is set to "Give me a name!"
let nameSite = () => {
  siteName = localStorage.getItem( 'userInput' ) || 'Give me a name!';
  header.innerHTML = siteName;
}

nameSite();

// LocalStorage.setItem creates an item in localStorage called 'userInput' and gives it the value of input.value
// If 'userInput' already exists in localStorage it just updates the value
submit.addEventListener("click", () => {
  localStorage.setItem( 'userInput', input.value );
  nameSite();
  input.value = "";
});

// localStorage.removeItem removes the item 'userInput' from localStorage
reset.addEventListener("click", () => {
  localStorage.removeItem( 'userInput' );
  nameSite();
})