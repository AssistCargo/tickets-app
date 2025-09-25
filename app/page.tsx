import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { LoginPage } from './client'

// Tipo para las acciones del formulario
type FormAction = (formData: FormData) => Promise<void>

async function login(formData: FormData): Promise<void> {
  'use server'
  const supabase = await createClient()

  // Extraemos y validamos los datos del formulario
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Validación básica
  if (!email || !password) {
    redirect('/error')
    return
  }

  const data = {
    email,
    password,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  redirect('/tickets')
}

async function signup(formData: FormData): Promise<void> {
  'use server'
  const supabase = await createClient()

  // Extraemos y validamos los datos del formulario
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Validación básica
  if (!email || !password) {
    redirect('/error')
    return
  }

  const data = {
    email,
    password,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  redirect('/')
}

export default async function PageLogin(): Promise<React.ReactElement> {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (session) {
    redirect('/tickets')
  }

  return (
    <LoginPage loginAction={login} signupAction={signup} />
  )
}
