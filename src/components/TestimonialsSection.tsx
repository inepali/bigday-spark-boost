import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sruti Hall",
      review: "We had a beautiful day for a wedding. Bipin and Sanjay from Big Day Story captured our memories beautifully. Their professionalism and patience with us was appreciated. It was my oldest daughter's wedding, and I had no idea what I was doing. They guided us through the process. The sneak peek was sent out quickly so we had a preview of what to expect. The video captured moments I had missed and had me tearing up all over again.",
      rating: 5
    },
    {
      name: "Kathy Leng",
      review: "My now husband and I worked with Bipin and Sanjay from Big Day Story on the day of our wedding. They were wonderful and very accommodating. They captured every moment and captured it beautifully. We would definitely recommend to friends and family as well as anyone else. They are very dedicated to their work and are willing to do anything to make your day wonderful and special. Very grateful to have them a part of our big day.",
      rating: 5
    },
    {
      name: "Jessica J.",
      review: "From the moment we booked Big Day Story Photography, Sanjay and his team were quick to respond, knowledgeable, and incredibly helpful. Their professional and personable approach put us at ease throughout the entire wedding planning process. On the day of our wedding, Sanjay blended seamlessly with our wedding party, helping us finalize the detailed timeline and providing excellent direction for all of our posed photos despite the chilly weather. We highly recommend Big Day Story Photography to any couple looking for a talented, personable, and hardworking photography team.",
      rating: 5
    },
    {
      name: "Emily S.",
      review: "We had a wonderful experience working with Bipin and Sanjay from Big Day Story for Photo & Video for our wedding. They did a great job capturing the special moments of our big day and delivered a beautiful album to us in under a month. Big Day Story felt like a member of the family on our wedding day, and the photos reflect the joy and love that filled the event. We couldn't be happier that we chose Big Day Story to document memories we will cherish for a lifetime.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Couples
            <span className="block text-primary">Are Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See what our clients have to say about our wedding photography and videography services in Charlotte, NC.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-elegant border-0 bg-card/95 backdrop-blur-sm relative overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>
              
              <CardContent className="p-8 relative">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                
                {/* Review */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.review}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">Verified Client</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Badges */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          {/* Google Reviews Badge */}
          <a 
            href="https://share.google/i7J7nZiL4Z5r8T5lE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft hover:shadow-elegant transition-smooth border border-primary/20 hover:border-primary/40">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
              </div>
              <div className="border-l border-border pl-3">
                <div className="text-sm font-semibold text-foreground">Google Reviews</div>
                <div className="text-xs text-muted-foreground">5.0 Rating • Verified Reviews</div>
              </div>
            </div>
          </a>

          {/* Zola Badge */}
          <a 
            href="https://www.zola.com/wedding-vendors/wedding-photographers/big-day-story-carolinas--2?utm_source=vendor&utm_medium=various&utm_content=badge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft hover:shadow-elegant transition-smooth border border-primary/20 hover:border-primary/40">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold fill-gold" />
                <span className="text-xl font-bold text-primary">5.0</span>
              </div>
              <div className="border-l border-border pl-3">
                <div className="text-sm font-semibold text-foreground">Featured Vendor on Zola</div>
                <div className="text-xs text-muted-foreground">13 Reviews • Premium Wedding Directory</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};