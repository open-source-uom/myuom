export function StatsSection() {
    const stats = [
        { value: '15,000+', label: 'Students' },
        { value: '500+', label: 'Faculty Members' },
        { value: '200+', label: 'Courses' },
        { value: '95%', label: 'Graduate Employment' },
    ]

    return (
        <section className="py-12 bg-primary/5">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                                {stat.value}
                            </div>
                            <div className="text-muted-foreground">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
