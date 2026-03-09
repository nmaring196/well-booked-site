import React, { useState, useEffect } from 'react';

interface LeadFormProps {
  initialChallenges?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ initialChallenges = '' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    businessName: '',
    employees: '',
    address: '',
    message: initialChallenges
  });

  useEffect(() => {
    setFormData(prev => ({ ...prev, message: initialChallenges }));
  }, [initialChallenges]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const encode = (data: any) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting lead:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return (
    <div className="py-48 text-center text-white">
      <h3 className="display text-5xl font-bold">Request Received.</h3>
      <p className="text-slate-400 mt-4 italic">Your request is being prepared. We will contact you within 24 hours.</p>
    </div>
  );

  return (
    <section className="py-32 bg-brand-primary relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <form 
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit} 
          className="glass p-12 rounded-[3rem] grid md:grid-cols-2 gap-8 shadow-2xl"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="md:col-span-2 text-center mb-10">
            <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-white/10 bg-white/5 text-[10px] display uppercase tracking-[0.5em] text-slate-400">
              Get In Touch
            </div>
            <h2 className="display text-5xl text-white font-bold tracking-tight">Contact Us.</h2>
            <p className="text-slate-400 mt-4 italic font-light display text-xl leading-relaxed">Claim your free mini diagnosis or book a discovery call</p>
          </div>
          <input 
            required 
            type="text" 
            placeholder="Name" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="p-5 bg-white/5 border border-white/10 rounded-xl text-white focus:border-white/30 outline-none transition-all" 
          />
          <input 
            required 
            type="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="p-5 bg-white/5 border border-white/10 rounded-xl text-white focus:border-white/30 outline-none transition-all" 
          />
          <input 
            required 
            type="text" 
            placeholder="Business Name" 
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className="p-5 bg-white/5 border border-white/10 rounded-xl text-white focus:border-white/30 outline-none transition-all" 
          />
          <input 
            required 
            type="number" 
            placeholder="Number of employees" 
            value={formData.employees}
            onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
            className="p-5 bg-white/5 border border-white/10 rounded-xl text-white focus:border-white/30 outline-none transition-all" 
          />
          <input 
            required 
            type="text" 
            placeholder="Company, city, or address" 
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="p-5 bg-white/5 border border-white/10 rounded-xl text-white md:col-span-2 focus:border-white/30 outline-none transition-all" 
          />
          <textarea 
            required 
            placeholder="Please describe your challenges or what you want out of your bookkeeping..." 
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="p-5 bg-white/5 border border-white/10 rounded-xl text-white md:col-span-2 focus:border-white/30 outline-none transition-all h-32 resize-none" 
          />
          <button 
            disabled={loading}
            className="md:col-span-2 py-6 bg-white text-brand-primary font-black uppercase tracking-[0.5em] text-[11px] rounded-full hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </section>
  );
};
