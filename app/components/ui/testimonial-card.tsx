"use client";

import { motion } from "framer-motion";
import { Image } from ".";
import { Glow } from "../global";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  delay?: number;
}

export default function TestimonialCard({
  name,
  role,
  quote,
  avatar,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <Glow className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image src={avatar} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-gray-400 text-sm">{role}</p>
            <p className="mt-4 text-gray-300 italic">&ldquo;{quote}&rdquo;</p>
          </div>
        </div>
      </Glow>
    </motion.div>
  );
}
