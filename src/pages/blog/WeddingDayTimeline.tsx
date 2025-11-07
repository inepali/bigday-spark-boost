import { Helmet } from "react-helmet-async";
import { useLocation } from "@/hooks/useLocation";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const WeddingDayTimeline = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>10 Essential Tips for Your Perfect Wedding Day Timeline | {location.fullName}</title>
        <meta
          name="description"
          content="Expert wedding day timeline tips from professional photographers. Create a stress-free schedule that captures every precious moment of your wedding in North Carolina."
        />
        <meta name="keywords" content="wedding day timeline, wedding planning schedule, wedding photography timeline, reception timeline, ceremony timing, wedding day schedule North Carolina" />
        <link rel="canonical" href={`https://${location.code === 'clt' ? '' : location.code + '.'}bigdaystory.com/blog/wedding-day-timeline-tips`} />
      </Helmet>

      <article className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              10 Essential Tips for Your Perfect Wedding Day Timeline
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                October 15, 2025
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Big Day Story Team
              </span>
            </div>
          </header>

          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
            alt="Wedding couple reviewing their wedding day timeline with photographer"
            loading="lazy"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Creating the perfect wedding day timeline is crucial for ensuring your special day flows smoothly and your photographer captures every important moment. After photographing hundreds of weddings across North Carolina, we've learned exactly what works—and what doesn't. Follow these expert tips to create a stress-free schedule that gives you beautiful photos and unforgettable memories.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">1. Start Earlier Than You Think You Need To</h2>
            <p>
              The number one mistake couples make is underestimating how long things take on the wedding day. Getting dressed, hair, makeup, and those crucial getting-ready photos all require more time than anticipated. We recommend starting hair and makeup at least 4-5 hours before your ceremony.
            </p>
            <div className="bg-primary/5 p-6 rounded-lg my-6">
              <h3 className="font-serif text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Pro Tip: The Golden Hour Rule
              </h3>
              <p className="text-muted-foreground mb-0">
                If you want gorgeous golden hour portraits, work backward from sunset. In North Carolina, golden hour varies by season—check sunset times for your wedding date and schedule couple portraits 1-2 hours before sunset for the most flattering natural light.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">2. Build in Buffer Time Between Events</h2>
            <p>
              Life happens, and weddings rarely run exactly on schedule. Build 15-30 minute buffers between major events. This cushion prevents the entire day from running late and reduces stress when unexpected delays occur.
            </p>
            <p>
              Common delays include:
            </p>
            <ul>
              <li>Hair and makeup running over scheduled time</li>
              <li>Transportation delays or traffic</li>
              <li>Last-minute dress alterations or boutonniere fixes</li>
              <li>Guests arriving late to the ceremony</li>
              <li>Family members who are difficult to gather for portraits</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">3. Schedule a First Look (Or Don't—But Plan Accordingly)</h2>
            <p>
              The decision to have a first look significantly impacts your timeline. Here's what to consider:
            </p>

            <h3 className="font-serif text-2xl font-bold mt-6 mb-3 text-foreground">With a First Look</h3>
            <ul>
              <li>Complete most couple and wedding party photos before the ceremony</li>
              <li>Enjoy cocktail hour with your guests</li>
              <li>Less time pressure between ceremony and reception</li>
              <li>Private, emotional moment before the ceremony chaos</li>
              <li>Better lighting for photos (usually scheduled 2-3 hours before ceremony)</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold mt-6 mb-3 text-foreground">Without a First Look</h3>
            <ul>
              <li>Traditional ceremony reveal moment</li>
              <li>Must allocate 60-90 minutes after ceremony for portraits</li>
              <li>You'll miss most of cocktail hour</li>
              <li>Tighter timeline with less flexibility</li>
              <li>May miss golden hour lighting depending on ceremony time</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">4. Allocate Enough Time for Family Portraits</h2>
            <p>
              Family photos consistently take longer than expected. Plan for at least 20-30 minutes for immediate family portraits, and designate a family member or wedding planner to help gather people efficiently.
            </p>
            <p>
              Create a detailed family photo list beforehand and share it with your photographer. Include:
            </p>
            <ul>
              <li>Specific family groupings you want</li>
              <li>Names of key family members (especially if complex family dynamics)</li>
              <li>Any family members who need to leave early</li>
              <li>Priority shots in case time runs short</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">5. Plan Your Ceremony Length Realistically</h2>
            <p>
              Most wedding ceremonies last 20-30 minutes, but religious ceremonies or those with many readings and rituals may take 45-60 minutes. Coordinate with your officiant to understand the actual ceremony duration and plan your timeline accordingly.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">6. Don't Overschedule Reception Events</h2>
            <p>
              Couples often try to cram too many activities into their reception. Remember, your guests also want time to eat, drink, dance, and socialize. Space out major events (first dance, cake cutting, toasts, bouquet toss) with at least 15-20 minutes between them.
            </p>

            <div className="bg-primary/5 p-6 rounded-lg my-6">
              <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Sample Reception Timeline</h3>
              <ul className="mb-0 space-y-2">
                <li><strong>6:00 PM</strong> - Grand entrance</li>
                <li><strong>6:10 PM</strong> - First dance</li>
                <li><strong>6:15 PM</strong> - Welcome toast & dinner served</li>
                <li><strong>7:00 PM</strong> - Additional toasts during dinner</li>
                <li><strong>7:30 PM</strong> - Dance floor opens</li>
                <li><strong>8:15 PM</strong> - Cake cutting</li>
                <li><strong>8:30 PM</strong> - Bouquet/garter toss (optional)</li>
                <li><strong>9:00 PM</strong> - Special dances (parent dances)</li>
                <li><strong>9:15 PM</strong> - Open dancing continues</li>
                <li><strong>10:00 PM</strong> - Last dance & send-off</li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">7. Consider Travel Time and Location Logistics</h2>
            <p>
              If your ceremony and reception are at different venues, account for realistic travel time—including time for the wedding party to gather, load into vehicles, and travel. Add 15-20 minutes beyond the actual drive time.
            </p>
            <p>
              For outdoor North Carolina mountain weddings, remember that venues like those in Asheville, Banner Elk, or Boone may involve winding roads and slower travel times than Google Maps suggests.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">8. Coordinate with Your Photography and Videography Team</h2>
            <p>
              Your photographers and videographers are timeline experts. Share your draft timeline with them early and listen to their suggestions. They can identify potential issues and help optimize your schedule for the best lighting and coverage.
            </p>
            <p>
              Discuss with your photography team:
            </p>
            <ul>
              <li>When they'll arrive and when coverage ends</li>
              <li>Optimal times for portraits based on venue lighting</li>
              <li>Special shots you want that require specific timing</li>
              <li>Any second shooter schedules if applicable</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">9. Plan for Seasonal Considerations</h2>
            <p>
              North Carolina's seasons significantly impact your timeline:
            </p>

            <h3 className="font-serif text-2xl font-bold mt-6 mb-3 text-foreground">Summer Weddings (June-August)</h3>
            <ul>
              <li>Take advantage of late sunsets (8:00-8:30 PM)</li>
              <li>Schedule outdoor photos during cooler morning or evening hours</li>
              <li>Consider indoor backup for midday heat</li>
              <li>Golden hour portraits around 7:00-8:00 PM</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold mt-6 mb-3 text-foreground">Fall Weddings (September-November)</h3>
            <ul>
              <li>Earlier sunsets require adjusted timelines (sunset around 6:00-7:00 PM)</li>
              <li>Perfect temperatures for outdoor photos all day</li>
              <li>Beautiful fall foliage as natural backdrop</li>
              <li>Consider rain backup for unpredictable weather</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold mt-6 mb-3 text-foreground">Winter Weddings (December-February)</h3>
            <ul>
              <li>Very early sunsets (5:00-5:30 PM) limit outdoor photo time</li>
              <li>Plan ceremony earlier to capture daylight portraits</li>
              <li>Indoor venue lighting becomes more important</li>
              <li>Build in time for coat check and guest comfort</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold mt-6 mb-3 text-foreground">Spring Weddings (March-May)</h3>
            <ul>
              <li>Moderate sunset times (7:00-8:00 PM)</li>
              <li>Beautiful blooms and fresh greenery</li>
              <li>Unpredictable weather requires flexible backup plans</li>
              <li>Pollen considerations for outdoor venues</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">10. Share Your Timeline—and Stick to It</h2>
            <p>
              Once finalized, share your timeline with everyone who needs it: wedding party, family, vendors, and venue coordinator. Assign someone (like your wedding planner or a reliable friend) to be the "timeline keeper" who helps keep things moving.
            </p>
            <p>
              Most importantly, trust your timeline on the wedding day. Resist the urge to skip planned portrait time because you're eager to get to the reception. Those photos are irreplaceable, and a well-planned timeline ensures you get them without sacrificing fun at your reception.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">Sample Complete Wedding Day Timeline</h2>
            <p>
              Here's a complete timeline for a 5:00 PM ceremony with first look:
            </p>

            <div className="bg-primary/5 p-6 rounded-lg my-6">
              <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Complete Wedding Day Schedule</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground">Morning & Preparation</h4>
                  <ul className="mb-0 space-y-1">
                    <li><strong>12:00 PM</strong> - Hair and makeup begins</li>
                    <li><strong>1:00 PM</strong> - Photographer arrives, detail shots</li>
                    <li><strong>1:30 PM</strong> - Getting ready photos</li>
                    <li><strong>2:30 PM</strong> - Bride dressed, final touches</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">First Look & Portraits</h4>
                  <ul className="mb-0 space-y-1">
                    <li><strong>3:00 PM</strong> - First look</li>
                    <li><strong>3:20 PM</strong> - Couple portraits (30-40 minutes)</li>
                    <li><strong>4:00 PM</strong> - Wedding party portraits</li>
                    <li><strong>4:30 PM</strong> - Arrive at ceremony venue</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Ceremony</h4>
                  <ul className="mb-0 space-y-1">
                    <li><strong>4:45 PM</strong> - Guests begin arriving</li>
                    <li><strong>5:00 PM</strong> - Ceremony begins</li>
                    <li><strong>5:30 PM</strong> - Ceremony ends, immediate family portraits</li>
                    <li><strong>6:00 PM</strong> - Travel to reception venue</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Reception</h4>
                  <ul className="mb-0 space-y-1">
                    <li><strong>6:15 PM</strong> - Cocktail hour (couple mingles with guests)</li>
                    <li><strong>7:00 PM</strong> - Grand entrance</li>
                    <li><strong>7:10 PM</strong> - First dance</li>
                    <li><strong>7:15 PM</strong> - Dinner served, toasts</li>
                    <li><strong>8:00 PM</strong> - Dance floor opens</li>
                    <li><strong>8:45 PM</strong> - Cake cutting</li>
                    <li><strong>9:00 PM</strong> - Special dances</li>
                    <li><strong>10:30 PM</strong> - Last dance & send-off</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">Conclusion: A Timeline That Works for You</h2>
            <p>
              Remember, this is YOUR wedding day. While these guidelines help ensure smooth flow and beautiful photos, your timeline should reflect your priorities and vision. Some couples want maximum time for portraits; others prefer to maximize guest interaction. Work with your photographer and planner to create a timeline that achieves your specific goals.
            </p>
            <p>
              The key is planning ahead, building in flexibility, and trusting the professionals you've hired. With a well-thought-out timeline, you'll have plenty of time for stunning photos, meaningful moments, and celebrating with loved ones—without feeling rushed or stressed.
            </p>
            <p>
              Ready to start planning your perfect wedding day in {location.city}? Let's chat about creating a timeline that captures every precious moment of your Big Day Story.
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

export default WeddingDayTimeline;
