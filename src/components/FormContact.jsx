"use client";
import React, { useState } from "react";

const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to: email, subject, html: message }),
    });

    if (response.ok) {
      console.log("Correo electrónico enviado");
    } else {
      console.error("Error al enviar correo electrónico");
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div class="form-group mb-6">
                <input
                  class="
                  form-control 
                  block 
                  w-full 
                  px-3 
                  py-2
                  text-base 
                  font-normal 
                  text-gray-700 
                  bg-white 
                  bg-clip-padding 
                  border-2 border-solid border-gray-500
                  rounded
                  transition
                  ease-in-outm-0 
                  focus:text-gray-700 
                  focus:bg-white 
                  focus:border-blue-600 
                  focus:outline-none"
                  type="text"
                  id="name"
                  placeholder="Nombre"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div class="form-group mb-6">
                <input
                  class="
                  form-control 
                  block 
                  w-full 
                  px-3 
                  py-2
                  text-base 
                  font-normal
                  text-gray-800
                  bg-white bg-clip-padding
                  border-2 border-solid border-gray-500
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Correo electronico"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div class="form-group mb-6">
                <textarea
                  class="
                  form-control 
                  block 
                  w-full 
                  px-3 
                  py-2
                  text-base 
                  font-normal
                  text-gray-800
                  bg-white bg-clip-padding
                  border-2 border-solid border-gray-500
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  rows="5"
                  placeholder="Mensaje"
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full
                h-11 
                px-6
                py-3
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
