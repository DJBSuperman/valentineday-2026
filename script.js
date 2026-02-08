const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

const noButtonTexts = [
    "Look well well",
    "nahh bae...Really?",
    "comot from that thinking!",
    "Are you normal??!!!",
    "wallahi stop pressing me",
    "<<<<------- this one",
    "icl... we should talk",
    "ill tell your dad",
    "fine! ill force you, this one dont work hahaha"
];

let noClickCount = 0;

// Yes button - goes to screen 2
yesBtn.addEventListener('click', function() {
    screen1.classList.remove('active');
    screen2.classList.add('active');
});

// No button - changes text each time clicked and makes Yes button bigger
noBtn.addEventListener('click', function() {
    if (noClickCount < noButtonTexts.length) {
        noBtn.textContent = noButtonTexts[noClickCount];
        noClickCount++;
        
        // Make the Yes button bigger each time No is clicked
        const currentSize = parseFloat(getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 3) + 'px';
        yesBtn.style.padding = '20px 55px';
        
        // Make the No button smaller
        const currentNoSize = parseFloat(getComputedStyle(noBtn).fontSize);
        if (currentNoSize > 12) {
            noBtn.style.fontSize = (currentNoSize - 1) + 'px';
        }
    } else {
        // After all texts are used, just change it to "Fine... Yes?"
        noBtn.textContent = "Fine... Yes? 😊";
    }
});
