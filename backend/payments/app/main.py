from dotenv import load_dotenv
from fastapi import FastAPI
from routers import invoices, payments
from fastapi.middleware.cors import CORSMiddleware
import os 
from db.base import Base
from db.session import engine

load_dotenv() #for local development

Base.metadata.create_all(bind=engine)

origins = os.getenv("FRONTEND_ORIGINS", "http://localhost:4200").split(",")
def create_app() -> FastAPI:
    app = FastAPI(title="Payments Service", version="1.0.0")
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    app.include_router(invoices.router, prefix="/invoices", tags=["invoices"])
    app.include_router(payments.router, prefix="/payments", tags=["payments"])
    return app

app = create_app()