import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuoteEmailRequest {
  name: string;
  email: string;
  phone: string;
  weddingDate?: string;
  venue?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received quote email request");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, weddingDate, venue, message }: QuoteEmailRequest = await req.json();
    console.log("Processing quote for:", email);

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #D4AF37 0%, #F4E5C2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 28px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-row { margin: 15px 0; padding: 10px; background: white; border-radius: 5px; }
            .label { font-weight: bold; color: #D4AF37; }
            .message-box { background: white; padding: 20px; border-radius: 5px; margin-top: 20px; border-left: 4px solid #D4AF37; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 New Quote Request</h1>
            </div>
            <div class="content">
              <h2 style="color: #D4AF37; margin-top: 0;">Wedding Photography Inquiry</h2>
              
              <div class="info-row">
                <span class="label">Name:</span> ${name}
              </div>
              
              <div class="info-row">
                <span class="label">Email:</span> ${email}
              </div>
              
              <div class="info-row">
                <span class="label">Phone:</span> ${phone}
              </div>
              
              ${weddingDate ? `
              <div class="info-row">
                <span class="label">Wedding Date:</span> ${weddingDate}
              </div>
              ` : ''}
              
              ${venue ? `
              <div class="info-row">
                <span class="label">Venue:</span> ${venue}
              </div>
              ` : ''}
              
              <div class="message-box">
                <div class="label">Message:</div>
                <p style="margin: 10px 0 0 0;">${message}</p>
              </div>
              
              <div class="footer">
                <p>This quote request was submitted through Big Day Story website.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "Big Day Story <onboarding@resend.dev>",
      to: ["info@bigdaystory.com"],
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: emailHtml,
    });

    console.log("Quote email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, data: emailResponse }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending quote email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
