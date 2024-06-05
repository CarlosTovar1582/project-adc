import React ,{ Fragment,useState,Suspense } from 'react'

import Logo from '../components/Logo'
import Menu from '../components/Menu'



import LogoElectric from '../../public/LogoElectric'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon,
  HomeIcon,
  PlayCircleIcon,
  UserIcon,
  BanknotesIcon,  
  FolderIcon,
  EnvelopeIcon,  
  
} from '@heroicons/react/24/outline'
import { FaWhatsapp } from "react-icons/fa";

import { BookmarkIcon } from '@heroicons/react/24/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const products = [
  {
    name: "Conmutadores",
    grupo:1,
    submenu: [{
                items: "Interruptor de Limite Vertical en miniatura TZ-8",
              },
              {
                items: "Interruptor de límite sellado",             
              },
              {
                items: "Interruptor de límite pequeño",
              },          
            ],
    href: '#'          
  },
  {
    name: "Variadores",
    grupo:2,
    submenu: [{
                items: "Interruptor de límite de seguridad",
              },
              {
                items: "Interruptor de límite de reinicio Manual",             
              },
              {
                items: "Interruptor de límite de puerta de seguridad",
              },
             ],
    href: '#'          
  },  
  ];

export default function Header() {
  const [open, setOpen] = useState(false)
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }
 
  function openModal(a) {
    setIsOpen(true)  
  }
  return (  
    <header className="">
        <div className="grid grid-cols-4 gap-0 text-white  ">
              { /* Mostrar Logo  border-2 border-red-700    
              https://i.postimg.cc/sDmGLnxr/Logito4.png
              https://i.postimg.cc/fR6ncJJF/logo-Final.png
              https://i.postimg.cc/q7BtVJs1/logo-Final2.png 
              https://i.postimg.cc/cJ3qXYjY/logo-Final3.png
              https://i.postimg.cc/yxmFVVdW/logo-Final6.png
              https://i.postimg.cc/nV2rtjVB/logo-Final7.png
              https://i.postimg.cc/L69rsmWv/LOGOADC.png 
              https://i.postimg.cc/CMnQLmSP/logo-adc-horizontal.png
              https://i.postimg.cc/YCCZdfpL/LogoADC.png
              
              
              
              */}
                <div className='col-span-3 sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 mt-4 pl-4 '>
                  <img src="https://i.postimg.cc/YCCZdfpL/LogoADC.png" className="lg:h-72 transition duration-300 ease-in-out " alt="Flowbite Logo" />
                </div>
                          
              { /* Mostrar Logo pl-6 pr-6 pt-6 pb-6  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  flex justify-center*/}
              { /* Mostrar Menu Completo border-2 border-blue-600 */}      
                <div className="hidden font-title text-1xl lg:col-span-1 xl:col-span-2 xl:justify-center pl-2 pr-2 pt-2 pb-2 rounded-3xl items-center   xl:flex  ">                 
                <div className='grid grid-cols-6 pb-16'>
                  <div  className='col-span-6  text-black bg-slate-300 rounded-3xl'>
                    <div className='flex flex-col-6 justify-center'>                     
                      <div className='col-span-6 font-bold'>Ventas</div>
                    </div>                          
                  </div>
                  {/* ----------  */}
                  <div className='col-span-2  text-black '>
                    <div className='flex flex-col-2 justify-center'>                     
                      <div className='col-span-2 font-bold'>Tienda A30</div>
                    </div>
                  </div>
                  <div className='col-span-2  text-black'>
                    <div className='flex flex-col-2 justify-center'>
                     
                      <div className='col-span-2 font-bold '>Tienda H</div>
                    </div>
                  </div>
                  <div className='col-span-2  text-black'>
                    <div className='flex flex-col-2 justify-center'>                    
                      <div className='col-span-2  font-bold '>Tienda A27</div>
                    </div>
                  </div>
                  {/* ----------  */}

                  <div className='col-span-2  text-black'>
                    <div className='flex flex-col-2 justify-center'>
                      <div><PhoneIcon className="h-6 w-6 font-extralight" aria-hidden="true" /></div>
                      <div className='font-extralight'>+51 986 701 992</div>
                    </div>
                  </div>
                  <div className='col-span-2  text-black'>
                    <div className='flex flex-col-2 justify-center'>
                      <div><PhoneIcon className="h-6 w-6 font-extralight" aria-hidden="true" /></div>
                      <div className='font-extralight'>+51 905 454 861</div>
                    </div>
                  </div>
                  <div className='col-span-2  text-black'>
                    <div className='flex flex-col-2 justify-center'>
                      <div><PhoneIcon className="h-6 w-6 font-extralight" aria-hidden="true" /></div>
                      <div className='font-extralight'>+51 944 278 201</div>
                    </div>
                  </div>
                  <br />
                  <div  className='col-span-6  text-black bg-slate-300 rounded-3xl'>
                    <div className='flex flex-col-6 justify-center'>                     
                      <div className='col-span-6 font-bold'>Soporte Tecnico</div>
                    </div>                          
                  </div>
                  <div  className='col-span-6  text-black'>
                    <div className='flex flex-col-6 justify-center'>                     
                    
                      <div className='col-span-6 font-extralight'>+51 994 343 178</div>
                    </div>                          
                  </div>                  
                  <div className='col-span-6  mt-8 rounded-2xl '><Menu/></div>

                </div>
                                                                            
                </div>            
               
              { /* Mostrar Menu Completo */}              
              { /* Mostrar Panel modo celular */} 

              <div className=" flex  sm:col-span-1 sm:justify-end sm:pr-10 xl:pr-40 md:col-span-2 lg:col-span-2 lg:flex justify-end  xl:hidden bg-gradient-to-t bg-white ">
                        
                <button
                                    type="button"
                                    className="-m-2.5 items-center justify-end  rounded-md p-2.5 text-gray-300"
                                    onClick={() => openModal(true)}
                                    >
                                      {/*   */}
                                    <Bars3Icon className="h-14 w-14 font-bold text-black" aria-hidden="true" />
                                  </button>    
                          
              </div> 
              
              { /* Mostrar Panel modo celular */} 
        </div>  


        { /* mobileInicio */}   
        <Transition appear show={isOpen} as={Fragment} onClose={setOpen}>
                      <Dialog as="div" className="relative z-10 border-2 border-cyan-500 xl:hidden"   onClose={closeModal}>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>
                          <div className="fixed inset-0 ">                         
                            <Dialog.Panel className=" w-full  font-title text-1xl max-w-7xl transform overflow-hiddenrounded-2xl bg-gradient-to-t from-orange-300 via-orange-400 to-orange-300 p-6 text-left align-middle shadow-xl transition-all">
                              <div className="grid grid-cols-4 gap-0 text-black border-2 border-black-500 rounded-2xl ">
                                <div className='col-span-3'> 
                                  <BookmarkIcon className="h-16 w-16" aria-hidden="true" />
                                </div>                         
                                <div className='flex justify-end'>
                                  <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => closeModal(false)}
                                  >                                  
                                    <XMarkIcon className="h-16 w-16" aria-hidden="true" />
                                  </button>
                                </div>
                                {/* 1 fila  */} 
                                <div className='flex justify-center items-center '> 

                                </div>
                                <div className='flex justify-center items-center '>                                 
                                  <HomeIcon className="h-8 w-8 gap-16" aria-hidden="true" />
                                </div>
                                <div className='col-span-2  flex justify-start items-center '>                                 
                                  <a href="/Carousel"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:bg-gray-800"
                                  >
                                    Home
                                  </a>
                                </div>
                                {/* 1 fila  */}
                                {/* 2 fila  */}
                                <div className='flex justify-center items-center '> 
                                </div>
                                <div className='flex justify-center items-center '>                                 
                                  <UserIcon className="h-8 w-8 gap-16" aria-hidden="true" />
                                </div>
                                <div className='col-span-2  flex justify-start items-center'> 
                                  <a href="/About"
                                      className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:bg-gray-800"
                                  >
                                    Nosotros
                                  </a>
                                </div> 
                                {/* 2 fila  */}
                                {/* 3 fila  */}
                                <div className='flex justify-center items-center '> 
                                </div>
                                <div className='flex justify-center items-center '>                                 
                                  <BanknotesIcon className="h-8 w-8 gap-16" aria-hidden="true" />
                                </div>
                                <div className='col-span-2  flex justify-start items-center'> 
                                  <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                      <>
                                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-800">
                                        <a
                                          href="/CategoryProducts"
                                          className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:bg-gray-800"
                                        >
                                          Productos
                                          </a>
                                          {/*     <ChevronDownIcon
                                            className={classNames(open ? 'rotate-180' : '', 'h-7 w-7 flex-none')}
                                            aria-hidden="true"
                                          />  */}
                                       
                                        </Disclosure.Button>
                                          <Disclosure.Panel className="mt-2 space-y-2">
                                            {products.map((item) => (
                                              <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={"/Products/" + item.grupo}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-1xl font-semibold leading-7 text-white hover:bg-gray-800"
                                              >
                                                {item.name}
                                              </Disclosure.Button>

                                            ))}
                                          </Disclosure.Panel>
                                      </>
                                    )}
                                  </Disclosure>   
                                </div>
                                {/* 3 fila  */}
                                {/* 4 fila  */}
                                <div className='flex justify-center items-center '> 
                                </div>
                                <div className='flex justify-center items-center '>                                 
                                  <FolderIcon className="h-8 w-8 gap-16" aria-hidden="true" />
                                </div>
                                <div className='col-span-2  flex justify-star items-center'> 
                                  <a href="/News"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:bg-gray-800"
                                  >
                                    Proyectos
                                  </a>
                                </div>
                                {/* 4 fila  */}
                                {/* 5 fila  */}
                                <div className='flex justify-center items-center '> 
                                </div>
                                <div className='flex justify-center items-center '>                                 
                                  <EnvelopeIcon className="h-8 w-8 gap-16" aria-hidden="true" />
                                </div> 
                                <div className='col-span-2  flex justify-start items-center'> 
                                  <a href="/SectionsContact"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:bg-gray-800"
                                  >
                                    Contactos
                                  </a>
                                </div>   
                                {/* 5 fila  */} 
                                {/* Fila de Contactos  */}
                                <div className='col-span-4  flex justify-center  mt-6 bg-slate-100 font-bold rounded-2xl'>
                                  Ventas
                                </div>    
                                <div className='flex justify-end mt-4'><PhoneIcon className="h-6 w-6 font-extralight" aria-hidden="true" /></div>  
                                <div className='flex justify-center font-bold mt-4'>Tienda A30</div>  
                                <div className='col-span-2  flex justify-center mt-4'>+51 986 701 992</div>

                                <div className='flex justify-end'><PhoneIcon className="h-6 w-6 font-extralight" aria-hidden="true" /> </div> 
                                <div className='flex justify-center font-bold'>Tienda H </div>                                
                                <div className='col-span-2  flex justify-center'>+51 905 454 861</div>  

                                <div className='flex justify-end'><PhoneIcon className="h-6 w-6 font-extralight" aria-hidden="true" /></div>  
                                <div className='flex justify-center font-bold'>Tienda A27</div> 
                                <div className='col-span-2  flex justify-center'>+51 944 278 201</div>   

                                <div className='col-span-4  flex justify-center   mt-6 bg-slate-100 font-bold rounded-2xl'>
                                  Soporte Tecnico
                                </div>    
                                <div className='flex justify-end mt-4'><PhoneIcon className="h-6 w-6 font-extralight" aria-hidden="true" /></div>  
                                <div className='flex justify-center font-bold mt-4'></div>  
                                <div className='col-span-2  flex justify-center mt-4'>+51 994 343 178</div>                                 
                                                   


                                                                                  
                              </div>                                      
                            </Dialog.Panel>                        
                          </div>
                      </Dialog>
        </Transition>
        { /* mobileFinal */} 
       
       
    </header>
    
  )
}
