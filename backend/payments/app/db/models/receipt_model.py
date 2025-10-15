from sqlalchemy import Column, Integer, String, ForeignKey, TIMESTAMP
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from db.session import Base

class Receipt(Base):
    __tablename__ = "receipts"

    id = Column(Integer, primary_key=True, index=True)
    invoice_id = Column(Integer, ForeignKey("invoices.id"), nullable=False)
    file_url = Column(String, nullable=False)
    uploaded_at = Column(TIMESTAMP, server_default=func.now())

    invoice = relationship("Invoice", back_populates="receipts")