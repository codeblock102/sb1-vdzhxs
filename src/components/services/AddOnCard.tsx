import React from 'react';
import { Plus } from 'lucide-react';

interface AddOnCardProps {
  title: string;
  features: string[];
}

export default function AddOnCard({ title, features }: AddOnCardProps) {
  return (
    <div className="card p-6 text-center h-full">
      <div>
        <Plus className="w-8 h-8 text-[#00A9E0] mb-3 mx-auto" />
        <h4 className="text-white font-semibold mb-4">{title}</h4>
        <ul className="text-left space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-300 text-sm flex items-start">
              <span className="text-[#00A9E0] mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}