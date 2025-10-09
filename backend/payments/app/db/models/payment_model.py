from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from db.session import Base

class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)
    invoice_id = Column(Integer, ForeignKey("invoices.id"), nullable=False)
    amount = Column(Float, nullable=False)
    status = Column(String, nullable=False)
    payment__reference = Column(String, unique=True, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    # invoice = relationship("Invoice", back_populates="payments")
