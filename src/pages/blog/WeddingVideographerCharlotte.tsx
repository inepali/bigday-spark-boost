import { Helmet } from "react-helmet-async";
import { useLocation } from "@/hooks/useLocation";
import { Calendar, User, ArrowLeft, Video, Heart, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const WeddingVideographerCharlotte = () => {
    const location = useLocation();
    const publishDate = "2025-11-27";

    return (
        <>
            <Helmet>
                <title>Wedding Videographer Charlotte NC | Cinematic Wedding Films - Big Day Story</title>
                <meta name="description" content={`Premier wedding videographer in Charlotte, NC. We create cinematic, emotional wedding films that capture your unique love story. Book your Charlotte wedding video today.`} />
                <meta name="keywords" content={`wedding videographer charlotte nc, charlotte wedding videography, wedding videographer near me, cinematic wedding films charlotte, wedding video packages charlotte`} />
                <link rel="canonical" href={`https://${location.code === 'clt' ? '' : location.code + '.'}bigdaystory.com/blog/wedding-videographer-charlotte-nc`} />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Wedding Videographer Charlotte NC: Capturing Your Love Story",
                        "image": "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80",
                        "author": {
                            "@type": "Organization",
                            "name": "Big Day Story"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Big Day Story",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://bigdaystory.com/logo.png"
                            }
                        },
                        "datePublished": publishDate,
                        "dateModified": publishDate
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": `https://${location.code}.bigdaystory.com`
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Blog",
                            "item": `https://${location.code}.bigdaystory.com/blog`
                        }, {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Wedding Videographer Charlotte NC",
                            "item": `https://${location.code}.bigdaystory.com/blog/wedding-videographer-charlotte-nc`
                        }]
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": `Big Day Story - ${location.city}`,
                        "image": "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": location.city,
                            "addressRegion": location.state,
                            "addressCountry": "US"
                        },
                        "url": `https://${location.code}.bigdaystory.com/blog/wedding-videographer-charlotte-nc`
                    })}
                </script>
            </Helmet>

            <article className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
                <div className="container max-w-4xl mx-auto px-4">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>

                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            Wedding Videographer Charlotte NC: Capturing Your Love Story
                        </h1>
                        <div className="flex flex-wrap gap-4 text-muted-foreground">
                            <div className="flex items-center">
                                <Calendar className="mr-2 h-4 w-4" />
                                November 27, 2025
                            </div>
                            <div className="flex items-center">
                                <User className="mr-2 h-4 w-4" />
                                Big Day Story Team
                            </div>
                        </div>
                    </header>

                    <img
                        src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80"
                        alt="Cinematic wedding videography in Charlotte NC"
                        loading="lazy"
                        className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-xl"
                    />

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-muted-foreground mb-6">
                            Your wedding day is a collection of fleeting moments—the nervous excitement before the ceremony, the tearful vows, the joyous laughter during toasts, and the energetic dancing at the reception. While photography freezes these moments in time, a <strong>wedding videographer in Charlotte, NC</strong> captures the movement, sound, and emotion that brings your memories back to life.
                        </p>

                        <h2 className="flex items-center gap-2 text-foreground">
                            <Video className="h-6 w-6 text-primary" />
                            Why Choose a Charlotte Wedding Videographer?
                        </h2>
                        <p>
                            Charlotte offers a stunning variety of backdrops for your wedding film, from the skyline views of Uptown to the historic charm of local estates. Hiring a local videographer ensures you have someone who knows how to capture these settings perfectly.
                        </p>
                        <p>
                            At <strong>Big Day Story</strong>, we specialize in creating cinematic wedding films that tell your unique story. We don't just record events; we weave together the sights and sounds of your day into a narrative that you'll want to watch again and again.
                        </p>

                        <h3>The Power of Audio</h3>
                        <p>
                            One thing photos can't capture is sound. The quiver in your partner's voice during vows, the laughter of your best friend during their speech, or the song you danced to for the first time as a married couple—these audio elements are the heartbeat of your wedding film. We use high-quality audio equipment to ensure every word is crisp and clear.
                        </p>

                        <h2 className="flex items-center gap-2 text-foreground">
                            <Camera className="h-6 w-6 text-primary" />
                            Our Videography Style
                        </h2>
                        <p>
                            We believe in a documentary and cinematic approach. This means we capture moments as they unfold naturally, without directing or staging too much. We want you to be present in the moment, not worrying about the camera.
                        </p>
                        <ul>
                            <li><strong>Cinematic Storytelling:</strong> We use creative angles, lighting, and editing techniques to give your film a movie-like quality.</li>
                            <li><strong>Emotional Focus:</strong> We look for the small, intimate interactions that show the depth of your connection.</li>
                            <li><strong>Drone Cinematography:</strong> We include stunning aerial shots of your venue (weather and regulations permitting) to establish the scene.</li>
                        </ul>

                        <h2 className="flex items-center gap-2 text-foreground">
                            <Heart className="h-6 w-6 text-primary" />
                            Invest in Your Memories
                        </h2>
                        <p>
                            Many couples regret not hiring a videographer. Don't let that be you. Your wedding film is an investment in your family history. It's something you can share with future generations, allowing them to see and hear the beginning of your legacy.
                        </p>
                        <p>
                            We offer customizable packages that combine both photography and videography, ensuring a cohesive style and a seamless experience on your big day.
                        </p>

                        <h2>Ready to Book Your Charlotte Wedding Videographer?</h2>
                        <p>
                            If you're looking for a <strong>wedding videographer in Charlotte, NC</strong> who cares deeply about your story, we'd love to chat. Let's create something beautiful together.
                        </p>

                        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                            <h3 className="text-xl font-bold mb-2 text-foreground">Capture Your Big Day</h3>
                            <p className="text-muted-foreground mb-4">
                                Contact us today to check availability and learn more about our photo and video bundles.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    to="/booking"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                                >
                                    Check Availability
                                </Link>
                                <Link
                                    to="/packages"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
                                >
                                    View Packages
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 pt-8 border-t">
                        <Link
                            to="/blog"
                            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to All Posts
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
};

export default WeddingVideographerCharlotte;
