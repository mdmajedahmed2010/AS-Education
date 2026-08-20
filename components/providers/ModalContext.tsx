'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import ConsultationModal from '@/components/modals/ConsultationModal';

interface ModalOptions {
  country?: string;
  studyLevel?: string;
  service?: string;
}

interface ModalContextType {
  isOpen: boolean;
  openModal: (options?: ModalOptions) => void;
  closeModal: () => void;
  options: ModalOptions;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ModalOptions>({
    country: 'United Kingdom',
    studyLevel: 'Postgraduate (Masters)',
    service: 'General Admission & Visa Counseling',
  });

  const openModal = (opts?: ModalOptions) => {
    if (opts) {
      setOptions(prev => ({
        ...prev,
        ...opts,
      }));
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, options }}>
      {children}
      <ConsultationModal
        isOpen={isOpen}
        onClose={closeModal}
        defaultCountry={options.country}
      />
    </ModalContext.Provider>
  );
}

export function useConsultationModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useConsultationModal must be used within a ModalProvider');
  }
  return context;
}
