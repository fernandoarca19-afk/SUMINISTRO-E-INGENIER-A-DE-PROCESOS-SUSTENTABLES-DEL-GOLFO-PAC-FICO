import { Button } from "../ui/button";
import { CONTACT_INFO } from "@/constants/copy";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      {/* Background Pattern/Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          alt="Industrial Engineering"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6">
              Ingeniería y Suministro Industrial Certificado
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Soluciones de Ingeniería para el <span className="text-primary">Sector Energético y Marítimo</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Suministro inmediato de refacciones críticas, mantenimiento especializado y soluciones de automatización para PEMEX, CFE y la industria offshore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 h-14 bg-primary hover:bg-primary/90" nativeButton={false} render={<Link to="/contacto" />}>
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-14 text-white border-slate-700 hover:bg-slate-800" nativeButton={false} render={<Link to="/servicios" />}>
                Ver Servicios
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-slate-800 pt-8"
          >
            <div>
              <p className="text-3xl font-bold text-white">25+</p>
              <p className="text-sm text-slate-400">Años de experiencia</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-sm text-slate-400">Soporte técnico</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">OEM</p>
              <p className="text-sm text-slate-400">Partes originales</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-slate-400">Garantía técnica</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
