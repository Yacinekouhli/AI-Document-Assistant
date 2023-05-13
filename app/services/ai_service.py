import os
import openai
class AIService:
    def __init__(self):
        openai.api_key = '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'
        
    def ask(self, prompt, document):
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": f'{document}'},
                {"role": "user", "content": f'{prompt}'}
            ]
        )
        return response['choices'][0]['message']['content']

