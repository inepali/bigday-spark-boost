import { Helmet } from "react-helmet-async";
import { useLocation } from "@/hooks/useLocation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const location = useLocation();

  const faqs = [
    {
      category: "Booking & Pricing",
      questions: [
        {
          q: "How far in advance should we book?",
          a: `We recommend booking 9-12 months in advance, especially for peak wedding season (May-October) in ${location.city}, ${location.state}. However, we do accept last-minute bookings based on availability.`
        },
        {
          q: "What's included in your packages?",
          a: "Our packages include professional photography and videography, engagement session, bridal session, 60s social media video, 10-12 minute highlight film, online gallery with 600-800 edited HD files, sneak peeks within 48 hours, and full digital album delivery within 30 days."
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes! We offer flexible payment plans to make your dream photography package affordable. Contact us to discuss options that work with your budget."
        },
        {
          q: "What is your cancellation policy?",
          a: "We understand plans can change. Our contract includes detailed cancellation terms. The retainer fee is non-refundable, but we're happy to discuss rescheduling options."
        }
      ]
    },
    {
      category: "Coverage & Timeline",
      questions: [
        {
          q: "How many hours of coverage do we need?",
          a: "Most couples book 8-10 hours of coverage. This typically includes getting ready, ceremony, portraits, and reception through first dances. We'll help you create the perfect timeline during our planning session."
        },
        {
          q: "Do you provide a second photographer or videographer?",
          a: "Yes! Our standard packages include both a photographer and videographer working together. This ensures we capture every angle and moment of your special day."
        },
        {
          q: "Can you stay for our send-off?",
          a: "Absolutely! Many couples add extra hours to capture their grand exit. We want to be there for every memorable moment."
        },
        {
          q: "What happens if our wedding runs over time?",
          a: "We're flexible and understand weddings don't always go exactly as planned. Additional hours can be added at our standard hourly rate."
        }
      ]
    },
    {
      category: "Services & Style",
      questions: [
        {
          q: "What is your photography style?",
          a: "We specialize in candid, documentary-style photography with an artistic touch. We capture genuine emotions and moments while also creating beautiful, timeless portraits."
        },
        {
          q: "Do you offer drone videography?",
          a: `Yes! Drone videography is available and perfect for showcasing ${location.city} venues from stunning aerial perspectives. We're FAA certified and follow all local regulations.`
        },
        {
          q: "Will you provide raw footage and unedited photos?",
          a: "We deliver professionally edited photos and videos that represent our artistic vision. Raw files are available upon request for an additional fee."
        },
        {
          q: "Can we request specific shots?",
          a: "Of course! We encourage you to share your must-have shot list. We'll review it during our timeline planning session to ensure we capture everything important to you."
        }
      ]
    },
    {
      category: "Delivery & Prints",
      questions: [
        {
          q: "When will we receive our photos and videos?",
          a: "You'll receive sneak peek photos within 48 hours! The full gallery of 600-800 edited photos is delivered within 30 days. Your highlight video is completed within 6-8 weeks."
        },
        {
          q: "How will we receive our photos and videos?",
          a: "All photos and videos are delivered through a beautiful online gallery where you can view, download, and share with family and friends. The gallery remains active for one year."
        },
        {
          q: "Do you offer prints or albums?",
          a: "Yes! While digital files are included, we also offer premium print products, albums, and wall art. All images come with full printing rights."
        },
        {
          q: "Can we share our photos on social media?",
          a: "Absolutely! Share away. We provide high-resolution files perfect for social media without watermarks. We just ask that you tag us so we can celebrate with you!"
        }
      ]
    },
    {
      category: "Engagement & Bridal Sessions",
      questions: [
        {
          q: "What's included in the engagement session?",
          a: `Your complimentary engagement session is perfect for getting comfortable in front of the camera. We can shoot at your favorite ${location.city} location or suggest stunning local spots.`
        },
        {
          q: "When should we schedule our bridal session?",
          a: "We recommend scheduling your bridal session 2-4 weeks before your wedding. This gives us time to deliver images for your wedding website or welcome displays."
        },
        {
          q: "What should we wear for our engagement photos?",
          a: "Wear something you feel confident and comfortable in! We suggest coordinating colors (not matching) and avoiding busy patterns. We'll send a detailed style guide after booking."
        }
      ]
    },
    {
      category: "Day-Of Logistics",
      questions: [
        {
          q: "Do you scout our venue beforehand?",
          a: "If we haven't shot at your venue before, we're happy to visit beforehand. We've photographed over 100 weddings across North Carolina, so we're familiar with most major venues."
        },
        {
          q: "What if it rains on our wedding day?",
          a: "Don't worry! We bring rain gear and are experienced in creating beautiful photos regardless of weather. Rain can actually create stunning, romantic images."
        },
        {
          q: "Will you help with our timeline?",
          a: "Yes! We provide a detailed timeline planning session to ensure your day flows smoothly and we capture every important moment without feeling rushed."
        },
        {
          q: "Do you provide a shot list?",
          a: "We have a comprehensive shot list based on 100+ weddings, but we welcome your input. We'll review your must-have shots during planning to ensure nothing is missed."
        }
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(category =>
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    )
  };

  return (
    <>
      <Helmet>
        <title>Wedding Photography FAQ | Big Day Story | {location.fullName}</title>
        <meta
          name="description"
          content={`Get answers to common questions about wedding photography and videography in ${location.fullName}. Learn about packages, pricing, timeline, and what to expect on your big day.`}
        />
        <meta name="keywords" content={`wedding photography FAQ, wedding videography questions, ${location.city} wedding photographer, wedding planning help, photography pricing`} />
        <link rel="canonical" href={`https://${location.code === 'clt' ? '' : location.code + '.'}bigdaystory.com/faq`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Everything you need to know about wedding photography and videography in {location.city}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border rounded-lg px-6 bg-card"
                      >
                        <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pt-2 pb-4">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're here to help! Reach out and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Contact Us
                </a>
                <a
                  href="/packages"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
                >
                  View Packages
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ;
