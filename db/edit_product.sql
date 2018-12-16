update product
set name = $(name), price = $(price), img = $(img)
where ID = $(id)
returning *