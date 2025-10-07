from fastapi import APIRouter, Depends
from pydantic import BaseModel

router = APIRouter()

class InvoiceCreate(BaseModel):
    id: int
    amount: float
    description: str = "INR"

@router.post("/", status_code=201)
def create_invoice(payload: InvoiceCreate):
    # TODO: call service layer & DB
    return {"id": 1, "message": "Invoice created", **payload.dict()}

@router.get("/")
def list_invoices():
    # TODO: call service layer & DB
    return [{"id": 1, "amount": 100, "description": "Test Invoice"}]