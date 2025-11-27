import { Helmet } from "react-helmet-async";
import { useLocation } from "@/hooks/useLocation";
import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Blog = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const blogPosts = [
    {
      id: 1,
      title: "A Snow-Kissed Spring Wedding at White Crow | Jessica + Marquiest",
      excerpt: "Experience a magical mountain wedding at The White Crow in Banner Elk, NC. Perched at 3,700 feet with 360° views of snow-capped peaks, this wedding was pure mountain magic.",
      date: "2025-04-14",
      author: "Sanjay, Photographer",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      keywords: "White Crow wedding, Banner Elk wedding photography, mountain wedding North Carolina",
      slug: "snow-kissed-spring-wedding-white-crow"
    },
    {
      id: 2,
      title: "Bethany & Alex's Beautiful Wedding Day",
      excerpt: "Full of love, laughter, and memorable moments - from unexpected ceremony twists to an epic fireball send-off. Discover this unforgettable Charlotte wedding celebration.",
      date: "2025-03-09",
      author: "Sanjay Ghimire",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
      keywords: "Charlotte wedding videography, cold spark wedding send-off, wedding reception Charlotte",
      slug: "bethany-alex-wedding-day"
    },
    {
      id: 3,
      title: "A Perfect Day in Greer: Capturing Love",
      excerpt: "Journey to Greer, South Carolina for a stunning destination wedding. Professional videographers and photographers work seamlessly to create timeless memories at Oak Grove Baptist Church.",
      date: "2025-01-27",
      author: "Sanjay Ghimire, Videographer",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      keywords: "Greer SC wedding photography, destination wedding Carolinas, Oak Grove Baptist Church",
      slug: "perfect-day-greer-capturing-love"
    },
    {
      id: 4,
      title: "Capturing Love: The Ultimate Guide to Wedding Photography in Charlotte, NC",
      excerpt: "Your comprehensive guide to wedding photography in Charlotte. Discover top venues, photography styles, expert tips for choosing photographers, and everything you need to know.",
      date: "2025-01-27",
      author: "Sanjay Ghimire",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      keywords: "Charlotte wedding photography guide, wedding venues Charlotte NC, wedding photography styles",
      slug: "ultimate-guide-wedding-photography-charlotte"
    },
    {
      id: 5,
      title: "10 Essential Tips for Your Perfect Wedding Day Timeline",
      excerpt: "Planning your wedding day timeline can feel overwhelming. Discover expert tips from professional wedding photographers on creating a stress-free schedule that captures every precious moment.",
      date: "2025-10-15",
      author: "Big Day Story Team",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      keywords: "wedding day timeline, wedding planning tips, wedding photography schedule",
      slug: "wedding-day-timeline-tips"
    },
    {
      id: 6,
      title: "Engagement Photo Ideas: Making Your Love Story Shine",
      excerpt: "From scenic outdoor locations to intimate indoor sessions, explore creative engagement photography ideas that perfectly capture your unique love story in the Carolinas.",
      date: "2025-10-10",
      author: "Big Day Story Team",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      keywords: "engagement photos, engagement photography ideas, couple photography",
      slug: "engagement-photo-ideas"
    },
    {
      id: 7,
      title: "Why Wedding Videography is Worth the Investment",
      excerpt: "Relive your special day forever with cinematic wedding videography. Learn why couples are choosing video to complement their wedding photography packages.",
      date: "2025-10-05",
      author: "Big Day Story Team",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
      keywords: "wedding videography, wedding video investment, cinematic wedding films",
      slug: "wedding-videography-investment"
    },
    {
      id: 8,
      title: "Best Wedding Venues in North Carolina: A Photographer's Guide",
      excerpt: `Discover stunning wedding venues across ${location.city} and North Carolina that photograph beautifully. From mountain views to elegant ballrooms, find your perfect backdrop.`,
      date: "2025-09-28",
      author: "Big Day Story Team",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      keywords: `wedding venues ${location.city}, North Carolina wedding locations, outdoor wedding venues`,
      slug: "best-wedding-venues-north-carolina"
    },
    {
      id: 9,
      title: "Bridal Portrait Session: What to Expect and How to Prepare",
      excerpt: "Your bridal session is a special opportunity to capture stunning portraits. Learn how to prepare, what to bring, and tips for looking your absolute best.",
      date: "2025-09-20",
      author: "Big Day Story Team",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
      keywords: "bridal portraits, bridal session tips, wedding photography preparation",
      slug: "bridal-portrait-session-tips"
    },
    {
      id: 10,
      title: "Drone Wedding Photography: Elevating Your Wedding Memories",
      excerpt: "Aerial wedding photography adds a breathtaking dimension to your wedding album. Discover how drone videography captures your venue's beauty from stunning new angles.",
      date: "2025-09-15",
      author: "Big Day Story Team",
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=80",
      keywords: "drone wedding photography, aerial wedding videography, wedding drone shots",
      slug: "drone-wedding-photography"
    },
    {
      id: 11,
      title: "Wedding Photographer Rock Hill SC: Complete Guide to Rock Hill Wedding Photography",
      excerpt: "Professional wedding photographer serving Rock Hill, SC and York County. Discover the best venues, planning tips, and why couples choose Big Day Story for their Rock Hill weddings.",
      date: "2025-11-04",
      author: "Big Day Story Team",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      keywords: "wedding photographer rock hill sc, rock hill wedding photography, york county wedding photographer",
      slug: "wedding-photographer-rock-hill-sc"
    },
    {
      id: 12,
      title: "Wedding Videographer Charlotte NC: Capturing Your Love Story",
      excerpt: "Premier wedding videographer in Charlotte, NC. Discover why cinematic wedding films are the perfect way to preserve your memories and how we capture your unique love story.",
      date: "2025-11-27",
      author: "Big Day Story Team",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
      keywords: "wedding videographer charlotte nc, charlotte wedding videography, cinematic wedding films",
      slug: "wedding-videographer-charlotte-nc"
    }
  ];

  // Pagination logic
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              {currentPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
                    <p className="text-muted-foreground line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Read More →
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
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
