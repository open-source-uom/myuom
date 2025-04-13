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

interface NewsCardProps {
    title: string
    date: string
    category: string
    excerpt: string
}

export default function NewsCard({
    title,
    date,
    category,
    excerpt,
}: NewsCardProps) {
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="font-roboto">
                        {category}
                    </Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-roboto">
                        {date}
                    </span>
                </div>
                <CardTitle className="font-poppins">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardDescription className="text-base font-roboto">
                    {excerpt}
                </CardDescription>
            </CardContent>
            <CardFooter>
                <Button variant="ghost" className="p-0 h-auto font-roboto">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    )
}
