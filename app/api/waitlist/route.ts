import { z } from "zod";
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// Define validation schema
const waitlistSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input
    const validatedData = waitlistSchema.parse(body);

    // Check if email already exists
    const existingEntry = await prisma.waitlistEntry.findUnique({
      where: { email: validatedData.email },
    });

    if (existingEntry) {
      return NextResponse.json(
        { success: true, message: "You are already on our waitlist!" },
        { status: 200 }
      );
    }

    // Create new waitlist entry
    const newEntry = await prisma.waitlistEntry.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
      },
    });

    return NextResponse.json(
      { success: true, message: "Successfully added to waitlist!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Validation error", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Failed to add to waitlist" },
      { status: 500 }
    );
  }
}
