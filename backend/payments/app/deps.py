from fastapi import Depends
from sqlalchemy.orm import Session
from db.session import SessionLocal, engine
from typing import Generator
from typing_extensions import Annotated



def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

SessionDep = Annotated[Session, Depends(get_db)]