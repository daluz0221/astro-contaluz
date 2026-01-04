import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  show: boolean;
  success?: boolean;
  onClose: () => void;
}

export default function Modal({ show, success = true, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8 max-w-sm text-center"
          >
            <h3
              className={`text-xl font-bold mb-4 ${
                success ? "text-green-600" : "text-red-600"
              }`}
            >
              {success
                ? "✅ Mensaje enviado con éxito"
                : "❌ Error al enviar el mensaje"}
            </h3>
            <p className="text-[var(--text)] mb-6">
              {success
                ? "Gracias por contactarnos, te responderemos pronto."
                : "Por favor intenta de nuevo en unos minutos."}
            </p>
            <button
              onClick={onClose}
              className="bg-[var(--primary)] hover:bg-[var(--primaryHover)] text-white px-6 py-2 rounded-lg"
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}