from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class PaymentNotify(BaseModel):
    external_id: str
    invoice_id: int
    amount: float
    status: str

@router.post("/webhook")
def payment_webhook(payload: PaymentNotify):
    # TODO: idempotency + queue work
    return {"received": True}

@router.get("/")
def list_payments():
    # TODO: call service layer & DB
    return [{"external_id": "PAY123", "invoice_id": 1, "amount": 100, "status": "completed"}]