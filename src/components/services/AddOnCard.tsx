import React from 'react';
import { Plus } from 'lucide-react';

interface AddOnCardProps {
  title: string;
  price: number;
  unit: string;
}

export default function AddOnCard({ title, price, unit }: AddOnCardProps) {
  return (
    <div className="card p-4 text-center">
      <Plus className="w-8 h-8 text-[#00A9E0] mb-3 mx-auto" />
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      {/* <p className="text-xl font-bold text-[#00A9E0]">
        ${price}
        <span className="text-sm font-normal text-gray-400 block">
          {unit}
        </span>
      </p> */}
    </div>
  );
}