# TechIntel

TechIntel is an AI-powered technology intelligence platform that collects, analyzes, summarizes, and forecasts technology-related data. The system combines real-time data ingestion, machine learning forecasting, and AI-driven summarization to provide actionable insights from large volumes of information.

---

## Features

### Real-Time Data Ingestion
- Collects technology-related information from multiple sources.
- Processes and stores incoming data for analysis.

### AI-Powered Summarization
- Generates concise summaries from collected documents.
- Reduces information overload and improves readability.

### Forecasting Engine
- Uses ARIMA (AutoRegressive Integrated Moving Average) models.
- Predicts future trends based on historical data.
- Supports data-driven decision making.

### Data Storage
- Stores processed data locally using SQLite.
- Maintains historical records for forecasting and analysis.

### Interactive Dashboard
- React-based frontend for data visualization.
- Displays summaries, forecasts, and collected insights.

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Python

### Database
- SQLite

### Machine Learning
- ARIMA Forecasting

### AI/NLP
- Document Summarization

---

## Project Structure

```text
techintel/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── ai_summarizer.py
│   ├── data_generator.py
│   ├── main.py
│   ├── ml_engine.py
│   ├── real_ingester.py
│   ├── storage.py
│   ├── tech_intel.db
│   ├── requirements.txt
│   └── test_main.py
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/techintel.git
cd techintel
```

---

## Backend Setup

Create a virtual environment:

```bash
python -m venv venv
```

Activate environment:

### Windows

```bash
venv\Scripts\activate
```

### Linux/macOS

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
python main.py
```

---

## Frontend Setup

Navigate to frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## Forecasting Workflow

1. Collect data from sources.
2. Store and preprocess data.
3. Train ARIMA forecasting model.
4. Generate future predictions.
5. Display results through frontend dashboard.

---

## Future Enhancements

- Advanced forecasting models (Prophet, LSTM)
- User authentication
- Cloud database integration
- Real-time analytics dashboard
- API integration with external technology news sources
- Enhanced NLP summarization

---

## Screenshots

Add project screenshots here.

---

## Author

Anand Yadav

Bachelor of Engineering in Information Technology
