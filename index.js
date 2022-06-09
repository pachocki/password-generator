const characters = "'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()=?@~`\\.\';:+=^*_-0123456789';"
let output = document.getElementById("output");

//Get random number(value)
function randomValue(value){
    return Math.floor(Math.random()*value);
}

//generate Password
function generatePassword(){
    let length = document.getElementById("length").value;
    //change number of characters from range input
    document.getElementById("length-value").textContent=length;
    let str = "";
    //loop over characters and add to empty string (generate password)
    for(let i = 0 ; i<length ; i++){
        let random = randomValue(characters.length);
        str+=characters.charAt(random)
    }
    //Display password
    output.value=str;
}
//Function to pop up info at password is copied.
function tempAlert(msg,duration){
     const container = document.getElementById("container-box");
     let el = document.createElement("div");
     el.classList.add("copied")
     el.innerHTML = msg;
     setTimeout(function(){
      el.parentNode.removeChild(el);
      document.body.appendChild(container);
     },duration);
     document.body.appendChild(el);
     container.parentNode.removeChild(container);
}

generatePassword()

// Function to copy password
function copyClipboard(){
    output.select();
    document.execCommand('copy')
    tempAlert("Password copied",1000)

}

document.getElementById("random").addEventListener("click" , generatePassword);
document.getElementById("length").addEventListener("input" , generatePassword);
document.getElementById("copy").addEventListener("click" , copyClipboard);

