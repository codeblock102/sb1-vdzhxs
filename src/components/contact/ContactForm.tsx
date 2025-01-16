import React from "react";

const subjects = [
  { value: "website-creation", label: "Website Creation" },
  { value: "website-redesign", label: "Website Redesign" },
  { value: "seo-services", label: "SEO Services" },
  { value: "maintenance", label: "Website Maintenance" },
  { value: "custom-development", label: "Custom Development" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...formData }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert("Error: " + error));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      name="contact-form"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="subject">Subject</label>
      <select
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      >
        <option value="">Select a subject</option>
        {subjects.map((subject) => (
          <option key={subject.value} value={subject.value}>
            {subject.label}
          </option>
        ))}
      </select>
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Send Message</button>
    </form>
  );
}
