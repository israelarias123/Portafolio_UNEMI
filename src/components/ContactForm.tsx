import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const scriptURL =
  'https://script.google.com/macros/s/AKfycbyx6EDR1e3ocf7PFRwAcv53VK9JB02ZM_0U--09WWcb8KdO3dlXludHhhkALeVTsxL3zA/exec';

interface FormData {
  nombre: string;
  correo: string;
  mensaje: string;
}

type Status = 'idle' | 'loading' | 'ok' | 'error';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    mensaje: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(formData),
      });

      setStatus('ok');
      setFormData({ nombre: '', correo: '', mensaje: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('Error al enviar:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputClasses =
    'w-full px-4 py-2.5 rounded-md text-sm bg-slate-50 dark:bg-[#1E1E24] border border-slate-200 dark:border-[#2A2A35] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#6A6A75] focus:outline-none focus:border-[#0088A3] dark:focus:border-[#00E5FF] transition-colors';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="nombre"
            className="block text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2"
          >
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="correo"
            className="block text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2"
          >
            Correo
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            required
            value={formData.correo}
            onChange={handleChange}
            placeholder="tu@correo.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="block text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2"
        >
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-xs text-slate-500 dark:text-[#6A6A75]">
          Tus datos se envían de forma segura a Google Sheets.
        </p>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-md text-sm font-semibold text-white dark:text-[#0A0A0F] bg-[#0088A3] dark:bg-[#00E5FF] hover:bg-[#007088] dark:hover:bg-[#00E5FF]/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Enviar Mensaje
            </>
          )}
        </button>
      </div>

      {status === 'ok' && (
        <div className="flex items-center gap-2 p-3 rounded-md text-sm text-[#0088A3] dark:text-[#00E5FF] bg-[#0088A3]/10 dark:bg-[#00E5FF]/10 border border-[#0088A3]/20 dark:border-[#00E5FF]/20">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>¡Mensaje enviado con éxito! Te responderé pronto.</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 rounded-md text-sm text-red-600 dark:text-red-400 bg-red-500/10 border border-red-500/20">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Hubo un error al enviar. Intenta de nuevo.</span>
        </div>
      )}
    </form>
  );
};
