'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Filter } from 'lucide-react'

export default function ProductSection() {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const products = [
    {
      title: "Radiant Glow Serum",
      features: ["Hydration", "Anti-Aging"],
      price: "₹1299",
      image: "https://picsum.photos/id/101/300/200",
    },
    {
      title: "Acne Clear Face Wash",
      features: ["Acne", "Oily Skin"],
      price: "₹750",
      image: "https://picsum.photos/id/102/300/200",
    },
    {
      title: "Rice Water Toner",
      features: ["Pore Care", "Brightening"],
      price: "₹899",
      image: "https://picsum.photos/id/103/300/200",
    },
    {
      title: "Vitamin C Serum",
      features: ["Glowing", "Anti-Aging"],
      price: "₹999",
      image: "https://picsum.photos/id/104/300/200",
    },
    {
      title: "Green Tea Cleanser",
      features: ["Soothing", "Oily Skin"],
      price: "₹499",
      image: "https://picsum.photos/id/107/300/200",
    },
    {
      title: "Hyaluronic Moisturizer",
      features: ["Hydration", "Dry Skin"],
      price: "₹599",
      image: "https://picsum.photos/id/106/300/200",
    },
    {
      title: "Retinol Night Cream",
      features: ["Anti-Aging", "Repair"],
      price: "₹1499",
      image: "https://picsum.photos/id/108/300/200",
    },
    {
      title: "Sunscreen SPF 50",
      features: ["UV Protection", "Non-Greasy"],
      price: "₹799",
      image: "https://picsum.photos/id/109/300/200",
    },
    {
      title: "Charcoal Peel-Off Mask",
      features: ["Detox", "Pore Care"],
      price: "₹399",
      image: "https://picsum.photos/id/110/300/200",
    },
    {
      title: "Niacinamide Serum",
      features: ["Pore Minimizing", "Brightening"],
      price: "₹899",
      image: "https://picsum.photos/id/111/300/200",
    },
    {
      title: "Aloe Vera Gel",
      features: ["Soothing", "Hydration"],
      price: "₹299",
      image: "https://picsum.photos/id/112/300/200",
    },
  ]

  const FilterSidebar = () => (
    <div className="space-y-6">
      {[
        { title: 'Brand', options: ['Brand A', 'Brand B', 'Brand C'] },
        { title: 'Skin Type', options: ['Oily', 'Dry', 'Combination', 'Sensitive'] },
        { title: 'Concern', options: ['Acne', 'Anti-Aging', 'Pigmentation', 'Hydration'] },
        { title: 'Rating', options: ['5 Stars', '4 Stars', '3 Stars'] },
      ].map((section, index) => (
        <div key={index}>
          <h4 className="font-semibold mb-2">{section.title}</h4>
          <div className="space-y-1">
            {section.options.map((option, i) => (
              <label key={i} className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-primary" />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section className="flex flex-col md:flex-row px-4 md:px-12 py-8 gap-6 relative">
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Explore Our Products</h2>
        <Sheet open={mobileFilterOpen} onOpenChange={setMobileFilterOpen}>
          <SheetTrigger asChild>
            <Button size="sm" variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-4">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <FilterSidebar />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filter Sidebar */}
      <aside className="w-1/4 hidden md:block sticky top-24 h-fit bg-muted p-4 rounded-xl shadow-sm">
        <FilterSidebar />
      </aside>

      {/* Product Grid */}
      <div className="w-full md:w-3/4">
        <div className="hidden md:block mb-4">
          <h2 className="text-xl font-semibold">Explore Our Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-auto max-h-[calc(100vh-160px)] pr-2 scroll-thin">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-xl shadow-md p-3 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer group"
            >
              <div className="relative w-full h-48 rounded-md overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="mt-3 font-semibold text-lg">{product.title}</h4>
              <div className="text-sm text-muted-foreground flex flex-wrap gap-2 my-2">
                {product.features.map((feature, i) => (
                  <span
                    key={i}
                    className="bg-muted text-foreground text-xs px-2 py-0.5 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <p className="text-primary font-bold text-lg group-hover:text-orange-600 transition-colors duration-300">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
