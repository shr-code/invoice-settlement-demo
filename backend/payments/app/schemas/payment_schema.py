from pydantic import BaseModel
class PaymentOut(BaseModel):
    id: int
    amount: float
    status: str

    class Config:
        from_attributes = True

