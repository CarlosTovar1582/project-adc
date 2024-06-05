import { Link } from "react-router-dom"


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
//const params=useParams()
const products = [
    {
      id: 1,
      name: 'Conmutadores',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/R0kXXTQW/Conmutadores.png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',      
    },
    {
      id: 2,
      name: 'Variadores',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/Zq6YZS6L/delixi-2.webp',
      imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
      id: 3,
      name: 'Interruptores',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/XJhVQLVB/Interruptores-0-1.png',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },   
    {
      id: 4,
      name: 'Sensor Liquido y Metal',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/zvt1t4y8/Sensores.png',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 5,
      name: 'Conectores',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/qvPXdPLD/Conectores.png',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 6,
      name: 'Pulsadores',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/w38V6n5k/Pulsadores.png',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 7,
      name: 'Selectores',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/sgB4HM7Q/Selectores.png',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 8,
      name: 'Sirenas',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/mk1975Fh/Sirenas.png',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    }, 
    {
      id: 9,
      name: 'Tableros',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/wMj4sFhv/Tableros.png',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 10,
      name: 'Fuente de Alimentacion',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/yxHFtT1P/Fuente-Alimentacion.png',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 11,
      name: 'Temporizador',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/HWf6QFfq/Temporizador.png',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 12,
      name: 'Switch',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/V602FGCG/Switch.png',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 13,
      name: 'PLC',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/SRq1bzq6/PLC.png',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },    
      {
      id: 14,
      name: '',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/HkgZRrYZ/Accesorios.png',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
      },
      
    // More products...
  ]
  
  export default function CategoryProducts() {
    
    return (
      <div className="bg-white font-mono text-xl">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
  
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
                    {products.map((product) => (               
                      <Link to={"/CategoryProducts/" + product.id }  key={product.id}    href={product.href} className="group hover:scale-110 hover:text-sky-500 " >
                          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl sm:aspect-h-3 sm:aspect-w-2 border-2 border-slate-800 ">
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}                        
                                className="h-full  w-full object-cover object-center group-hover:opacity-75"
                            />
                                                    
                          </div>                     
                          {/* text-center font-bold text-lg  */ }
                          <div className="mt-4 justify-between text-base font-medium text-gray-900 ">
                          <h3 className="text-center font-bold text-lg ">{product.name}</h3>
                          <p>{product.price}</p>
                          </div>
                          <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
                          
                      </Link>
                    ))}                    
            </div>
        </div>
      </div>
    )
  }