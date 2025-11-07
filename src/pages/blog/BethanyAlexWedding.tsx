import { Helmet } from "react-helmet-async";
import { useLocation } from "@/hooks/useLocation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BethanyAlexWedding = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Bethany & Alex's Beautiful Wedding Day | {location.fullName}</title>
        <meta
          name="description"
          content="Full of love, laughter, and memorable moments - discover Bethany and Alex's unforgettable wedding celebration captured by professional wedding videographers in Charlotte, NC."
        />
        <meta name="keywords" content="Charlotte wedding videography, NC wedding photography, cold spark wedding send-off, wedding reception Charlotte, professional wedding videographer" />
        <link rel="canonical" href={`https://${location.code === 'clt' ? '' : location.code + '.'}bigdaystory.com/blog/bethany-alex-wedding-day`} />
      </Helmet>

      <article className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Bethany & Alex's Beautiful Wedding Day – Full of Love, Laughter, and Memorable Moments
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                March 9, 2025
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Sanjay Ghimire
              </span>
            </div>
          </header>

          <img
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80"
            alt="Beautiful wedding celebration with couple"
            loading="lazy"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              March 9, 2025, was truly a day to remember as I had the amazing opportunity to capture the wedding story of Bethany and Alex. What was initially planned as 6 hours of videography coverage eventually turned into 8 hours — and honestly, every extra moment was filled with love, laughter, and unforgettable memories.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">A Sweet Surprise – Running Into Familiar Faces</h2>
            <p>
              One of the unexpected but heartwarming moments of the day was when I unexpectedly ran into Danielle and Alex, a couple whose wedding I had captured about 7 months ago. It was a full-circle moment because now they were expecting their first baby — and it brought me so much joy to see how their love story continued to bloom.
            </p>
            <p>
              This moment also reminded me why I love being a wedding videographer in Charlotte, NC. You never know when you'll cross paths with couples whose love stories you've already been a part of — and it makes the job so much more fulfilling.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">A Ceremony With Unexpected Twists</h2>
            <p>
              Bethany and Alex's wedding ceremony was filled with so many beautiful emotions, but it also had a couple of unexpected (and humorous) moments that made it memorable.
            </p>
            <p>
              As the ceremony began, the officiant forgot to ask the guests to take their seats. So, for about 7-8 minutes, everyone remained standing until Bethany had to gently remind him a couple of times. It was one of those light-hearted, funny moments that everyone laughed about later.
            </p>
            <p>
              And then, when the officiant finally announced Bethany and Alex as husband and wife, Bethany was so caught up in the moment that she forgot to grab her bouquet! She realized it halfway down the aisle and just burst into laughter — and honestly, moments like these make wedding days even more personal and memorable.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">An Epic Reception With a Rocking DJ</h2>
            <p>
              The reception was where the real party began — and I have to say, their DJ was one of the most energetic and fun DJs I have ever seen so far. He didn't just play music; he actively interacted with the crowd, cracked jokes, and kept the dance floor alive all night.
            </p>
            <p>
              The energy was electric, the dance floor was packed, and I couldn't help but capture as many candid moments as possible. Working alongside talented wedding photographers in Carolina like Bipin made capturing those moments even smoother — we were in perfect sync throughout the event.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">The Jaw-Dropping Send-Off – Cold Sparks and Fireball Finale</h2>
            <p>
              As the night came to a close, Bethany and Alex planned an epic send-off — and it was one of the most cinematic moments I've captured to date. The couple walked out surrounded by cold sparklers, creating a magical and dreamlike atmosphere. But the real show-stopper was the huge fireball that shot up in the background, making their send-off feel like something straight out of a Hollywood film.
            </p>
            <p>
              Moments like these are why I'm so passionate about wedding videography in Charlotte, NC. Capturing a grand exit like that is exactly what creates unforgettable wedding films — the kind couples rewatch for years to come.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">A Day to Remember</h2>
            <p>
              Bethany and Alex's wedding was a beautiful reminder of why I love what I do. From the unexpected reunion with past clients to the fun mishaps during the ceremony and the epic fireball send-off — this wedding had it all.
            </p>
            <p>
              As a wedding videographer in Charlotte, NC, I strive to capture the raw, unfiltered moments that make every love story unique. And Bethany and Alex's story was nothing short of magical.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to All Posts
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BethanyAlexWedding;
