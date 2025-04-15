import type React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    BookOpen,
    GraduationCap,
    Calendar,
    User,
    CreditCard,
    Mail,
    Library,
    Laptop,
    HeadphonesIcon,
    FileText,
    Building,
    Utensils,
    Bus,
    Award,
    Briefcase,
} from 'lucide-react'

export function ServicesSection() {
    return (
        <section className="py-16 bg-background" id="services">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Student Services
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Access all the services you need throughout your
                        academic journey
                    </p>
                </div>

                <Tabs defaultValue="academic" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                        <TabsTrigger value="academic" className='h-11'>Academic</TabsTrigger>
                        <TabsTrigger value="administrative">
                            Administrative
                        </TabsTrigger>
                        <TabsTrigger value="resources">Resources</TabsTrigger>
                        <TabsTrigger value="campus">Campus Life</TabsTrigger>
                    </TabsList>

                    <TabsContent value="academic" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ServiceCard
                                title="Course Registration"
                                description="Register for courses and view your academic schedule"
                                icon={<BookOpen className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Grades & Transcripts"
                                description="Access your grades and download official transcripts"
                                icon={<GraduationCap className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Academic Calendar"
                                description="View important academic dates and deadlines"
                                icon={<Calendar className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Degree Progress"
                                description="Track your progress toward graduation requirements"
                                icon={<Award className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Course Catalog"
                                description="Browse available courses and their descriptions"
                                icon={<FileText className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Academic Advising"
                                description="Schedule appointments with academic advisors"
                                icon={<HeadphonesIcon className="h-6 w-6 text-secondary" />}
                            />
                        </div>
                    </TabsContent>

                    <TabsContent value="administrative" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ServiceCard
                                title="Student Profile"
                                description="Update your personal information and contact details"
                                icon={<User className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Financial Services"
                                description="View tuition fees, payments, and financial aid information"
                                icon={<CreditCard className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Communication"
                                description="Access your university email and messaging system"
                                icon={<Mail className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Student ID"
                                description="Request or replace your student identification card"
                                icon={<FileText className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Housing"
                                description="Apply for on-campus housing and manage your accommodation"
                                icon={<Building className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="International Students"
                                description="Resources and support for international students"
                                icon={<Award className="h-6 w-6 text-secondary" />}
                            />
                        </div>
                    </TabsContent>

                    <TabsContent value="resources" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ServiceCard
                                title="Library"
                                description="Search the library catalog and access digital resources"
                                icon={<Library className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="E-Learning"
                                description="Access online courses and learning materials"
                                icon={<Laptop className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="IT Support"
                                description="Get help with technical issues and software access"
                                icon={<HeadphonesIcon className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Career Services"
                                description="Access job listings, resume help, and career counseling"
                                icon={<Briefcase className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Research Resources"
                                description="Tools and databases for academic research"
                                icon={<FileText className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Accessibility Services"
                                description="Support for students with disabilities"
                                icon={<HeadphonesIcon className="h-6 w-6 text-secondary" />}
                            />
                        </div>
                    </TabsContent>

                    <TabsContent value="campus" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ServiceCard
                                title="Student Organizations"
                                description="Explore and join student clubs and organizations"
                                icon={<User className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Campus Events"
                                description="Find upcoming events, lectures, and activities"
                                icon={<Calendar className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Dining Services"
                                description="View meal plans, dining locations, and hours"
                                icon={<Utensils className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Transportation"
                                description="Campus shuttle schedules and parking information"
                                icon={<Bus className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Health Services"
                                description="Access medical and mental health resources"
                                icon={<HeadphonesIcon className="h-6 w-6 text-secondary" />}
                            />
                            <ServiceCard
                                title="Recreation"
                                description="Information about sports facilities and fitness programs"
                                icon={<Award className="h-6 w-6 text-secondary" />}
                            />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

function ServiceCard({
    title,
    description,
    icon,
}: {
    title: string
    description: string
    icon: React.ReactNode
}) {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-lg">{icon}</div>
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
