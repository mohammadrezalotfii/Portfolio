let navLinks = document.querySelectorAll(".nav_item a");
let navSelector = document.querySelectorAll(".nav_selector");

navLinks.forEach((link, i) => {
  navSelector.forEach((selector, j) => {
    link.addEventListener("mouseenter", () => {
      if (i === j) {
        selector.style.removeProperty("left");
        selector.style.right = "0%";
        selector.style.width = "100%";
      }
    });

    link.addEventListener("mouseleave", () => {
      if (i === j) {
        selector.style.removeProperty("right");
        selector.style.left = "0%";
        selector.style.width = "0%";
      }
    });
  });
});

function startCounter_2(elementID, endNum, baseSpeed, speedMap) {
  let num = 0;
  let speed = baseSpeed;
  let mapSpeed = speedMap;

  let counterNum = setInterval(function () {
    num += 1;
    if (elementID === "hsFl") {
      document.getElementById(elementID).innerText =
        num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]) + "K";
    } else {
      document.getElementById(elementID).innerText = num
        .toString()
        .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
    }

    let newSpeed = mapSpeed.find((range) => num <= range.max)?.speed;
    if (newSpeed && newSpeed !== speed) {
      speed = newSpeed;
      clearInterval(counterNum);
      counterNum = setInterval(arguments.callee, speed);
    }

    if (num >= endNum) {
      clearInterval(counterNum);
    }
  }, speed);
}

startCounter_2("hsEx", 3, 1100, [
  { max: 1, speed: 800 },
  { max: 2, speed: 1000 },
]);

startCounter_2("hsPr", 10, 600, [
  { max: 2, speed: 400 },
  { max: 3, speed: 300 },
  { max: 7, speed: 200 },
  { max: 8, speed: 300 },
  { max: 9, speed: 600 },
]);

startCounter_2("hsFl", 150, 60, [
  { max: 20, speed: 30 },
  { max: 30, speed: 25 },
  { max: 100, speed: 8 },
  { max: 140, speed: 30 },
  { max: 145, speed: 80 },
  { max: 150, speed: 160 },
]);

startCounter_2("hsCu", 20, 300, [
  { max: 4, speed: 200 },
  { max: 6, speed: 150 },
  { max: 14, speed: 100 },
  { max: 16, speed: 150 },
  { max: 18, speed: 300 },
]);

// این بخش برای سرویس ها هستش
let servSelector = document.getElementById("serv_selector");
let y = 0;
let flag = false;

let servItem = document.querySelectorAll(".serv_item");
servItem.forEach((item) => {
  servSelector.style.height = item.offsetHeight + "px";
  item.addEventListener("mouseenter", () => {
    servItem.forEach((el) => {
      el.classList.remove("serv_hover");
    });
    item.classList.add("serv_hover");
    y = item.offsetTop;

    servSelector.style.top = y + "px";
    flag = true;
  });

  item.addEventListener("mouseleave", () => {
    if (flag !== true) {
      item.classList.remove("serv_hover");
      flag = false;
    }
  });
});

// این بخش برای بخش نمونه کارهاست
let myJob = document.querySelectorAll(".my_job_item");
let myJobSelector = document.getElementById("myJobSelector");
myJob.forEach((item) => {
  item.addEventListener("click", () => {
    myJobSelector.style.height = `${item.offsetHeight}px`;
    myJobSelector.style.width = `${item.offsetWidth}px`;
    myJobSelector.style.left = `${item.offsetLeft}px`;
    myJobSelector.style.top = `${item.offsetTop}px`;

    myJob.forEach((elem) => elem.classList.remove("my_job_menu_active"));
    item.classList.add("my_job_menu_active");
  });
});
