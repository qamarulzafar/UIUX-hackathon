import { SofaDetails } from "@/app/Components/SofaDetails"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  return <SofaDetails id={id} />
}

