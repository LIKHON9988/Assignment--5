// ----------------------call button------------------------>>>>>>>>>>>>

const callButtons = document.querySelectorAll(".call-btn");

function getElement(id) {
  return document.getElementById(id);
}

for (let button of callButtons) {
  button.addEventListener("click", function () {
    const cardTitle = button.parentNode.parentNode.children[1].innerText;
    const callNumber = button.parentNode.parentNode.children[3].innerText;
    if (confirm(`📞 Calling ${cardTitle} ${callNumber}`)) {
      const cardTitle = button.parentNode.parentNode.children[1].innerText;
      const callNumber = button.parentNode.parentNode.children[3].innerText;

      // --------------------minus part------------------------------>>>>>>>
      const coinCountElement = getElement("coin-count");
      let coinCount = Number(coinCountElement.innerText);

      const cost = 20;

      if (coinCount < cost) {
        alert("❌ You have insufficient balance");
        return;
      }

      coinCount -= cost;
      coinCountElement.innerText = coinCount;

      // ------------------mobile minus part------------->>>>>>
      const coinCountElementMobile = getElement("coin-count-mobile");
      let coinCountMobile = Number(coinCountElementMobile.innerText);

      const cost2 = 20;

      if (coinCountMobile < cost2) {
        alert("❌ You have insufficient balance");
        return;
      }

      coinCountMobile -= cost2;
      coinCountElementMobile.innerText = coinCountMobile;

      // -----------------------history part---------------------->>>>>>>>

      const historyContainer = getElement("history-container");
      const newHistory = document.createElement("div");
      newHistory.innerHTML = `  <div class="flex justify-between items-center bg-[#FAFAFA] p-3 rounded-2xl mb-3">
                                   <h1><span class="font-semibold">${cardTitle}</span> <br>${callNumber}</h1>
                                    <p>${new Date().toLocaleTimeString()}</p>
                                 </div>`;
      historyContainer.append(newHistory);
    }
  });
}

// --------------clear button  -------------->>>>>>>>>

const clearButton = document.getElementById("clear-btn");
const callHistory = document.getElementById("history-container");

clearButton.addEventListener("click", function () {
  callHistory.innerHTML = "";
});

// -------------------------------heart icon part -------------------------->>>>>>>>>>>>

const heartButtons = document.querySelectorAll(".heart-btn");

function getElement(id) {
  return document.getElementById(id);
}

for (let heart of heartButtons) {
  heart.addEventListener("click", function () {
    const heartCountElement = getElement("nav-heart-count");
    let heartCount = Number(heartCountElement.innerText);
    heartCount++;
    heartCountElement.innerText = heartCount;
  });
}
// --------------Mobile heart part-------------->>>>>>>>>

const heartButtonMobile = document.querySelectorAll(".heart-btn");

function getElement(id) {
  return document.getElementById(id);
}

for (let heart of heartButtonMobile) {
  heart.addEventListener("click", function () {
    const heartCountMobile = getElement("heart-count-mobile");
    let heartCountOn = Number(heartCountMobile.innerText);
    heartCountOn++;
    heartCountMobile.innerText = heartCountOn;
  });
}

// --------------------------------copy button---------------------->>>>>>>>>

document.addEventListener("DOMContentLoaded", function () {
  const copyButtons = document.querySelectorAll(".copy-btn");

  // Navigation counters
  const copyCountDesktop = document.getElementById("copy-count");
  const copyCountMobile = document.getElementById("copy-count-mobile");

  copyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Find the parent card
      const card = button.closest(".parent-card");
      const numberElement = card.querySelector(".number-text");
      const numberText = numberElement.innerText;

      // Copy number to clipboard
      navigator.clipboard.writeText(numberText).then(() => {
        alert(`Number ${numberText} copied!`);
      });

      // Increase copy count in navbar (desktop + mobile)
      let currentDesktop = Number(copyCountDesktop.innerText);
      let currentMobile = Number(copyCountMobile.innerText);

      currentDesktop++;
      currentMobile++;

      copyCountDesktop.innerText = currentDesktop;
      copyCountMobile.innerText = currentMobile;
    });
  });
});
