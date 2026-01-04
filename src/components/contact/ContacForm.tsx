import React, { useState } from 'react'
import Modal from './ContactModal';

export const ContactForm = () => {

      const [loading, setLoading] = useState(false);
      const [modal, setModal] = useState<{ show: boolean; success: boolean }>({
            show: false,
            success: true,
        });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mblazaak", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      console.log(response);
      

      if (response.ok) {
        setModal({ show: true, success: true });
        form.reset();
      } else {
        setModal({ show: true, success: false });
      }
    } catch (error) {
        console.log(error);
        
      setModal({ show: true, success: false });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className=' py-16' id='contacto'>
        <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8 text-center">
          Ponte en contacto
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-6 space-y-4"
        >
           
          <div>
            <label className="block mb-1 text-sm font-medium text-[#2c3e50]">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ecc71]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-[#2c3e50]">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ecc71]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-[#2c3e50]">
              Mensaje
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ecc71]"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
        {/* 👇 Usamos el Modal externo */}
      <Modal
        show={modal.show}
        success={modal.success}
        onClose={() => setModal({ ...modal, show: false })}
      />
    </section>
  )
}