"use server";

import { headers } from "next/headers";

interface FormData {
  fullName: string;
  organisation: string;
  designation: string;
  phone: string;
  email: string;
  stateCity: string;
  message: string;
}

export async function submitContactForm(data: FormData) {
  const PROD_API_URL = process.env.PROD_API_URL;
  const API_TOKEN = process.env.CONTACT_API_TOKEN;
  const API_COOKIE = process.env.CONTACT_API_COOKIE;

  if (!PROD_API_URL || !API_TOKEN || !API_COOKIE) {
    console.error("Missing environment variables for contact form");
    return { success: false, error: "Configuration error" };
  }

  // Split state and city from "State, City" format
  let state = "";
  let city = "";
  if (data.stateCity.includes(",")) {
    const parts = data.stateCity.split(",").map((s) => s.trim());
    state = parts[0] || "";
    city = parts[1] || "";
  } else {
    state = data.stateCity.trim();
  }

  // Get client IP
  const headerList = await headers();
  const ipAddress = headerList.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

  const payload = {
    name: data.fullName,
    organisation: data.organisation,
    designation: data.designation,
    phone: data.phone,
    email: data.email,
    state: state,
    city: city,
    message: data.message,
    meta: {},
    ip_address: ipAddress,
  };

  try {
    const response = await fetch(`${PROD_API_URL}/doc-glasses/contact?lang=en`, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-token": API_TOKEN,
        "source": "website",
        "Content-Type": "application/json",
        "Cookie": API_COOKIE,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("API Error:", errorData);
      return { success: false, error: "Failed to submit request" };
    }

    return { success: true };
  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, error: "An unexpected error occurred" };
  }
}
