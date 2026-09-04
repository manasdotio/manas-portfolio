import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // NOTE: Web3Forms is called directly from the browser (QuickContactForm.tsx)
    // because their API is behind Cloudflare which blocks server-side Node.js requests.
    // This route is kept as an optional secondary delivery sink (Resend / webhook).

    const resendKey = process.env.RESEND_API_KEY;
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "portfolio@manassingh.dev",
          to: "manasdotio@gmail.com",
          subject: `Portfolio Contact from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        }),
      }).catch((e) => console.error("Resend error:", e));
    } else if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, timestamp: new Date().toISOString() }),
      }).catch((e) => console.error("Webhook error:", e));
    }

    return NextResponse.json({
      success: true,
      message: "Message received! I'll get back to you as soon as possible.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please reach out directly to manasdotio@gmail.com." },
      { status: 500 }
    );
  }
}
