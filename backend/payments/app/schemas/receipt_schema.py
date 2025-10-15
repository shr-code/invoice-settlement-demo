from pydantic import BaseModel
class ReceiptOut(BaseModel):
    id: int
    file_url: str

    class Config:
        from_attributes = True