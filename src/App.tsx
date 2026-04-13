import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/Home";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/industrias" element={<IndustriesPage />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Simple Page Components (can be moved to separate files if they grow)

function AboutPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-8 tracking-tight">Sobre SIPSGOP</h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Suministro e Ingeniería de Procesos Sustentables del Golfo Pacífico S.A. de C.V. nació con la misión de cerrar la brecha entre la necesidad de refacciones críticas y la disponibilidad inmediata en el mercado mexicano.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
              <p className="text-slate-600 leading-relaxed">
                Fundada en 2019, consolidamos un equipo técnico con más de 25 años de experiencia en el sector energético. Hemos servido a los proyectos más ambiciosos de México, garantizando siempre la continuidad operativa de nuestros clientes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Nuestro Compromiso</h2>
              <p className="text-slate-600 leading-relaxed">
                No solo vendemos refacciones; entregamos garantía técnica. Cada componente suministrado cumple con los más altos estándares de calidad internacional (ISO, API, ANSI).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-16 tracking-tight">Nuestros Servicios</h1>
        <div className="space-y-24">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Mantenimiento de Motores Diésel</h2>
              <p className="text-lg text-slate-600 mb-6">
                Especialistas en motores de media y alta velocidad. Realizamos desde mantenimientos preventivos (Top Overhaul) hasta reconstrucciones completas (Major Overhaul).
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /><span>Calibración de inyectores</span></li>
                <li className="flex items-center space-x-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /><span>Inspección endoscópica</span></li>
                <li className="flex items-center space-x-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /><span>Pruebas de desempeño</span></li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-video bg-slate-100">
              <img src="https://images.unsplash.com/photo-1530124560676-586cad3ad276?auto=format&fit=crop&q=80" alt="Diesel Engine" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden aspect-video bg-slate-100">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80" alt="Valves" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Sistemas de Control y Válvulas</h2>
              <p className="text-lg text-slate-600 mb-6">
                Suministro y servicio técnico para válvulas de control, seguridad y procesos. Contamos con banco de pruebas para certificación de válvulas.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /><span>Calibración de posicionadores</span></li>
                <li className="flex items-center space-x-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /><span>Mantenimiento a actuadores</span></li>
                <li className="flex items-center space-x-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /><span>Pruebas hidrostáticas</span></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function IndustriesPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-16 tracking-tight">Industrias</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Oil & Gas", "Marítimo", "Energía"].map((industry) => (
            <div key={industry} className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <h2 className="text-2xl font-bold mb-4">{industry}</h2>
              <p className="text-slate-600 mb-6">
                Soluciones adaptadas a las normativas específicas de cada sector, garantizando seguridad y eficiencia.
              </p>
              <div className="h-48 rounded-2xl bg-slate-200 mb-6 overflow-hidden">
                 <img src={`https://picsum.photos/seed/${industry}/600/400`} alt={industry} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductsPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-16 tracking-tight">Catálogo de Productos</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="space-y-8">
            <div>
              <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-400">Categorías</h3>
              <ul className="space-y-2">
                <li className="text-primary font-bold">Motores Diésel</li>
                <li className="text-slate-600 hover:text-primary cursor-pointer">Válvulas</li>
                <li className="text-slate-600 hover:text-primary cursor-pointer">Instrumentación</li>
                <li className="text-slate-600 hover:text-primary cursor-pointer">Bombas</li>
              </ul>
            </div>
          </aside>
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
                <div className="aspect-square rounded-xl bg-slate-100 mb-4 overflow-hidden">
                  <img src={`https://picsum.photos/seed/part${i}/400/400`} alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                </div>
                <h4 className="font-bold text-slate-900">Componente Crítico {i}</h4>
                <p className="text-xs text-slate-500 mb-4">Ref: SIPS-00{i}</p>
                <Button variant="outline" size="sm" className="w-full">Ver Detalles</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-16 tracking-tight">Contacto</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Solicite una Cotización Técnica</h2>
            <p className="text-lg text-slate-600">
              Complete el formulario y un ingeniero especialista se pondrá en contacto con usted en menos de 24 horas.
            </p>
            <div className="p-8 rounded-3xl bg-primary text-white">
              <h3 className="text-xl font-bold mb-4">Línea de Emergencia</h3>
              <p className="text-3xl font-black mb-2">+52 1 229 123 4567</p>
              <p className="text-sm text-primary-foreground/80">Disponible 24/7 para suministros críticos</p>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            {/* Form Placeholder */}
            <div className="space-y-6">
              <Input placeholder="Nombre" />
              <Input placeholder="Empresa" />
              <Input placeholder="Email" />
              <Textarea placeholder="Mensaje" className="min-h-[150px]" />
              <Button className="w-full h-12">Enviar Mensaje</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
