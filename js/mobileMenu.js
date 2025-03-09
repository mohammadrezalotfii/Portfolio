let openMobileMenu = document.querySelectorAll(".open_mobile_menu");
let closeMobileMenu = document.querySelectorAll(".close_mobile_menu");
let dropDown = document.getElementById("dropDownMenu");

let test = false;

document.getElementById("mobileMenu").addEventListener("click", () => {
  if (test === false) {
    openMobileMenu.forEach((e) => {
      e.style.width = 0 + "px";
      e.style.left = 0 + "px";
    });
    closeMobileMenu.forEach((e) => {
      e.style.width = 60 + "%";
    });

    // dropDown.style.height = 100+"px";    
    test = true;
    return;
  }

  if (test === true) {
    openMobileMenu.forEach((e, i) => {
      if (i === 0) {
        e.style.width = 60 + "%";
      }else if(i === 1){
        e.style.width = 70 + "%";
      }else if(i === 2){
        e.style.width = 50 + "%";
      }
      e.style.left = 8 + "px";
    });
    closeMobileMenu.forEach((e) => {
      e.style.width = 0 + "%";
    });
    // dropDown.style.height = "fit-content";
    test = false;
    return;
  }
});
