import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTASection() {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Log in to your student portal to access all your
                        academic resources, manage your courses, and connect
                        with the university community.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" asChild className="shadow-md dark:shadow-foreground/15">
                            <Link href="/login">Get Started</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="#">Need Help?</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
