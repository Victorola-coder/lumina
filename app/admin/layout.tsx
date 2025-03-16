import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LensX Admin",
  description: "Admin dashboard for LensX",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-dark text-light">
          <header className="bg-dark-100/80 backdrop-blur-lg border-b border-light/5 py-4">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xl font-display font-medium">
                    LensX Admin
                  </span>
                </div>
              </div>
            </div>
          </header>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
