import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function NewsSection() {
    const news = [
        {
            title: 'Fall Semester Registration Opens',
            date: 'April 10, 2025',
            category: 'Academic',
            excerpt:
                'Registration for the Fall 2025 semester is now open. Students can register through the student portal until May 15. Make sure to meet with your academic advisor before registering.',
        },
        {
            title: 'New Library Resources Available',
            date: 'April 5, 2025',
            category: 'Resources',
            excerpt:
                'The university library has added new digital resources for research in economics and business administration. Access these resources through your student portal.',
        },
        {
            title: 'Student Exchange Program Applications',
            date: 'April 1, 2025',
            category: 'Opportunities',
            excerpt:
                'Applications for the international student exchange program for the next academic year are now being accepted. Information sessions will be held next week.',
        },
    ]

    return (
        <section className="py-16 bg-muted/30">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        News & Announcements
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Stay updated with the latest university news and
                        important announcements
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {news.map((item, index) => (
                        <Card key={index} className="h-full flex flex-col">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <Badge
                                        variant="outline"
                                        className="text-secondary"
                                    >
                                        {item.category}
                                    </Badge>
                                    <span className="text-sm text-muted-foreground">
                                        {item.date}
                                    </span>
                                </div>
                                <CardTitle className="text-xl">
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription className="text-base">
                                    {item.excerpt}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="p-0 h-auto cursor-pointer">
                                    Read More{' '}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Button variant="outline" asChild>
                        <Link href="#">View All News</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
