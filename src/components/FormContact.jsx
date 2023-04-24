import React from "react";

const FormContact = () => {
  return (
    <div class="container my-24 px-6 mx-auto">
      <section class="mb-32 text-gray-800">
        <div class="flex flex-wrap">
          <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            <h2 class="text-3xl font-bold mb-6">Contáctanos</h2>
            <p class="text-gray-500 mb-6">
              "Estamos aquí para ayudarte en todo lo que necesites. Utiliza
              nuestro formulario de contacto o síguenos en nuestras redes
              sociales para estar al tanto de nuestras últimas noticias y
              promociones. Si tienes algún problema con nuestro servicio, por
              favor háznoslo saber para solucionarlo lo antes posible. ¡Gracias
              por confiar en Ahí-Llego para tus necesidades de delivery de
              productos!"
            </p>
            <p class="text-gray-500 mb-2">Huaraz, Ancash, Perú</p>
            <p class="text-gray-500 mb-2">+51 936 695 173</p>
            <p class="text-gray-500 mb-2">info.ahillego@gmail.com</p>
          </div>
          <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            <form>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Nombre"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="email"
                  class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Correo electronico"
                />
              </div>
              <div class="form-group mb-6">
                <textarea
                  class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                  id="exampleFormControlTextarea13"
                  rows="5"
                  placeholder="Mensaje"
                ></textarea>
              </div>
              <div class="form-group form-check text-center mb-6">
                <input
                  type="checkbox"
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="exampleCheck87"
                  checked
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="exampleCheck87"
                >
                  Send me a copy of this message
                </label>
              </div>
              <button
                type="submit"
                class="w-full
                h-11 px-6
          py-2.5
          bg-gray-800
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormContact;
