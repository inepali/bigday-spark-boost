import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Heart } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      number: "100+",
      label: "Weddings Captured",
      description: "2023-2024"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      number: "5★",
      label: "Client Reviews",
      description: "Featured on Zola"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      number: "48hrs",
      label: "Sneak Peek Delivery",
      description: "Quick turnaround"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      number: "$1,600",
      label: "Starting Packages",
      description: "Affordable luxury"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose
              <span className="block text-primary">Big Day Story Carolinas?</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                At Big Day Story Carolinas, we believe every wedding is a <strong>unique narrative waiting to be told</strong>. 
                As experienced wedding photographers and videographers based in Charlotte, NC, our mission is to 
                encapsulate the essence of your special day through stunning visuals that resonate with authenticity and grace.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Experienced Team</h3>
                    <p>With over 100 weddings captured across North and South Carolina, our team brings wealth of experience and passion to every event.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Tailored Packages</h3>
                    <p>Our customizable packages are designed to fit diverse needs and budgets, ensuring you get exactly what you want.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Client-Centric Approach</h3>
                    <p>We prioritize your vision, ensuring that every shot reflects your unique love story and personality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-smooth border-0 bg-gradient-elegant">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary-soft w-fit">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};