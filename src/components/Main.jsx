import Image from "next/image";
import Link from "next/link";
import FormContact from "./FormContact";

export default function Main() {
  return (
    <section className="text-gray-600 body-font ">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            "Lo que quieras, donde quieras, en minutos."
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            "Haz que todo llegue más rápido con Ahi-Llego. estamos aquí para
            hacer que tu vida sea más fácil y cómoda. Descarga la app hoy y
            experimenta lo fácil que puede ser obtener lo que necesitas con
            Ahi-Llego."
          </p>
          <div className="flex justify-center">
            <Link href={"/"}>
              <Image
                src="/images/google-play-button.svg"
                alt="Google Logo"
                className="mr-5 hover:opacity-60"
                width={160}
                height={100}
              />
            </Link>
            {/* <Link href={"/"}>
              <Image
                src="/images/app_store_button.svg"
                className="mr-5 hover:opacity-60"
                width={160}
                height={100}
              />
            </Link> */}
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <Image
            // src="/images/iPhone-12-Mockup.png"
            src="/images/phone.png"
            className="w-80 md:ml-1 ml-24"
            alt="iPhone-12"
            width={80}
            height={100}
          />
        </div>
      </div>
      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
              <Image
                src="/images/Google-Logo.webp"
                alt="Google Logo"
                className="block object-contain h-16 greyC"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
          Less code, less effort.
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
          Minify your CSS with Tailwind's built in PostCSS support.
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
          <Image
            className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
            alt="Placeholder Image"
            src="/images/placeholder.png"
            width={500}
            height={500}
          />
        </div>
      </div>
      <section className="relative">
        <FormContact />
      </section>
    </section>
  );
}
