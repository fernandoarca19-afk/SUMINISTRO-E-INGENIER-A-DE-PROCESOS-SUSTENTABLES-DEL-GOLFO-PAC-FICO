import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { CONTACT_INFO } from "@/constants/copy";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Contacto Directo</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">
              ¿Listo para optimizar su operación? <br />
              <span className="text-primary">Hablemos hoy mismo.</span>
            </h3>
            <p className="text-lg text-slate-600 mb-12">
              Nuestro equipo técnico está listo para brindarle asesoría especializada y cotizaciones sin compromiso en menos de 24 horas.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Teléfono</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg text-slate-600 hover:text-primary transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Correo Electrónico</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg text-slate-600 hover:text-primary transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Ubicación</p>
                  <p className="text-lg text-slate-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-orange-50 border border-orange-100 rounded-2xl flex items-center space-x-4">
              <MessageSquare className="h-8 w-8 text-orange-600" />
              <div>
                <p className="font-bold text-orange-900">Atención Inmediata vía WhatsApp</p>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-orange-700 underline font-medium"
                >
                  Iniciar chat ahora
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nombre Completo</label>
                  <Input placeholder="Ej. Juan Pérez" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Empresa</label>
                  <Input placeholder="Nombre de su empresa" className="bg-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Correo Corporativo</label>
                <Input type="email" placeholder="juan@empresa.com" className="bg-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Servicio de Interés</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option>Refacciones Motores Diésel</option>
                  <option>Válvulas e Instrumentación</option>
                  <option>Ingeniería y Mantenimiento</option>
                  <option>Otro / Consulta General</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Mensaje / Requerimiento</label>
                <Textarea placeholder="Describa brevemente su necesidad o el número de parte que requiere..." className="min-h-[150px] bg-white" />
              </div>
              <Button className="w-full h-14 text-lg bg-primary hover:bg-primary/90">
                Enviar Solicitud de Cotización
                <Send className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-center text-xs text-slate-500">
                {CONTACT_INFO.responseTime}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
