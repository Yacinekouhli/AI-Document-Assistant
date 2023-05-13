# Base image
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy the required files to the working directory
COPY app app
COPY main.py .
COPY requirements.txt .
COPY .env .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the necessary port
EXPOSE 5000

# Run the application
CMD ["python", "main.py"]

