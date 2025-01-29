"use client";

import { useState } from "react";
import { Modal, Input, Button } from ".";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Join the Waitlist">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
        />
        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
        />
        <textarea
          placeholder="Why are you interested in Lumina?"
          value={formData.reason}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setFormData({ ...formData, reason: e.target.value })
          }
          className="w-full min-h-[100px] bg-dark/50 rounded-lg p-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button variant="primary" className="w-full" type="submit">
          Join Waitlist
        </Button>
      </form>
    </Modal>
  );
}
