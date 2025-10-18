import { Helmet } from "react-helmet-async";
import { useLocation } from "@/hooks/useLocation";
import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const location = useLocation();

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Your Perfect Wedding Day Timeline",
      excerpt: "Planning your wedding day timeline can feel overwhelming. Discover expert tips from professional wedding photographers on creating a stress-free schedule that captures every precious moment.",
      date: "2025-10-15",
      author: "Big Day Story Team",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      keywords: "wedding day timeline, wedding planning tips, wedding photography schedule"
    },
    {
      id: 2,
      title: "Engagement Photo Ideas: Making Your Love Story Shine",
      excerpt: "From scenic outdoor locations to intimate indoor sessions, explore creative engagement photography ideas that perfectly capture your unique love story in the Carolinas.",
      date: "2025-10-10",
      author: "Big Day Story Team",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      keywords: "engagement photos, engagement photography ideas, couple photography"
    },
    {
      id: 3,
      title: "Why Wedding Videography is Worth the Investment",
      excerpt: "Relive your special day forever with cinematic wedding videography. Learn why couples are choosing video to complement their wedding photography packages.",
      date: "2025-10-05",
      author: "Big Day Story Team",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
      keywords: "wedding videography, wedding video investment, cinematic wedding films"
    },
    {
      id: 4,
      title: "Best Wedding Venues in North Carolina: A Photographer's Guide",
      excerpt: `Discover stunning wedding venues across ${location.city} and North Carolina that photograph beautifully. From mountain views to elegant ballrooms, find your perfect backdrop.`,
      date: "2025-09-28",
      author: "Big Day Story Team",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      keywords: `wedding venues ${location.city}, North Carolina wedding locations, outdoor wedding venues`
    },
    {
      id: 5,
      title: "Bridal Portrait Session: What to Expect and How to Prepare",
      excerpt: "Your bridal session is a special opportunity to capture stunning portraits. Learn how to prepare, what to bring, and tips for looking your absolute best.",
      date: "2025-09-20",
      author: "Big Day Story Team",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
      keywords: "bridal portraits, bridal session tips, wedding photography preparation"
    },
    {
      id: 6,
      title: "Drone Wedding Photography: Elevating Your Wedding Memories",
      excerpt: "Aerial wedding photography adds a breathtaking dimension to your wedding album. Discover how drone videography captures your venue's beauty from stunning new angles.",
      date: "2025-09-15",
      author: "Big Day Story Team",
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=80",
      keywords: "drone wedding photography, aerial wedding videography, wedding drone shots"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": `Wedding Photography & Videography Blog | ${location.fullName}`,
    "description": `Expert wedding photography tips, guides, and inspiration for couples planning their wedding in ${location.fullName}. Learn from professional photographers with over 100 weddings captured.`,
    "url": `https://${location.code === 'clt' ? '' : location.code + '.'}bigdaystory.com/blog`,
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "image": post.image,
      "keywords": post.keywords
    }))
  };

  return (
    <>
      <Helmet>
        <title>Wedding Photography Blog | Tips & Inspiration | {location.fullName}</title>
        <meta
          name="description"
          content={`Expert wedding photography and videography tips for ${location.fullName} couples. Get insider advice on planning, venues, timelines, and capturing your perfect day.`}
        />
        <meta name="keywords" content={`wedding photography blog, wedding planning tips ${location.city}, wedding videography advice, engagement photography ideas, bridal session tips, ${location.city} wedding venues`} />
        <link rel="canonical" href={`https://${location.code === 'clt' ? '' : location.code + '.'}bigdaystory.com/blog`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Wedding Photography Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Expert tips, inspiration, and guides for your perfect wedding day in {location.fullName}
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl font-bold mb-3 text-foreground hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Ready to Book Your Wedding Photography?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's capture your love story with timeless elegance in {location.city}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Book Your Date
                </a>
                <a
                  href="/packages"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
                >
                  View Packages
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
