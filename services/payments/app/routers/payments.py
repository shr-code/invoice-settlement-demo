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