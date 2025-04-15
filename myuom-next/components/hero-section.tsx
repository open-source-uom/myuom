import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
    ArrowRight,
    BookOpen,
    GraduationCap,
    Library,
    UtensilsCrossed,
} from 'lucide-react'

export function HeroSection() {
    return (
        <section className="relative overflow-hidden py-20 md:py-28">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/5 dark:to-transparent"></div>
            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            University of{' '}
                            <span className="text-primary dark:text-primary">
                                Macedonia
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Access your courses, resources, and campus services
                            all in one place. The student portal for a seamless
                            university experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                asChild
                                className="shadow-md dark:shadow-foreground/15"
                            >
                                <Link href="/login">
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="#services">Explore Services</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="bg-card shadow-lg dark:shadow-foreground/15 rounded-lg p-6 transform hover:-translate-y-1 transition-transform duration-300">
                                    <BookOpen className="h-8 w-8  mb-3 text-secondary" />
                                    <h3 className="font-semibold text-lg mb-1">
                                        Courses
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Access your course materials and
                                        assignments
                                    </p>
                                </div>
                                <div className="bg-card shadow-lg dark:shadow-foreground/15 rounded-lg p-6 transform hover:-translate-y-1 transition-transform duration-300">
                                    <UtensilsCrossed className="h-8 w-8 text-secondary mb-3" />
                                    <h3 className="font-semibold text-lg mb-1">
                                        restaurant
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        we always care of our student's helt,
                                        here is your dishes
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4 mt-8">
                                <div className="bg-card shadow-lg dark:shadow-foreground/15 rounded-lg p-6 transform hover:-translate-y-1 transition-transform duration-300">
                                    <GraduationCap className="h-8 w-8 text-secondary mb-3" />
                                    <h3 className="font-semibold text-lg mb-1">
                                        Graduation
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Find out your interest and build your
                                        future with us
                                    </p>
                                </div>
                                <div className="bg-card shadow-lg dark:shadow-foreground/15 rounded-lg p-6 transform hover:-translate-y-1 transition-transform duration-300">
                                    <Library className="h-8 w-8 text-secondary mb-3" />
                                    <h3 className="font-semibold text-lg mb-1">
                                        Library
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Access digital resources and research
                                        materials
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
