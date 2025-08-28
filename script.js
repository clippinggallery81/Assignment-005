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
const coinCountDisplay = document.getElementById("coins");
const coins = parseInt(coinCountDisplay.innerText);
let sum = 0;

for (let i = 0; i < callButtons.length; i++) {
    const callBtn = callButtons[i];
    const callTitle = subTitles[i];
    const number = helpLineNumbers[i];

    callBtn.addEventListener("click", function () {
        let coins = parseInt(coinCountDisplay.innerText); // প্রতি ক্লিকে নতুন coin মান পড়া হবে

        if (coins >= 20) {
            alert("📞 Calling " + callTitle.innerText + " " + number.innerText);

            let sum = coins - 20;
            coinCountDisplay.innerText = sum;
        } else {
            alert("❌ পর্যাপ্ত coin নেই! Call করার জন্য ন্যূনতম 20 coin প্রয়োজন।");
        }
    });
}






