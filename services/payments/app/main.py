from fastapi import FastAPI
from .routers import invoices, payments

def create_app() -> FastAPI:
    app = FastAPI(title="Payments Service", version="1.0.0")
    app.include_router(invoices.router, prefix="/invoices", tags=["invoices"])
    app.include_router(payments.router, prefix="/payments", tags=["payments"])
    return app

app = create_app()