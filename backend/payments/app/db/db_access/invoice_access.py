from deps import SessionDep
from db.models.invoice_model import Invoice

def get_all_invoices(db: SessionDep) -> list[Invoice]:
    return db.query(Invoice).all()

def create_invoice(invoice_data: dict, db: SessionDep) -> Invoice:
    new_invoice = Invoice(**invoice_data)
    db.add(new_invoice)
    db.commit()
    db.refresh(new_invoice)
    return new_invoice