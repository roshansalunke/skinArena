'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import CompareSlider from '@/components/Home/CompareSlider'
import ProductSection from '@/components/Home/ProductSection'

export default function Header() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <header className="w-full border-b bg-white dark:bg-[#121212] dark:border-[#1E1E1E] sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-wide">SKINVAULT</div>

          <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="font-medium text-black dark:text-white hover:text-primary">Home</a>
            <a href="#" className="hover:text-primary">Products</a>
            <a href="#" className="hover:text-primary">Compare</a>
            <a href="#" className="hover:text-primary">Blog</a>
            <a href="#" className="hover:text-primary">Skin Quiz</a>
            <a href="#" className="hover:text-primary">Profile</a>
          </nav>

          <div className="flex items-center gap-2">
            <Input placeholder="Search products..." className="w-[180px] md:w-[250px]" />
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {mounted ? (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />) : null}
            </Button>
          </div>
        </div>
      </header>


      <section className="relative rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat h-[250px] md:h-[300px] lg:h-[350px] mt-6"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-2">
            Unlock Your Skin's True Potential
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-xl mb-4">
            Discover personalized skincare solutions tailored for your unique needs.
            Explore, compare, and find your perfect match.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Button variant="secondary">Take Skin Quiz</Button>
            <Button variant="secondary">Start Comparing</Button>
          </div>
        </div>
      </section>

      {/* Google Ads Placeholder */}
      <div className="my-6 flex justify-center">
        {/* Replace this with your actual Google AdSense script */}
        <div className="w-full max-w-[728px] h-[90px] bg-gray-200 text-center flex items-center justify-center rounded-md">
          <span className="text-sm text-muted-foreground">Google Ad Placeholder (728x90)</span>
        </div>
      </div>

      <ProductSection />
      <CompareSlider />

    </>


  )
}
