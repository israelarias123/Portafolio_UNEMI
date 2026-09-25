import { useState } from 'react';

const scriptURL = 'https://script.google.com/macros/s/AKfycbyx6EDR1e3ocf7PFRwAcv53VK9JB02ZM_0U--09WWcb8KdO3dlXludHhhkALeVTsxL3zA/exec'; // Tu URL

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });
  const [enviando, setEnviando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensajeExito('');

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Importante para evitar bloqueos de CORS
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Con 'no-cors' no podemos leer la respuesta, pero asumimos éxito
      setMensajeExito('¡Mensaje enviado con éxito!');
      setFormData({ nombre: '', correo: '', mensaje: '' });
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error. Intenta de nuevo.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" disabled={enviando}>
        {enviando ? 'Enviando...' : 'Enviar'}
      </button>

      {mensajeExito && <p style={{ color: 'green' }}>{mensajeExito}</p>}
    </form>
  );
}
