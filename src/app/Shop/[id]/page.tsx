import { SofaDetails } from "@/app/Components/SofaDetails"

export default function ProductPage({ params }: { params: { id: string } }) {
  return <SofaDetails id={params.id} />
}

