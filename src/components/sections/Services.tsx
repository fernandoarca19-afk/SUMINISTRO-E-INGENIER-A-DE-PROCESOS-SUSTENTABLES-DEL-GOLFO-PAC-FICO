import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SERVICES } from "../../constants/copy";
import { Settings, Droplets, Gauge, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const icons = [Settings, Droplets, Gauge, Cpu];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Nuestras Soluciones</h2>
          <p className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Ingeniería Especializada para Desafíos Industriales Complejos
          </p>
          <p className="text-lg text-slate-600">
            Ofrecemos un portafolio integral de servicios y suministros diseñados para optimizar la eficiencia operativa y reducir los tiempos de inactividad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card key={service.id} className="group border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    to="/servicios"
                    className="inline-flex items-center text-sm font-bold text-primary hover:translate-x-1 transition-transform"
                  >
                    Saber más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
