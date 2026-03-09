import React from 'react';

const services = [
  {
    title: "QuickBooks Cleanup",
    description: "Untangling months or years of messy data to give you a clean slate and accurate historical records.",
    icon: "✨"
  },
  {
    title: "Monthly Bookkeeping",
    description: "Ongoing, precise management of your transactions, reconciliations, and financial health.",
    icon: "📊"
  },
  {
    title: "Financial Reporting",
    description: "Clear, actionable insights every month so you know exactly where your business stands.",
    icon: "📈"
  },
  {
    title: "Accounts Payable/Receivable",
    description: "Streamlined management of your cash flow, ensuring you get paid and your bills are handled.",
    icon: "💸"
  }
];

export const Services = () => {
  return (
    <section className="py-32 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 text-[10px] display uppercase tracking-[0.5em] text-slate-400">
            Our Expertise
          </div>
          <h2 className="display text-6xl text-white font-bold tracking-tight">Precision Services.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass p-8 rounded-[2rem] hover:bg-white/5 transition-all group">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="display text-2xl text-white font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
