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
        <div className="grid grid-cols-4 gap-0 text-white ">
              { /* Mostrar Logo */}
              <div className="h-64 w-64 lg:mx-auto  flex justify-center ">  
                <img src="https://i.postimg.cc/KzWc3jzS/Logo-ADC-principal-20.png" className="  " alt="Flowbite Logo" />
              </div> 
            
              { /* Mostrar Logo */}
              { /* Mostrar Menu Completo border-2 border-blue-600 */}      
                     <div className="col-span-2   items-center flex  justify-center ">
                        <div className=" hidden  lg:flex justify-center bg-slate-950  pl-2 pr-2 pt-2 pb-2 items-center  rounded-3xl ">
                          <Menu/>
                        </div>                                  
                      </div>            
               
              { /* Mostrar Menu Completo */}              
              { /* Mostrar Panel modo celular */} 

                    <div className="flex justify-center ">
                          <div className="flex lg:hidden justify-center">  
                                <div className='flex justify-center'>
                                  <button
                                    type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                                    onClick={() => openModal(true)}
                                    >
                                    <Bars3Icon className="h-14 w-14 font-bold text-black" aria-hidden="true" />
                                  </button>
                                </div>                    
                          </div>
                    </div> 
              
              { /* Mostrar Panel modo celular */} 
        </div>  

       
       
    </header>
    
  )
}
