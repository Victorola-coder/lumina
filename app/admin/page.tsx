import { prisma } from "@/app/lib/prisma";
import { WaitlistEntries } from "./waitlist-entries";
import { ContactSubmissions } from "./contact-submissions";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const waitlistEntries = await prisma.waitlistEntry.findMany({
    orderBy: { createdAt: "desc" },
  });

  const contactSubmissions = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-dark-100 text-light p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-display font-medium mb-8">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <WaitlistEntries entries={waitlistEntries} />
          <ContactSubmissions submissions={contactSubmissions} />
        </div>
      </div>
    </div>
  );
}
