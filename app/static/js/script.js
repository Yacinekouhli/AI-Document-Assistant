document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#uploadForm");
  const answerDiv = document.getElementById("answer");
  const spinner = document.getElementById("spinner");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Validate inputs
      const file = form.elements.file.files[0];
      const question = form.elements.question.value;
      if (!file || !question) {
          alert('Please upload a PDF and enter a question.');
          return;
      }

      const formData = new FormData(form);
      spinner.style.display = "block";  // Show the spinner

      fetch("/upload", {
          method: "POST",
          body: formData,
      })
          .then((response) => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.text();
          })
          .then((answer) => {
              spinner.style.display = "none";  // Hide the spinner
              answerDiv.innerHTML = answer;
          })
          .catch((error) => {
              spinner.style.display = "none";  // Hide the spinner
              console.error("Error:", error);
              alert("Something went wrong. Please try again.");
          });
  });
});

  