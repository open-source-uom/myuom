import type React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    LayoutDashboard,
    Calendar,
    BookOpen,
    GraduationCap,
    Bell,
    MessageSquare,
} from 'lucide-react'

export function FeaturesSection() {
    return (
        <section className="py-20">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Platform Features
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Discover the tools and features designed to enhance your
                        academic experience
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={
                            <LayoutDashboard className="h-8 w-8 text-secondary" />
                        }
                        title="Personalized Dashboard"
                        description="Get a customized overview of your courses, assignments, and important dates all in one place."
                    />
                    <FeatureCard
                        icon={<Calendar className="h-8 w-8 text-secondary" />}
                        title="Academic Calendar"
                        description="Stay on top of important dates, deadlines, and events throughout the academic year."
                    />
                    <FeatureCard
                        icon={<BookOpen className="h-8 w-8 text-secondary" />}
                        title="Course Management"
                        description="Access course materials, submit assignments, and communicate with instructors."
                    />
                    <FeatureCard
                        icon={
                            <GraduationCap className="h-8 w-8 text-secondary" />
                        }
                        title="Degree Tracking"
                        description="Monitor your progress toward graduation and plan your academic journey."
                    />
                    <FeatureCard
                        icon={<Bell className="h-8 w-8 text-secondary" />}
                        title="Real-time Notifications"
                        description="Receive alerts about assignment deadlines, grade postings, and important announcements."
                    />
                    <FeatureCard
                        icon={
                            <MessageSquare className="h-8 w-8 text-secondary" />
                        }
                        title="Communication Tools"
                        description="Connect with professors, advisors, and fellow students through integrated messaging."
                    />
                </div>
            </div>
        </section>
    )
}

function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode
    title: string
    description: string
}) {
    return (
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
                <div className="mb-4">{icon}</div>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-base">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    )
}
