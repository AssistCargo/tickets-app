import { redirect } from "next/navigation"
import { checkSession } from "@/lib/utils"
import InformesClient from "./client"


export default async function TicketManagementPage() {
  const session = await checkSession()

  if (!session) {
    redirect("/")
  }

  return <InformesClient />
}
