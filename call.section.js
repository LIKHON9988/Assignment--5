const callButtons = document.querySelectorAll(".call-btn");

function getElement(id) {
  return document.getElementById(id);
}

for (let button of callButtons) {
  button.addEventListener("click", function () {
    if (confirm("call?")) {
      const cardTitle = button.parentNode.parentNode.children[1].innerText;
      const callNumber = button.parentNode.parentNode.children[3].innerText;

      // --------------------minus part------------------------------>>>>>>>
      const coinCountElement = getElement("coin-count");
      let coinCount = Number(coinCountElement.innerText);

      const cost = 20;

      if (coinCount < cost) {
        alert("You have insufficient balance");
        return;
      }

      coinCount -= cost;
      coinCountElement.innerText = coinCount;

      // -----------------------history part---------------------->>>>>>>>

      const historyContainer = getElement("history-container");
      const newHistory = document.createElement("div");
      newHistory.innerHTML = `  <div class="flex justify-between items-center bg-[#FAFAFA] p-3 rounded-2xl">
                                   <h1><span class="font-semibold">${cardTitle}</span> <br>${callNumber}</h1>
                                    <p>${new Date().toLocaleTimeString()}</p>
                                 </div>`;
      historyContainer.append(newHistory);
    }
  });
}
