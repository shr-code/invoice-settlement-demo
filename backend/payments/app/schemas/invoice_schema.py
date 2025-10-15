from pydantic import BaseModel
from datetime import datetime
from typing import List
from schemas.payment_schema import PaymentOut
from schemas.receipt_schema import ReceiptOut

class InvoiceOut(BaseModel):
    id: int
    user_id: int
    amount: float
    status: str
    created_at: datetime
    total_paid: float
    balance: float
    payments: List[PaymentOut] = []
    receipts: List[ReceiptOut] = []

    class Config:
        from_attributes = True

class InvoiceCreate(BaseModel):
    amount: float
    user_id : int
    status: str