
let startBtn = document.getElementById('play');
let stopBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', function () {
    console.log("start");
	showButton("pause");
    timer = true;
	stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
    showButton("play");
});

resetBtn.addEventListener('click', function () {
    timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
    document.getElementById("watch").innerHTML = "00:00:00:00";    
});

function stopWatch() {
    if (timer) {
        count++;
        
		if (count == 100) {
            second++;
			count = 0;
		}
        
		if (second == 60) {
            minute++;
			second = 0;
		}
        
		if (minute == 60) {
            hour++;
			minute = 0;
			second = 0;
		}
        
		let hrString = hour;
		let minString = minute;
		let secString = second;
		let countString = count;
        
		if (hour < 10) {
            hrString = "0" + hrString;
		}
        
		if (minute < 10) {
            minString = "0" + minString;
		}
        
		if (second < 10) {
            secString = "0" + secString;
		}
        
		if (count < 10) {
            countString = "0" + countString;
		}
        document.getElementById("watch").innerText= `${hrString}:${minString}:${secString}:${countString}`; 
		setTimeout(stopWatch, 10);
        
	}
}


function showButton(buttonKey) {
    console.log("change");
    const buttonToShow = buttonKey === "play" ? startBtn : stopBtn;
    const buttonToHide = buttonKey === "play" ? stopBtn : startBtn;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}