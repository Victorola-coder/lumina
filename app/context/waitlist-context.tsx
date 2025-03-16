"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface WaitlistModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// Create the context with a default value
const WaitlistModalContext = createContext<WaitlistModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

// Custom hook to use the waitlist modal context
export const useWaitlistModal = () => useContext(WaitlistModalContext);

// Provider component
interface WaitlistModalProviderProps {
  children: ReactNode;
}

export function WaitlistModalProvider({
  children,
}: WaitlistModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <WaitlistModalContext.Provider
      value={{
        isOpen: isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </WaitlistModalContext.Provider>
  );
}
