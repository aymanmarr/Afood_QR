import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag,
  Smartphone,
  Globe,
  Star,
  MessageSquareWarning,
  Instagram,
  Facebook,
  Send,
  CheckCircle
} from 'lucide-react';
import logo from "./Assets/logo_afood_blam.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

function App() {
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setShowComplaintForm(false);
        setIsSuccess(false);
        setRating(0);
        setMessage('');
      }, 2000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-stone-50 bg-moroccan py-8 px-4">
      <motion.div
        className="max-w-md mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-200"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 px-6 py-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-moroccan opacity-10" />
            <div className="relative z-10">
              <motion.div
                className="w-24 h-24 mx-auto mb-4 bg-black rounded-full flex items-center justify-center shadow-xl border-2 border-amber-400 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={logo}
                  alt="Restaurant Logo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h1 className="text-3xl font-display font-bold text-amber-100 mb-2 drop-shadow-lg">
                Bienvenue chez Afood
              </h1>
              <p className="text-amber-200 text-lg font-elegant font-light drop-shadow">
                Le goût de l'authenticité
              </p>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <motion.a
              href="https://www.afood.store"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-950 hover:to-emerald-900 text-amber-100 font-semibold py-4 px-6 rounded-xl shadow-lg transition-all border border-amber-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingBag size={24} className="text-amber-400" />
              <span className="text-lg">Passer votre commande</span>
            </motion.a>

            <motion.a
              href="https://www.afood.store"
              className="flex items-center justify-center gap-3 w-full border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 font-semibold py-4 px-6 rounded-xl transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Smartphone size={24} className="text-amber-600" />
              <span className="text-lg">Télécharger l'Application Afood</span>
            </motion.a>

            <motion.a
              href="https://afood-seven.vercel.app/"
              className="flex items-center justify-center gap-3 w-full bg-stone-100 hover:bg-stone-200 text-emerald-900 font-medium py-4 px-6 rounded-xl transition-all border border-amber-200"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Globe size={22} className="text-amber-600" />
              <span>Visiter notre Site Web</span>
            </motion.a>
          </div>

          <motion.div
            className="px-6 pb-6"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 rounded-2xl p-6 border-2 border-amber-200 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-moroccan opacity-5" />
              <div className="relative z-10 space-y-4">
                <div>
                  <h2 className="text-xl font-display font-bold text-emerald-900 text-center mb-1">
                    Votre avis compte
                  </h2>
                  <p className="text-center text-sm text-amber-700 font-light">
                    Aidez-nous à servir mieux
                  </p>
                </div>

                <motion.a
                  href="https://maps.app.goo.gl/vHg3gXnSQ8gTyQRE9?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-3 w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-emerald-900 font-semibold py-4 px-6 rounded-xl shadow-xl transition-all group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition" />
                  <div className="relative flex items-center justify-center gap-3">
                    <Star size={24} fill="currentColor" />
                    <span className="text-center leading-tight">
                      Vous avez aimé ?<br />
                      <span className="text-sm">Donnez-nous 5 étoiles sur Google !</span>
                    </span>
                  </div>
                </motion.a>

                <motion.button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowComplaintForm(!showComplaintForm);
                  }}
                  className="flex items-center justify-center gap-3 w-full bg-white hover:bg-stone-50 text-emerald-900 font-medium py-4 px-6 rounded-xl border-2 border-amber-200 transition-all cursor-pointer active:bg-stone-100"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                >
                  <MessageSquareWarning size={22} className="text-amber-600 flex-shrink-0" />
                  <span>Faire une réclamation</span>
                </motion.button>

                <AnimatePresence>
                  {showComplaintForm && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {isSuccess ? (
                        <motion.div
                          className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-300 rounded-xl p-6 text-center"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                        >
                          <CheckCircle size={48} className="text-emerald-700 mx-auto mb-3" />
                          <p className="text-emerald-900 font-semibold text-lg font-display">
                            Merci !
                          </p>
                          <p className="text-emerald-700 text-sm mt-1">
                            Nous avons bien reçu votre message
                          </p>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmitFeedback} className="bg-white rounded-xl p-5 border-2 border-amber-200 space-y-4">
                          <div>
                            <label className="block text-sm font-elegant text-emerald-900 mb-3">
                              Votre évaluation
                            </label>
                            <div className="flex justify-center gap-3">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <motion.button
                                  key={star}
                                  type="button"
                                  onClick={() => setRating(star)}
                                  onMouseEnter={() => setHoverRating(star)}
                                  onMouseLeave={() => setHoverRating(0)}
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="focus:outline-none"
                                >
                                  <Star
                                    size={36}
                                    className={
                                      star <= (hoverRating || rating)
                                        ? "text-amber-500 fill-amber-500 drop-shadow-lg"
                                        : "text-stone-300"
                                    }
                                  />
                                </motion.button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-elegant text-emerald-900 mb-2">
                              Votre message
                            </label>
                            <textarea
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              rows={4}
                              className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-emerald-700 transition-colors resize-none bg-stone-50"
                              placeholder="Partagez votre expérience avec nous..."
                              required
                            />
                          </div>

                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-950 hover:to-emerald-900 disabled:bg-stone-300 text-amber-100 font-semibold py-3 px-6 rounded-lg transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {isSubmitting ? (
                              <div className="w-5 h-5 border-2 border-amber-300 border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <>
                                <Send size={20} />
                                <span>Envoyer</span>
                              </>
                            )}
                          </motion.button>
                        </form>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-b from-stone-100 to-stone-50 px-6 py-8 text-center border-t border-amber-200"
            variants={itemVariants}
          >
            <div className="flex justify-center gap-4 mb-4">
              <motion.a
                href="https://www.instagram.com/restaurant_afood/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-900 hover:text-amber-600 hover:shadow-lg transition-all border border-amber-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={24} />
              </motion.a>

              <motion.a
                href="https://facebook.com/restaurant_afood/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-900 hover:text-amber-600 hover:shadow-lg transition-all border border-amber-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={24} />
              </motion.a>

              <motion.a
                href="https://tiktok.com/restaurant_afood/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-900 hover:text-amber-600 hover:shadow-lg transition-all border border-amber-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://wa.me/212660600602"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-900 hover:text-amber-600 hover:shadow-lg transition-all border border-amber-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </motion.a>
            </div>

            <p className="text-emerald-800 text-sm font-elegant font-light">
              © 2025 Restaurant Afood. Tous droits réservés.
            </p>
            <p className="text-emerald-800 text-sm font-elegant font-light mt-1">
              Developed by <a href="https://www.medeclipse.ma" target="_blank" rel="noopener noreferrer" className="underline">medeclipse</a>
            </p>

          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
