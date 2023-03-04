let sections = document.querySelectorAll(".section"); // sections
let controlBtns = document.querySelectorAll(".controls"); // sectBtns
let controlBtn = document.querySelectorAll(".control");  //sectBtn
let body = document.querySelector(".main-content");  // allSections

function transitionsPage () {
    // Remove All Active Classes 
    for (let i = 0; i < controlBtn.length; i++) {
        controlBtn[i].addEventListener("click", () => {
            for (let i = 0; i < controlBtn.length; i++) {
                controlBtn[i].classList.remove("activeC");
            }
            // Add Class active To Current Section
            controlBtn[i].classList.add("activeC");
        });
    }

    body.addEventListener("click", (e) => {
        let id = e.target.dataset.id;
        // Remove active Class From Sections
        if (id != undefined) {
            sections.forEach((section) => {
                section.classList.remove("activeS");
            });
            // Add active Class To The Current Section
            let sectionId = document.getElementById(id);
            sectionId.classList.add("activeS");
        }
    });

    // Theme
    let theme = document.querySelector(".theme");
    theme.addEventListener("click",() => {
        let e = document.body;
        e.classList.toggle("light")
    })
}
transitionsPage();



// Bouncing Animation For Letters
// let letters = Array.from(document.querySelectorAll(".right .imadName span"));
// // Loop In All Elements In The Array
// for(let i = 0; i < letters.length; i++) {
//     letters[i].onmouseover = function (e) {
//         // Add bounce Class To The Letter That I Hovered
//         e.target.classList.add("bounce");
//         // Remove bounce Class After 1s
//         setTimeout(function() {
//             letters[i].classList.remove('bounce');
//         }, 1000);
//     }
// }




// Text Animation
// let text = document.querySelector(".fancy");
// let strText = text.textContent;
// let splitText = strText.split("");
// text.textContent = "";
// for (let i = 0; i < splitText.length; i++) {
//     text.innerHTML += "<span>" + splitText[i] + "</span>";
// }
// let char = 0;
// let timer = setInterval(onTick, 100);
// function onTick() {
//     let span = text.querySelectorAll("span")[char];
//     span.classList.add("fade");
//     char++;
//     if (char === splitText.length) {
//         complete();
//         return;
//     }
// }
// function complete() {
//     clearInterval(timer);
//     timer = null;
// }