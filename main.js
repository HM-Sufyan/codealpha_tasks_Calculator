const scrollToRight = () => {
  const calcDisplay = document.getElementById("calcDisplay");
  calcDisplay.scrollTo({
    left: calcDisplay.scrollWidth,
    behavior: "smooth",
  });
};

const one = () => {
  let displayText = document.getElementById("displayText");
  displayText.textContent += 1;
  scrollToRight();
};
const two = () => {
  let displayText = document.getElementById("displayText");
  displayText.textContent += 2;
  scrollToRight();
};
const three = () => {
  let displayText = document.getElementById("displayText");
  displayText.textContent += 3;
  scrollToRight();
};
const four = () => {
  let displayText = document.getElementById("displayText");
  displayText.textContent += 4;
  scrollToRight();
};
const five = () => {
  let displayText = document.getElementById("displayText");
  displayText.textContent += 5;
  scrollToRight();
};
const six = () => {
  let displayText = document.getElementById("displayText");
  displayText.textContent += 6;
  scrollToRight();
};
const seven = () => {
  let displayText = document.getElementById("displayText");
  displayText.textContent += 7;
  scrollToRight();
};
const eight = () => {
  let displayText = document.getElementById("displayText");
  displayText.textContent += 8;
  scrollToRight();
};
const nine = () => {
  let displayText = document.getElementById("displayText");
  displayText.textContent += 9;
  scrollToRight();
};
const zero = () => {
  let displayText = document.getElementById("displayText");
  displayText.textContent += 0;
  scrollToRight();
};

let dotCount = 0;
const dot = () => {
  if (dotCount == 0) {
    let displayText = document.getElementById("displayText");
    scrollToRight();
    displayText.textContent += `.`;
    dotCount++;
  }
};

const plus = () => {
  let displayText = document.getElementById("displayText");
  if (displayText.textContent.length >= 1) {
    displayText.textContent += "+";
    scrollToRight();
    dotCount = 0;
  }
};

const minus = () => {
  let displayText = document.getElementById("displayText");
  displayText.textContent += "-";
  scrollToRight();
  dotCount = 0;
};

const divide = () => {
  let displayText = document.getElementById("displayText");
  if (displayText.textContent.length >= 1) {
    displayText.textContent += "/";
    scrollToRight();
    dotCount = 0;
  }
};

const times = () => {
  let displayText = document.getElementById("displayText");
  if (displayText.textContent.length >= 1) {
    displayText.textContent += "*";
    dotCount = 0;
    scrollToRight();
  }
};

const Allclear = () => {
  let displayText = document.getElementById("displayText");
  displayText.textContent = "";
  dotCount = 0;
};

const removeLast = () => {
  let displayText = document.getElementById("displayText");
  let UpdateText;
  if (displayText.textContent.length > 0) {
    UpdateText = displayText.textContent.slice(0, -1);
  }
  displayText.textContent = UpdateText;
  if (!displayText.textContent.includes(".")) {
    dotCount = 0;
  }
};

const equal = () => {
  try {
    let displayText = document.getElementById("displayText");
    let a = displayText.textContent;
    let b = eval(a);
    if (displayText.textContent.includes("+")) {
      displayText.textContent = b;
    }
    if (displayText.textContent.includes("-")) {
      displayText.textContent = b;
    }
    if (displayText.textContent.includes("/")) {
      displayText.textContent = b;
    }
    if (displayText.textContent.includes("*")) {
      displayText.textContent = b;
    }
    dotCount = 0;
  } catch (error) {
    alert("Please Write Correct Expression");
  }
};
