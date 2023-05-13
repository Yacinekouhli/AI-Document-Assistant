from flask import Blueprint, request, render_template
from .services.pdf_service import PDFService
from .services.ai_service import AIService

bp = Blueprint('main', __name__)
pdf_service = PDFService()
ai_service = AIService()

@bp.route('/')
def index():
    return render_template('index.html')

@bp.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']
    if file.filename == '':
        return 'No selected file'
    if file:
        document = pdf_service.extract_text(file)
        question = request.form.get('question')
        answer = ai_service.ask(question, document)
        return render_template('result.html', answer=answer)

