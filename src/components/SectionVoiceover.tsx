import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useVoiceover } from '../context/VoiceoverContext';

interface SectionVoiceoverProps {
  sectionId: string;
  text: string | string[];
  className?: string;
  size?: 'sm' | 'md';
}

export default function SectionVoiceover({ sectionId, text, className = '', size = 'md' }: SectionVoiceoverProps) {
  const { isPlaying, activeSection, toggleVoiceover, isSupported } = useVoiceover();
  
  if (!isSupported) return null;

  const isActive = isPlaying && activeSection === sectionId;
  const sizeClasses = size === 'sm' ? 'p-1.5' : 'p-2';
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <button 
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleVoiceover(sectionId, text); }}
      className={`inline-flex items-center justify-center rounded-full transition-colors ${isActive ? 'bg-purple-500 text-white' : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'} ${sizeClasses} ${className}`}
      title={isActive ? "Stop voiceover" : "Play voiceover"}
      aria-label={isActive ? "Stop voiceover" : "Play voiceover"}
    >
      {isActive ? <VolumeX className={iconSize} /> : <Volume2 className={iconSize} />}
    </button>
  );
}
