"""Add_User_Table

Revision ID: cb85aeba4a18
Revises: 
Create Date: 2025-04-05 11:14:44.454479

"""

import sqlalchemy as sa
from alembic import op


# revision identifiers, used by Alembic.
revision = 'cb85aeba4a18'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    """Použije sa pri `alembic upgrade ...`."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('role', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=15), nullable=False),
    sa.Column('last_name', sa.String(length=15), nullable=False),
    sa.Column('user_email', sa.String(length=40), nullable=False),
    sa.Column('user_password', sa.String(length=80), nullable=False),
    sa.Column('registered_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_users_first_name'), 'users', ['first_name'], unique=False)
    op.create_index(op.f('ix_users_last_name'), 'users', ['last_name'], unique=False)
    op.create_index(op.f('ix_users_user_email'), 'users', ['user_email'], unique=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    """Použije sa pri `alembic downgrade ...`."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_users_user_email'), table_name='users')
    op.drop_index(op.f('ix_users_last_name'), table_name='users')
    op.drop_index(op.f('ix_users_first_name'), table_name='users')
    op.drop_table('users')
    # ### end Alembic commands ###
