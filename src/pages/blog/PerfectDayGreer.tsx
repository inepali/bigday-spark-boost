import { Helmet } from "react-helmet-async";
import { useLocation } from "@/hooks/useLocation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PerfectDayGreer = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>A Perfect Day in Greer: Capturing Love | {location.fullName}</title>
        <meta
          name="description"
          content="Experience a stunning destination wedding in Greer, South Carolina. Professional wedding videographers and photographers work seamlessly to capture timeless memories."
        />
        <meta name="keywords" content="Greer SC wedding photography, destination wedding Carolinas, wedding videography South Carolina, Oak Grove Baptist Church wedding, Greer City Hall reception" />
        <link rel="canonical" href={`https://${location.code === 'clt' ? '' : location.code + '.'}bigdaystory.com/blog/perfect-day-greer-capturing-love`} />
      </Helmet>

      <article className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              A Perfect Day in Greer: Capturing Love
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 27, 2025
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Sanjay Ghimire, Videographer
              </span>
            </div>
          </header>

          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80"
            alt="Wedding rings and engagement photography"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              As wedding videographers and photographers, there's nothing more rewarding than helping couples preserve their most special day. At Reflection Media Carolinas, we strive to work seamlessly as a team, blending photo and video to create timeless memories.
            </p>

            <p>
              On this particular day, I, Sanjay of Big Day Story Carolinas, partnered with the talented Jessica Strickland of JC Rosewood Photography to document a stunning wedding 129 miles away in Greer, South Carolina—a one-and-a-half-hour drive that was well worth it.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">Getting Ready at 1500 E Rutherford St</h2>
            <p>
              The day began at 1500 E Rutherford St, where the bridal party was getting ready. The atmosphere was alive with excitement as we arrived, cameras in hand, ready to capture the first details. From the intricate lace of the wedding gown to the glint of wedding bands and the smiles of the bride and her bridesmaids, we documented every moment with care.
            </p>
            <p>
              Jessica and I worked side by side to ensure photos and video were captured in perfect harmony, creating a seamless story for the couple.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">The Ceremony at Oak Grove Baptist Church</h2>
            <p>
              The ceremony took place at the serene and welcoming Oak Grove Baptist Church. With its warm interiors and inviting ambiance, it was the ideal setting for the couple to exchange vows. The bride's entrance was breathtaking, and the groom's emotional reaction was unforgettable.
            </p>
            <p>
              Jessica and I coordinated flawlessly, capturing both the grandeur of the church and the intimacy of the vows. Every angle, from wide shots of the congregation to close-ups of the couple's exchanged glances, was covered to perfection.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">Reception at Greer City Hall</h2>
            <p>
              The day transitioned beautifully into the reception at Greer City Hall, a venue that exuded elegance. Guests enjoyed heartfelt toasts, dancing, and a lively celebration in honor of the couple's new beginning. The first dance, cake cutting, and spontaneous moments on the dance floor were captured with precision and creativity.
            </p>
            <p>
              Jessica and I took the couple outside for romantic evening portraits, making use of the dramatic architecture and city lights to create timeless visuals.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">A Perfect Send-Off</h2>
            <p>
              An unexpected highlight was the wedding day ending an hour early, as everything ran ahead of schedule. This rare occurrence was a testament to the couple's thoughtful planning and the efficiency of everyone involved. Jessica and I stayed perfectly in sync throughout the day, ensuring that not a single moment was missed.
            </p>
            <p>
              The send-off was a perfect conclusion to this unforgettable day. As the couple departed amidst cheers and well wishes, we captured their happiness from every angle, knowing these moments would become cherished memories.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">Teamwork Makes the Dream Work</h2>
            <p>
              At Reflection Media Carolinas, we pride ourselves on telling love stories through both photo and video. Partnering with Jessica Strickland was an absolute pleasure. Together, we created a seamless blend of images and film that will allow this couple to relive their wedding day for years to come.
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

export default PerfectDayGreer;
