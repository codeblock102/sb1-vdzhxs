import React from 'react';
import { InlineWidget } from 'react-calendly';
import { Clock, Users, FileText } from 'lucide-react';

const consultationHighlights = [
  {
    icon: Clock,
    title: 'Quick 30-Min Session',
    description: 'Brief but comprehensive discussion of your project needs'
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Meet with our senior web development team'
  },
  {
    icon: FileText,
    title: 'Custom Proposal',
    description: 'Receive a tailored plan and quote after the call'
  }
];

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#F5F5F5] pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Information */}
          <div className="py-4 lg:py-8">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold text-[#00274D] mb-6">
                Book Your Free Strategy Session
              </h1>
              <p className="text-lg text-gray-600 mb-12">
                Schedule a complimentary consultation to discuss your project and explore how we can transform your digital presence.
              </p>

              <div className="grid gap-8">
                {consultationHighlights.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 bg-white/50 backdrop-blur-sm p-4 rounded-lg"
                  >
                    <div className="bg-[#00274D]/5 p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-[#00A9E0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#00274D] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Calendly */}
          <div className="py-4 lg:py-8">
            <div className="bg-white rounded-xl shadow-sm h-[600px]">
              <InlineWidget
                url="https://calendly.com/nazeefsuleman/30min"
                styles={{
                  height: '100%',
                  width: '100%'
                }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: true,
                  hideLandingPageDetails: true,
                  primaryColor: '00A9E0',
                  textColor: '00274D'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}