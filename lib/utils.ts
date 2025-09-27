import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function checkSession() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    return false
  } else {
    return true
  }
}
