from flask import Blueprint, request, jsonify, render_template
from .services.pdf_service import PDFService
from .services.ai_service import AIService
import PyPDF2
import base64  # New import for encoding the PDF content
import io  # New import for handling byte streams

bp = Blueprint('main', __name__)
pdf_service = PDFService()
ai_service = AIService()

@bp.route('/')
def index():
    return render_template('index.html')

@bp.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify(error='No file part'), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify(error='No selected file'), 400
    if file:
        pdf_stream = file.stream.read()  # Read the PDF stream
        pdf_reader = PyPDF2.PdfReader(io.BytesIO(pdf_stream))  # PyPDF2 now requires PdfReader
        document = ""
        for page in pdf_reader.pages:
            document += page.extract_text()
        question = request.form.get('question')
        answer = ai_service.ask(question, document)

        # Convert the PDF stream to base64
        pdf_content = base64.b64encode(pdf_stream).decode('utf-8')

        # Return a JSON response with the answer and the PDF content
        return jsonify(answer=answer, pdf_content=pdf_content)





