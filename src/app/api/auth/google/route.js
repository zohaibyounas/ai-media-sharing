import { NextResponse } from "next/server";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(
  "656438575097-1o2lffjt39mbqhjg5fqmnon3iun7aj37.apps.googleusercontent.com"
);

export async function POST(req) {
  try {
    const { idToken } = await req.json();

    if (!idToken) {
      return NextResponse.json({ error: "Missing idToken" }, { status: 400 });
    }

    // Verify token
    const ticket = await client.verifyIdToken({
      idToken,
      audience:
        "656438575097-1o2lffjt39mbqhjg5fqmnon3iun7aj37.apps.googleusercontent.com",
    });

    const payload = ticket.getPayload();

    // Example: extract user info
    const user = {
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
    };

    // You can create your own JWT or session here

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error("Google verification failed:", error);
    return NextResponse.json(
      { error: "Invalid Google ID token" },
      { status: 401 }
    );
  }
}
