"""empty message

Revision ID: e350b1b3d712
Revises: 1426e320cc28
Create Date: 2022-11-20 23:11:28.864495

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e350b1b3d712'
down_revision = '1426e320cc28'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product', sa.Column('likes', sa.Integer(), nullable=True))
    op.add_column('product_user', sa.Column('likes', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('product_user', 'likes')
    op.drop_column('product', 'likes')
    # ### end Alembic commands ###
