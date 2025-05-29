import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <section className="w-full py-16 px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-thick text-4xl text-blue-900 mb-6">Contact Us</h1>
          <p className="text-lg text-blue-800 mb-8">Questions? Suggestions? Reach out below!</p>
          <form onSubmit={handleSubmit} className="bg-blue-50 p-8 shadow flex flex-col space-y-6">
            <input 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="p-3 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300" 
              type="text" 
              placeholder="Your Name" 
              required 
              disabled={isLoading}
            />
            <input 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="p-3 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300" 
              type="email" 
              placeholder="Your Email" 
              required 
              disabled={isLoading}
            />
            <input 
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className="p-3 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300" 
              type="text" 
              placeholder="Subject" 
              required 
              disabled={isLoading}
            />
            <textarea 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="p-3 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300" 
              placeholder="Your Message" 
              rows={4} 
              required 
              disabled={isLoading}
            />
            <button 
              className="bg-blue-500 text-white py-3 font-thick text-lg hover:bg-blue-600 transition disabled:opacity-50" 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
            {status && (
              <p className={`text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
