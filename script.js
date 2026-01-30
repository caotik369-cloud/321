document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const cardData = {
    number: document.getElementById("cardNumber").value,
    expiry: document.getElementById("expiry").value,
    cvv: document.getElementById("cvv").value
  };

  fetch("/pay", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cardData)
  });
});
