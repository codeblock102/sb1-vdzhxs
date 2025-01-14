import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#00274D] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white relative">
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#00A9E0]" />
              </div>
              <span className="text-2xl font-bold">BLANQ</span>
            </div>
            <p className="text-gray-300">Creating digital experiences that inspire and engage.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Website Redesign</li>
              <li>SEO Optimization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Our Work</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Blanqdigital" className="text-gray-300 hover:text-[#00A9E0]">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/blanqdigital/" className="text-gray-300 hover:text-[#00A9E0]">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00A9E0]">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Blanq Web Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}