import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingOption {
  monthly: number;
  oneTime: number;
}

interface PricingCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  pricing: PricingOption;
  setupFee: number;
  features: string[];
}

export default function PricingCard({
  icon: Icon,
  title,
  description,
  pricing,
  setupFee,
  features
}: PricingCardProps) {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'oneTime'>('monthly');

  const getBillingText = () => {
    return billingCycle === 'monthly' ? '/month' : ' one-time';
  };

  const getPrice = () => {
    return billingCycle === 'monthly' ? pricing.monthly : pricing.oneTime;
  };

  return (
    <div className="card p-6 h-full flex flex-col justify-between">
      <div>
        <Icon className="w-12 h-12 text-[#00A9E0] mb-4" />
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        {/* <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-lg text-sm ${
              billingCycle === 'monthly' ? 'bg-[#00A9E0] text-white' : 'text-gray-400'
            }`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm ${
              billingCycle === 'oneTime' ? 'bg-[#00A9E0] text-white' : 'text-gray-400'
            }`}
            onClick={() => setBillingCycle('oneTime')}
          >
            One-time
          </button>
        </div> */}

        <div className="space-y-2 mb-8">
          {features.map((feature, idx) => (
            <p key={idx} className="text-sm text-gray-400 flex items-start">
              <span className="mr-2">•</span>
              {feature}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-white/10">
        {/* <p className="text-2xl font-bold text-white mb-2">
          ${getPrice()}
          <span className="text-sm font-normal text-gray-400 ml-2">{getBillingText()}</span>
        </p>
        {billingCycle !== 'oneTime' && (
          <p className="text-sm text-[#00A9E0] mb-2 -mt-2">
            +${setupFee} setup fee
          </p>
        )} */}
        <Link
            to="/book"
            className="btn-primary w-full"
          >
            Get Started 

          </Link>
      </div>
    </div>
  );
}