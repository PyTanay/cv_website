var arr2,
  arr1 = ["Chemical Engineer", "Process Designer", "Hobbyist Programmer"];
var elem1 = document.getElementById("changeText");

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const recFunc = () => {
  return new Promise((resolve2) => {
    for (let i = 0, p1 = Promise.resolve(); i < arr1.length; i++) {
      p1 = p1.then(
        () =>
          new Promise((resolve1) => {
            for (let j = 0, p = Promise.resolve(); j <= arr1[i].length * 2; j++) {
              p = p.then(
                () =>
                  new Promise((resolve) => {
                    setTimeout(function () {
                      if (j <= arr1[i].length) {
                        arr2 = arr1[i].slice(0, j);
                        elem1.setAttribute("value", arr2);
                        if (j == arr1[i].length) {
                          document.getElementById("curser").setAttribute("class", "blink");
                          setTimeout(() => {
                            document.getElementById("curser").setAttribute("class", "");
                            resolve();
                          }, 300);
                        } else {
                          resolve();
                        }
                      } else {
                        arr2 = arr1[i].slice(0, arr1[i].length * 2 - j);
                        elem1.setAttribute("value", arr2);
                        resolve();
                        if (arr1[i].length * 2 - j == 0) {
                          resolve1();
                          if (i == arr1.length - 1) {
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

// another method for the typing effect!!

// var i=1,j=1;
// const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
// async function asyncForEach(array, callback) {
//     for (let index = 0; index < array.length; index++) {
//       await callback(array[index], index, array);
//     }
//   }
// async function recursiveRepetition(){
//     await asyncForEach(arr1,async (elem)=>{
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

// window.onresize = () => {
//   if (window.innerWidth % 10 == 0) {
//     window.reload();
//     // document.getElementById("particles-js").innerHTML = "";
//     // particlesJS.load("particles-js", "assets/particles.json", function () {
//     //   console.log("callback - particles.js config loaded");
//     // });
//   }
// };
// to change the numbers or animate on scroll to certain elemet
// window.onscroll = myFunction;
// var counter = 0;
// function myFunction() {
//   if (counter == 0) {
//     if (window.pageYOffset > 700) {
//       console.log("hello");
//       counter++;
//     }
//   }
// }

//color array to pick random color from
var colorList = [
  "#E5393560",
  "#AD145760",
  "#6A1B9A60",
  "#304FFE60",
  "#1E88E560",
  "#00606460",
  "#004D4060",
  "#2E7D3260",
  "#9E9D2460",
  "#F57F1760",
  "#BF360C60",
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
var counter1 = 0,
  counter2 = 0,
  counter3 = 0;
var incrementBar = (elem) => {
  if (counter1 === 0) {
    if (document.documentElement.scrollTop + window.innerHeight > elem.offsetTop) {
      // console.log(parseInt(document.querySelectorAll(".progress-bar")[0].style.width.replace("%", "")));
      console.log(elem.children[0]);
      x1 = parseInt(elem.children[0].style.width.replace("%", ""));
      var y = 0;
      console.log(elem.parentElement.getElementsByClassName("percentage"));
      var interval1 = setInterval(() => {
        elem.children[0].style.width = y + "%";
        // document.querySelectorAll(".percentage")[0].innerText = y + "%";
        y++;
        if (y > x1) clearInterval(interval1);
      }, 10);
      counter1++;
    }
  }
};
window.onscroll = () => {
  // if (counter1 === 0) {
  // console.log(document.documentElement.scrollTop, document.querySelectorAll(".progress")[0].offsetTop);
  // console.log(document.querySelectorAll(".percentage")[0].innerText);
  incrementBar(document.querySelectorAll(".progress")[0]);
  //   if (document.documentElement.scrollTop + window.innerHeight > document.querySelectorAll(".progress")[0].offsetTop) {
  //     // console.log(parseInt(document.querySelectorAll(".progress-bar")[0].style.width.replace("%", "")));
  //     x1 = parseInt(document.querySelectorAll(".progress-bar")[0].style.width.replace("%", ""));
  //     var y = 0;
  //     var interval1 = setInterval(() => {
  //       document.querySelectorAll(".progress-bar")[0].style.width = y + "%";
  //       document.querySelectorAll(".percentage")[0].innerText = y + "%";
  //       y++;
  //       if (y > x1) clearInterval(interval1);
  //     }, 10);
  //     counter1++;
  //   }
  // }

  // if (counter2 === 0) {
  //   if (document.documentElement.scrollTop + window.innerHeight > document.querySelectorAll(".progress")[1].offsetTop) {
  //     x2 = parseInt(document.querySelectorAll(".progress-bar")[1].style.width.replace("%", ""));
  //     var z = 0;
  //     var interval2 = setInterval(() => {
  //       document.querySelectorAll(".progress-bar")[1].style.width = z + "%";
  //       document.querySelectorAll(".percentage")[1].innerText = z + "%";
  //       z++;
  //       if (z > x2) clearInterval(interval2);
  //     }, 10);
  //     counter2++;
  //   }
  // }
  // if (counter3 === 0) {
  //   if (document.documentElement.scrollTop + window.innerHeight > document.querySelectorAll(".progress")[2].offsetTop) {
  //     x2 = parseInt(document.querySelectorAll(".progress-bar")[2].style.width.replace("%", ""));
  //     var z2 = 0;
  //     var interval3 = setInterval(() => {
  //       document.querySelectorAll(".progress-bar")[2].style.width = z2 + "%";
  //       document.querySelectorAll(".percentage")[2].innerText = z2 + "%";
  //       z++;
  //       if (z2 > x2) clearInterval(interval3);
  //     }, 10);
  //     counter3++;
  //   }
  // }
};
