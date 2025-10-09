from fastapi import APIRouter
from db.db_access.invoice_access import get_all_invoices, create_invoice
from deps import SessionDep
from schemas.invoice_schema import InvoiceOut, InvoiceCreate
router = APIRouter()

@router.post("/", status_code=201, response_model=InvoiceOut)
def add_invoice(invoice: InvoiceCreate, db: SessionDep):
   return create_invoice(invoice.model_dump(exclude_unset=True), db)

@router.get("/", response_model=list[InvoiceOut])
def list_invoices(db: SessionDep):
    invoices = get_all_invoices(db)
    return invoices