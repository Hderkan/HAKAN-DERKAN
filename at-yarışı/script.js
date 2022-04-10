const start = () => {
    const FinishLine = 1800 - 200;
    let horse1 = 20;
    let horse2 = 20;
    let horse3 = 20;
    let horse4 = 20;
    let horse5 = 20;
    let horse6 = 20;

    let startTimerInternal = setInterval(startTimer,200)
    function startTimer() {
        const randomNumber1 = Math.floor(Math.random() * 100)
        const randomNumber2 = Math.floor(Math.random() * 100)
        const randomNumber3 = Math.floor(Math.random() * 100)
        const randomNumber4 = Math.floor(Math.random() * 100)
        const randomNumber5 = Math.floor(Math.random() * 100)
        const randomNumber6 = Math.floor(Math.random() * 100)

        horse1 += randomNumber1;
        horse2 += randomNumber2;
        horse3 += randomNumber3;
        horse4 += randomNumber4;
        horse5 += randomNumber5;
        horse6 += randomNumber6;

        document.querySelectorAll("img")[0].style.left = horse1 + "px"
        document.querySelectorAll("img")[1].style.left = horse2 + "px"
        document.querySelectorAll("img")[2].style.left = horse3 + "px"
        document.querySelectorAll("img")[3].style.left = horse4 + "px"
        document.querySelectorAll("img")[4].style.left = horse5 + "px"
        document.querySelectorAll("img")[5].style.left = horse6 + "px"

        if (horse1 > FinishLine || horse2 > FinishLine || horse3 > FinishLine || horse4 > FinishLine || horse5 > FinishLine || horse6 > FinishLine ) {

            clearInterval(startTimerInternal);
            if (horse1>horse2 && horse1>horse3 && horse1>horse4 && horse1>horse5 && horse1>horse6) {
                setTimeout(() => {
                    alert("Şahlanmaz Kazandı");
                }, 1000);
            }
            if (horse2>horse1 && horse2>horse3 && horse2>horse4 && horse2>horse5 && horse2>horse6) {
                setTimeout(() => {
                    alert("Ak Şovalye at Kazandı");
                }, 1000);
            }
            if (horse3>horse2 && horse3>horse1 && horse3>horse4 && horse3>horse5 && horse3>horse6) {
                setTimeout(() => {
                    alert("Kara Şovalye at Kazandı");
                }, 1000);
            }
            if (horse4>horse2 && horse4>horse3 && horse4>horse1 && horse4>horse5 && horse4>horse6) {    
                setTimeout(() => {
                    alert("Merzifon Eşeği Kazandı");
                }, 1000);
               
            }
            if (horse5>horse2 && horse5>horse3 && horse5>horse4 && horse5>horse1 && horse5>horse6) {
                setTimeout(() => {
                    alert("Alev Bombası Kazandı");
                }, 1000);
            }
            if (horse6>horse2 && horse6>horse3 && horse6>horse4 && horse6>horse1 && horse6>horse5)
            setTimeout(() => {
                alert("Spartacus Kazandı");
            }, 1000);
            }

        }
        
        
    }

    




const btn = document.querySelector("button")
btn.addEventListener("click", start)