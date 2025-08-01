"""status_to_the_refresh_tokens_and_timezone

Revision ID: ae74ac702962
Revises: 1d381d49fd2d
Create Date: 2025-06-29 19:26:02.549987

"""

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'ae74ac702962'
down_revision = '1d381d49fd2d'
branch_labels = None
depends_on = None


def upgrade() -> None:
    """Použije sa pri `alembic upgrade ...`."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('refresh_tokens', sa.Column('status', sa.String(length=20), nullable=False))
    op.drop_index(op.f('ix_refresh_tokens_token'), table_name='refresh_tokens')
    op.create_index(op.f('ix_refresh_tokens_token'), 'refresh_tokens', ['token'], unique=False)
    op.drop_column('refresh_tokens', 'is_revoked')
    # ### end Alembic commands ###


def downgrade() -> None:
    """Použije sa pri `alembic downgrade ...`."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('refresh_tokens', sa.Column('is_revoked', mysql.TINYINT(display_width=1), autoincrement=False, nullable=False))
    op.drop_index(op.f('ix_refresh_tokens_token'), table_name='refresh_tokens')
    op.create_index(op.f('ix_refresh_tokens_token'), 'refresh_tokens', ['token'], unique=True)
    op.drop_column('refresh_tokens', 'status')
    # ### end Alembic commands ###
