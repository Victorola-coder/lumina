"use client";

import { useState } from "react";
import { ContactSubmission } from "@prisma/client";

interface ContactSubmissionsProps {
  submissions: ContactSubmission[];
}

export function ContactSubmissions({ submissions }: ContactSubmissionsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredSubmissions = submissions.filter(
    (submission) =>
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-dark-100/50 backdrop-blur rounded-xl border border-light/10 p-6">
      <h2 className="text-xl font-display font-medium mb-4">
        Contact Submissions ({submissions.length})
      </h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, email, or message..."
          className="w-full px-4 py-2 bg-dark-100/50 border border-light/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredSubmissions.length > 0 ? (
        <div className="space-y-4">
          {filteredSubmissions.map((submission) => (
            <div
              key={submission.id}
              className="border border-light/10 rounded-lg overflow-hidden"
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-light/5"
                onClick={() => toggleExpand(submission.id)}
              >
                <div>
                  <h3 className="font-medium">{submission.name}</h3>
                  <p className="text-light/60 text-sm">{submission.email}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-light/40 text-sm mr-3">
                    {new Date(submission.createdAt).toLocaleDateString()}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform ${
                      expandedId === submission.id ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              {expandedId === submission.id && (
                <div className="p-4 border-t border-light/10 bg-dark-100/30">
                  <p className="whitespace-pre-wrap">{submission.message}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center text-light/40">
          {searchTerm
            ? "No matching submissions found"
            : "No contact submissions yet"}
        </div>
      )}
    </div>
  );
}
