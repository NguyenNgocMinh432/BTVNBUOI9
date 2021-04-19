//dir 
// value
// console.log(input.value)
//eval


let arraynumber = document.getElementsByClassName("btn-number");
for (let i = 0; i < arraynumber.length; i++) {
    arraynumber[i].addEventListener('click', (a) => {
        // console.log(a.target.textContent);
        let result = document.getElementById("result").textContent;
        result += a.target.textContent;
        document.getElementById("result").innerHTML = result;
    });
}


// function zero() {
//     console.log(event.target.textContent);
//     let result = document.getElementById("result").textContent;
//     result += '0';
//     document.getElementById("result").innerHTML = result;
//     // console.log(document.getElementsByClassName("btn-number"));
// }

// function one() {
//     let result = document.getElementById("result").textContent;
//     result += `1`;
//     document.getElementById("result").innerHTML = result;
//     console.log(result);
//     // let result = document.getElementsByTagName("div");
//     // console.log(result);

// }
// function two() {
//     let result = document.getElementById("result").textContent;
//     result +=`2`;
//         document.getElementById("result").innerHTML = result;
//     console.log(result);

// }
// function three() {
//     let result = document.getElementById("result").textContent;
//     result +=`3`;
//     document.getElementById("result").innerHTML = result;
//     console.log(result);

// }
// function four() {
//     let result = document.getElementById("result").textContent;
//     result +=`4`;
//     document.getElementById("result").innerHTML = result;
//     console.log(result);

// }
// function five() {
//     let result = document.getElementById("result").textContent;
//     result +=`5`;
//     document.getElementById("result").innerHTML = result;
//     console.log(result);

// }
// function six() {
//     let result = document.getElementById("result").textContent;
//     result +=`6`;
//     document.getElementById("result").innerHTML = result;
//     console.log(result);

// }
// function seven() {
//     let result = document.getElementById("result").textContent;
//     result +=`7`;
//     document.getElementById("result").innerHTML = result;
//     console.log(result);

// }
// function eight() {
//     let result = document.getElementById("result").textContent;
//     result +=`8`;
//     document.getElementById("result").innerHTML = result;
//     console.log(result);

// }
// function nine() {
//     let result = document.getElementById("result").textContent;
//     result +=`9`;
//     document.getElementById("result").innerHTML = result;
//     console.log(result);

// }
function Delete() {

    document.getElementById("result").innerHTML = "";
    console.log(result);
}
// function cong() {
//     let result = document.getElementById("result").textContent;

//     result = result + " + ";

//     document.getElementById("result").innerHTML = result;

// }
// function nhan() {
//     let result = document.getElementById("result").textContent;

//     result = result + " * ";

//     document.getElementById("result").innerHTML = result;

// }
// function chia() {
//     let result = document.getElementById("result").textContent;

//     result = result + " / ";

//     document.getElementById("result").innerHTML = result;

// }
// function tru() {
//     let result = document.getElementById("result").textContent;

//     result = result + " - ";

//     document.getElementById("result").innerHTML = result;

// }
function bang() {
    let result = document.getElementById("result").textContent;



    document.getElementById("result").innerHTML = eval(result);
    console.log(eval(result));
}

let Array = document.getElementsByClassName(' action--operator');
for (let i = 0; i < Array.length; i++) {
    Array[i].addEventListener(`click`, (a) => {
        let result = document.getElementById("result").textContent;
        result += a.target.textContent;
        document.getElementById("result").innerHTML = result;
    });
}






