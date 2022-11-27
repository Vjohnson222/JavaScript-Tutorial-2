// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
const words = [
  "You didn't die in your sleep",
  "Fresh air",
  "There are no toxic people in your whole spcae",
  "You're a Computer Scientist",
  "Your Boys are amazing and are fine",
  "You have no pain",
  "Your memory is in tact",
  "You work part-time 😊!!!",
  "You have no stress",
  "All of your bills are paid",
  "You have NO car trauble, None",
  "Everyone in your family is happy, healthy and fine... all employed",
  "Your youngest is in college",
  "You were smart enough to create this",
  "The weather is amazing",
  "Christmas is in 3 weeks 'Wow....'",
  "You survived so much from your past",
  "You know how to code",
  "You are so very creative",
  "You have no idea of the Blessings that are to come",
  "You are not struggling",
  "You're incredibly mature",
  "You are authentic in spirit",
  "You're happy",
];
const btn3 = document.getElementById("btn3");
const wordsHere = document.querySelector(".wordsHere");

btn3.addEventListener("click", function () {
  const randomWords = getRandomWords();

  document.body.style.backgroundColor = words[randomWords];
  wordsHere.textContent = words[randomWords];
});

function getRandomWords() {
  return Math.floor(Math.random() * words.length);
}

function showDate() {
  let date = new Date();
  let d = date.getDate();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let m = months[date.getMonth()];
  let y = date.getFullYear();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weekDay = days[date.getDay()];
  let currentDate = document.querySelector("#date");
  currentDate.innerHTML = `${m} ${d}, ${y} `;
}
showDate();
