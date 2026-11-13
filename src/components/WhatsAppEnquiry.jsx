
import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '910000000000'; // Replace with academy WhatsApp number

function WhatsAppEnquiry() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    age: '',
    program: 'Beginner Karate',
    message: ''
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello Achievers Karate Academy!

Name: ${form.name}
Phone: ${form.phone}
Age: ${form.age}
Interested Program: ${form.program}
Message: ${form.message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="enquiry-section" id="enquiry">
      <div className="enquiry-content">
        <span className="section-label">YOUR JOURNEY STARTS HERE</span>
        <h2>READY TO <span>BEGIN?</span></h2>
        <p>Take your first step towards strength, confidence and discipline.</p>

        <div className="enquiry-contact">
          <MessageCircle size={22} />
          <span>Connect with us directly on WhatsApp.</span>
        </div>
      </div>

      <form className="enquiry-form" onSubmit={handleSubmit}>
        <h3>ENQUIRE NOW</h3>

        <label htmlFor="enquiry-name">Your Name</label>
        <input
          id="enquiry-name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="enquiry-phone">Phone Number</label>
        <input
          id="enquiry-phone"
          name="phone"
          type="tel"
          pattern="[0-9+\-\s]{10,15}"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label htmlFor="enquiry-age">Age</label>
        <input
          id="enquiry-age"
          name="age"
          type="number"
          min="4"
          max="100"
          value={form.age}
          onChange={handleChange}
          placeholder="Enter your age"
          required
        />

        <label htmlFor="enquiry-program">Interested Program</label>
        <select
          id="enquiry-program"
          name="program"
          value={form.program}
          onChange={handleChange}
        >
          <option>Beginner Karate</option>
          <option>Kids Karate</option>
          <option>Advanced Karate</option>
          <option>Self Defence</option>
          <option>Fitness Training</option>
        </select>

        <label htmlFor="enquiry-message">Message</label>
        <textarea
          id="enquiry-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what you would like to know..."
          rows="3"
        />

        <button type="submit">
          SEND ENQUIRY ON WHATSAPP <Send size={17} />
        </button>
      </form>
    </section>
  );
}

export default WhatsAppEnquiry;
