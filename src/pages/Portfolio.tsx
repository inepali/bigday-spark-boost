import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  // Sample portfolio images - replace with actual images
  const portfolioImages = [
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=600,fit=crop/dJo6WXrDBJH0xnOO/doko-0352-1-mk3zGr2QXLhvBqkw.JPG",
      alt: "Wedding Photographer in North Carolina",
      className: "row-span-2"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=600,fit=crop/dJo6WXrDBJH0xnOO/750_1167-627-AQEyWRQ27JUx4OZl.jpg",
      alt: "Candid Wedding Photography North Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=600,fit=crop/dJo6WXrDBJH0xnOO/750_6509-mk3zGr2pG0CRwq2m.jpg",
      alt: "Outdoor Wedding Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=600,fit=crop/dJo6WXrDBJH0xnOO/750_1167-630-YX2ZBnk7WBh7pEKW.jpg",
      alt: "Professional Wedding Photography",
      className: "col-span-2"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=600,fit=crop/dJo6WXrDBJH0xnOO/750_1167-629-mk3zGr2pe0iRvqE5.jpg",
      alt: "Wedding Portrait Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=600,fit=crop/dJo6WXrDBJH0xnOO/750_6508-mk3zGr2pG0CRwq2l.jpg",
      alt: "Wedding Reception Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=600,fit=crop/dJo6WXrDBJH0xnOO/750_1167-628-A2Bva8Qk85SLj6zg.jpg",
      alt: "Bridal Photography Session",
      className: "row-span-2"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=600,fit=crop/dJo6WXrDBJH0xnOO/750_6507-mk3zGr2pe0iRvqE6.jpg",
      alt: "Wedding Ceremony Photography"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Wedding Photographer Portfolio | Big Day Story Carolinas</title>
        <meta name="description" content="Browse our stunning wedding photography portfolio showcasing beautiful moments from North Carolina weddings. Professional candid and posed wedding photos." />
        <meta name="keywords" content="wedding photography portfolio, North Carolina wedding photographer, wedding photos, bridal photography, professional wedding photographer" />
        <link rel="canonical" href="/portfolio" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Wedding Photographer Portfolio | Big Day Story Carolinas" />
        <meta property="og:description" content="Browse our stunning wedding photography portfolio showcasing beautiful moments from North Carolina weddings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/portfolio" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Wedding Photography Portfolio",
            "description": "Professional wedding photography portfolio showcasing beautiful moments from North Carolina weddings",
            "provider": {
              "@type": "Organization",
              "name": "Big Day Story Carolinas",
              "url": "https://bigdaystorycarolinas.com"
            }
          })}
        </script>
      </Helmet>
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gold mb-8">
              Wedding Photographer Portfolio
            </h1>
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p>
                A wedding photography portfolio is more than just a collection of images—it is a carefully curated showcase of a photographer's artistry, style, and ability to capture the essence of one of life's most treasured celebrations. Each photograph tells a unique story, preserving the love, joy, and emotions that make a wedding day unforgettable.
              </p>
              <p>
                From the intricate details of the dress and décor to the raw, heartfelt moments shared between the couple and their loved ones, a well-crafted portfolio demonstrates a photographer's technical expertise, creativity, and storytelling ability. It serves as a testament to their skill in using light, composition, and timing to create visually stunning and emotionally compelling images.
              </p>
              <p>
                Beyond technical proficiency, a great wedding portfolio also highlights the photographer's ability to connect with couples, making them feel comfortable and allowing their authentic emotions to shine through. By weaving together these moments with a keen artistic eye, a wedding photography portfolio becomes not just a display of work, but a powerful visual narrative that resonates with future clients and inspires trust in the photographer's ability to document their special day beautifully.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-16 px-4 bg-accent/10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg group cursor-pointer ${image.className || ''}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium px-4 py-2 bg-black/50 rounded">
                      {image.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
              Ready to Create Your Own Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us capture the beautiful moments of your special day with the same artistry and care shown in our portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="bg-gold text-gold-foreground hover:bg-gold/90 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Book Your Session
              </a>
              <a
                href="/packages"
                className="border border-gold text-gold hover:bg-gold hover:text-gold-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Packages
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;