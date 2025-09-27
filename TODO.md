## Script para asignar rol admin al usuario 

UPDATE auth.users 
SET raw_app_meta_data = jsonb_set(
  COALESCE(raw_app_meta_data, '{}'), 
  '{rol}', 
  '"admin"'
)
WHERE email = 'arieloscar2000@gmail.com';

