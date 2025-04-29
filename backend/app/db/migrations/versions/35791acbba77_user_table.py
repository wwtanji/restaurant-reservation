"""User table

Revision ID: 35791acbba77
Revises:
Create Date: 2025-04-15 23:11:17.363188

"""

import sqlalchemy as sa
from alembic import op
from datetime import datetime


# revision identifiers, used by Alembic.
revision = "35791acbba77"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    """Create users table"""
    op.create_table(
        "users",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("role", sa.Integer(), nullable=False),
        sa.Column("first_name", sa.String(length=15), nullable=False, index=True),
        sa.Column("last_name", sa.String(length=15), nullable=False, index=True),
        sa.Column("user_email", sa.String(length=40), nullable=False, index=True),
        sa.Column("user_password", sa.String(length=80), nullable=False),
        sa.Column(
            "registered_at", sa.DateTime(), nullable=False, default=datetime.utcnow
        ),
        sa.Column("edited_at", sa.DateTime(), nullable=True),
    )


def downgrade() -> None:
    """Drop users table"""
    op.drop_table("users")
