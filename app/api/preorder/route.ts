import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, address, city, state, zip } =
      body;

    // Validate required fields
    if (!firstName || !lastName || !email || !address || !city || !state || !zip) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Send notification email to you
    await resend.emails.send({
      from: "bacctrack Pre-Orders <onboarding@resend.dev>",
      to: "johnsonliam479@gmail.com",
      subject: `New Pre-Order: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; font-weight: 300; letter-spacing: 0.05em; border-bottom: 1px solid #e8e4df; padding-bottom: 16px;">
            New bacctrack Pre-Order
          </h1>

          <div style="margin: 24px 0;">
            <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 4px;">Customer</p>
            <p style="font-size: 16px; margin: 0;">${firstName} ${lastName}</p>
          </div>

          <div style="margin: 24px 0;">
            <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 4px;">Email</p>
            <p style="font-size: 16px; margin: 0;">${email}</p>
          </div>

          <div style="margin: 24px 0;">
            <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 4px;">Phone</p>
            <p style="font-size: 16px; margin: 0;">${phone || "Not provided"}</p>
          </div>

          <div style="margin: 24px 0;">
            <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 4px;">Shipping Address</p>
            <p style="font-size: 16px; margin: 0;">
              ${address}<br/>
              ${city}, ${state} ${zip}
            </p>
          </div>

          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e8e4df;">
            <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em;">
              Order Amount: $149 USD &middot; bacctrack Vault
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: "bacctrack <onboarding@resend.dev>",
      to: email,
      subject: "Your bacctrack Pre-Order is Confirmed",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 28px; font-weight: 400; letter-spacing: -0.02em; margin-bottom: 32px;">
            bacctrack
          </h1>

          <p style="font-size: 16px; font-weight: 300; color: #444; line-height: 1.6;">
            Hey ${firstName},
          </p>
          <p style="font-size: 16px; font-weight: 300; color: #444; line-height: 1.6;">
            Your pre-order for the bacctrack vault has been received. You won't be charged until we ship. Estimated delivery: Q1 2027.
          </p>
          <p style="font-size: 16px; font-weight: 300; color: #444; line-height: 1.6;">
            We'll keep you updated on production milestones and your shipping status.
          </p>

          <div style="margin: 32px 0; padding: 24px; background: #f8f6f3; border: 1px solid #e8e4df;">
            <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; margin: 0 0 8px 0;">Order Summary</p>
            <p style="font-size: 16px; margin: 0 0 4px 0;">bacctrack Vault — $149 USD</p>
            <p style="font-size: 14px; color: #666; margin: 0;">Free Shipping &middot; USB-C Cable &middot; Companion App</p>
          </div>

          <p style="font-size: 14px; color: #888; margin-top: 32px;">
            Questions? Reply to this email or reach out anytime.
          </p>

          <div style="margin-top: 40px; padding-top: 16px; border-top: 1px solid #e8e4df;">
            <p style="color: #aaa; font-size: 11px; text-transform: uppercase; letter-spacing: 0.3em;">
              bacctrack &middot; San Diego, CA
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Pre-order error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
