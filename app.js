let sections = document.querySelectorAll(".section"); // sections
let controlBtns = document.querySelectorAll(".controls"); // sectBtns
let controlBtn = document.querySelectorAll(".control"); //sectBtn
let body = document.querySelector(".main-content"); // allSections

function transitionsPage() {
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
  theme.addEventListener("click", () => {
    let e = document.body;
    e.classList.toggle("light");
  });
}
transitionsPage();
