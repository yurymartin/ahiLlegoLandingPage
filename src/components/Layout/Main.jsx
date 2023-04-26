import Image from "next/image";
import FormContact from "./../FormContact";
import Cities from "../Cities";
import Link from "next/link";

const companies = [
  // {
  //   id: 1,
  //   name: "Google",
  //   photo: "/images/companies/Google-Logo.webp",
  // },
  {
    id: 1,
    name: "24/7",
    photo: "/images/companies/24_7.png",
  },
];

export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-10xl mx-auto flex py-24 md:flex-row flex-col items-center">
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
                alt="PlayStore"
                className="mr-5 hover:opacity-60 hover:scale-105"
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
            className="w-80 md:ml-1 ml-24 hover:scale-110"
            alt="iPhone-12"
            width={80}
            height={100}
          />
        </div>
      </div>
      <section className="mx-auto">
        <div className="container px-5 mx-auto">
          <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            {companies.map((item, index) => (
              <div className="flex items-center justify-center">
                <Image
                  key={index}
                  src={item.photo}
                  alt={item.name}
                  className="w-42 h-40 object-contain greyC"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cities />
      <section className="relative">
        <FormContact />
      </section>
    </section>
  );
}
