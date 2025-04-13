import Link from 'next/link'
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    Mail,
    Phone,
    MapPin,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-muted py-12 border-t">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-bold mb-4">
                            University of Macedonia
                        </h3>
                        <p className="text-muted-foreground mb-4">
                            156 Egnatia Street
                            <br />
                            Thessaloniki, 54636
                            <br />
                            Greece
                        </p>
                        <div className="flex space-x-4 mb-6">
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Facebook
                                    size={20}
                                    className="text-secondary"
                                />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Twitter size={20} className="text-secondary" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Instagram
                                    size={20}
                                    className="text-secondary"
                                />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Linkedin
                                    size={20}
                                    className="text-secondary"
                                />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Youtube size={20} className="text-secondary" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-medium">
                                Subscribe to our newsletter
                            </h4>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Your email"
                                    className="max-w-xs"
                                />
                                <Button
                                    variant={'outline'}
                                    className="cursor-pointer"
                                >
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Academic Programs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Admissions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Research
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    International
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    News & Events
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">
                            Student Resources
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Student Portal
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Library
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    E-Learning
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Career Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    IT Support
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Academic Calendar
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={45} className="text-secondary" />
                                <span className="text-muted-foreground">
                                    156 Egnatia Street, Thessaloniki, Greece
                                    54636
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-secondary" />
                                <span className="text-muted-foreground">
                                    +30 2310 891101
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-secondary" />
                                <span className="text-muted-foreground">
                                    info@uom.edu.gr
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 text-center text-muted-foreground">
                    <p>
                        &copy; {currentYear} University of Macedonia. All rights
                        reserved.
                    </p>
                    <div className="mt-2 flex justify-center space-x-6">
                        <Link
                            href="#"
                            className="text-sm hover:text-foreground transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-sm hover:text-foreground transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            className="text-sm hover:text-foreground transition-colors"
                        >
                            Accessibility
                        </Link>
                        <Link
                            href="#"
                            className="text-sm hover:text-foreground transition-colors"
                        >
                            Site Map
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
