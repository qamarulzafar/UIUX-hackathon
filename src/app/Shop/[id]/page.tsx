import { SofaDetails } from "@/app/Components/SofaDetails"

interface ProductPageProps {
  params: { id: string }
}

export default function ProductPage({ params }: ProductPageProps) {
  return <SofaDetails id={params.id} />
}
