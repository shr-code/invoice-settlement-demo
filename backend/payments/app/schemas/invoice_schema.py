from pydantic import BaseModel
from datetime import datetime

class InvoiceOut(BaseModel):
    id: int
    amount: float

    class Config:
        from_attributes = True

class InvoiceCreate(BaseModel):
    amount: float
    user_id : int
    status: str