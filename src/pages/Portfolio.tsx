import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  // All portfolio images from the original site
  const portfolioImages = [
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-0352-1-mk3zGr2QXLhvBqkw.JPG",
      alt: "Wedding Photographer in North Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/750_1167-627-AQEyWRQ27JUx4OZl.jpg",
      alt: "Candid Wedding Photography North Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/750_6509-mk3zGr2pG0CRwq2m.jpg",
      alt: "Outdoor Wedding Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/750_1112-570-YZ9VQrWO1jH91PMl.jpg",
      alt: "Charlotte NC Videographer"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9319-mjEvbr8VJVCNg1Qb.JPG",
      alt: "Destination Wedding Photography Carolinas"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-7898-YrDlbrlgxviJjMz4.jpg",
      alt: "Wedding Photographer in North Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9022-dWxyQkBk14tbePzV.jpg",
      alt: "Wedding Photographer in North Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/750_6821-AMqbWkzWQNt3Pv25.jpg",
      alt: "Outdoor Wedding Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/750_1135-597-m6Lw9eq3W6IXz3J3.jpg",
      alt: "Wedding Photographer in North Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/kathy-mp8vwGaWDPUx7ywN.jpg",
      alt: "Candid Wedding Photography South Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/750_4723-722-Yg2WQrOVnvfZyQnW.jpg",
      alt: "Candid Wedding Photography North Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/750_6901-mk3zGO5g6QHpgDRq.jpg",
      alt: "Outdoor Wedding Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-1206-m5Kwk3N2BBUXZzQz.JPG",
      alt: "Destination Wedding Photography Carolinas"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-8889-YD06eq8NGocxaelr.jpg",
      alt: "Cinematic Wedding Videos Carolinas"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/prm_1080-14-AE0oWk22yrtgj20k.jpg",
      alt: "Cinematic Wedding Videos Carolinas"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/750_3634-18-AQEyWRQn5NCb1Z8r.jpg",
      alt: "Cinematic Wedding Videos Carolinas"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/300_photo-Aq2qDnypgwhjMVz5.jpg",
      alt: "Charlotte Wedding Photographer"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-7905-YKb6WQLOekU97nqD.jpg",
      alt: "Affordable Wedding Videography Charlotte"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9224-m5KwEZl6gXuP5P7n.jpg",
      alt: "Charlotte Wedding Photographer"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-6541-mjEvbaq4gqtZwx4q.jpg",
      alt: "Charlotte Wedding Photographer"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/850_2705-AQED21rQE6SROwVy.jpg",
      alt: "Outdoor Wedding Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9225-AQEyq287zpt2xeVl.JPG",
      alt: "Cinematic Wedding Videos Carolinas"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/750_4161-427-YX4yVrWJWRhy5rlZ.jpg",
      alt: "Affordable Wedding Videography Charlotte"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/750_4270-472-mk3zGr2QxxtBenGM.jpg",
      alt: "Cinematic Wedding Videos Carolinas"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/750_3629-12-YZ9VQrWOQ8Ta4Qx4.jpg",
      alt: "Cinematic Wedding Videos Carolinas"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/_prm4139_websize-Y4LxMK2a4qiQRpLL.jpg",
      alt: "Outdoor Wedding Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/k-p-143-m7V5eLjeNMs727gj.JPG",
      alt: "Outdoor Wedding Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9397-mjEvNXPV9yf3JlZ8.jpg",
      alt: "Bride Dress Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-8921-Yyv3xOXMojh6p5MP.jpg",
      alt: "Cinematic Wedding Videos Carolinas"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9405-dJo6LwewZVcV3WbX.jpg",
      alt: "Affordable Wedding Videography Charlotte"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-6788-YanyQ8qb81srRy1m.JPG",
      alt: "Bride Portrait Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9319-mxBZOajV6XhZLPQb.JPG",
      alt: "Candid Wedding Photography South Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/prm_7732sanjayd810-Yg2WQeX5ortZ1OrJ.jpg",
      alt: "Affordable Wedding Videography Charlotte"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-8989-AwvMaBj2NWiZlZ5v.jpg",
      alt: "Candid Wedding Photography South Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9129-Aq2vMDerj9iDyz7j.jpg",
      alt: "Affordable Wedding Videography Charlotte"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9070-AGB6aWMJlNfzOj5L.jpg",
      alt: "Candid Wedding Photography South Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9069-mePvE65rKgHwOGrD.jpg",
      alt: "Destination Wedding Photography Carolinas"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/cheyenne-benjamin-295-AVL1XylybZIox5V0.JPG",
      alt: "Cinematic Wedding Videos Carolinas"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/k-p-310-mP42894N9Guvyg9P.JPG",
      alt: "Outdoor Wedding Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/191_photo-Yg2qJbXKePf23lBe.jpg",
      alt: "Wedding Videographers Charlotte"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/194_photo-AVL1e90O0qHKMBVr.jpg",
      alt: "Wedding Videographers Charlotte"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/big07179-dWxB1JZw9jflowXW.jpg",
      alt: "Outdoor Wedding Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/850_2304-mnlqPewj8JCxkwx1.jpg",
      alt: "Wedding Ring Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9210-AGB6aWMeMyTpM5rx.JPG",
      alt: "Destination Wedding Photography Carolinas"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9400-Y4LV5MO06aSKyJpx.jpg",
      alt: "Candid Wedding Photography North Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9408-Yanyxv6lNzugGQwK.jpg",
      alt: "Wedding Details Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9359-AGB6aWMe0vT88qKj.jpg",
      alt: "Candid Wedding Photography North Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-7187-AwvMaBMgz7HOJ4Mo.jpg",
      alt: "Wedding Ring Photography"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/doko-9067-AR0yND2RjguaJyEV.jpg",
      alt: "Candid Wedding Photography North Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/cheyenne-benjamin-308-AGBnj5xRwaSZ4JZq.JPG",
      alt: "Cinematic Wedding Videos Carolinas"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/cheyenne-benjamin-284-A1aBNGOGE8F86Woo.JPG",
      alt: "Cinematic Wedding Videos Carolinas"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/cheyenne-benjamin-285-YD0B5x3xRWF26vqN.JPG",
      alt: "Candid Wedding Photography North Carolina"
    },
    {
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=800,fit=crop/dJo6WXrDBJH0xnOO/cheyenne-benjamin-699-YanqaPNXOlU3PzZ8.JPG",
      alt: "Destination Wedding Photography Carolinas"
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
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {/* Masonry Grid Layout */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className="relative break-inside-avoid mb-4 group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                  {/* Elegant overlay on hover */}
                  <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
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