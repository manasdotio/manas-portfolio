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

    // 1. Deliver to Web3Forms (forwards directly to Gmail)
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY || "020d8940-66fd-4bcd-bc6e-eb6c105f2dc7";

    const web3Res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: web3Key,
        name,
        email,
        message,
        from_name: "Portfolio Contact Form",
        subject: `New message from ${name} (manassingh.dev)`,
      }),
    });

    const web3Data = await web3Res.json();
    if (!web3Data.success) {
      throw new Error(web3Data.message || "Failed to send message via Web3Forms.");
    }

    // 2. Optional: Resend or Webhook if configured in environment
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
