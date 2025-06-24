'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Header() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
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
  )
}
