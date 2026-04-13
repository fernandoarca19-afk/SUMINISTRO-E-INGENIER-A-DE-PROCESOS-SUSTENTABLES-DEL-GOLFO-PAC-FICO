import { INDUSTRIES } from "@/constants/copy";
import { motion } from "motion/react";

export function Industries() {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Sectores que Atendemos</h2>
            <h3 className="text-4xl font-bold mb-8 tracking-tight">
              Presencia Estratégica en las Industrias más Exigentes
            </h3>
            <div className="space-y-8">
              {INDUSTRIES.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-3 text-primary">{industry.title}</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">
                      <span className="font-bold text-slate-200">Desafío:</span> {industry.painPoints}
                    </p>
                    <p className="text-sm text-slate-400">
                      <span className="font-bold text-slate-200">Nuestra Solución:</span> {industry.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80"
                alt="Oil Platform"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 p-6 bg-primary rounded-2xl shadow-2xl">
              <p className="text-4xl font-black text-white">100%</p>
              <p className="text-xs font-bold text-white/80 uppercase tracking-wider">Cumplimiento Normativo</p>
            </div>
            <div className="absolute -top-6 -right-6 p-6 bg-white rounded-2xl shadow-2xl hidden sm:block">
              <p className="text-4xl font-black text-slate-950">24/7</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Operación Continua</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
