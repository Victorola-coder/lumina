"use client";

import { WaitlistEntry } from "@prisma/client";
import { useState } from "react";

interface WaitlistEntriesProps {
  entries: WaitlistEntry[];
}

export function WaitlistEntries({ entries }: WaitlistEntriesProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEntries = entries.filter(
    (entry) =>
      entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-dark-100/50 backdrop-blur rounded-xl border border-light/10 p-6">
      <h2 className="text-xl font-display font-medium mb-4">
        Waitlist Entries ({entries.length})
      </h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full px-4 py-2 bg-dark-100/50 border border-light/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-light/10">
              <th className="text-left py-3 px-4 text-light/60 text-sm">
                Name
              </th>
              <th className="text-left py-3 px-4 text-light/60 text-sm">
                Email
              </th>
              <th className="text-left py-3 px-4 text-light/60 text-sm">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.length > 0 ? (
              filteredEntries.map((entry) => (
                <tr
                  key={entry.id}
                  className="border-b border-light/5 hover:bg-light/5"
                >
                  <td className="py-3 px-4">{entry.name}</td>
                  <td className="py-3 px-4">{entry.email}</td>
                  <td className="py-3 px-4 text-light/60 text-sm">
                    {new Date(entry.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="py-8 text-center text-light/40">
                  {searchTerm
                    ? "No matching entries found"
                    : "No waitlist entries yet"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
