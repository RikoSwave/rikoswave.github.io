function getDayDiscounts(day) {
  switch (day) {
    case "Monday":
      return {
        justJava: 10,
      };
    case "Tuesday":
      return {
        cafeauLait: 15
      };
    case "Wednesday":
      return {
        cafeauLait: 10
      };
    case "Thursday":
      return {
        icedCappuccino: 20
      };
    case "Friday":
      return {};
    default:
      return {
        justJava: 5
      };
  }
}

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
const discounts = getDayDiscounts(today);

function showPopup(message) {
  const popup = document.getElementById("discount-popup");
  const messageElement = document.getElementById("discount-message");
  const closeButton = document.getElementById("close-popup");

  messageElement.textContent = message;

  setTimeout(() => {
    popup.classList.add("show");
    closeButton.addEventListener("click", () => {
      popup.classList.remove("show");
    });
  }, 1000);
}

if (discounts.justJava) {
  showPopup(
    "Just Java is on sale for " + discounts.justJava + "% off today only!"
  );
} else if (discounts.icedCappuccino) {
  showPopup(
    "Iced Cappuccino is on sale for " +
      discounts.icedCappuccino +
      "% off today only!"
  );
} else if (discounts.cafeauLait) {
  showPopup(
    "Cafe Au Lait is on sale for " + discounts.cafeauLait + "% off today only!"
  );
} else {
  showPopup("No discounts today!");
}
