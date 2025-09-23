import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { LoginPage } from './client'

async function login(formData) {
  'use server'
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  redirect('/tickets')
}

async function signup(formData) {
  'use server'
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  redirect('/')
}

export default async function PageLogin() {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (session) {
    redirect('/tickets')
  }

  return (
    <LoginPage loginAction={login} signupAction={signup} />
  )
}
