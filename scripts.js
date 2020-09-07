(function () {
  let total = null;
  let b = null;
  document.querySelector(".host").innerHTML =
    "This site is hosted by " + location.hostname;

  let number = Number(document.querySelector(".total").innerHTML);

  const getArray = () => {
    console.log(total);
    total = document.querySelector(".total").innerText;
    console.log(total);
    b = total.split``.map((x) => +x);
    document.querySelector(".firstArray").innerHTML = b;
  };

  const filter = () => {
    document.querySelector(".secondArray").innerHTML = b.filter((num) => {
      return num > 1;
    });
  };

  const map = () => {
    document.querySelector(".secondArray").innerHTML = b.map((num) => {
      return (num += 1);
    });
  };

  const reduce = () => {
    document.querySelector(".secondArray").innerHTML = b.reduce(
      (total, num) => {
        return total + num;
      }
    );
  };

  const addNumber = (el) => {
    let newNumber = parseInt(document.querySelector(".numberInput").value);
    console.log(newNumber);
    const clickTarget = el.target.textContent;
    console.log(clickTarget);
    const targetFind = (index) => {
      return index == clickTarget;
    };
    let targetNumber = buttonArray.findIndex(targetFind);
    console.log("addNumber" + targetNumber);
    console.log(number);
    if (targetNumber == 0) {
      number += newNumber;
    } else if (targetNumber > 3) {
      console.log("minus");
      number -= numberArray[targetNumber];
    } else {
      number += numberArray[targetNumber];
    }
    console.log(number);
    document.querySelector(".total").innerHTML = number;
  };

  const numberArray = [0, 1, 10, 100, 1, 10, 100];

  const buttonArray = [
    "addNumber",
    "plus1",
    "plus10",
    "plus100",
    "minus1",
    "minus10",
    "minus100",
  ];

  for (i = 0; i < 7; i++) {
    const div = document.querySelector(".buttons");
    const button = document.createElement("button");
    button.innerText = buttonArray[i];
    button.classList.add(`.${buttonArray[i]}`);
    button.addEventListener("click", addNumber);
    div.appendChild(button);
  }
  const div = document.querySelector(".arrays");
  const button = document.createElement("button");
  button.innerText = "Get array";
  button.addEventListener("click", getArray);
  div.appendChild(button);

  document.querySelector(".filter").addEventListener("click", filter);
  document.querySelector(".map").addEventListener("click", map);
  document.querySelector(".reduce").addEventListener("click", reduce);
})();
