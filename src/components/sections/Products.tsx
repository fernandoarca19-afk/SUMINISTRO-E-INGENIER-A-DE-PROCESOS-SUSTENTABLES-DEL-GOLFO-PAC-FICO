import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { SERVICES } from "@/constants/copy";

export function Products() {
  const brands = SERVICES[0].brands || [];

  return (
    <section id="productos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Catálogo y Marcas</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Suministro de Componentes Críticos con Calidad OEM
          </h3>
          <p className="text-lg text-slate-600">
            Trabajamos con las marcas líderes a nivel mundial para garantizar que su equipo opere bajo las especificaciones originales del fabricante.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {brands.map((brand) => (
            <Card key={brand} className="flex items-center justify-center p-8 bg-white hover:shadow-md transition-shadow">
              <span className="text-xl font-black text-slate-300 uppercase tracking-tighter">{brand}</span>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-3xl border border-slate-200">
            <h4 className="text-2xl font-bold mb-4">Categorías Principales</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Pistones y Camisas",
                "Válvulas de Admisión/Escape",
                "Sistemas de Inyección",
                "Turbocargadores",
                "Bombas de Agua y Aceite",
                "Sellos y Empaques",
                "Instrumentos de Presión",
                "Sensores de Temperatura",
              ].map((item) => (
                <li key={item} className="flex items-center space-x-2 text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-primary text-white rounded-3xl">
            <h4 className="text-2xl font-bold mb-4">¿No encuentra lo que busca?</h4>
            <p className="mb-8 text-primary-foreground/90 leading-relaxed">
              Nuestra red de proveedores globales nos permite localizar refacciones obsoletas o de difícil acceso para cualquier marca de motor o sistema industrial.
            </p>
            <Badge variant="outline" className="text-white border-white/30 mb-6 px-4 py-1">
              Búsqueda Especializada
            </Badge>
            <div className="flex items-center space-x-4">
              <div className="h-1 w-12 bg-white/30" />
              <p className="text-sm font-bold">Respuesta técnica inmediata</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
