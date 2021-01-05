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
    var prefix = "";
    if (
      elem.getElementsByTagName("p")[0].innerText === "Process Modifications" ||
      elem.getElementsByTagName("p")[0].innerText === "Datasheets Prepared"
    ) {
      prefix = ">";
    }
    elem.getElementsByTagName("h1")[0].innerText = prefix + y;
    y++;
    if (y > x1) clearInterval(interval1);
  }, 600 / x1);
};

//for the fadein effect
var fadeInBottom = (elem) => {
  elem.classList.remove("fade-in-bottom");
  void elem.offsetWidth;
  elem.classList.add("fade-in-bottom");
};

//to spin the card on scroll into view
// var spinCard = (elem) => {
//   elem.classList.add("card-spin");
// };

//to execute all function on scroll when they appear on screen
(arr3 = []).length = 16;
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
    currentScroll > elem.offsetTop && arr3[index + 4] === 0 && (incrementIcon(elem), arr3[index + 4]++);
    currentScroll < elem.offsetTop && (arr3[index + 4] = 0);
  });
  var educationList = document.querySelectorAll(".education-cluster");
  educationList.forEach((elem, index) => {
    currentScroll > elem.offsetTop && arr3[index + 8] === 0 && (fadeInBottom(elem), arr3[index + 8]++);
    currentScroll < elem.offsetTop && (arr3[index + 8] = 0);
  });

  //adding the fade-in effect for all page titles!!!
  var titleList = [".about", ".education", ".experience", ".contact"];
  titleList.forEach((elem, index) => {
    var title = document.querySelector(elem).querySelector("h1");
    currentScroll > title.offsetTop && arr3[index + 13] === 0 && (fadeInBottom(title), arr3[index + 13]++);
    currentScroll < title.offsetTop && (arr3[index + 13] = 0);
  });
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
var mouseOn = 0;
if (window.innerWidth > 1300) {
  cardContainer.onmouseover = () => {
    if (hoverCounter === 0) {
      stopSpin();
      cubeOpen();
      hoverCounter++;
      mouseOn = 1;
    }
  };
  cardContainer.onmouseleave = () => {
    if (animState === 0) {
      console.log("start spin");
      startSpin();
      cubeClose();
    }
    hoverCounter = 0;
    mouseOn = 0;
  };
}

//this method stops the spin on hover so cubeOpen method can kick-in
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

//this mehtod restarts the spin of the cube after cube is closed
var startSpin = () => {
  // setTimeout(() => {
  spinCube.style.animationName = "spincube";
  spinCube.style.animationDuration = "12s";
  spinCube.style.animationIterationCount = "infinite";
  // }, 1000);
};

//this method opens the cube made with the experience cards
var cubeOpen = () => {
  var cardList = document.querySelectorAll(".experience-card");
  cardList.forEach((elem, index) => {
    // setTimeout(() => {
    elem.classList.remove(`open-card${index + 1}`);
    void elem.offsetWidth;
    elem.classList.add(`open-card${index + 1}`);
    elem.style.animationDirection = "normal";
    // }, 500);
  });
};
//this method does closes the opened faces of the cube
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

//this code is to set the cube animation state so that that state can be used further in open / close cube methods to prevent glitches
var animState = 0;
document.querySelector(".experience-card").addEventListener("animationend", () => {
  animState = 0;
  if (document.querySelector(".experience-card").style.animationDirection === "normal") {
    if (mouseOn === 0) {
      cubeClose();
      startSpin();
    }
  }
});
document.querySelector(".experience-card").addEventListener("animationstart", () => {
  if (document.querySelector(".experience-card").style.animationDirection === "normal") {
    animState = 1;
  } else if (document.querySelector(".experience-card").style.animationDirection === "reverse") {
    animState = -1;
  } else {
    animState = 0;
  }
});

//this method send the mail using the data provided by user...
var sendMail = () => {
  event.preventDefault();
  var from_name = document.getElementById("name").value;
  var reply_to = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  //to show the tooltip if one of the field is left empty
  var tempArr = [from_name, reply_to, message];
  tempArr.forEach((elem, i) => {
    if (elem === "") {
      var x = document.getElementsByClassName("tooltiptext")[i];
      x.style.visibility = "visible";
      x.style.opacity = "1";
      setTimeout(() => {
        x.style.opacity = "0";
      }, 3000);
      setTimeout(() => {
        x.style.visibility = "hidden";
      }, 3300);
    }
  });

  //to submit  the actual data and send mail
  emailjs.init("user_qAekdPkUAYhQzaqcOgOmu");
  if (from_name !== "" && reply_to !== "" && message !== "") {
    var obj1 = { from_name, reply_to, message, subject };
    document.getElementsByTagName("form")[0].querySelector("button").innerText = "Sending...";
    emailjs
      .send("service_jjxtvl8", "template_ysum0ap", obj1)
      .then(() => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        document.getElementsByTagName("form")[0].querySelector("button").innerText = "Submit";
        document.querySelector("#email-sent").style.visibility = "visible";
        document.querySelector("#email-sent").style.opacity = 1;
        setTimeout(() => {
          document.querySelector("#email-sent").style.opacity = 0;
        }, 3000);
        setTimeout(() => {
          document.querySelector("#email-sent").style.visibility = "hidden";
        }, 4000);
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  }
};

//close the popup on button click
document.querySelector(".pop-up-close").onclick = closePopUp;
function closePopUp() {
  console.log("button clicked");
  var popup = document.querySelector("#email-sent");
  popup.style.opacity = 0;
  setTimeout(() => {
    popup.style.visibility = "hidden";
  }, 1000);
}
// window.open("./assets/Tanay_resume_2020.pdf", "_blank");
//download resume button
var downloadBtnList = document.querySelectorAll("#download");
downloadBtnList.forEach((elem) => {
  elem.onclick = () => {
    window.open("./assets/Tanay_resume_2020.pdf", "_blank");
  };
});

//random colors for  popup
var background = document.querySelectorAll(".background");
background.forEach((elem, index) => {
  var random_color = colorList[Math.floor(Math.random() * colorList.length)];
  elem.style.backgroundColor = random_color;
});

//on button click close the pop-up
document.querySelector(".layer").onclick = () => {
  popArr.forEach((elem,index)=>{
    var closeButton = document.querySelectorAll(".card-1-popup")[index].querySelector(".close-button");
    closePopup();
    function closePopup() {
      // closeButton4.parentElement.style.clipPath = "circle(0% at 95% 5%)";
      document.querySelector(".layer").style.visibility = "hidden";
      document.querySelector(".layer").style.opacity = "0";
      document.querySelectorAll(".card-1-popup")[index].style.visibility = "hidden";
      document.querySelectorAll(".card-1-popup")[index].style.transform = "translateY(20%)";
      document.querySelectorAll(".card-1-popup")[index].style.opacity = "0";
    }
  })
};
var popArr=[".card-1",".card-3",".card-4"]
popArr.forEach((elem,index)=>{
  var closeButton = document.querySelectorAll(".card-1-popup")[index].querySelector(".close-button");
  closeButton.onclick = closePopup;

  var cardPopup = document.querySelector(elem);
  cardPopup.querySelector(".btn").onclick = openPopup;


  function closePopup() {
    // closeButton4.parentElement.style.clipPath = "circle(0% at 95% 5%)";
    document.querySelector(".layer").style.visibility = "hidden";
    document.querySelector(".layer").style.opacity = "0";
    document.querySelectorAll(".card-1-popup")[index].style.visibility = "hidden";
    document.querySelectorAll(".card-1-popup")[index].style.transform = "translateY(20%)";
    document.querySelectorAll(".card-1-popup")[index].style.opacity = "0";
  }
  function openPopup() {
    // closeButton4.parentElement.style.clipPath = "circle(150% at 95% 5%)";
    document.querySelector(".layer").style.visibility = "visible";
    document.querySelector(".layer").style.opacity = "1";
    console.log(document.querySelectorAll(".card-1-popup")[index])
    document.querySelectorAll(".card-1-popup")[index].style.visibility = "visible";
    document.querySelectorAll(".card-1-popup")[index].style.transform = "translateY(0%)";
    document.querySelectorAll(".card-1-popup")[index].style.opacity = "1";
  }
})
