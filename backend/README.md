# Backend

This folder contains the source code for the FastAPI backend of the restaurant reservation application.

---

## Project Structure

- `README.md` – this documentation file  
- `.env` – environment variables file  
- `.env.template` – template for environment setup  
- `requirements.txt` – list of Python dependencies  

### db/

Module for database-related logic and configuration.

- `orm.py` – SQLAlchemy ORM models (database schema)  
- `alembic.ini` – Alembic configuration file  
- `migrations/` – folder for managing database schema migrations  
  - `README.md` – documentation for working with migrations  
  - `env.py` – Alembic environment setup  
  - `script.py.mako` – Alembic script template  
  - `versions/` – auto-generated migration files  

---

## Development Instructions

1. `cd backend`  
2. `python -m venv .venv`  
3. Activate virtual environment:  
    - Mac/Linux: `source .venv/bin/activate`  
    - Windows: `.\.venv\Scripts\activate.ps1`  
4. Install required Python packages:  
   `pip install -r requirements.txt`  
5. Add `DATABASE_URL` to environment variables (in `.env` file)  
6. Start your preferred MySQL server (e.g., via XAMPP)  
7. If MySQL does not start:
   - Open **Task Manager**
   - Find and end the `mysql` task
   - Restart XAMPP  
8. If Python process won’t stop or restart:
   - Open **Task Manager**
   - Find and end the `python` task
   - Start your backend again manually  

> Note: The server startup command is not yet included. You may add Uvicorn or another ASGI server later.

---

## Useful Links

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [SQLAlchemy Tutorial](https://docs.sqlalchemy.org/en/20/tutorial/index.html)
- [Alembic Documentation](https://alembic.sqlalchemy.org/)
- [Python Docstrings (PEP 257)](https://www.python.org/dev/peps/pep-0257/)
