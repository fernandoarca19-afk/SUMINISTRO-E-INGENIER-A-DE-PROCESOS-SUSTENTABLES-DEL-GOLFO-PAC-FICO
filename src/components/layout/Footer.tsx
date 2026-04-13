import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import { CONTACT_INFO, NAVIGATION } from "../../constants/copy";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tighter">SIPSGOP</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Suministro e Ingeniería de Procesos Sustentables del Golfo Pacífico S.A. de C.V.
              Líderes en soluciones industriales para el sector energético y marítimo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Servicios</h4>
            <ul className="space-y-4">
              <li><Link to="/servicios" className="text-sm text-slate-400 hover:text-white transition-colors">Motores Diésel</Link></li>
              <li><Link to="/servicios" className="text-sm text-slate-400 hover:text-white transition-colors">Válvulas de Control</Link></li>
              <li><Link to="/servicios" className="text-sm text-slate-400 hover:text-white transition-colors">Instrumentación</Link></li>
              <li><Link to="/servicios" className="text-sm text-slate-400 hover:text-white transition-colors">Ingeniería PLC</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Contacto</h4>
            <div className="flex items-start space-x-3 text-sm text-slate-400">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-400">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-400">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SIPSGOP S.A. de C.V. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
