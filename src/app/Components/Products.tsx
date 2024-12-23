'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { formatPrice } from "@/lib/utils"


interface Sofa {
  id: number
  title: string
  thumbnail: string
}

export function Products() {
  const [sofas, setSofas] = useState<Sofa[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSofas() {
      try {
        const res = await fetch('https://dummyjson.com/products/')
        console.log(res.status)
        if (!res.ok) {
          throw new Error('Failed to fetch sofas')
        }

        const data = await res.json()
        const furnitureItems = data.products.filter(
          (product: { category: string }) => product.category === 'furniture'
        )
        setSofas(furnitureItems)
        
        // setSofas(data.products)
      } catch{
        setError('Failed to load sofas. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchSofas()
  }, [])

  if (isLoading) {
    return <div className="text-center">Loading...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {sofas.map((sofa, index) => (
        <Link 
          key={index}  
          href={`../Shop/${sofa.id}`}
          className="group"
        >
          <div className="relative aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={sofa.thumbnail}
              alt={sofa.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <h3 className="text-sm font-medium text-gray-900">{sofa.title}</h3>
          <p className="mt-1 text-sm text-gray-500">
            Rs. {formatPrice(Math.floor(Math.random() * 100000) + 10000)}
          </p>
        </Link>
      ))}
    </div>
    </div>

  )
}
