// heart count section
let heartCount = 0;
const heartDisplay = document.getElementById("heart-count");
const hearts = document.getElementsByClassName('heart');

for (const heart of hearts) {
    heart.addEventListener("click", function () {
        heartCount++;
        heartDisplay.innerText = heartCount;
    });
}



// copy button section 
const copyCountDisplay = document.getElementById("copy-count");
const copyButtons = document.getElementsByClassName('copy-btn');
const helpLineNumbers = document.getElementsByClassName('number')
let copyCount = 0;

for (let i = 0; i < copyButtons.length; i++) {
    const copyBtn = copyButtons[i];
    const number = helpLineNumbers[i];

    copyBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(number.innerText).then(() => {
            alert("নাম্বার কপি হয়েছে : " + number.innerText);
            copyCount++;
            copyCountDisplay.innerText = copyCount;
        })
    });
}




// call button section 
const callButtons = document.getElementsByClassName('call-btn');
const cardTitle = document.getElementsByClassName('card-title');
const subTitles = document.getElementsByClassName('card-sub-title');
const coinCountDisplay = document.getElementById("coins");
const coins = parseInt(coinCountDisplay.innerText);
const callHistoryContainer = document.getElementById("call-history");

let sum = 0;

for (let i = 0; i < callButtons.length; i++) {
    const callBtn = callButtons[i];
    const callTitle = subTitles[i];
    const number = helpLineNumbers[i];
    const title = cardTitle[i];

    callBtn.addEventListener("click", function () {
        let coins = parseInt(coinCountDisplay.innerText);

        if (coins >= 20) {
            alert("📞 Calling " + callTitle.innerText + " " + number.innerText);

            let sum = coins - 20;
            coinCountDisplay.innerText = sum;

            const date = new Date().toLocaleTimeString();

            const div = document.createElement("div");
            div.innerHTML = `
                <div class="flex justify-between items-center mt-4 bg-[#FAFAFA] rounded-[8px] p-5">
                    <div>
                        <h1 class="text-xl">${title.innerText}</h1>
                        <p class="text-gray-500 mt-2">${number.innerText}</p>
                    </div>
                    <p class="text-xl">${date}</p>
                </div>
            `
            callHistoryContainer.appendChild(div);


        } else {
            alert("❌ পর্যাপ্ত coin নেই! Call করার জন্য ন্যূনতম 20 coin প্রয়োজন।");
        }
    });
}


// clear button section 

const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", function(){
    callHistoryContainer.innerHTML = "";
})




