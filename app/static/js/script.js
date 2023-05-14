document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#uploadForm");
    const answerDiv = document.getElementById("answer");
    const spinner = document.getElementById("spinner");
    const pdfContainer = document.getElementById("pdf-container");

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
                return response.json();
            })
            .then((data) => {
                spinner.style.display = "none";  // Hide the spinner
                answerDiv.textContent = data.answer;

                // Retrieve the PDF content from the response
                const pdfContent = data.pdf_content;

                // Render the PDF using the PDF.js viewer
                const pdfViewer = document.getElementById("pdf-container");

                pdfjsLib.getDocument({ data: atob(pdfContent) }).promise
                    .then((pdf) => {
                        pdf.getPage(1).then((page) => {
                            const scale = 1.5;
                            const viewport = page.getViewport({ scale });
                            const canvas = document.createElement("canvas");
                            const context = canvas.getContext("2d");
                            canvas.height = viewport.height;
                            canvas.width = viewport.width;
                            page.render({
                                canvasContext: context,
                                viewport: viewport,
                            });
                            pdfViewer.innerHTML = "";
                            pdfViewer.appendChild(canvas);
                            pdfContainer.style.display = "block";  // Show the PDF container
                        });
                    })
                    .catch((error) => {
                        console.error("Error rendering PDF:", error);
                        alert("Something went wrong. Please try again.");
                    });
            })
            .catch((error) => {
                spinner.style.display = "none";  // Hide the spinner
                console.error("Error:", error);
                alert("Something went wrong. Please try again.");
            });
    });
});


  


  