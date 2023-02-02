var mainContainer = document.querySelector(".main-container");

// creating elements
var formContainer = document.createElement("section");
var form = document.createElement("form")
var formHead = document.createElement('div');
var formGroup = document.createElement('div');
var formSpe = document.createElement('div');
var formFoot = document.createElement('div');


var anchorTag = document.createElement('a');
var heading = document.createElement('h1');

var inputUser = document.createElement('input');
var inputPass = document.createElement('input');
var btnSign = document.createElement('button');

var inputCheck = document.createElement('input');
var spanInp = document.createElement('span');
var fgPass = document.createElement('a');

var textSpan = document.createElement('span');
var textAnchor = document.createElement('a');


// setting attributes
formContainer.setAttribute("class", "form-container");
formHead.setAttribute('class', 'form-head');
formGroup.setAttribute('class', 'form-group');
formSpe.setAttribute('class', 'form-spe');
formFoot.setAttribute('class', 'form-foot');
inputUser.setAttribute('type', 'text');
inputPass.setAttribute('type', 'text');
inputCheck.setAttribute('type', 'checkbox');
fgPass.setAttribute('href', '#');
inputUser.setAttribute('placeholder', 'Type Your Username');
inputPass.setAttribute('placeholder', 'Type Your Password');
textAnchor.setAttribute('href', '#');
// inputCheck.setAttribute('value', 'Remember Me');

// adding contents
anchorTag.innerHTML = "A"
heading.innerHTML = "Sign In";
btnSign.innerHTML = "Sign In";
textSpan.innerHTML = "Not a Member?";
textAnchor.innerHTML = "Create an Account";
fgPass.innerHTML = "Forgot Password?";
spanInp.innerHTML = "Remember Me";

// appending children
mainContainer.appendChild(formContainer);
formContainer.appendChild(form);
form.appendChild(formHead);
form.appendChild(formGroup);
form.appendChild(formSpe);
form.appendChild(formFoot);
form.appendChild(inputCheck);
form.appendChild(fgPass);

formHead.appendChild(anchorTag);
formHead.appendChild(heading);
formGroup.appendChild(inputUser);
formGroup.appendChild(inputPass);
formGroup.appendChild(btnSign);
formSpe.appendChild(inputCheck);
formSpe.appendChild(spanInp)
formSpe.appendChild(fgPass);
formFoot.appendChild(textSpan);
formFoot.appendChild(textAnchor);