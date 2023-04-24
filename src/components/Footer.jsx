import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul className="Footer_nav__2rFid text-sm font-medium  sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-10">
          <li className="space-y-5 row-span-2">
            <Link
              href={"/"}
              className="flex items-center text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
            >
              <Image
                src="/images/logo.png"
                alt="Google Logo"
                className="mr-2 rounded-lg"
                width={60}
                height={50}
              />
            </Link>
            <h1 className="text-4xl Avenir tracking-tighter text-gray-900 md:text-4x1 lg:text-3xl">
              Ahi Llego
            </h1>
            <p className="mr-20 text-justify">
              "¡Ahí llego te lleva todo lo que necesitas directamente a tu
              puerta! Utiliza nuestro servicio para tus compras en línea,
              entregas de comida, medicamentos y mucho más. ¡Confía en nosotros
              para tus necesidades de entrega!"
            </p>
          </li>

          <li className="space-y-5 row-span-2 text-right">
            <h2 className="text-xl tracking-wide text-gray-900 uppercase font-bold">
              Productos
            </h2>
            <ul className="space-y-4">
              <li>
                <Link className="text-base" href="/terminos-condiciones">
                  Delivery & Courier
                </Link>
              </li>
              <li>
                <Link className="text-base" href="/terminos-condiciones">
                  Repartidores
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5 text-right">
            <h2 className="text-xl tracking-wide text-gray-900 uppercase font-bold">
              Sobre Nosotros
            </h2>
            <ul className="space-y-4">
              <li>
                <Link className="text-base" href="/terminos-condiciones">
                  Contáctanos nosotros
                </Link>
              </li>
              <li>
                <Link className="text-base" href="/terminos-condiciones">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link className="text-base" href="/terminos-condiciones">
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <p className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight text-center">
            © 2023 Ahí-Llego. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
