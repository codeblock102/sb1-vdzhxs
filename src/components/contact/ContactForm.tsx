import React from 'react';

const subjects = [
  { value: 'website-creation', label: 'Website Creation' },
  { value: 'website-redesign', label: 'Website Redesign' },
  { value: 'seo-services', label: 'SEO Services' },
  { value: 'maintenance', label: 'Website Maintenance' },
  { value: 'custom-development', label: 'Custom Development' },
  { value: 'other', label: 'Other' }
];

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-[#00274D] mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:border-[#00A9E0]"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-[#00274D] mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:border-[#00A9E0]"
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-[#00274D] mb-2">Subject</label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:border-[#00A9E0]"
          required
        >
          <option value="">Select a subject</option>
          {subjects.map(subject => (
            <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-[#00274D] mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:border-[#00A9E0] h-32"
          placeholder="Your message"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn-primary w-full">
        Send Message
      </button>
    </form>
  );
}