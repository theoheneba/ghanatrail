import React from 'react';
import { Palmtree } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Palmtree className="w-8 h-8 text-yellow-500" />
      <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
        GhanaTrail
      </span>
    </div>
  );
}