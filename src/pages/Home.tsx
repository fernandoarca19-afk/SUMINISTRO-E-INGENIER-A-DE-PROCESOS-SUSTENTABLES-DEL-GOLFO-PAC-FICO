import { Hero } from "../components/sections/Hero";
import { Trust } from "../components/sections/Trust";
import { Services } from "../components/sections/Services";
import { Industries } from "../components/sections/Industries";
import { Products } from "../components/sections/Products";
import { Contact } from "../components/sections/Contact";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Industries />
      <Products />
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Tiene un requerimiento urgente?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Nuestro equipo está listo para atender emergencias técnicas y suministros críticos las 24 horas del día.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" nativeButton={false} render={<Link to="/contacto" />}>
              Contactar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
