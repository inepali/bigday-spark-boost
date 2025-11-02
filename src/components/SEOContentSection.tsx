import { useLocation } from "@/hooks/useLocation";

export const SEOContentSection = () => {
  const location = useLocation();
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Professional Wedding Photography & Videography in {location.fullName}
          </h2>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              <strong>Big Day Story</strong> is your premier choice for wedding photography and videography services in {location.city}, North Carolina. 
              We specialize in capturing the authentic emotions, intimate moments, and grand celebrations that make your wedding day uniquely yours. 
              Our experienced team of professional photographers and videographers has documented over 100 weddings across {location.areaDescription}, 
              creating timeless memories that couples cherish for a lifetime.
            </p>
            
            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Comprehensive Wedding Photography Services
            </h3>
            
            <p>
              Our wedding photography packages are designed to meet every couple's needs and budget. From intimate elopements to grand celebrations, 
              we offer customizable solutions that include engagement sessions, bridal portraits, full-day wedding coverage, and stunning drone videography. 
              Each package delivers professionally edited high-resolution images and cinematic highlight videos that tell your unique love story.
            </p>
            
            <p>
              We understand that every wedding is different, which is why we take time to understand your vision, style preferences, and must-have moments. 
              Whether you're planning a rustic barn wedding, an elegant ballroom celebration, or a scenic outdoor ceremony in the beautiful Carolina landscape, 
              our team adapts to your venue and creates images that reflect the genuine emotions of your special day.
            </p>
            
            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Why Couples Choose Big Day Story in {location.city}
            </h3>
            
            <ul className="space-y-3 list-disc pl-6">
              <li>
                <strong>Experienced Professionals:</strong> Our team has captured over 100 weddings across North Carolina and South Carolina, 
                giving us deep knowledge of local venues, lighting conditions, and the best locations for stunning wedding photos.
              </li>
              <li>
                <strong>Fast Turnaround:</strong> Receive your sneak peek images within 48 hours and your complete wedding gallery within 4-6 weeks, 
                professionally edited and ready to share with family and friends.
              </li>
              <li>
                <strong>Affordable Luxury:</strong> Starting at just $1,600, our packages offer exceptional value with professional photography, 
                videography, and additional services like engagement sessions and bridal portraits included.
              </li>
              <li>
                <strong>Client-Focused Service:</strong> With a 5-star rating on Zola and countless satisfied couples, we pride ourselves on 
                delivering exceptional service, open communication, and images that exceed expectations.
              </li>
              <li>
                <strong>Complete Coverage:</strong> From getting ready in the morning through the last dance, we document every precious moment 
                with both photography and videography, ensuring nothing is missed.
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Serving {location.areaDescription} and Beyond
            </h3>
            
            <p>
              While we're proudly based in {location.city}, we serve couples throughout {location.areaDescription} and across North Carolina. 
              We're familiar with all the popular wedding venues in the region, from historic estates and elegant ballrooms to mountain lodges 
              and coastal properties. Our local expertise ensures we capture the unique character of your chosen venue while creating timeless 
              portraits in the most picturesque locations.
            </p>
            
            <p>
              Ready to book your wedding photography? We'd love to hear about your big day plans and create a custom package that fits your 
              vision and budget. Contact us today for availability and pricing information, or browse our portfolio to see examples of our work 
              at weddings throughout {location.fullName} and surrounding areas. Your love story deserves to be told beautifully, and we're here 
              to make that happen.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
