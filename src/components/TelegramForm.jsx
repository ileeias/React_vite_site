import React, { useState } from 'react';

const TelegramForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);

  const token = import.meta.env.VITE_TELEGRAM_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    const text = `🚀 Новая заявка!\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📝 Доп информация: ${info}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML'
        }),
      });

      if (response.ok) {
        alert('Заявка отправлена!');
        setName('');
        setPhone('');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка при отправке');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="form-section">
      <form onSubmit={sendMessage} className="flex flex-col gap-4 max-w-sm mx-auto p-10">
        <h2 className="text-2xl font-bold">Оставить заявку</h2>
        <input 
          type="text" 
          placeholder="Ваше имя" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required 
        />
        <input 
          type="tel" 
          placeholder="Номер телефона" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 rounded"
          required 
        />
        <input 
          type="info" 
          placeholder="Доп информация" 
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          className="border p-2 rounded"
          required 
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Отправка...' : 'Отправить'}
        </button>
      </form>
    </section>
  );
};

export default TelegramForm;