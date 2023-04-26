import Image from "next/image";
import React from "react";

const cities = [
  {
    id: 1,
    name: "Huaraz",
    photo: "/images/cities/huaraz.jpeg",
  },
  // {
  //   id: 2,
  //   name: "Carhuaz",
  //   photo: "/images/cities/carhuaz.jpeg",
  // },
  // {
  //   id: 2,
  //   name: "Yungay",
  //   photo: "/images/cities/yungay.jpeg",
  // },
];

const Cities = () => {
  return (
    <section className="mx-auto mb-40">
      <div className="container px-5 grr max-w-10xl pt-20 mx-auto text-center">
        <h1 className="mb-4 text-4xl Avenir font-semibold text-gray-900">
          Encuentranos en estas ciudades
        </h1>
        <p className="mb-8 text-xl text-gray-600 text-center">
          Consulte nuestra lista de ciudades para ver si estamos disponibles en
          su zona
        </p>
        <div className="grid grid-cols-5 gap-10">
          <div className="col-span-5 sm:col-span-5 md:col-span-2 lg:col-span-2 xl:col-span-2">
            <div className="container flex flex-col items-center justify-center mx-auto rounded-lg">
              <Image
                className="w-full h-full object-cover bg-gray-900"
                alt="Placeholder Image"
                src="/images/cities/mapa.jpg"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="col-span-5 sm:col-span-5 md:col-span-3 lg:col-span-3 xl:col-span-3">
            <div className="grid grid-cols-3 gap-4">
              {cities.map((item, i) => (
                <div
                  key={i}
                  className="p-2 col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1 bg-gray-100 rounded-lg shadow-2xl hover:scale-110"
                >
                  <Image
                    className="w-full h-40 object-cover rounded-lg"
                    alt={item.name}
                    src={item.photo}
                    width={300}
                    height={300}
                  />
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cities;
