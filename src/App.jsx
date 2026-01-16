import React, { useState } from 'react';
import TelegramForm from './components/TelegramForm';

function App() {
  return (
    <div className="bg-white text-slate-900 selection:bg-blue-100">
      {/* Навигация */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">MY_BRAND</span>
          <a href="#contact" className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all">
            Связаться
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 animate-fade-in">
              Учебный, ненастоящий сайт. Лучшие перевозки <br /> <span className="text-blue-600">только для вас</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
              Быстрый, надежный и современный транзит. 
              Забудьте о сложных проблемах — только удобная доставка и высокий приоритет.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-200 transition-all">
                Подать заявку
              </a>
              <button className="px-8 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all">
                Узнать больше
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { title: 'Скорость', desc: 'Загрузка, разгрузка.' },
              { title: 'Удобство', desc: 'Оставляйте заявку и мы свяжемся с вами.' },
              { title: 'Telegram', desc: 'Заявки прилетают мгновенно в наш телеграм.' },
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Вам необходимо что-то перевезти?</h2>
              <p className="text-slate-500">Оставьте контакты, и мы напишем вам в течение 15 минут.</p>
            </div>
            <div className="bg-white p-2 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100">
               <TelegramForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-100">
        © 2026 My Brand. Built with React & Vite.
      </footer>
    </div>
  );
}

export default App;