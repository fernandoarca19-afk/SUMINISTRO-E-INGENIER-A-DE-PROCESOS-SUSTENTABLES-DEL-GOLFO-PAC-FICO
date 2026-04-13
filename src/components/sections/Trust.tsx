import { TRUST_SIGNALS } from "@/constants/copy";
import { CheckCircle2, ShieldCheck, Truck, Map } from "lucide-react";
import { motion } from "motion/react";

const icons = [ShieldCheck, CheckCircle2, Truck, Map];

export function Trust() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100">
            <ShieldCheck className="h-10 w-10 text-primary shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900">Certificados</h3>
              <p className="text-xs text-slate-500">PEMEX, CFE y SAT</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100">
            <CheckCircle2 className="h-10 w-10 text-primary shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900">Experiencia</h3>
              <p className="text-xs text-slate-500">Equipo con 25+ años</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100">
            <Truck className="h-10 w-10 text-primary shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900">Entrega Rápida</h3>
              <p className="text-xs text-slate-500">Logística especializada</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100">
            <Map className="h-10 w-10 text-primary shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900">Cobertura</h3>
              <p className="text-xs text-slate-500">Golfo y Pacífico</p>
            </div>
          </div>
        </div>

        {/* Client Logos Placeholder */}
        <div className="mt-16 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Empresas que confían en nosotros</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="text-2xl font-black text-slate-400">PEMEX</div>
            <div className="text-2xl font-black text-slate-400">CFE</div>
            <div className="text-2xl font-black text-slate-400">STX</div>
            <div className="text-2xl font-black text-slate-400">HYUNDAI</div>
            <div className="text-2xl font-black text-slate-400">WARTSILA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
