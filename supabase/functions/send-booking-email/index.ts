import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingEmailRequest {
  coupleNames: string;
  email: string;
  phone: string;
  weddingDate: string;
  venue: string;
  packageType: string;
  packageLabel: string;
  addOns: string[];
  guestCount: string;
  ceremonyTime: string;
  receptionTime: string;
  message: string;
  hearAboutUs: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: BookingEmailRequest = await req.json();
    
    console.log("Processing booking request for:", bookingData.coupleNames);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h1 style="color: #e91e63; margin-bottom: 20px;">New Wedding Booking Request</h1>
          
          <div style="background-color: #fce4ec; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #c2185b; margin-top: 0;">Wedding Details</h2>
            <p><strong>Couple Names:</strong> ${bookingData.coupleNames}</p>
            <p><strong>Wedding Date:</strong> ${bookingData.weddingDate}</p>
            <p><strong>Venue:</strong> ${bookingData.venue || 'Not specified'}</p>
            <p><strong>Guest Count:</strong> ${bookingData.guestCount || 'Not specified'}</p>
            <p><strong>Ceremony Time:</strong> ${bookingData.ceremonyTime || 'Not specified'}</p>
            <p><strong>Reception Time:</strong> ${bookingData.receptionTime || 'Not specified'}</p>
          </div>

          <div style="background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #1976d2; margin-top: 0;">Package & Add-ons</h2>
            <p><strong>Selected Package:</strong> ${bookingData.packageLabel}</p>
            <p><strong>Add-ons:</strong> ${bookingData.addOns.length > 0 ? bookingData.addOns.join(', ') : 'None selected'}</p>
          </div>

          <div style="background-color: #f3e5f5; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #7b1fa2; margin-top: 0;">Contact Information</h2>
            <p><strong>Email:</strong> <a href="mailto:${bookingData.email}">${bookingData.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${bookingData.phone}">${bookingData.phone}</a></p>
            <p><strong>How they heard about us:</strong> ${bookingData.hearAboutUs || 'Not specified'}</p>
          </div>

          ${bookingData.message ? `
          <div style="background-color: #fff3e0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #f57c00; margin-top: 0;">Wedding Vision</h2>
            <p>${bookingData.message}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0; text-align: center; color: #666;">
            <p>This booking request was submitted via Big Day Story Carolinas website</p>
          </div>
        </div>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "Big Day Story Booking <onboarding@resend.dev>",
      to: ["info@bigdaystory.com"],
      replyTo: bookingData.email,
      subject: `New Wedding Booking: ${bookingData.coupleNames} - ${bookingData.weddingDate}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
