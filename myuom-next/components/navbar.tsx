'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Menu, X, ChevronDown, Search, User } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const toggleDropdown = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="rounded-md bg-primary p-1 text-primary-foreground">
                            <span className="text-xl font-bold text-secondary">
                                UoM
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <div className="relative">
                        <button
                            className="flex dark:text-foreground items-center gap-1 transition-colors"
                            onClick={() => toggleDropdown('academics')}
                        >
                            Academics{' '}
                            <ChevronDown
                                size={16}
                                className={`transition-transform ${activeDropdown === 'academics' ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {activeDropdown === 'academics' && (
                            <div className="absolute dark:text-foreground top-full mt-2 w-56 rounded-md bg-background shadow-lg border p-2">
                                <Link
                                    href="https://www.uom.gr/bso/orologio-programma"
                                    className="block px-4 py-2 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background rounded-md"
                                    target="_blank"
                                >
                                    Course Schedules
                                </Link>

                                <Link
                                    href="https://sis-portal.uom.gr/"
                                    className="block px-4 py-2 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background rounded-md"
                                    target="_blank"
                                >
                                    Student Portal
                                </Link>

                                <Link
                                    href="https://www.uom.gr/bso/programma-eksetaseon"
                                    className="block px-4 py-2 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background rounded-md"
                                    target="_blank"
                                >
                                    Exams Schedule
                                </Link>
                                <Link
                                    href="https://eudoxus.gr/"
                                    className="block px-4 py-2 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background rounded-md"
                                    target="_blank"
                                >
                                    Eudoxus
                                </Link>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background rounded-md"
                                    target="_blank"
                                >
                                    Academic professors
                                </Link>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background rounded-md"
                                    target="_blank"
                                >
                                    Fresheman
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <button
                            className="flex dark:text-foreground items-center gap-1 transition-colors"
                            onClick={() => toggleDropdown('services')}
                        >
                            Services{' '}
                            <ChevronDown
                                size={16}
                                className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {activeDropdown === 'services' && (
                            <div className="absolute dark:text-foreground top-full mt-2 w-48 rounded-md bg-background shadow-lg border p-2">
                                <Link
                                    href="https://www.uom.gr/bso/ta-nea-mas?tagid=7435"
                                    className="block px-4 py-2 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background rounded-md"
                                    target="_blank"
                                >
                                    Graduation
                                </Link>
                                <Link
                                    href="https://www.uom.gr/en/postgraduate"
                                    className="block px-4 py-2 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background rounded-md"
                                    target="_blank"
                                >
                                    Masters
                                </Link>
                                <Link
                                    href="https://www.lib.uom.gr/index.php/en/"
                                    className="block px-4 py-2 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background rounded-md"
                                    target="_blank"
                                >
                                    Library
                                </Link>
                                <Link
                                    href="https://openeclass.uom.gr/index.php?localize=en"
                                    className="block px-4 py-2 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background rounded-md"
                                    target="_blank"
                                >
                                    Open eClass
                                </Link>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background rounded-md"
                                    target="_blank"
                                >
                                    Restaurant
                                </Link>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background rounded-md"
                                >
                                    Maps
                                </Link>
                                <Link
                                    href="https://www.uom.gr/en/student-care"
                                    className="block px-4 py-2 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background rounded-md"
                                    target="_blank"
                                >
                                    Student care
                                </Link>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background rounded-md"
                                    target="_blank"
                                >
                                    Other Services
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link
                        href="#"
                        className="flex dark:text-foreground items-center gap-1 transition-colors"
                    >
                        News
                    </Link>
                    <Link
                        href="#"
                        className="flex dark:text-foreground items-center gap-1 transition-colors"
                    >
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-2">
                    {isSearchOpen ? (
                        <div className="hidden  md:flex items-center gap-2 border rounded-md px-2 py-1">
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-8"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-4 w-4 cursor-pointer"
                                onClick={() => setIsSearchOpen(false)}
                            >
                                <X size={16} />
                            </Button>
                        </div>
                    ) : (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hidden md:flex cursor-pointer"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search size={20} />
                        </Button>
                    )}

                    <ThemeToggle />

                    <Button asChild className="hidden md:inline-flex">
                        <Link href="/login">
                            <User size={18} className="mr-2" />
                            Login
                        </Link>
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t">
                    <div className="container py-4 space-y-4">
                        <div className="relative flex items-center">
                            <Search
                                size={18}
                                className="absolute left-3 text-muted-foreground"
                            />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="pl-10"
                            />
                        </div>

                        <div className="border-b pb-2">
                            <button
                                className="flex items-center justify-between w-full py-2"
                                onClick={() =>
                                    toggleDropdown('mobile-academics')
                                }
                            >
                                <span className="dark:text-zinc-400">
                                    Academics
                                </span>
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform ${activeDropdown === 'mobile-academics' ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {activeDropdown === 'mobile-academics' && (
                                <div className="pl-4 space-y-2 mt-2">
                                    <Link
                                        href="https://www.uom.gr/bso/orologio-programma"
                                        className="block py-1 dark:text-zinc-400"
                                        target="_blank"
                                    >
                                        Course Schedules
                                    </Link>

                                    <Link
                                        href="https://sis-portal.uom.gr/"
                                        className="block py-1 dark:text-zinc-400"
                                        target="_blank"
                                    >
                                        Student Portal
                                    </Link>

                                    <Link
                                        href="https://www.uom.gr/bso/programma-eksetaseon"
                                        className="block py-1 dark:text-zinc-400"
                                        target="_blank"
                                    >
                                        Exams Schedule
                                    </Link>
                                    <Link
                                        href="https://eudoxus.gr/"
                                        className="block py-1 dark:text-zinc-400"
                                        target="_blank"
                                    >
                                        Eudoxus
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block py-1 dark:text-zinc-400"
                                        target="_blank"
                                    >
                                        Academic professors
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block py-1 dark:text-zinc-400"
                                        target="_blank"
                                    >
                                        Fresheman
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="border-b pb-2">
                            <button
                                className="flex items-center justify-between w-full py-2"
                                onClick={() =>
                                    toggleDropdown('mobile-services')
                                }
                            >
                                <span className="dark:text-zinc-400">
                                    Services
                                </span>
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {activeDropdown === 'mobile-services' && (
                                <div className="pl-4 space-y-2 mt-2">
                                    <Link
                                        href="https://www.uom.gr/bso/ta-nea-mas?tagid=7435"
                                        className="block py-1 dark:text-zinc-400"
                                        target="_blank"
                                    >
                                        Graduation
                                    </Link>
                                    <Link
                                        href="https://www.uom.gr/en/postgraduate"
                                        className="block py-1 dark:text-zinc-400"
                                        target="_blank"
                                    >
                                        Masters
                                    </Link>
                                    <Link
                                        href="https://www.lib.uom.gr/index.php/en/"
                                        className="block py-1 dark:text-zinc-400"
                                        target="_blank"
                                    >
                                        Library
                                    </Link>
                                    <Link
                                        href="https://openeclass.uom.gr/index.php?localize=en"
                                        className="block py-1 dark:text-zinc-400"
                                        target="_blank"
                                    >
                                        Open eClass
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block py-1 dark:text-zinc-400"
                                        target="_blank"
                                    >
                                        Restaurant
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block py-1 dark:text-zinc-400"
                                    >
                                        Maps
                                    </Link>
                                    <Link
                                        href="https://www.uom.gr/en/student-care"
                                        className="block py-1 dark:text-zinc-400"
                                        target="_blank"
                                    >
                                        Student care
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block py-1 dark:text-zinc-400"
                                        target="_blank"
                                    >
                                        Other Services
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="border-b pb-2">
                            <Link
                                href="#"
                                className="block py-2 dark:text-zinc-400"
                            >
                                News
                            </Link>
                        </div>

                        <div className="border-b pb-2">
                            <Link
                                href="#"
                                className="block py-2 dark:text-zinc-400"
                            >
                                Contact
                            </Link>
                        </div>

                        <Button asChild className="w-full">
                            <Link href="/login">
                                <User size={18} className="mr-2" />
                                Login
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
