# Pneumonia Detection App

A full-stack application for pneumonia detection using machine learning with chest X-ray images.

## Features

- 🔬 **AI-Powered Detection**: Uses a trained CNN model to analyze chest X-ray images
- 🖥️ **Modern Web Interface**: React frontend with TypeScript and Tailwind CSS
- 🚀 **Fast API Backend**: Python FastAPI backend with authentication
- 📊 **Detailed Reports**: Comprehensive analysis with confidence scores
- 🌐 **Multi-language Support**: Internationalization support
- 🎨 **Dark/Light Theme**: Toggle between themes
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Shadcn/ui components
- React Router for navigation
- i18next for internationalization

### Backend
- FastAPI (Python)
- SQLAlchemy for database ORM
- JWT authentication
- TensorFlow/Keras for ML model
- PIL for image processing

## Project Structure

```
├── frontend/          # React TypeScript frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts
│   │   ├── api/           # API client
│   │   └── utils/         # Utility functions
│   └── ...
├── backend/           # FastAPI backend
│   ├── app/
│   │   ├── routers/       # API routes
│   │   ├── models/        # Database models
│   │   ├── services/      # Business logic
│   │   ├── ml/            # ML model and prediction
│   │   └── utils/         # Utility functions
│   └── ...
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Python (v3.8 or higher)
- pip or conda for Python package management

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pneumonia-app
   ```

2. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start the Backend**
   ```bash
   cd backend
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

2. **Start the Frontend**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

## Usage

1. **Upload X-ray Image**: Navigate to the upload page and select a chest X-ray image
2. **AI Analysis**: The system will process the image using the trained CNN model
3. **View Results**: Get detailed analysis with confidence scores and predictions
4. **Generate Report**: Download comprehensive reports of the analysis

## API Endpoints

- `POST /api/scan/predict` - Upload and analyze X-ray image
- `GET /api/scan/history` - Get scan history
- `POST /auth/login` - User authentication
- `POST /auth/register` - User registration

## Model Information

The application uses a Convolutional Neural Network (CNN) trained on chest X-ray images to detect:
- Normal lungs
- Bacterial pneumonia
- Viral pneumonia

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

⚠️ **Important**: This application is for educational and research purposes only. It should not be used as a substitute for professional medical diagnosis. Always consult with qualified healthcare professionals for medical advice.

## Acknowledgments

- Thanks to the medical imaging community for providing datasets
- Built with modern web technologies and best practices
- Inspired by the need for accessible healthcare technology