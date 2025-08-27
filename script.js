// heart count section
let count = 0;
const heartDisplay = document.getElementById("heart-count");
const hearts = document.getElementsByClassName('heart');

for (const heart of hearts) {
    heart.addEventListener("click", function () {
        count++;
        heartDisplay.innerText = count;
    });
}



// copy button section 
const copyCountDisplay = document.getElementById("copy-count");
const copyButtons = document.getElementsByClassName('copy-btn');
const helpLineNumbers = document.getElementsByClassName('number')

for (let i = 0; i < copyButtons.length; i++) {
    const copyBtn = copyButtons[i];
    const number = helpLineNumbers[i];

    copyBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(number.innerText).then(() => {
            alert("নাম্বার কপি হয়েছে : " + number.innerText);
            count++;
            copyCountDisplay.innerText = count;
        })
    });
}




// call button section 
const callButtons = document.getElementsByClassName('call-btn');
const subTitles = document.getElementsByClassName('card-sub-title');

for (const i = 0; i < callButtons.length; i++){
    const callBtn = callButtons[i];  
    const callTitle = subTitles[i];
    const number = helpLineNumbers[i];
    
    callBtn.addEventListener("click", function(){
        alert("Calling " + callTitle.innerText + " " + number.innerText)
    })
}





