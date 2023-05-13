document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const answerDiv = document.getElementById("answer");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const formData = new FormData(form);
      fetch("/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((answer) => {
          answerDiv.textContent = answer;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
  