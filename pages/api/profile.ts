// pages/api/profile.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

const PROFILE_API_ENDPOINT =
  "https://pw.intelladapt.com/AMOL/api/profile.php";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const token = req.cookies.token; // Retrieve the token from cookies

  if (!token) {
    return res.status(401).json({ error: "Access Denied: No token provided." });
  }

  try {
    const profileResponse = await fetch(PROFILE_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token }), // Send the token in the expected JSON format
    });

    if (profileResponse.ok) {
      const profileData = await profileResponse.json();
      res.status(200).json(profileData);
    } else {
      throw new Error(
        `Failed to fetch profile with status: ${profileResponse.status}`,
      );
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
