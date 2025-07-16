import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

import { PORTAL_LOGO, PORTAL_PHONE } from '@/lib/constants';

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  // const copyrightDate = 2023 + (currentYear > 2023 ? ` - ${currentYear}` : '');

  return (
    <footer className="bg-green py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="mb-12 flex flex-col justify-between gap-20 md:flex-row md:gap-8">
          <div className="font-serif text-3xl md:text-5xl">
            <h2 className="font-bold leading-tight text-white/40">
              Se parte de
              <br />
              Portal Bosque
            </h2>
            <a href="https://www.portalbosque.com/membresia" className="flex items-center gap-2 font-bold">
              Ver Membresías
              <ArrowRightIcon size={36} />
            </a>
          </div>
          <p className="text-sm font-light md:w-80 md:text-base">
            Se miembro para acceder a todas las instalaciones e inscribirte a todas las actividades
            de nuestra programación. Súmate hoy y disfrutá de todas las ventajas que tenemos para
            vos.
          </p>
        </div>
        <div className="flex flex-col-reverse justify-between border-t border-white/30 pt-8 md:flex-row md:gap-0">
          <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/30 pt-4 md:mt-0 md:flex-col md:items-start md:border-0 md:pt-0">
            <a href="https://www.portalbosque.com" aria-label="Volver a la página principal">
              <img
                src={PORTAL_LOGO}
                loading="lazy"
                alt="logo"
                className="h-[36px] md:h-[48px]"
              />
            </a>
            <a
              href="https://maps.app.goo.gl/aDZPCX4EDND5Wg6G9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-xs font-light text-white/60 transition-colors hover:text-white"
            >
              Cno. La Aguada, 20000,
              <br />
              La Barra, Departamento de Maldonado, Uruguay
              <br />©{currentYear} Portal Bosque
            </a>
          </div>
          <div className="flex gap-20 text-xs">
            <ul className="space-y-4">
              <li>
                <a href="mailto:hola@portalbosque.com" target="_blank" rel="noopener noreferrer">
                  MAIL
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${PORTAL_PHONE}`} target="_blank" rel="noopener noreferrer">
                  WHATSAPP
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/portalbosque/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@PortalBosque"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YOUTUBE
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/intl-es/artist/5EU23oxWb2gKorPhZRJfXN?si=kylhXcngQQuDWKyHo3oXXA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SPOTIFY
                </a>
              </li>
            </ul>
            <ul className="space-y-4">
              <li>
                <a href="https://www.portalbosque.com/membresia">MEMBRESÍA</a>
              </li>
              <li>
                <a href="https://www.portalbosque.com/faqs">FAQS</a>
              </li>
              <li>
                <a href="https://www.portalbosque.com/propuestas">PROPUESTA DE AGENDA</a>
              </li>
              <li>
                <a href="https://www.portalbosque.com/terminos-y-condiciones">TÉRMINO & CONDICIONES</a>
              </li>
              <li>
                <a href="https://www.portalbosque.com/valor-membresias">CONDICIONES Y VALORES DE MEMBRESÍAS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
