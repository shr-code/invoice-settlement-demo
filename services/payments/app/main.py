from fastapi import FastAPI
from .routers import invoices, payments
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:4200",               # Angular dev server
    "https://your-vercel-frontend.vercel.app"  # deployed frontend
]

def create_app() -> FastAPI:
    app = FastAPI(title="Payments Service", version="1.0.0")
    app.include_router(invoices.router, prefix="/invoices", tags=["invoices"])
    app.include_router(payments.router, prefix="/payments", tags=["payments"])
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    return app

app = create_app()