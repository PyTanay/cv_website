// setting variables for tracking
var from = "";
var device = "";
if (window.location.search !== "") {
  console.log(window.location.search);
  var url1 = new URL(window.location.href);
  from = url1.searchParams.get("from");
  url1.search = "";
  history.replaceState({}, "", url1);
}
if (isMobileTablet() === true) {
  device = "mobile";
} else {
  device = "desktop";
}

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
    var obj1 = {
      from_name,
      reply_to,
      message,
      subject,
    };
    document.getElementsByTagName("form")[0].querySelector("button").innerText = "Sending...";
    emailjs
      .send("service_05hbnep", "template_ysum0ap", obj1)
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
    window.open("./assets/Tanay_resume_2022.pdf", "_blank");
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
  popArr.forEach((elem, index) => {
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
  });
};
var popArr = [".card-1", ".card-3", ".card-4"];
popArr.forEach((elem, index) => {
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
    document.querySelectorAll(".card-1-popup")[index].style.visibility = "visible";
    document.querySelectorAll(".card-1-popup")[index].style.transform = "translateY(0%)";
    document.querySelectorAll(".card-1-popup")[index].style.opacity = "1";
  }
});

// to make request to ready the movie app
window.onload = () => {
  setIntervalNow(makeRequest);
};

function setIntervalNow(fn) {
  fn();
  setInterval(fn, 1000 * 60 * 2);
}
function makeRequest() {
  fetch("https://movie-app-tanay.herokuapp.com/").then(() => {
    console.log("Movie-app active");
  });
  fetch("https://tinder-backend-tanay.herokuapp.com/tinder/card").then(() => {
    console.log("tinder-app active");
  });
}



// to log the users to database
var endpoint = "https://ipgeolocation.abstractapi.com/v1/?api_key=0bb92d50ecfe4f1caa93f4e0d90b74bb";
var req1 = new XMLHttpRequest();
req1.open("GET", endpoint, true);
req1.send(); //making api call to get the ip info about the visitor
req1.onreadystatechange = () => {
  if (req1.readyState === 4 && req1.status === 200) {
    var temp = JSON.parse(req1.responseText);
    var date = new Date();
    var res = {
      status: "success",
      country: temp.country,
      countryCode: temp.country_code,
      region: temp.region_iso_code,
      regionName: temp.region,
      city: temp.city,
      lat: temp.latitude,
      lon: temp.longitude,
      timezone: temp.timezone.name,
      isp: temp.connection.isp_name,
      org: temp.connection.organizaton_name,
      query: temp.ip_address,
      date: date.today(),
      time: date.timeNow(),
      from,
      device,
    };
    var req2 = new XMLHttpRequest();
    req2.open("POST", "https://tinder-backend-tanay.herokuapp.com/visitors", true);
    req2.setRequestHeader("Content-Type", "application/json");
    req2.send(JSON.stringify(res)); //making another ajax req to backend to log the info returned by API
    req2.onreadystatechange = function () {
      // Call a function when the state changes.
      if (req2.readyState === XMLHttpRequest.DONE && req2.status !== 201) {
        console.log("Visitor not logged!");
        console.log(req2);
      }
    };
  }
};

// For todays date;
Date.prototype.today = function () {
  return (
    (this.getDate() < 10 ? "0" : "") +
    this.getDate() +
    "/" +
    (this.getMonth() + 1 < 10 ? "0" : "") +
    (this.getMonth() + 1) +
    "/" +
    this.getFullYear()
  );
};

// For the time now
Date.prototype.timeNow = function () {
  return (
    (this.getHours() < 10 ? "0" : "") +
    this.getHours() +
    ":" +
    (this.getMinutes() < 10 ? "0" : "") +
    this.getMinutes() +
    ":" +
    (this.getSeconds() < 10 ? "0" : "") +
    this.getSeconds()
  );
};

// detect if user device is mobile
function isMobileTablet() {
  var check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}
