'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'

// Dynamically import OwlCarousel for client-side only
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false })

const compareItems = [
  {
    title: 'Product A vs Product B',
    desc: 'See detailed differences and choose wisely.',
    image: 'https://picsum.photos/id/100/300/200',
  },
  {
    title: 'Serum X vs Serum Y',
    desc: 'Which serum is best for your skin type?',
    image: 'https://picsum.photos/id/101/300/200',
  },
  {
    title: 'Cleanser P vs Cleanser Q',
    desc: 'Find the perfect cleanser for oily skin.',
    image: 'https://picsum.photos/id/102/300/200',
  },
  {
    title: 'Moisturizer X vs Y',
    desc: 'Compare hydration power and feel.',
    image: 'https://picsum.photos/id/103/300/200',
  },
]

const options = {
  margin: 16,
  responsiveClass: true,
  autoplay: false,
  nav: true,
  dots: false,
  loop: true,
  responsive: {
    0: {
      items: 1.2,
    },
    640: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
}

export default function CompareSlider() {
  return (
    <section className="px-4 md:px-12 py-10">
      <h2 className="text-xl font-semibold mb-6 text-center">Compare Products</h2>

      <OwlCarousel className="owl-theme" {...options}>
        {compareItems.map((item, i) => (
          <div
            key={i}
            className="bg-card border rounded-xl shadow-md p-4 h-full"
          >
            <div className="relative w-full h-36 mb-3 overflow-hidden rounded-md">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <h4 className="font-semibold text-base">{item.title}</h4>
            <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
            <button className="text-sm bg-primary text-white px-4 py-1.5 rounded-md hover:bg-primary/90 transition">
              Compare Now
            </button>
          </div>
        ))}
      </OwlCarousel>
    </section>
  )
}
