
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Orbit Prototype API",
    description="Backend API for the Orbit Prototype",
    version="0.1.0"
)

# Allow the React frontend to communicate with the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "Orbit Prototype API is running",
        "status": "online",
        "version": "0.1.0"
    }

@app.get("/api/health")
def health():
    return {
        "status": "healthy",
        "service": "orbit-prototype"
    }
