var arr2,
  barList = ["Chemical Engineer", "Process Designer", "Hobbyist Programmer"];
var elem1 = document.getElementById("changeText");

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const recFunc = () => {
  return new Promise((resolve2) => {
    for (let i = 0, p1 = Promise.resolve(); i < barList.length; i++) {
      p1 = p1.then(
        () =>
          new Promise((resolve1) => {
            for (let j = 0, p = Promise.resolve(); j <= barList[i].length * 2; j++) {
              p = p.then(
                () =>
                  new Promise((resolve) => {
                    setTimeout(function () {
                      if (j <= barList[i].length) {
                        arr2 = barList[i].slice(0, j);
                        elem1.setAttribute("value", arr2);
                        if (j == barList[i].length) {
                          document.getElementById("curser").setAttribute("class", "blink");
                          setTimeout(() => {
                            document.getElementById("curser").setAttribute("class", "");
                            resolve();
                          }, 300);
                        } else {
                          resolve();
                        }
                      } else {
                        arr2 = barList[i].slice(0, barList[i].length * 2 - j);
                        elem1.setAttribute("value", arr2);
                        resolve();
                        if (barList[i].length * 2 - j == 0) {
                          resolve1();
                          if (i == barList.length - 1) {
                            resolve2();
                          }
                        }
                      }
                    }, 60);
                  })
              );
            }
          })
      );
    }
  });
};
async function recRep() {
  await recFunc();
  recRep();
}
recRep();

//on click of hire me button scroll to contact page
function hireMe() {
  var elem = document.getElementById("contact");
  elem.scrollIntoView();
}
// another method for the typing effect!!

// var i=1,j=1;
// const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
// async function asyncForEach(array, callback) {
//     for (let index = 0; index < array.length; index++) {
//       await callback(array[index], index, array);
//     }
//   }
// async function recursiveRepetition(){
//     await asyncForEach(barList,async (elem)=>{
//         await waitFor(150);
//         await displayText(elem)
//     })
//     recursiveRepetition();
// }

// recursiveRepetition();
// function displayText(str1){
//     return new Promise(async (res,rej)=>{
//         var str2=[];
//         await asyncForEach(str1.split(""),async (elem,i)=>{
//             await waitFor(60);
//             str2.push(elem)
//             elem1.setAttribute('value',str2.join(""))
//             // if(i==str1.split('').len")gth-1) res();
//         })
//         document.getElementById('curser').setAttribute('class','blink')
//         await waitFor(600);
//         document.getElementById('curser').setAttribute('class','')
//         await asyncForEach(str1.split(""),async (elem,i)=>{
//             await waitFor(60);
//             str2.pop()
//             elem1.setAttribute('value',str2.join(""))
//             if(i==str1.split('').length-1) res();
//         })
//     })
// }

// ripples effect
// $(document).ready(function() {
// 	try {
// 		$('body').ripples({
// 			resolution: 600,
// 			dropRadius: 10, //px
// 			perturbance: 0.09,
// 		});
// 		$('main').ripples({
// 			resolution: 514,
// 			dropRadius: 10, //px
// 			perturbance: 0.04,
// 			interactive: true
// 		});
// 	}
// 	catch (e) {
// 		$('.error').show().text(e);
//     }
// })

// particles effect
particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

//color array to pick random color from
var colorList = [
  "#E53935f0",
  "#AD1457f0",
  "#6A1B9Af0",
  "#304FFEf0",
  "#1E88E5f0",
  "#006064f0",
  "#004D40f0",
  "#2E7D32f0",
  "#9E9D24f0",
  "#F57F17f0",
  "#BF360Cf0",
];
var cardList = document.querySelectorAll(".experience-card");
cardList.forEach((element) => {
  var random_color = colorList[Math.floor(Math.random() * colorList.length)];
  element.style.backgroundColor = random_color;
});

//for the navigation toggle button

document.querySelector(".nav-button").addEventListener("click", navClick);
var toggleState = true;
console.log(document.querySelector(".navbar"));
function navClick() {
  if (toggleState === true) {
    document.querySelector(".navbar").style.left = 0;
    document.querySelector(".nav-button").style.left = "250px";
    toggleState = false;
  } else {
    document.querySelector(".navbar").style.left = "-250px";
    document.querySelector(".nav-button").style.left = "0px";
    toggleState = true;
  }
}
document.querySelector(".main").addEventListener("click", closeNav);
function closeNav() {
  if (toggleState === false) {
    navClick();
  }
}
//to change the progressbar on about page
var incrementBar = (elem) => {
  var x1 = elem.getElementsByClassName("progress-bar")[0].getAttribute("data-value");
  var y = 0;
  var interval1 = setInterval(() => {
    elem.getElementsByClassName("progress-bar")[0].style.width = y + "%";
    elem.getElementsByClassName("percentage")[0].innerText = y + "%";
    y++;
    if (y > x1) clearInterval(interval1);
  }, 5);
};

//to increment the numbers next to icons
var incrementIcon = (elem) => {
  var x1 = elem.getElementsByTagName("h1")[0].getAttribute("data-value");
  var y = 0;
  var interval1 = setInterval(() => {
    elem.getElementsByTagName("h1")[0].innerText = y;
    y++;
    if (y > x1) clearInterval(interval1);
  }, 600 / x1);
};

//to spin the card on scroll into view
// var spinCard = (elem) => {
//   elem.classList.add("card-spin");
// };

//to execute all function on scroll when they appear on screen
(arr3 = []).length = 11;
arr3.fill(0);
window.onscroll = () => {
  var currentScroll = document.documentElement.scrollTop + window.innerHeight;

  // if (currentScroll > barList[0].offsetTop) {
  //   if (counter1 === 0) {
  //     incrementBar(barList[0]);
  //     counter1++;
  //   }
  // }
  var barList = document.querySelectorAll(".about-sub-3");
  barList.forEach((elem, index) => {
    currentScroll > elem.offsetTop && arr3[index] === 0 && (incrementBar(elem), arr3[index]++);
    currentScroll < elem.offsetTop && (arr3[index] = 0);
  });
  var iconList = document.querySelectorAll(".about-icon-group");
  iconList.forEach((elem, index) => {
    currentScroll > elem.offsetTop && arr3[index + 3] === 0 && (incrementIcon(elem), arr3[index + 3]++);
    currentScroll < elem.offsetTop && (arr3[index + 3] = 0);
  });
  // var cardList = document.querySelectorAll(".experience-card");
  // cardList.forEach((elem, index) => {
  //   var elemOffsetTop = window.pageYOffset + elem.getBoundingClientRect().top;
  //   currentScroll > elemOffsetTop && arr3[index + 7] === 0 && (elem.classList.add("card-spin"), arr3[index + 7]++);
  //   currentScroll < elemOffsetTop && (elem.classList.remove("card-spin"), (arr3[index + 7] = 0));
  // });
};

function findKeyframesRule(rule) {
  var ss = document.styleSheets;
  for (var i = 0; i < ss.length; ++i) {
    for (var j = 0; j < ss[i].cssRules.length; ++j) {
      // console.log(ss[i].cssRules[j].type);
      if (ss[i].cssRules[j].type == 7 && ss[i].cssRules[j].name == rule) {
        return ss[i].cssRules[j];
      }
    }
  }
  return null;
}
var keyFrames = findKeyframesRule("spincube2");
//on hover over spinning cube every card falls back to its original place
var spinCube = document.getElementsByClassName("cube-spin")[0];
var cardContainer = document.getElementsByClassName("experience-card-container")[0];
var hoverCounter = 0;
console.log(window.innerWidth);
if (window.innerWidth > 1300) {
  cardContainer.onmouseover = () => {
    hoverCounter === 0 && (stopSpin(), cubeOpen(), hoverCounter++);
  };
  cardContainer.onmouseleave = () => {
    startSpin();
    cubeClose();
    hoverCounter = 0;
  };
}

var stopSpin = () => {
  var currentPosition = window.getComputedStyle(spinCube).transform;
  // keyFrames.cssRules[0].cssText = `0%{transform:${currentPosition}}`;
  keyFrames.appendRule(`0%{
    transform:${currentPosition};
    -moz-transform:${currentPosition};
    -ms-transform:${currentPosition}

  }`);
  spinCube.style.animationName = "spincube2";
  spinCube.style.animationDuration = ".5s";
  spinCube.style.animationIterationCount = "initial";
};
var startSpin = () => {
  setTimeout(() => {
    spinCube.style.animationName = "spincube";
    spinCube.style.animationDuration = "12s";
    spinCube.style.animationIterationCount = "infinite";
  }, 1000);
};
var cubeOpen = () => {
  var cardList = document.querySelectorAll(".experience-card");
  // var currentPosition = [];
  cardList.forEach((elem, index) => {
    // console.log(elem.classList);
    // currentPosition.push(window.getComputedStyle(elem).transform);
    setTimeout(() => {
      elem.classList.remove(`open-card${index + 1}`);
      void elem.offsetWidth;
      elem.classList.add(`open-card${index + 1}`);
      elem.style.animationDirection = "normal";
    }, 500);
  });
};
var cubeClose = () => {
  var cardList = document.querySelectorAll(".experience-card");
  cardList.forEach((elem, index) => {
    var currentPosition = window.getComputedStyle(elem).transform;
    var keyFrames1 = findKeyframesRule(`opencard${index + 1}`);
    keyFrames1.deleteRule("100%");
    keyFrames1.appendRule(`100%{
    transform:${currentPosition};
    -moz-transform:${currentPosition};
    -ms-transform:${currentPosition}
  }`);
    elem.classList.remove(`open-card${index + 1}`);
    void elem.offsetWidth;
    elem.classList.add(`open-card${index + 1}`);
    elem.style.animationDirection = "reverse";
  });
};
