import { Helmet } from "react-helmet-async";
import { useLocation } from "@/hooks/useLocation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SnowKissedSpringWedding = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>A Snow-Kissed Spring Wedding at White Crow | Jessica + Marquiest | {location.fullName}</title>
        <meta
          name="description"
          content="Experience a magical mountain wedding at The White Crow in Banner Elk, NC. Snow-capped peaks, 360° views, and unforgettable moments captured by professional wedding photographers."
        />
        <meta name="keywords" content="White Crow wedding, Banner Elk wedding photography, mountain wedding North Carolina, snow wedding photography, destination wedding photographer" />
        <link rel="canonical" href={`https://${location.code === 'clt' ? '' : location.code + '.'}bigdaystory.com/blog/snow-kissed-spring-wedding-white-crow`} />
      </Helmet>

      <article className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              A Snow-Kissed Spring Wedding at White Crow | Jessica + Marquiest
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                April 14, 2025
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Sanjay, Photographer
              </span>
            </div>
          </header>

          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
            alt="Snow-kissed mountain wedding at White Crow venue"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              April in the North Carolina mountains may technically be spring, but on April 12, 2025, Banner Elk gave us a last-minute taste of winter. Perched at an elevation of over 3,700 feet, The White Crow venue offered breathtaking 360° views of the surrounding snow-capped peaks—a setting straight out of a dream.
            </p>

            <p>
              Getting there was a journey in itself. Located 130 miles from our home base, the drive wound through narrow, twisting mountain roads that felt like stepping into another world. But once we arrived, the scenery made it all worth it. The wind had a bite to it, but the vibe was warm and full of love.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">The Couple</h2>
            <p>
              Jessica and Marquiest brought serious joy to the day. Surrounded by 11 bridesmaids and 11 groomsmen, their wedding party matched the grandeur of the setting, and their energy was contagious. From start to finish, they kept the celebration fun, heartfelt, and uniquely them.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">The Timeline: Smooth, Personal, and Packed with Emotion</h2>
            <p>The day unfolded beautifully thanks to the thoughtful timeline and the dream team of vendors:</p>
            <ul>
              <li>An emotional first touch and letter exchange before the ceremony had everyone in their feels.</li>
              <li>The grand entrances were a full-on hype session, with music, movement, and big energy from both wedding parties.</li>
              <li>Their first dance to "This Very Moment" by K-Ci & JoJo was timeless.</li>
              <li>Oh, and we have to say it again—the food? So good. Comforting, flavorful, and perfect for the chilly mountain air.</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">A Picture-Perfect Venue for Wedding Photography</h2>
            <p>
              From a wedding photography perspective, this venue was a dream. Between the dramatic mountain vistas, moody weather, and romantic candlelit details, The White Crow gave us stunning opportunities for creative storytelling. Every photo told a piece of Jessica and Marquiest's journey—intimate, grand, emotional, and joyful.
            </p>
            <p>
              As a wedding photographer in the Carolinas, it's days like these that remind us why we do what we do: to capture fleeting moments in unforgettable places.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">Stunning Views & Storytelling Video</h2>
            <p>
              The mountain backdrop wasn't just for photos—it added an incredible cinematic quality to the video, captured beautifully by Levi from Reflection Media. From drone shots of the snow-draped forest to the close-up moments filled with emotion, Levi worked magic alongside our team.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">Final Thoughts</h2>
            <p>
              Jessica and Marquiest's wedding was a celebration of love, laughter, and a little mountain magic. With a snow-dusted venue, sweeping views, and heartfelt moments throughout, it was truly unforgettable. Thank you both for letting us tell your Big Day Story—we're honored to have been part of your wedding photography journey.
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

export default SnowKissedSpringWedding;
