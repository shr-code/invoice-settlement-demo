from datetime import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from db.session import Base
from sqlalchemy.orm import relationship

class Invoice(Base):
    __tablename__ = "invoices"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    amount = Column(Float, nullable=False)
    status = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    payments = relationship("Payment", back_populates="invoice")
    receipts = relationship("Receipt", back_populates="invoice")   

    @property
    def total_paid(self):
        return sum(payment.amount for payment in self.payments if payment.status == "completed")

    @property
    def balance(self):
        return float(self.amount) - float(self.total_paid)
    
    @property
    def computed_status(self):
        return "paid" if self.total_paid >= self.amount else "unpaid"