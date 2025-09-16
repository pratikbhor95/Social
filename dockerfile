# Use official Python image
FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
 && rm -rf /var/lib/apt/lists/*

# Copy requirements first (leverages Docker cache)
COPY requirements.txt .

# Install Python dependencies inside Docker environment
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy your application code (exclude venv)
COPY . .

# Expose port
EXPOSE 8000

# Start FastAPI using Gunicorn + Uvicorn
CMD ["gunicorn", "app.main:app", "-w", "4", "-k", "uvicorn.workers.UvicornWorker", "-b", "0.0.0.0:8000"]
# CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
