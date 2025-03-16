import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { z } from "zod";

// Define validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Create new contact submission
    const newSubmission = await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
      },
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact submission error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Validation error", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}
