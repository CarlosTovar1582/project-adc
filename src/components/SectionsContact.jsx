import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function SectionsContact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_icw5x58', 'template_1srkhrf', form.current, 'FyfPh9FLMS8UdKoDe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="bg-white py-8 font-normal text-xl ">
      <div className="mx-auto grid max-w-7xl grid-cols-1  lg:grid-cols-2  gap-2  rounded-3xl bg-white    ">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48   rounded-3xl  text-black 
            border-2 border-slate-700 bg-black ">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg ">
            <div className="relative inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 "
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200"  />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="" />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                />
              </div>
            </div>
            <h2 className=" font-normal text-xl tracking-tight text-black "></h2>
            <p className="mt-6 text-xl leading-8 text-white font-normal  ">
                Si deseas obtener más información sobre qué, por qué y cómo hacemos lo que hacemos, 
                si necesitas ayuda con lo que estás creando 
                o simplemente saludar.       <br /> 
                Nos encantaría saber de usted..
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only font-normal">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-white" aria-hidden="true" />
                </dt>
                <dd className='text-white font-normal text-xl'>
                    Av.argentina cdra 523 centro comercial
                    <br /> 
                    ACOPROM Tienda A30,A27 H15, Lima, Peru
                    
                  
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only text-xl">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-white" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="text-white text-xl" href="tel:+1 (555) 234-5678">
                    +51 (955) 750 856
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-white" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="text-white text-xl" href="mailto:hello@example.com">
                    
                    adcelectricperu@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48  rounded-3xl border-2 border-slate-700">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="user_name" className="block text-xl  font-normal leading-6 text-black ">
                  Nombres
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    autoComplete="given-name"
                    className="block w-full border border-black rounded-xl border-1 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10  focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="user_lastname" className="block text-xl font-normal leading-6 text-black">
                  Apellidos
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="user_lastname"
                    id="user_lastname"
                    autoComplete="family-name"
                    className="block w-full border border-black rounded-xl border-1 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10  focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="user_email" className="block text-xl font-normal leading-6 text-black">
                  Correo
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    autoComplete="email"
                    className="block w-full border border-black rounded-xl border-1 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10  focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="user_phono" className="block text-xl font-normal leading-6 text-black">
                  Numero Telefonico
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="user_phono"
                    id="user_phono"
                    autoComplete="tel"
                    className="block w-full border border-black rounded-xl border-1 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10  focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-xl font-normal leading-6 text-black">
                  Mensaje
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full border border-black rounded-2xl border-1 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10  focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center ">
              <button
                type="submit"
                className="rounded-2xl w-72 bg-black px-3.5 py-2.5 text-center text-sm font-normal text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                value="Send"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
      
    </div>
 
  )

}



