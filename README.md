# AI Document Assistant

The AI Document Assistant is an intelligent tool that utilizes AI technology to analyze and extract information from PDF documents. It provides users with the ability to upload PDF files and ask questions about the document content, receiving accurate and relevant answers powered by OpenAI's GPT-3.5 model.

## Key Features

- **PDF Processing**: The assistant extracts text content from uploaded PDF files, making it searchable and analyzable.
- **Question Answering**: Users can ask questions about the document content, and the AI-powered assistant provides accurate and informative answers.
- **User-Friendly Interface**: The web interface allows easy uploading of PDF files and entering questions, providing a seamless user experience.
- **Batch Processing**: The assistant supports batch processing, enabling users to analyze multiple PDF documents at once.
- **Responsive Design**: The application's responsive design ensures a consistent experience across various devices.

## Getting Started

To get started with the AI Document Assistant, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/ai-document-assistant.git`
2. Install the required dependencies: `pip install -r requirements.txt`
3. Set up your OpenAI API key by following the instructions in the Configuration section below.
4. Run the application: `python main.py`
5. Access the application in your web browser at `http://localhost:5000`.

## Configuration

To use the AI Document Assistant, you need to set up your OpenAI API key. Follow these steps:

1. Create an account on the OpenAI platform: [https://openai.com](https://openai.com)
2. Obtain your API key from the OpenAI dashboard.
3. Set the API key as an environment variable:
   - On Linux/Mac: `export OPENAI_API_KEY=<your-api-key>`
   - On Windows: `set OPENAI_API_KEY=<your-api-key>`

## License

This project is licensed under the [MIT License](LICENSE).

