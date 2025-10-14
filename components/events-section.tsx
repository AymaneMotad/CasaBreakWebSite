export function ProgramSection() {
  const activities = [
    {
      title: "Guided Architecture Tours",
      category: "Daily",
      time: "10:00 AM & 3:00 PM",
      description: "Expert-led tours exploring Art Deco details and historical significance",
      image: "/architectural-tour-guide-cathedral-interior.jpg",
    },
    {
      title: "Photography Sessions",
      category: "Weekends",
      time: "Morning Light",
      description: "Capture the stunning interiors and architectural elements",
      image: "/photographer-cathedral-architecture-natural-light.jpg",
    },
    {
      title: "Cultural Exhibitions",
      category: "Monthly",
      time: "All Day",
      description: "Contemporary art exhibitions in dialogue with historic architecture",
      image: "/art-exhibition-contemporary-gallery-cathedral.jpg",
    },
    {
      title: "Classical Concerts",
      category: "Bi-weekly",
      time: "7:00 PM",
      description: "Acoustic performances in the cathedral's exceptional acoustics",
      image: "/classical-music-concert-cathedral-performance.jpg",
    },
    {
      title: "Heritage Workshops",
      category: "Weekly",
      time: "2:00 PM",
      description: "Learn about restoration techniques and architectural preservation",
      image: "/heritage-workshop-restoration-architecture.jpg",
    },
    {
      title: "Meditation & Reflection",
      category: "Daily",
      time: "8:00 AM",
      description: "Quiet contemplation in the serene morning atmosphere",
      image: "/peaceful-meditation-cathedral-morning-light.jpg",
    },
  ]

  return (
    <section id="programme" className="py-24 lg:py-32 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-20 animate-fade-in-up">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-warm-gray mb-6">Programme</p>
          <h2 className="font-serif font-semibold text-5xl lg:text-7xl text-charcoal leading-tight max-w-3xl text-balance">
            Activities & Experiences
          </h2>
          <p className="font-sans text-lg text-warm-gray mt-6 max-w-2xl leading-relaxed">
            Discover the cathedral through guided tours, cultural events, and immersive experiences designed for
            visitors and architecture enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-cream">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-sans text-xs tracking-widest uppercase text-forest">{activity.category}</p>
                  <p className="font-sans text-xs tracking-wide text-warm-gray">{activity.time}</p>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl text-charcoal font-semibold leading-tight group-hover:text-forest transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="font-sans text-sm text-warm-gray leading-relaxed">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-border animate-fade-in-up">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-charcoal font-semibold mb-4">Visitor Information</h3>
              <p className="font-sans text-sm text-warm-gray leading-relaxed">
                Open daily from 9:00 AM to 6:00 PM. Last entry at 5:30 PM. Closed on major holidays.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-charcoal font-semibold mb-4">Booking</h3>
              <p className="font-sans text-sm text-warm-gray leading-relaxed">
                Reserve your spot for guided tours and special events. Walk-ins welcome based on availability.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-charcoal font-semibold mb-4">Accessibility</h3>
              <p className="font-sans text-sm text-warm-gray leading-relaxed">
                Wheelchair accessible entrances and facilities. Audio guides available in multiple languages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
