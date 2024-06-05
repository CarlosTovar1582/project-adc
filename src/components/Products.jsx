/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import { Link } from 'react-router-dom'
import { useLocation,useParams } from 'react-router-dom'
import  DetailsProducts  from './DetailsProducts'
import CategoryProducts from './CategoryProducts'
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition, RadioGroup,Disclosure } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon,PlusIcon,MinusIcon } from '@heroicons/react/24/outline'



import { StarIcon } from '@heroicons/react/20/solid'




const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Flats', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Heels', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
              { name: 'Accessories', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Tops', href: '#' },
              { name: 'Bottoms', href: '#' },
              { name: 'Swimwear', href: '#' },
              { name: 'Underwear', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Significant Other', href: '#' },
            ],
          },
        ],
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
          imageAlt:
            'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
        },
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Hoodies', href: '#' },
              { name: 'Swimsuits', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}







const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
 

export default function Products() {
  const params =useParams()
  const orderA = [
    {
      id: 1,
      grupo:1,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      status: 'delivery',
      productName: 'Conmutador 16A / 25A  /  32A',
      href: '#',
      imageSrc: 'https://i.postimg.cc/GmY9FS66/Conmutador1.png',
      imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
    },
    {
      id: 1,
      grupo:2,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      status: 'delivery',
      productName: 'Locua',
      href: '#',
      imageSrc: 'https://i.postimg.cc/GmY9FS66/Conmutador1.png',
      imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
    },
  ] 



  const ProductDetails =
  {
    categories: [
      //GRUPO1(1,2,3)
      {
        id:'1',
        grupo:1,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Conmutador 1 - 0 - 2',
        href: '#',
        imageSrc: 'https://i.postimg.cc/GmY9FS66/Conmutador1.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [
          {            
            id:'1',
            name: 'Conmutador Salzer 16 A',
            codigo:'Codigo',
            description: `
                        <p>   
                          <br>   
                          Polos -2,3 y 4<br>
                          Intensidad Nominal 16 A <br>
                          Tension Maxima - 600V AC
                        </p>
                         `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/L4yzCSD8/Conmutador-16-Amp.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S16-61026',
                  '(2)  S16-61027',
                  '(3)  S16-61028',
                  '(4)  S16-61361',
                  '(5)  S16-61363',
                  '(6)  S16-61039',        
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                    '(1)  Conmutador de Linea 1-0-2 ,2 polos 16 amp',
                    '(2)  Conmutador de Linea 1-0-2 ,3 polos 16 amp',
                    '(3)  Conmutador de Linea 1-0-2 ,4 polos 16 amp',
                    '(4)  Conmutador de Linea 1-0-2 ,1 polos 16 amp con Retorno al centro',
                    '(5)  Conmutador de Linea 1-0-2 ,3 polos 16 amp con Retorno al centro',
                    '(6)  Conmutador de Linea 1-2 , 3 polos 16 amp , sin cero',          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  [CSA/UL 240/1HP]',
                    '(2)  [CSA/UL 240/3HP - AC3 415V 5.5KW]',
                    '(3)  [CSA/UL 240/3HP - AC3 415V 5.5KW]',
                    '(4)  [CSA/UL 240/1HP]',
                    '(5)  [CSA/UL 240/3HP - AC3 415V 5.5KW]',
                    '(6)  [CSA/UL 240/3HP - AC3 415V 5.5KW]',         
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Conmutador Salzer 25 A',
            description: `
                        <p>   
                          <br>   
                          Polos -2,3 y 4<br>
                          Intensidad Nominal 25 A <br>
                          Tension Maxima - 600V AC
                        </p>
                         `,        
            href: '#',
            imageSrc: 'https://i.postimg.cc/L4yzCSD8/Conmutador-16-Amp.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S25-61026',
                  '(2)  S25-61027',
                  '(3)  S25-61028',
                  
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                    '(1)  Conmutador de Linea 1-0-2 ,2 polos 25 amp',
                    '(2)  Conmutador de Linea 1-0-2 ,3 polos 25 amp',
                    '(3)  Conmutador de Linea 1-0-2 ,4 polos 25 amp',
                
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  [CSA/UL 240/3HP]',
                    '(2)  [CSA/UL 240/7.5HP - AC3 415V 7.5KW]',
                    '(3)  [CSA/UL 240/7.5HP - AC3 415V 7.5KW]',
                        
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'3',
            name: 'Conmutador Salzer 32 A',
            description: `
                        <p>   
                          <br>   
                          Polos -2,3 y 4<br>
                          Intensidad Nominal 32 A <br>
                          Tension Maxima - 600V AC
                        </p>
                         `,        
            href: '#',
            imageSrc: 'https://i.postimg.cc/L4yzCSD8/Conmutador-16-Amp.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S32-61026',
                  '(2)  S32-61027',
                  '(3)  S32-61153',
                  '(4)  S32-61028',
                  
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                    '(1)  Conmutador de Linea 1-0-2 ,2 polos 32 amp',
                    '(2)  Conmutador de Linea 1-0-2 ,3 polos 32 amp',
                    '(3)  Conmutador de Linea 1-0-2 ,3 polos 32 amp',
                    '(4)  Conmutador de Linea 1-0-2 ,4 polos 32 amp',
                
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  [CSA/UL 240/3HP]',
                    '(2)  [CSA/UL 240/7.5HP - AC3 415V 11KW]',
                    '(3)  [CSA/UL 240/7.5HP - AC3 415V 11KW]',
                    '(3)  [CSA/UL 240/7.5HP - AC3 415V 11KW]',
                        
                  ], 
              
                
                },     
              // More sections...
            ],
          },          
        ],      
      },
      {
        id:'2',
        grupo:1,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Inversor de Giro',
        href: '#',
        imageSrc: 'https://i.postimg.cc/rmNwB9Wk/Inversorde-Giro.webp',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [
          {            
            id:'1',
            name: 'Inversor de Giro (Salzer)',
            codigo:'Codigo',
            description: `
                        <p>   
                          <br>   
                          Polos -2, 3<br>
                          Intensidad Nominal 16 A <br>
                          Tension Maxima - 600V AC
                        </p>
                         `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/rmNwB9Wk/Inversorde-Giro.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S16-61211',
                  '(2)  S23-61211',
                  '(3)  S32-61211',
                  '(4)  S40-61211',
                  '(5)  S63-61211',
                  '(6)  S16-61270',
                  '(7)  S32-61270',
                  '(8)  S63-61270',        
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                    '(1)  Inversor de giro 3 polos 16 amp',
                    '(2)  Inversor de giro 3 polos 25 amp',
                    '(3)  Inversor de giro 3 polos 32 amp',
                    '(4)  Inversor de giro 3 polos 40 amp',
                    '(5)  Inversor de giro 3 polos 63 amp',
                    '(6)  Inversor de giro monofasico 16 amp',
                    '(7)  Inversor de giro monofasico 32 amp',
                    '(8)  Inversor de giro monofasico 63 amp',          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  [CSA/UL 240/3 HP - AC3 415V 5.5 KW]',
                    '(2)  [CSA/UL 240/7.5 HP - AC3 415V 7.5 KW]',
                    '(3)  [CSA/UL 240/7.5 HP - AC3 415V 11 KW]',
                    '(4)  [CSA/UL 240/10 HP - AC3 415V 15 KW]',
                    '(5)  [CSA/UL 240/15 HP - AC3 415V 18.5 KW]',
                    '(6)  [CSA/UL 240 / 1HP]',
                    '(7)  [CSA/UL 240 / 3HP]',
                    '(8)  [CSA/UL 240 / 7.5 HP]',         
                  ], 
              
                
                },     
              // More sections...
            ],
          },
            
        ],      
      },
      {
        id:'3',
        grupo:1,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Conmutador Doble Velocidad',
        href: '#',
        imageSrc: 'https://i.postimg.cc/NjR5cXWp/conmutador-doble-velocidad.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [
          {            
            id:'1',
            name: 'Conmutador Doble Velocidad (Salzer)',
            codigo:'Codigo',
            description: `
                        <p>   
                          <br>   
                          Polos 1 - 2<br>
                          Intensidad Nominal 16 A <br>
                          Tension Maxima - 600V AC
                        </p>
                         `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/NjR5cXWp/conmutador-doble-velocidad.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S16-61213',
                  '(2)  S25-61213',
                  '(3)  S32-61213',
                  '(4)  S40-61213',
                  '(5)  S63-61213',
                  '(6)  S32-61217',
                  '(7)  S32-61212',                     
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                    '(1)  Doble velocidad 1-0-2 ,3 polos 16 A',
                    '(2)  Doble velocidad 1-0-2 ,3 polos 25 A',
                    '(3)  Doble velocidad 1-0-2 ,3 polos 32 A',
                    '(4)  Doble velocidad 1-0-2 ,3 polos 40 A',
                    '(5)  Doble velocidad 1-0-2 ,3 polos 63 A',
                    '(6)  Doble velocidad Inversor de giro 3 polos 32 A',
                    '(7)  Doble velocidad 1-0-2 ,3 polos 32 A',                             
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  [CSA/UL 240/3 HP - AC3 415V 5.5 KW]',
                    '(2)  [CSA/UL 240/7.5 HP - AC3 415V 7.5 KW]',
                    '(3)  [CSA/UL 240/7.5 HP - AC3 415V 11 KW]',
                    '(4)  [CSA/UL 240/10 HP - AC3 415V 15 KW]',
                    '(5)  [CSA/UL 240/15 HP - AC3 415V 18.5 KW]',
                    '(6)  [CSA/UL 240/7.5 HP - AC3 415V 11 KW]',
                    '(7)  [CSA/UL 240/7.5 HP - AC3 415V 11 KW]',                     
                  ], 
              
                
                },     
              // More sections...
            ],
          },
            
        ],      
      },
      //GRUPO1(1)-Conmutadores
      //GRUPO2(4)-Variadores
      {
        id:'4',
        grupo:2,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Variador',
        href: '#',
        imageSrc: 'https://i.postimg.cc/Zq6YZS6L/delixi-2.webp',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [
    
          {            
            id:'1',
            name: 'Variador Delixi',
            description: `
                        <p>   
                          <br>                 
                          Frecuencia General inversor  <br>
                          3 Fases
                        </p>
                         `,        
            href: '#',
            imageSrc: 'https://i.postimg.cc/FsqvVty2/Variador-delixi.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-1',
                  '(2)  S0-2',
                  '(3)  S0-3',
                  '(4)  S0-4',           
                  
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                    '(1)  Variador de 1HP/3HP',
                    '(2)  Variador de 3HP/3HP',
                    '(3)  Variador de 3HP/3HP',
                    '(4)  Variador de 1HP/3HP',
                
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  (0.75 KW) (220V)',
                    '(2)  (0.75 KW) (220V)',
                    '(3)  (1.5 KW) (220V)', 
                    '(4)  (2.2 KW) (220V)', 
                        
                  ], 
              
                
                },     
              // More sections...
            ],
          },            
        ],      
      },
      //GRUPO2
      //GRUPO3(5,6,7,8,9,10,11,12,13,14,15,16,17,21)-Interruptores
        {
          id:'5',
          grupo:3,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Interruptor',
          href: '#',
          imageSrc: 'https://i.postimg.cc/bvgd8QFx/0-1-salzer.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Interruptor 0-1 Salzer',
              codigo:'Codigo',
              description: ` 
              <p>   
                <br>                 
                Polos -2,3  <br>
                Intensidad Nominal -16A -100A  <br>
                Tension Maxima -600V AC
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/bvgd8QFx/0-1-salzer.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S16-61002',
                    '(2)  S16-61003',
                    '(3)  S16-61351',
                    '(4)  S25-61002', 
                    '(5)  S25-61003',
                    '(6)  S32-61002',
                    '(7)  S32-61003',
                    '(8)  S32-61004',
                    '(9)  S40-61003',
                    '(10)  S63-61003',
                    '(11)  S100-61003',                     
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                      '(1)  Interruptor 0-1, 2 polos 16 amp',
                      '(2)  Interruptor 0-1, 3 polos 16 amp',
                      '(3)  Interruptor 0-1, 1 polos 16 amp c/retorno',
                      '(4)  Interruptor 0-1, 2 polos 25 amp',
                      '(5)  Interruptor 0-1, 3 polos 25 amp',
                      '(6)  Interruptor 0-1, 2 polos 32 amp',
                      '(7)  Interruptor 0-1, 3 polos 32 amp',
                      '(8)  Interruptor 0-1, 4 polos 32 amp',
                      '(9)  Interruptor 0-1, 3 polos 40 amp',
                      '(10)  Interruptor 0-1, 3 polos 63 amp',
                      '(11)  Interruptor 0-1, 3 polos 100 amp',                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/1HP]',
                      '(2)  [CSA/UL 240/3HP -AC3 415V 5.5KW]', 
                      '(3)  [CSA/UL 240/1HP]', 
                      '(4)  [CSA/UL 240/3HP]', 
                      '(5)  [CSA/UL 240/7.5HP -AC3 415V 7.5KW]', 
                      '(6)  [CSA/UL 240/3HP]', 
                      '(7)  [CSA/UL 240/7.5HP -AC3 415V 11 KW]', 
                      '(8)  [CSA/UL 240/7.5HP -AC3 415V 11 KW]', 
                      '(9)  [CSA/UL 240/10 HP -AC3 415V 15 KW]', 
                      '(10) [CSA/UL 240/15 HP -AC3 415V 18.5 KW]', 
                      '(11) [CSA/UL 240/20 HP -AC3 415V 33 KW]',                 
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            
          ],      
        },
        {
          id:'6',
          grupo:3,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Llave Termomagnetica',
          href: '#',
          imageSrc: 'https://i.postimg.cc/Qd7W9WwW/llave-termomagnetica-3.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Llave Termomagnetica 2x STECK',
              codigo:'Codigo',
              description: ` 
              <p>   
                Llave Termomagnetica 2x <br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/JhqXzyhL/Llave-termomagnetica.png',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S0-1',
                    '(2)  S0-2',
                    '(3)  S0-3',
                    '(4)  S0-4', 
                    '(5)  S0-5',
                    '(6)  S0-6',
                    '(7)  S0-7',
                    '(8)  S0-8',
                    '(9)  S0-9',
                    '(10) S0-10',                                  
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Llave Termomagnetica 2X6',
                    '(2)  Llave Termomagnetica 2X10',
                    '(3)  Llave Termomagnetica 2X16',
                    '(4)  Llave Termomagnetica 2X20', 
                    '(5)  Llave Termomagnetica 2X25',
                    '(6)  Llave Termomagnetica 2X32',
                    '(7)  Llave Termomagnetica 2X40',
                    '(8)  Llave Termomagnetica 2X50',
                    '(9)  Llave Termomagnetica 2X63',
                    '(10) Llave Termomagnetica 2X80',                             
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  --',
                      '(2)  --', 
                      '(3)  --', 
                      '(4)  --', 
                      '(5)  --', 
                      '(6)  --', 
                      '(7)  --', 
                      '(8)  --', 
                      '(9)  --', 
                      '(10) --', 
                      '(11) --',                 
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'2',
              name: 'Llave Termomagnetica 3x STECK',
              codigo:'Codigo',
              description: ` 
              <p>   
                Llave Termomagnetica 3x <br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Qd7W9WwW/llave-termomagnetica-3.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S0-1',
                    '(2)  S0-2',
                    '(3)  S0-3',
                    '(4)  S0-4', 
                    '(5)  S0-5',
                    '(6)  S0-6',
                    '(7)  S0-7',
                    '(8)  S0-8',
                    '(9)  S0-9',
                    '(10) S0-10',
                    '(11) S0-11',
                    '(12) S0-12',
                    '(13) S0-13',                                  
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Llave Termomagnetica 3X6',
                    '(2)  Llave Termomagnetica 3X15',
                    '(3)  Llave Termomagnetica 3X16',
                    '(4)  Llave Termomagnetica 3X20', 
                    '(5)  Llave Termomagnetica 3X25',
                    '(6)  Llave Termomagnetica 3X32',
                    '(7)  Llave Termomagnetica 3X40',
                    '(8)  Llave Termomagnetica 3X45',
                    '(9)  Llave Termomagnetica 3X50',
                    '(10) Llave Termomagnetica 3X63',
                    '(11) Llave Termomagnetica 3X80',
                    '(12) Llave Termomagnetica 3X100',
                    '(13) Llave Termomagnetica 3X125',                             
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  --',
                      '(2)  --', 
                      '(3)  --', 
                      '(4)  --', 
                      '(5)  --', 
                      '(6)  --', 
                      '(7)  --', 
                      '(8)  --', 
                      '(9)  --', 
                      '(10) --', 
                      '(11) --',                 
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            
          ],      
        },
        {
          id:'7',
          grupo:3,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'GuardaMotor',
          href: '#',
          imageSrc: 'https://i.postimg.cc/BvpXTdH9/Guarda-Motor-Steck.webp',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Guarda Motor STECK',
              codigo:'Codigo',
              description: ` 
              <p>   
                Guarda Motor <br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/BvpXTdH9/Guarda-Motor-Steck.webp',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S0-1',
                    '(2)  S0-2',
                    '(3)  S0-3',
                    '(4)  S0-4', 
                    '(5)  S0-5',                                                 
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  GuardaMotor de 2.5 -4AMP',
                    '(2)  GuardaMotor de 4.6 -4.6AMP',
                    '(3)  GuardaMotor de 5.5 -8AMP',
                    '(4)  GuardaMotor de 9-13 ', 
                    '(5)  GuardaMotor de 12-18',                                              
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  --',
                      '(2)  --', 
                      '(3)  --', 
                      '(4)  --', 
                      '(5)  --', 
                      '(6)  --', 
                      '(7)  --', 
                      '(8)  --', 
                      '(9)  --', 
                      '(10) --', 
                      '(11) --',                 
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            
          ],      
        },
        {
          id:'8',
          grupo:3,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Llave Diferencial',
          href: '#',
          imageSrc: 'https://i.postimg.cc/Kz3T8Npg/Llave-diferencial.webp',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Llave Diferencial STECK',
              codigo:'Codigo',
              description: ` 
              <p>   
                Llave Diferencial <br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Kz3T8Npg/Llave-diferencial.webp',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S0-1',
                    '(2)  S0-2',
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Llave Diferencial 2x25',
                    '(2)  Llave Diferencial 3x25',
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  --',
                      '(2)  --',                                   
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            
          ],      
        },
        {
          id:'9',
          grupo:3,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Llave Fija',
          href: '#',
          imageSrc: 'https://i.postimg.cc/L8YFvQXW/Llave-fija.webp',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Llave Fija STECK',
              codigo:'Codigo',
              description: ` 
              <p>   
                Llave Fija <br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/L8YFvQXW/Llave-fija.webp',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S0-1',
                    '(2)  S0-2',
                    '(3)  S0-3',
                    '(4)  S0-4',
                    '(5)  S0-5',
                    '(6)  S0-6',
                    '(7)  S0-7',
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Llave Fija 100 AMP',
                    '(2)  Llave Fija 125 AMP',
                    '(3)  Llave Fija 150 AMP',
                    '(4)  Llave Fija 160 AMP',
                    '(5)  Llave Fija 200 AMP',
                    '(6)  Llave Fija 225 AMP',
                    '(7)  Llave Fija 250 AMP',
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  --',
                      '(2)  --',                                   
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            
          ],      
        },
        {
          id:'10',
          grupo:3,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Rele Termico',
          href: '#',
          imageSrc: 'https://i.postimg.cc/Z52HFVBV/Rele-Termico-Steck.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Rele Termico STECK',
              codigo:'Codigo',
              description: ` 
              <p>   
                Rele Termico <br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Z52HFVBV/Rele-Termico-Steck.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S0-1',
                    '(2)  S0-2',
                    '(3)  S0-3',
                    '(4)  S0-4',
                    '(5)  S0-5',
                    '(6)  S0-6',
                    '(7)  S0-7',
                    '(8)  S0-8',
                    '(9)  S0-9',
                    '(10)  S0-10',

                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Rele Termico de 2.5-4',
                    '(2)  Rele Termico de 4-6',
                    '(3)  Rele Termico de 7-10',
                    '(4)  Rele Termico de 9-13',
                    '(5)  Rele Termico de 12-18',
                    '(6)  Rele Termico de 17-25',
                    '(7)  Rele Termico de 23-32 Grande',
                    '(8)  Rele Termico de 23-33 Pequeño',
                    '(9)  Rele Termico de 30-40',
                    '(10) Rele Termico de 37-50',
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  --',
                      '(2)  --',                                   
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            
          ],      
        },
        {
          id:'11',
          grupo:3,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Contactor',
          href: '#',
          imageSrc: 'https://i.postimg.cc/8c7sHBrm/Contactor-Steck.webp',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Contactor STECK',
              codigo:'Codigo',
              description: ` 
              <p>   
              Contactor <br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/8c7sHBrm/Contactor-Steck.webp',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S0-1',
                    '(2)  S0-2',
                    '(3)  S0-3',
                    '(4)  S0-4',
                    '(5)  S0-5',
                    '(6)  S0-6',
                    '(7)  S0-7',
                    '(8)  S0-8',
                    '(9)  S0-9',
                    '(10)  S0-10',

                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Contactor de 9 amp',
                    '(2)  Contactor de 12 amp',
                    '(3)  Contactor de 18 amp',
                    '(4)  Contactor de 25 amp',
                    '(5)  Contactor de 32 amp',
                    '(6)  Contactor de 40 amp',
                    '(7)  Contactor de 65 amp',
                    '(8)  Contactor de 80 amp',
                    '(9)  Contactor de 90 amp',
                    '(10) Bobina para Contactor de (9 amp a 32 amp)',
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  --',
                      '(2)  --',                                   
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            
          ],      
        },
        {
          id:'12',
          grupo:3,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Rele Estado Solido',
          href: '#',
          imageSrc: 'https://i.postimg.cc/2jZj86mJ/Releestado-Solido-FOTEX.png',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Rele de Estado Solido FOTEX',
              codigo:'Codigo',
              description: ` 
              <p>   
              Rele Estado Solido <br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/2jZj86mJ/Releestado-Solido-FOTEX.png',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S0-1',
                    '(2)  S0-2',
                    '(3)  S0-3',
                    '(4)  S0-4',
                    '(5)  S0-5',
                    '(6)  S0-6',                  
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Rele de Estado Solido 25/AA',
                    '(2)  Rele de Estado Solido 40/AA',
                    '(3)  Rele de Estado Solido 80/AA',
                    '(4)  Rele de Estado Solido 25/DA',
                    '(5)  Rele de Estado Solido 40/DA',
                    '(6)  Rele de Estado Solido 80/DA',                
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  --',
                      '(2)  --',                                   
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            
          ],      
        },
        {
          id:'13',
          grupo:3,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Rele Encapsulado',
          href: '#',
          imageSrc: 'https://i.postimg.cc/wj00rLfs/rele-encapsulado.png',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Rele Encapsulado Importado',
              codigo:'Codigo',
              description: ` 
              <p>   
              Rele Encapsulado Importado <br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/wj00rLfs/rele-encapsulado.png',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S0-1',
                    '(2)  S0-2',
                    '(3)  S0-3',
                                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Rele Encapsulado 8 Pines',
                    '(2)  Rele Encapsulado 11 Pines',
                    '(3)  Rele Encapsulado 14 Pines',
                            
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  --',
                      '(2)  --',                                   
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            
          ],      
        },
        {
          id:'14',
          grupo:3,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Mini Rele Encapsulado',
          href: '#',
          imageSrc: 'https://i.postimg.cc/d11MXJjJ/Mini-relay-encapsulados.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Mini Rele Encapsulado Importado',
              codigo:'Codigo',
              description: ` 
              <p>   
              Mini Rele Encapsulado Importado <br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/d11MXJjJ/Mini-relay-encapsulados.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S0-1',
                    '(2)  S0-2',
                    '(3)  S0-3',
                                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Mini Rele Encapsulado 8 Pines',
                    '(2)  Mini Rele Encapsulado 11 Pines',
                    '(3)  Mini Rele Encapsulado 14 Pines',
                            
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  --',
                      '(2)  --',                                   
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            
          ],      
        },
        {
          id:'15',
          grupo:3,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Interruptor de Caja',
          href: '#',
          imageSrc: 'https://i.postimg.cc/43YwdT9x/Interruptorcaja-LB116-B31-SM.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Interruptor de Caja LB116-B31SM ',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor de Caja  LB116-B31SM<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/43YwdT9x/Interruptorcaja-LB116-B31-SM.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB116-B31SM',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 16A c/caja',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/3 HP - AC3 415V 5.5 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'2',
              name: 'Interruptor de Caja LB232-B31SM ',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor de Caja  LB232-B31SM<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/d1GwCpy8/Interruptor-de-Caja-LB232-B31-SM.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB232-B31SM',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 32A c/caja',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/7.5 HP - AC3 415V 11 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'3',
              name: 'Interruptor de Caja LB263-B31M ',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor de Caja  LB263-B31M<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/mDT1tYc2/Interruptor-de-Caja-LB263-B31-M.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB263-B31M',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 63A c/caja',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/15 HP - AC3 415V 18.5 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'4',
              name: 'Interruptor de Caja LB4100-B31L ',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor de Caja  LB4100-B31L<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/SsGTMfDZ/Interruptor-de-Caja-LB4100-B31-L.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB4100-B31L',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 100A c/caja',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/20 HP - AC3 415V 33 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            
          ],      
        },
        {
          id:'16',
          grupo:3,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Interruptor Montaje a Puerta',
          href: '#',
          imageSrc: 'https://i.postimg.cc/c1X5ZhBd/Interruptormontaje-a-puerta-LB116-040.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Interruptor Montaje a Puerta LB116-040',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Montaje a Puerta LB116-040<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/c1X5ZhBd/Interruptormontaje-a-puerta-LB116-040.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB116-040',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 16 amp',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/3 HP - AC3 415V 5.5 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'2',
              name: 'Interruptor Montaje a Puerta LB120-040',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Montaje a Puerta LB120-040<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/c1X5ZhBd/Interruptormontaje-a-puerta-LB116-040.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB120-040',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 20 amp',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/3 HP - AC3 415V 5.5 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'3',
              name: 'Interruptor Montaje a Puerta LB225-033',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Montaje a Puerta LB225-033<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/0Nb0R6qn/Interruptor-Montaje-a-Puerta-LB225-033.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB225-033',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 25 amp',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/7.5 HP - AC3 415V 7.5 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'4',
              name: 'Interruptor Montaje a Puerta LB232-033',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Montaje a Puerta LB232-033<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/0Nb0R6qn/Interruptor-Montaje-a-Puerta-LB225-033.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB232-033',                
                                                              
                  ], 
              
                
                },
                {
                    id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 32 amp',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/7.5 HP - AC3 415V 11 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'5',
              name: 'Interruptor Montaje a Puerta LB232-063',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Montaje a Puerta LB232-063<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/0Nb0R6qn/Interruptor-Montaje-a-Puerta-LB225-033.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB232-063',                
                                                              
                  ], 
              
                
                },
                {
                    id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 32 amp c/llave',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/7.5 HP - AC3 415V 11 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'6',
              name: 'Interruptor Montaje a Puerta S32-01199',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Montaje a Puerta S32-01199<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/0Nb0R6qn/Interruptor-Montaje-a-Puerta-LB225-033.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S32-01199',                
                                                              
                  ], 
              
                
                },
                {
                    id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 32 amp p/puerta',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/7.5 HP - AC3 415V 11 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'7',
              name: 'Interruptor Montaje a Puerta LB240-033',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Montaje a Puerta LB240-033<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/L57fBSXT/Interruptor-Montaje-a-Puerta-LB240-033.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB240-033',                
                                                              
                  ], 
              
                
                },
                {
                    id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 40 amp',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/10 HP - AC3 415V 15 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'8',
              name: 'Interruptor Montaje a Puerta LB203-033',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Montaje a Puerta LB203-033<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/L57fBSXT/Interruptor-Montaje-a-Puerta-LB240-033.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB203-033',                
                                                              
                  ], 
              
                
                },
                {
                    id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 63 amp',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/15 HP - AC3 415V 18.5 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'9',
              name: 'Interruptor Montaje a Puerta LB4100-033',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Montaje a Puerta LB4100-033<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/L57fBSXT/Interruptor-Montaje-a-Puerta-LB240-033.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB4100-033',                
                                                              
                  ], 
              
                
                },
                {
                    id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 100 amp',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/20 HP - AC3 415V 33 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'10',
              name: 'Interruptor Montaje a Puerta LB4125-033',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Montaje a Puerta LB4125-033<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/L57fBSXT/Interruptor-Montaje-a-Puerta-LB240-033.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB4125-033',                
                                                              
                  ], 
              
                
                },
                {
                    id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 125 amp',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/20 HP - AC3 415V 37 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
     
            
          ],      
        },
        {
          id:'17',
          grupo:3,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Interruptor Mando Prolongado',
          href: '#',
          imageSrc: 'https://i.postimg.cc/brSnZVhW/Interruptor-Mando-Prolongado-LB116-MB34.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Interruptor Mando Prolongado LB116-MB34',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Mando Prolongado LB116-MB34<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/brSnZVhW/Interruptor-Mando-Prolongado-LB116-MB34.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB116-MB34',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 16 amp mando prolongado',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/3 HP - AC3 415V 5.5 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'2',
              name: 'Interruptor Mando Prolongado L232-MB34',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Mando Prolongado L232-MB34<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/brSnZVhW/Interruptor-Mando-Prolongado-LB116-MB34.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  L232-MB34',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 32 amp mando prolongado',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/7.5 HP - AC3 415V 11 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'3',
              name: 'Interruptor Mando Prolongado LB263-MB34',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Mando Prolongado LB263-MB34<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/brSnZVhW/Interruptor-Mando-Prolongado-LB116-MB34.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB263-MB34',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 16 amp mando prolongado',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/15 HP - AC3 415V 18.5 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'4',
              name: 'Interruptor Mando Prolongado LB4100-MB34',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Mando Prolongado LB4100-MB34<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/B6xKGYxC/Interruptor-Mando-Prolongado-LB4100-MB34.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB4100-MB34',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 16 amp mando prolongado',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/20 HP - AC3 415V 33 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'5',
              name: 'Interruptor Mando Prolongado LB4125-MB34',
              codigo:'Codigo',
              description: ` 
              <p>   
              Interruptor Mando Prolongado LB4125-MB34<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/B6xKGYxC/Interruptor-Mando-Prolongado-LB4100-MB34.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  LB4125-MB34',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Interruptor para motor 3 polos 16 amp mando prolongado',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  [CSA/UL 240/20 HP - AC3 415V 37 KW]',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },

            
          ],      
        },
        {
          id:'21',
          grupo:3,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Rele Tipo Galleta',
          href: '#',
          imageSrc: 'https://i.postimg.cc/ncvtXWmS/Rele-Tipo-Galleta.png',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Rele Tipo Galleta POTRON',
              codigo:'Codigo',
              description: ` 
              <p>   
              Rele Tipo Galleta POTRON<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/ncvtXWmS/Rele-Tipo-Galleta.png',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S0-01',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Rele Tipo Galleta POTRON',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  -',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'2',
              name: 'Rele Tipo Galleta SCHNEIDER',
              codigo:'Codigo',
              description: ` 
              <p>   
              Rele Tipo Galleta SCHNEIDER<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/ncvtXWmS/Rele-Tipo-Galleta.png',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S0-02',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Rele Tipo Galleta SCHNEIDER',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  -',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'3',
              name: 'Rele Tipo Galleta FINDER',
              codigo:'Codigo',
              description: ` 
              <p>   
              Rele Tipo Galleta FINDER<br>                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/JnwbG1kN/Rele-Tipo-Galleta-FINDER.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Codigo',
                  items: [
                    '(1)  S0-03',                
                                                              
                  ], 
              
                
                },
                {
                  id:'2',
                    name: 'Nombre',
                    items: [
                    '(1)  Rele Tipo Galleta FINDER',  
                                                            
                    ], 
                
                  
                  },
                  {
                    id:'3',
                    name: 'Caracteristicas',
                    items: [
                      '(1)  -',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
        

            
          ],      
        },
      //GRUPO3
      //GRUPO4(18,19,23)-Sensores
      {
        id:'18',
        grupo:4,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Sensor Nivel de Liquidos',
        href: '#',
        imageSrc: 'https://i.postimg.cc/SQV1CDM5/Sensor-Nivel-Liquido-Plastico.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [
          {            
            id:'1',
            name: 'Sensor Nivel de Liquidos MR-11 PP-Plastico MINRUI',
            codigo:'Codigo',
            description: ` 
            <p>   
            Sensor Nivel de Liquidos MR-11 PP-Plastico<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/SQV1CDM5/Sensor-Nivel-Liquido-Plastico.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  MR-11',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Sensor Nivel de Liquidos MR-11 PP-Plastico',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Sensor Nivel de Liquidos MR-L1026 Plastico MINRUI',
            codigo:'Codigo',
            description: ` 
            <p>   
            Sensor Nivel de Liquidos MR-L1026 Plastico<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/QCx2cMJK/Sensor-Nivel-de-Liquidos-MR-L1026-Plastico.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  MR-L1026',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Sensor Nivel de Liquidos MR-L1026 Plastico',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'3',
            name: 'Sensor Nivel de Liquidos MR-0835 Plastico MINRUI',
            codigo:'Codigo',
            description: ` 
            <p>   
            Sensor Nivel de Liquidos MR-0835 Plastico<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/VL7CqHmJ/Sensor-Nivel-de-Liquidos-MR-0835-Plastico.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  MR-0835',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Sensor Nivel de Liquidos MR-0835 Plastico',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'4',
            name: 'Sensor Nivel de Liquidos MR-L5 Plastico MINRUI',
            codigo:'Codigo',
            description: ` 
            <p>   
            Sensor Nivel de Liquidos MR-L5 Plastico<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/RhR7fSV8/Sensor-Nivel-de-Liquidos-MR-L5-Plastico.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  MR-L5',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Sensor Nivel de Liquidos MR-L5 Plastico',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          
        ],      
      },
      {
        id:'19',
        grupo:4,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Sensor Nivel Metalico',
        href: '#',
        imageSrc: 'https://i.postimg.cc/YS2gQKmL/Sensor-Nivel-Metalico-MR10150.webp',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [
          {            
            id:'1',
            name: 'Sensor Nivel Metalico MR10150 MINRUI',
            codigo:'Codigo',
            description: ` 
            <p>   
            Sensor Nivel Metalico MR10150<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/YS2gQKmL/Sensor-Nivel-Metalico-MR10150.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  MR10150',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Sensor Nivel Metalico MR10150',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Sensor Nivel Metalico MR10165 MINRUI',
            codigo:'Codigo',
            description: ` 
            <p>   
            Sensor Nivel Metalico MR10165<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/YS2gQKmL/Sensor-Nivel-Metalico-MR10150.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  MR10165',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Sensor Nivel Metalico MR10165',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'3',
            name: 'Sensor Nivel Metalico MR10200 MINRUI',
            codigo:'Codigo',
            description: ` 
            <p>   
            Sensor Nivel Metalico MR10200 <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/wTfcFBgc/Sensor-Nivel-Metalico-MR10200.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  MR10200',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Sensor Nivel Metalico MR10200',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
      

          
        ],      
      },
      {
        id:'23',
        grupo:4,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Sensor Magnetico ',
        href: '#',
        imageSrc: 'https://i.postimg.cc/2jc9vs7L/SensorM.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [
          {            
            id:'1',
            name: 'Sensor M',
            codigo:'Codigo',
            description: ` 
            <p>   
            Sensor M<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/2jc9vs7L/SensorM.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-1',
                  '(2)  S0-2',
                  '(3)  S0-3',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Sensor M12 PNP  & NPN (24)',
                  '(2)  Sensor M18 PNP  & NPN (24)',
                  '(3)  Sensor M30 PNP  & NPN ',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Sensor Magnetico de Puerta',
            codigo:'Codigo',
            description: ` 
            <p>   
            Sensor Magnetico de Puerta<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/m2ZB60PS/Sensor-Magnetico-de-Puerta.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Sensor Magnetico de Puerta',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
       
      

          
        ],      
      },
      //GRUPO4
      //GRUPO5(20)-Conectores
      {
        id:'20',
        grupo:5,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Conectores',
        href: '#',
        imageSrc: 'https://i.postimg.cc/TYWBq6pC/conector-Bornera.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [
          {            
            id:'1',
            name: 'Conectores Bornera  SUPU',
            codigo:'Codigo',
            description: ` 
            <p>   
            Conectores Bornera SUPU<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/TYWBq6pC/conector-Bornera.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',
                  '(2)  S0-02', 
                  '(3)  S0-03', 
                  '(4)  S0-04', 
                  '(5)  S0-05', 
                  '(6)  S0-06', 
                               
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Conectores Bornera de 2.5 MM SUPU',
                  '(2)  Conectores Bornera de 4 MM SUPU', 
                  '(3)  Conectores Bornera de 6 MM SUPU', 
                  '(4)  Conectores Bornera de 10 MM SUPU', 
                  '(5)  Conectores Bornera de 16 MM SUPU', 
                  '(6)  Conectores Bornera de 35 MM SUPU',   
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
        ],      
      },
      //GRUPO5(20)
      //GRUPO6(22,24,25)-Pulsadores
      {
        id:'22',
        grupo:6,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Pulsadores',
        href: '#',
        imageSrc: 'https://i.postimg.cc/85MbTcbK/Pulsador-Razante.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [
          {            
            id:'1',
            name: 'Pulsador de PVC SUPU',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pulsador de PVC SUPU<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/85MbTcbK/Pulsador-Razante.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pulsador de PVC SUPU',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Pulsador Luminoso Importado',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pulsador Luminoso<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/ZnmxrLDR/Pulsador-Luminoso.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pulsador Luminoso',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'3',
            name: 'Pulsador de Metal Importado',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pulsador de Metal<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/fy4D5Vxk/Pulsador-de-Metal.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pulsador de Metal',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'4',
            name: 'Pulsador Tubular Importado',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pulsador Tubular<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/PxyQQDGQ/Pulsador-Tubular.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pulsador Tubularl',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'5',
            name: 'Pulsador Razante SUPU',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pulsador Razante SUPU<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/Vs32ryRs/Pulsador-Razante-SUPU.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pulsador Razante ',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'6',
            name: 'Pulsador de Flecha de Metal',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pulsador de Flecha de Metal<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/59vnrXB1/Pulsador-de-Flecha-de-Metal.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pulsador de Flecha de Metal ',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'7',
            name: 'Pulsador doble con Led',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pulsador doble con Led<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/tCsCyHgX/Pulsador-doble-con-Led.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pulsador doble con Led ',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'8',
            name: 'Pulsador doble',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pulsador doble<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/nL2tBdLR/Pulsador-doble.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pulsador doble ',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'9',
            name: 'Pulsador doble con BOB',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pulsador doble con BOB<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/QCkPZCW6/Pulsador-doble-con-BOB.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pulsador doble con BOB ',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          
        ],      
      },
      {
        id:'24',
        grupo:6,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Paradas',
        href: '#',
        imageSrc: 'https://i.postimg.cc/vTgwLdqY/Parada-de-Emergencia.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [

          {            
            id:'1',
            name: 'Parada de Emergencia',
            codigo:'Codigo',
            description: ` 
            <p>   
            Parada de Emergencia<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/vTgwLdqY/Parada-de-Emergencia.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Parada de Emergencia ',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Parada de emergencia con Llave',
            codigo:'Codigo',
            description: ` 
            <p>   
            Parada de emergencia con Llave<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/9fD3j22G/Parada-con-Llave.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Parada de emergencia con Llave ',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'3',
            name: 'Parada de emergencia PVC',
            codigo:'Codigo',
            description: ` 
            <p>   
            Parada de emergencia PVC<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/SRGBL7Cr/Parada-de-emergencia-PVC.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Parada de emergencia PVC ',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'4',
            name: 'Parada de emergencia PVC con led',
            codigo:'Codigo',
            description: ` 
            <p>   
            Parada de emergencia PVC con led<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/Ssg5JNhT/Parada-de-emergencia-PVC-con-led.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Parada de emergencia PVC con led ',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'5',
            name: 'Parada de emergencia PVC s/retencion c/led',
            codigo:'Codigo',
            description: ` 
            <p>    
            Parada de emergencia PVC s/retencion c/led<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/RZb3m2qc/Parada-de-emergencia-PVC-c-retencion-c-led.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Parada de emergencia PVC s/retencion c/led ',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
        
          
        ],      
      },
      {
        id:'25',
        grupo:6,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Piloto',
        href: '#',
        imageSrc: 'https://i.postimg.cc/hvDksDTx/Buzzer-Piloto.webp',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [

          {            
            id:'1',
            name: 'Piloto',
            codigo:'Codigo',
            description: ` 
            <p>   
            Piloto<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/xT9y1k3n/Piloto.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',  
                          
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Piloto 24v ',  
                  '(2)  Piloto 220v ', 
                  '(3)  Piloto 380v ', 
                  '(4)  Mini Piloto ', 
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Buzzer Piloto',
            codigo:'Codigo',
            description: ` 
            <p>   
            Buzzer Piloto<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/hvDksDTx/Buzzer-Piloto.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
            
                          
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Buzzer Piloto 24v ',  
                  '(2)  Buzzer Piloto 220v ', 
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },

        
          
        ],      
      },
      //GRUPO6
      //GRUPO7(26,27,28,29)-Selectores
      {
        id:'26',
        grupo:7,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Selector',
        href: '#',
        imageSrc: 'https://i.postimg.cc/QNWD6t2g/Selector-0-1.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [

          {            
            id:'1',
            name: 'Selector',
            codigo:'Codigo',
            description: ` 
            <p>   
            Selector <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/QNWD6t2g/Selector-0-1.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                 
                          
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Selector (0-1) ',  
                  '(2)  Selector (1-0-2) ', 
                  '(3)  Selector con retorno', 
                  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
         

        
          
        ],      
      },
      {
        id:'27',
        grupo:7,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Selector con Llave',
        href: '#',
        imageSrc: 'https://i.postimg.cc/sDqZkvxV/Selector-con-Llave-0-1.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [

          
          {            
            id:'1',
            name: 'Selector con Llave',
            codigo:'Codigo',
            description: ` 
            <p>   
            Selector con Llave<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/sDqZkvxV/Selector-con-Llave-0-1.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
            
                          
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Selector con Llave(0-1) ',  
                  '(2)  Selector con Llave(0-1-2) ', 
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },

        
          
        ],      
      },
      {
        id:'28',
        grupo:7,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Selector Luminoso',
        href: '#',
        imageSrc: 'https://i.postimg.cc/bvQCG7Wt/Selector-Luminoso.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [

          
          {            
            id:'1',
            name: 'Selector Luminoso',
            codigo:'Codigo',
            description: ` 
            <p>   
            Selector Luminoso<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/bvQCG7Wt/Selector-Luminoso.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
            
                          
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Selector Luminoso(0-1) ',  
                  '(2)  Selector Luminoso(0-1-2) ', 
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
       
        
          
        ],      
      },
      {
        id:'29',
        grupo:7,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Selector PVC',
        href: '#',
        imageSrc: 'https://i.postimg.cc/hPmcyjdW/Selector-PVC.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [

          
          {            
            id:'1',
            name: 'Selector PVC',
            codigo:'Codigo',
            description: ` 
            <p>   
            Selector PVC<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/hPmcyjdW/Selector-PVC.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
            
                          
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Selector PVC(0-1) ',  
                  '(2)  Selector PVC(1-0-2) ', 
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
       
        
          
        ],      
      },
      //GRUPO7
      //GRUPO8(30,31,32,33,34)-Sirenas
      {
        id:'30',
        grupo:8,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Sirena MS',
        href: '#',
        imageSrc: 'https://i.postimg.cc/7PdKV179/Sirena-MS-2190-120-DB-de-SOnido-220.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [

          
          {            
            id:'1',
            name: 'Sirena MS 2190',
            codigo:'Codigo',
            description: ` 
            <p>   
            Sirena MS 2190 <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/7PdKV179/Sirena-MS-2190-120-DB-de-SOnido-220.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  
            
                          
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Sirena MS 2190 120 DB de SOnido 220 ',                    
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Sirena MS 290',
            codigo:'Codigo',
            description: ` 
            <p>   
            Sirena MS 290 <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/XNfgfMjj/Sirena-MS-290.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  
            
                          
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Sirena MS 290 Plomo con roja  120 DB de Sonido 220 ',                    
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
       
        
          
        ],      
      },
      {
        id:'31',
        grupo:8,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Sirena de Viento',
        href: '#',
        imageSrc: 'https://i.postimg.cc/Prcn18rn/Sirena-de-Viento-motor-plomo-120dbs-220.webp',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [

          
          {            
            id:'1',
            name: 'Sirena de Viento',
            codigo:'Codigo',
            description: ` 
            <p>   
            Sirena de Viento<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/Prcn18rn/Sirena-de-Viento-motor-plomo-120dbs-220.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  
            
                          
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Sirena de Viento motor plomo  120dbs 220 vac de sonido ',                    
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
       
       
        
          
        ],      
      },
      {
        id:'32',
        grupo:8,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Sirena Multifuncion',
        href: '#',
        imageSrc: 'https://i.postimg.cc/MH3H7KX3/Sirena-Multifuncion-IP65.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [

          
          {            
            id:'1',
            name: 'Sirena Multifuncion IP65',
            codigo:'Codigo',
            description: ` 
            <p>   
            Sirena Multifuncion IP65<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/MH3H7KX3/Sirena-Multifuncion-IP65.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  
            
                          
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Sirena Multifuncion IP65 ',                    
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
       
       
        
          
        ],      
      },
      {
        id:'33',
        grupo:8,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Circulina Led',
        href: '#',
        imageSrc: 'https://i.postimg.cc/dQfJjf4f/Circulina-Led-LTE-1101.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [

          
          {            
            id:'1',
            name: 'Circulina Led',
            codigo:'Codigo',
            description: ` 
            <p>   
            Circulina Led<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/dQfJjf4f/Circulina-Led-LTE-1101.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  
            
                          
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Circulina Led LTE-1101 ',                    
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
       
       
        
          
        ],      
      },
      {
        id:'34',
        grupo:8,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Baliza',
        href: '#',
        imageSrc: 'https://i.postimg.cc/Bb2s6SH1/Baliza-DLC.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [

          
          {            
            id:'1',
            name: 'Baliza',
            codigo:'Codigo',
            description: ` 
            <p>   
            Baliza DLC<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/Bb2s6SH1/Baliza-DLC.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                  
            
                          
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Baliza 1 color ',
                  '(2)  Baliza 2 color ',
                  '(3)  Baliza 3 color ',
                  '(4)  Baliza 4 color ',                    
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
       
       
        
          
        ],      
      },
      //GRUPO8
      //GRUPO9(35)-Tableros
      {
        id:'35',
        grupo:9,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Tablero',
        href: '#',
        imageSrc: 'https://i.postimg.cc/Sspwnmcp/Tablero.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [

          
          {            
            id:'1',
            name: 'Tablero',
            codigo:'Codigo',
            description: ` 
            <p>   
            Tablero<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/Sspwnmcp/Tablero.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                  '(5)  S0-05',
                  
            
                          
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Tablero 600 x 400 x 200 ',
                  '(2)  Tablero 500 x 400 x 200 ',
                  '(3)  Tablero 400 x 300 x 200 ',
                  '(4)  Tablero 800 x 600 x 300 ', 
                  '(5)  Tablero 1000 x 600 x 300 ',                   
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
        ],      
      },
      //GRUPO9
      //GRUPO10(36)-Fuente Alimentacion
      {
        id:'36',
        grupo:10,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Fuente Alimentacion',
        href: '#',
        imageSrc: 'https://i.postimg.cc/y87b0Lbw/Fuente01.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Fuente de Alimentacion',
            codigo:'Codigo',
            description: ` 
            <p>   
            Fuente de Alimentacion<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/y87b0Lbw/Fuente01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                  '(5)  S0-05',
                  
            
                          
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Fuente de Alimentacion 1 AMP 24V ',
                  '(2)  Fuente de Alimentacion 1.7 AMP 24V ',
                  '(3)  Fuente de Alimentacion 2.5 AMP 24V ',
                  '(4)  Fuente de Alimentacion 3.2 AMP 24V ', 
                  '(5)  Fuente de Alimentacion 5 AMP 24V ',                   
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
        ],      
      },
      //GRUPO11(37,38,39,40,41,42,43,44,45,46)-Temporizador
      {
        id:'37',
        grupo:11,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Pirometro',
        href: '#',
        imageSrc: 'https://i.postimg.cc/L85gn1pj/Pirometro-Analogo-Digital-48-x-48.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Pirometro Analogo/Digital 48 x 48',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pirometro Analogo/Digital 48 x 48<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/L85gn1pj/Pirometro-Analogo-Digital-48-x-48.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pirometro Analogo/Digital 48 x 48 ',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Pirometro Digital 48 x 48 TCCOM',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pirometro Analogo/Digital 48 x 48 TCCOM <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/nLc6Bnz8/Pirometro-Digital-48-x-48tccom.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pirometro Analogo/Digital 48 x 48 TCCOM ',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'3',
            name: 'Pirometro Digital 48 x 48 DT TENSE',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pirometro Digital 48 x 48 DT TENSE<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/bJTc4Lvn/Pirometro-Digital-48-x-48-DT.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
             

                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pirometro Digital 48 x 48 DT-48Y  ',
                  '(2)  Pirometro Digital 48 x 48 DT-48M ',
                                   
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'4',
            name: 'Pirometro Timer/Digital TENSE',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pirometro Timer/Digital TENSE<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/KzfG2mYJ/Pirometro-Timer-Digital-TENSE.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
             

                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pirometro Timer/Digital 72x72 DTZ-72  ',
                  '(2)  Pirometro Timer/Digital 96x96 DTZ-96 ',
                                   
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'5',
            name: 'Pirometro 96x96 ANA/DIG AD-96',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pirometro 96x96 ANA/DIG AD-96<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/3JWv5k3c/Pirometro-96x96-ANA-DIG-AD-96.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',
                  
             

                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pirometro 96x96 ANA/DIG AD-96  ',   
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'6',
            name: 'Pirometro 48x48 ERD-48M',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pirometro 48x48 ERD-48M<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/pLbP8Zst/Pirometro-48x48-ERD-48-M.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',
                  
             

                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pirometro 48x48 ERD-48M  ',   
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'7',
            name: 'Timer/Piroemtro 48x48 DTZ-48',
            codigo:'Codigo',
            description: ` 
            <p>   
            Timer/Piroemtro 48x48 DTZ-48<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/pLbP8Zst/Pirometro-48x48-ERD-48-M.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',
                  
             

                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Timer/Piroemtro 48x48 DTZ-48  ',   
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'8',
            name: 'Timer/Piroemtro 48x96 DT-Y (Horizontal)',
            codigo:'Codigo',
            description: ` 
            <p>   
            Timer/Piroemtro 48x96 DT-Y (Horizontal)<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/pLbP8Zst/Pirometro-48x48-ERD-48-M.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',
                  '(2)  S0-02',
                  
             

                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Timer/Piroemtro 48x96 DT-Y (Horizontal)  ', 
                  '(2)  Timer/Piroemtro 48x96 DT-Y (Vertical)  ',     
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'9',
            name: 'Pirometro DT -321',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pirometro DT -321<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/pLbP8Zst/Pirometro-48x48-ERD-48-M.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',
                 
                  
             

                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pirometro DT -321  ', 
                 
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'10',
            name: 'Temperatura/Humedad HT-310',
            codigo:'Codigo',
            description: ` 
            <p>   
            Temperatura/Humedad HT-310<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/pLbP8Zst/Pirometro-48x48-ERD-48-M.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',
                 
                  
             

                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Temperatura/Humedad HT-310  ', 
                 
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'11',
            name: 'Pirometro DT-36E',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pirometro DT-36E<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/pLbP8Zst/Pirometro-48x48-ERD-48-M.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',
                 
                  
             

                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pirometro DT-36E ', 
                 
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'12',
            name: 'Pirometro N1040',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pirometro N1040<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/pLbP8Zst/Pirometro-48x48-ERD-48-M.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',
                 
                  
             

                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pirometro N1040 ', 
                 
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'13',
            name: 'Pirometro N1020',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pirometro N1020<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/pLbP8Zst/Pirometro-48x48-ERD-48-M.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',
                 
                  
             

                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pirometro N1020 ', 
                 
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
        ],      
      },
      {
        id:'38',
        grupo:11,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Timer',
        href: '#',
        imageSrc: 'https://i.postimg.cc/HsrBFrfS/Timer-ONN-OFF-DELAY.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Timer ONN/OFF DELAY',
            codigo:'Codigo',
            description: ` 
            <p>   
            Timer ONN/OFF DELAY<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/HsrBFrfS/Timer-ONN-OFF-DELAY.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Timer ONN/OFF DELAY ',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Timer T. Galleta Digital DRV-10',
            codigo:'Codigo',
            description: ` 
            <p>   
            Timer T. Galleta Digital DRV-10<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/5txXXRW6/Timer-T-Galleta-Digital-DRV-10.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Timer T. Galleta Digital DRV-10',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'3',
            name: 'Timer T. Galleta Analogo ERV-08',
            codigo:'Codigo',
            description: ` 
            <p>   
            Timer T. Galleta Analogo ERV-08<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/cCXVx6WD/Timer-T-Galleta-Analogo-ERV-08.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Timer T. Galleta Analogo ERV-08',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'4',
            name: 'Control de niveles Liquido  SSR-OSD',
            codigo:'Codigo',
            description: ` 
            <p>   
            Control de niveles Liquido  SSR-OSD<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/brDQJBcK/Control-de-niveles-Liquido-SSR-OSD.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Control de niveles Liquido  SSR-OSD',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'5',
            name: 'Timer Analogico 8 Pines',
            codigo:'Codigo',
            description: ` 
            <p>   
            Timer Analogico 8 Pines<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/8zBDszzd/Timer-Analogico-8-Pines.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Timer Analogico 8 Pines',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'6',
            name: 'Timer Analogico/Digital  8 Pines',
            codigo:'Codigo',
            description: ` 
            <p>   
            Timer Analogico/Digital  8 Pines<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/8zBDszzd/Timer-Analogico-8-Pines.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Timer Analogico/Digital  8 Pines',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'7',
            name: 'Counter Analogico / Digital 8 Pines',
            codigo:'Codigo',
            description: ` 
            <p>   
            Counter Analogico / Digital 8 Pines<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/L5pFHdFQ/Counter-Analogico-Digital-8-Pines.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Counter Analogico / Digital 8 Pines',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
 
        ],      
      },
      {
        id:'39',
        grupo:11,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Contador',
        href: '#',
        imageSrc: 'https://i.postimg.cc/vTKGvxwC/Contador-digital-ASD2224-24-V.webp',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Contador digital ASD2224 24V',
            codigo:'Codigo',
            description: ` 
            <p>   
            Contador digital ASD2224 24V<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/vTKGvxwC/Contador-digital-ASD2224-24-V.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Contador digital ASD2224 24V',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Contador digital ASD22220 220V',
            codigo:'Codigo',
            description: ` 
            <p>   
            Contador digital ASD22220 220V<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/x13TwCvN/Contador-digital-ASD22220-220-V.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Contador digital ASD22220 220V',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
 
        ],      
      },
      {
        id:'40',
        grupo:11,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Horometro',
        href: '#',
        imageSrc: 'https://i.postimg.cc/2SV2JbR2/Horometro-48x48-DHM-48.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Horometro 48x48 DHM-48',
            codigo:'Codigo',
            description: ` 
            <p>   
            Horometro 48x48 DHM-48<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/2SV2JbR2/Horometro-48x48-DHM-48.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Horometro 48x48 DHM-48',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
     
 
        ],      
      },
      {
        id:'41',
        grupo:11,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Frecuenciometro',
        href: '#',
        imageSrc: 'https://i.postimg.cc/DyqXz7Qn/Frecuenciometro-DJ-F72.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Frecuenciometro DJ-F72',
            codigo:'Codigo',
            description: ` 
            <p>   
            Frecuenciometro DJ-F72<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/DyqXz7Qn/Frecuenciometro-DJ-F72.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Frecuenciometro DJ-F72',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
     
 
        ],      
      },
      {
        id:'42',
        grupo:11,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Timer Ciclicos',
        href: '#',
        imageSrc: 'https://i.postimg.cc/rwfC88cz/Timer-Ciclicos-DFR-72-TENSE.webp',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Timer Ciclicos DFR-72 TENSE',
            codigo:'Codigo',
            description: ` 
            <p>   
            Timer Ciclicos DFR-72 TENSE<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/rwfC88cz/Timer-Ciclicos-DFR-72-TENSE.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Timer Ciclicos DFR-72 TENSE',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Timer Ciclicos analogo ERF-09 TENSE',
            codigo:'Codigo',
            description: ` 
            <p>   
            Timer Ciclicos analogo ERF-09 TENSE<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/SxHLXg2p/Timer-Ciclicos-analogo-ERF-09-TENSE.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Timer Ciclicos analogo ERF-09 TENSE',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'3',
            name: 'Temporizador Ciclico 30 SEG',
            codigo:'Codigo',
            description: ` 
            <p>   
            Temporizador Ciclico 30 SEG TENSE<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/g0JvB1CR/Temporizador-Ciclico-30-SEG.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Temporizador Ciclico 30 SEG TENSE',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'4',
            name: 'Contacto Electronico  18 AMP',
            codigo:'Codigo',
            description: ` 
            <p>   
            Contacto Electronico  18 AMP TENSE<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/DyqXz7Qn/Frecuenciometro_DJ-F72.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Contacto Electronico  18 AMP TENSE',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'5',
            name: 'Voltimetro y Amperimetro TENSE',
            codigo:'Codigo',
            description: ` 
            <p>   
            Voltimetro y Amperimetro TENSE<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/mrCbRrWG/Voltimetro-Amperimetro-Digital-DC-de-0-100-VDC-a-50-A.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Voltimetro y Amperimetro TENSE',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
     
 
        ],      
      },
      {
        id:'43',
        grupo:11,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Medidor Multifuncion',
        href: '#',
        imageSrc: 'https://i.postimg.cc/MG6DJdL0/Medidor-Multifuncion-EM-06.webp',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Medidor Multifuncion EM 06',
            codigo:'Codigo',
            description: ` 
            <p>   
            Medidor Multifuncion EM 06 TENSE<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/MG6DJdL0/Medidor-Multifuncion-EM-06.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Medidor Multifuncion EM 06 TENSE',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Medidor Multifuncion Basico EM60D TENSE',
            codigo:'Codigo',
            description: ` 
            <p>   
            Medidor Multifuncion Basico EM60D TENSE<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/MThVHD9F/Medidor-Multifuncion-Basico-EM60-D-TENSE.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Medidor Multifuncion Basico EM60D TENSE',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'3',
            name: 'Medidor Multifuncion Basico EM250D TENSE',
            codigo:'Codigo',
            description: ` 
            <p>   
            Medidor Multifuncion Basico EM250D TENSE<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/C5c0Jv9v/Medidor-Multifuncion-Basico-EM250-D.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Medidor Multifuncion Basico EM250D TENSE',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'4',
            name: 'Medidor Multifuncion EM 07 TENSE',
            codigo:'Codigo',
            description: ` 
            <p>   
            Medidor Multifuncion EM 07 TENSE<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/7hn3RzNt/Medidor-Multifuncion-EM-07-TENSE.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Medidor Multifuncion EM 07 TENSE',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'5',
            name: 'Medidor Multifuncion Tipo Riel EM06DIN TENSE',
            codigo:'Codigo',
            description: ` 
            <p>   
            Medidor Multifuncion Tipo Riel EM06DIN TENSE<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/yx2HwJY9/Medidor-Multifuncion-Tipo-Riel-EM06-DIN.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Medidor Multifuncion Tipo Riel EM06DIN TENSE',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'6',
            name: 'Convertidor 485 a ETHERNET TENSE',
            codigo:'Codigo',
            description: ` 
            <p>   
            Convertidor 485 a ETHERNET TENSE<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/T30RP3k8/Convertidor-485-a-ETHERNET-TENSE.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Convertidor 485 a ETHERNET TENSE',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
 
        ],      
      },
      {
        id:'44',
        grupo:11,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Int. Reloj',
        href: '#',
        imageSrc: 'https://i.postimg.cc/GhQ5687y/Int-Reloj-Horario-Digital-220-V.webp',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Int. Reloj Horario Digital 220V',
            codigo:'Codigo',
            description: ` 
            <p>   
            Int. Reloj Horario Digital 220V<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/GhQ5687y/Int-Reloj-Horario-Digital-220-V.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Int. Reloj Horario Digital 220V',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Int. Reloj Horario Tipo Galleta 220V',
            codigo:'Codigo',
            description: ` 
            <p>   
            Int. Reloj Horario Tipo Galleta 220V<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/tRSsCDMR/Int-Reloj-Horario-Tipo-Galleta-220-V.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Int. Reloj Horario Tipo Galleta 220V',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
         
 
 
        ],      
      },
      {
        id:'45',
        grupo:11,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Termostato',
        href: '#',
        imageSrc: 'https://i.postimg.cc/KYtbk7rH/Termostato-1k-TO011-2-0-60-C-3-NC.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Termostato 1kTO011-2.0-60C 3NC',
            codigo:'Codigo',
            description: ` 
            <p>   
            Termostato 1kTO011-2.0-60C 3NC<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/KYtbk7rH/Termostato-1k-TO011-2-0-60-C-3-NC.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Termostato 1kTO011-2.0-60C 3NC',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'HMI KTP400',
            codigo:'Codigo',
            description: ` 
            <p>   
            HMI KTP400<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/zBRxXpCy/HMI-KTP400.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  HMI KTP400',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
        
         
 
 
        ],      
      },
      {
        id:'46',
        grupo:11,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Jostink',
        href: '#',
        imageSrc: 'https://i.postimg.cc/CxJ9nvW5/Jostink-4-POS-ENCLA-RETORNO.webp',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Jostink 4 POS (ENCLA/RETORNO)',
            codigo:'Codigo',
            description: ` 
            <p>   
            Jostink 4 POS (ENCLA/RETORNO)<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/CxJ9nvW5/Jostink-4-POS-ENCLA-RETORNO.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Jostink 4 POS (ENCLA/RETORNO)',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Jostink 2 POS (ENCLA/RETORNO)',
            codigo:'Codigo',
            description: ` 
            <p>   
            Jostink 2 POS (ENCLA/RETORNO)<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/qq1C36H9/Jostink-2-POS-ENCLA-RETORNO.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Jostink 2 POS (ENCLA/RETORNO)',                            
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
        
        
         
 
 
        ],      
      },
      //GRUPO12(47,48,49,50,51,52,53,54,55,56,57,58)-Switch
      {
        id:'47',
        grupo:12,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Micro Switch TMAZTZ',
        href: '#',
        imageSrc: 'https://i.postimg.cc/nh9bN8rm/Micro-Wsitch-TN-1704.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Micro Switch TMAZTZ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Micro Switch TMAZTZ<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/nh9bN8rm/Micro-Wsitch-TN-1704.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                  '(5)  S0-05',
                  '(6)  S0-06',
                  '(7)  S0-07',
                 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Micro Wsitch TN-1704',
                  '(2)  Micro Wsitch TN-1743',  
                  '(3)  Micro Wsitch TN-1305',  
                  '(4)  Micro Wsitch TN-1307',  
                  '(5)  Micro Wsitch TN-1308',  
                  '(6)  Micro Wsitch TN-1309',  
                  '(7)  Micro Wsitch TN-1300',  
               
                                   
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
    
        
        
         
 
 
        ],      
      },
      {
        id:'48',
        grupo:12,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Horizontal Limit Switch TMAZTZ',
        href: '#',
        imageSrc: 'https://i.postimg.cc/ZR64vGp3/Horizontal-Limit-Switch-TZ-7121.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Horizontal Limit Switch TMAZTZ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Horizontal Limit Switch TMAZTZ<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/ZR64vGp3/Horizontal-Limit-Switch-TZ-7121.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                  '(5)  S0-05',
                  '(6)  S0-06',
                  '(7)  S0-07',
                  '(8)  S0-08',
                  '(9)  S0-09',
                  '(10)  S0-10',
                  '(11)  S0-11',
                  '(12)  S0-12',
                 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Horizontal Limit Switch TZ-7121',
                  '(2)  Horizontal Limit Switch TZ-7141',  
                  '(3)  Horizontal Limit Switch TZ-7120',  
                  '(4)  Horizontal Limit Switch TZ-7140',  
                  '(5)  Horizontal Limit Switch TZ-7124',  
                  '(6)  Horizontal Limit Switch TZ-7144',  
                  '(7)  Horizontal Limit Switch TZ-7100',  
                  '(8)  Horizontal Limit Switch TZ-7110',
                  '(9)  Horizontal Limit Switch TZ-7310',
                  '(10)  Horizontal Limit Switch TZ-7311',
                  '(11)  Horizontal Limit Switch TZ-7312',
                  '(12)  Horizontal Limit Switch TZ-7166',
               
                                   
             
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
    
        
        
         
 
 
        ],      
      },
      {
        id:'49',
        grupo:12,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Sealed Limit Switch TMAZTZ',
        href: '#',
        imageSrc: 'https://i.postimg.cc/1z8xVhP3/Sealed-Limit-Switch-TZ-6001.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Sealed Limit Switch TMAZTZ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Sealed Limit Switch TMAZTZ<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/1z8xVhP3/Sealed-Limit-Switch-TZ-6001.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                  '(5)  S0-05',
          
                 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Sealed Limit Switch TZ-6001',
                  '(2)  Sealed Limit Switch TZ-6002',  
                  '(3)  Sealed Limit Switch TZ-6003',  
                  '(4)  Sealed Limit Switch TZ-6006',  
                  '(5)  Sealed Limit Switch TZ-6143',    
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
    
        
        
         
 
 
        ],      
      },
      {
        id:'50',
        grupo:12,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Waterproof Limit Switch (con cable) TMAZTZ',
        href: '#',
        imageSrc: 'https://i.postimg.cc/V5PsDsfg/Waterproof-Limit-Switch-con-cable-TZ-3102.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Waterproof Limit Switch (con cable) TMAZTZ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Waterproof Limit Switch (con cable) TMAZTZ<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/V5PsDsfg/Waterproof-Limit-Switch-con-cable-TZ-3102.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                  '(5)  S0-05',
          
                 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Waterproof Limit Switch(con cable) TZ-3102',
                  '(2)  Waterproof Limit Switch(con cable) TZ-3103',  
                  '(3)  Waterproof Limit Switch(con cable) TZ-3107',  
                  '(4)  Waterproof Limit Switch(con cable) TZ-3108',  
                  '(5)  Waterproof Limit Switch(con cable) TZ-3101',    
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
    
        
        
         
 
 
        ],      
      },
      {
        id:'51',
        grupo:12,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Miniature Safety Limit Switch TMAZTZ',
        href: '#',
        imageSrc: 'https://i.postimg.cc/j5Njp38Z/Miniature-Safety-Limit-T4-N-4120.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Miniature Safety Limit Switch TMAZTZ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Miniature Safety Limit Switch TMAZTZ<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/j5Njp38Z/Miniature-Safety-Limit-T4-N-4120.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                
          
                 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Miniature Safety Limit T4N-4120',
                  '(2)  Miniature Safety Limit T4N-4122',  
                  '(3)  Miniature Safety Limit T4N-412M',  
                  '(4)  Miniature Safety Limit T4N-4131',  
      
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
    
        
        
         
 
 
        ],      
      },
      {
        id:'52',
        grupo:12,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Limit Switch 300 TLS TMAZTZ',
        href: '#',
        imageSrc: 'https://i.postimg.cc/wMw32y4p/Limit-Switch-TLS-301.webp',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Limit Switch TLS TMAZTZ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Limit Switch TLS TMAZTZ<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/wMw32y4p/Limit-Switch-TLS-301.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                
          
                 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Limit Switch TLS-301',
                  '(2)  Limit Switch TLS-331',  
                  '(3)  Limit Switch TLS-311',  
                  '(4)  Limit Switch TLS-327',  
      
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
    
        
        
         
 
 
        ],      
      },
      {
        id:'53',
        grupo:12,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Limit Switch WL TMAZTZ',
        href: '#',
        imageSrc: 'https://i.postimg.cc/MpqqHK90/Limit-Switch-WL-CA2-2.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Limit Switch WL TMAZTZ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Limit Switch WL TMAZTZ<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/MpqqHK90/Limit-Switch-WL-CA2-2.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                  '(5)  S0-05',
                  '(6)  S0-06',
                  '(7)  S0-07',
                  '(8)  S0-08',
                  '(9)  S0-09',
                  '(10)  S0-10',
                
          
                 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Limit Switch WL-CA2-2',
                  '(2)  Limit Switch WL-CA2-2-Q',  
                  '(3)  Limit Switch WL-CL',  
                  '(4)  Limit Switch WL-D', 
                  '(5)  Limit Switch WL-D1', 
                  '(6)  Limit Switch WL-D2', 
                  '(7)  Limit Switch WL-D3', 
                  '(8)  Limit Switch WL-NJ-30', 
                  '(9)  Limit Switch WL-NJ-S2', 
                  '(10)  Limit Switch WL-CA-3242', 
      
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
    
        
        
         
 
 
        ],      
      },
      {
        id:'54',
        grupo:12,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Limit Switch TSA TMAZTZ',
        href: '#',
        imageSrc: 'https://i.postimg.cc/7ht06Wk0/Limit-Switch-TSA-012.webp',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Limit Switch TSA  TMAZTZ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Limit Switch TSA  TMAZTZ<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/7ht06Wk0/Limit-Switch-TSA-012.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                  '(5)  S0-05',
                  '(6)  S0-06',
                  '(7)  S0-07',
                  '(8)  S0-08',
                  '(9)  S0-09',
               
                
          
                 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Limit Switch TSA-012',
                  '(2)  Limit Switch TSA-031',  
                  '(3)  Limit Switch TSA-021',  
                  '(4)  Limit Switch TSA-061', 
                  '(5)  Limit Switch TSA-071', 
                  '(6)  Limit Switch TSA-041', 
                  '(7)  Limit Switch TSA-051', 
                  '(8)  Limit Switch TSA-001', 
                  '(9)  Limit Switch TSA-003', 
                  
      
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
    
        
        
         
 
 
        ],      
      },
      {
        id:'55',
        grupo:12,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Limit Switch 100 TLS TMAZTZ',
        href: '#',
        imageSrc: 'https://i.postimg.cc/Wzsc35nN/Limit-Switch-TLS-101.webp',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Limit Switch 100 TLS TMAZTZ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Limit Switch 100 TLS TMAZTZ<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/Wzsc35nN/Limit-Switch-TLS-101.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                  '(5)  S0-04',
                  '(6)  S0-04',
                  '(7)  S0-04',
                
          
                 
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Limit Switch TLS-101',
                  '(2)  Limit Switch TLS-103',  
                  '(3)  Limit Switch TLS-111',  
                  '(4)  Limit Switch TLS-127',  
                  '(5)  Limit Switch TLS-121',
                  '(6)  Limit Switch TLS-131',
                  '(7)  Limit Switch TLS-191',
      
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
    
        
        
         
 
 
        ],      
      },
      {
        id:'56',
        grupo:12,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Mini Micro Swich TMAZTZ',
        href: '#',
        imageSrc: 'https://i.postimg.cc/pXhytTps/Mini-Micro-Swich-v-152-TC5.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Mini Micro Swich TMAZTZ ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Mini Micro Swich TMAZTZ <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/pXhytTps/Mini-Micro-Swich-v-152-TC5.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                  '(5)  S0-04',
                  '(6)  S0-04',  
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Mini Micro Swich v-152-TC5',
                  '(2)  Mini Micro Swich v-153-TC5',  
                  '(3)  Mini Micro Swich v-155-1C5',  
                  '(4)  Mini Micro Swich v-156-1C5',  
                  '(5)  Mini Micro Swich v-155-1C25',
                  '(6)  Mini Micro Swich v-156-1C25',  
         
      
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
    
        
        
         
 
 
        ],      
      },
      {
        id:'57',
        grupo:12,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Limit Swich  TZ TMAZTZ',
        href: '#',
        imageSrc: 'https://i.postimg.cc/xT8k65vN/Limit-Swich-TZ-8104.jpg',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Limit Swich  TZ TMAZTZ ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Limit Swich  TZ TMAZTZ <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/xT8k65vN/Limit-Swich-TZ-8104.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                  '(5)  S0-05',
                  '(6)  S0-06', 
                  '(7)  S0-07',  
                  '(8)  S0-08',   
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Limit Swich  TZ-8104',
                  '(2)  Limit Swich  TZ-8107',  
                  '(3)  Limit Swich  TZ-8108',  
                  '(4)  Limit Swich  TZ-8111',  
                  '(5)  Limit Swich  TZ-8112',
                  '(6)  Limit Swich  TZ-8122',  
                  '(7)  Limit Swich  TZ-8168',  
                  '(8)  Limit Swich  TZ-8169',  
         
      
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
    
        
        
         
 
 
        ],      
      },
      {
        id:'58',
        grupo:12,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'Micro Switch TM TMAZTZ',
        href: '#',
        imageSrc: 'https://i.postimg.cc/PrX79pJw/Micro-Swich-TM-1704.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Micro Switch TM TMAZTZ ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Micro Switch TM TMAZTZ <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/PrX79pJw/Micro-Swich-TM-1704.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',
                  '(3)  S0-03',
                  '(4)  S0-04',
                  '(5)  S0-05',
                  '(6)  S0-06', 
                  '(7)  S0-07',  
                  '(8)  S0-08',  
                  '(9)  S0-09',  
                                                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Micro Swich  TM-1704',
                  '(2)  Micro Swich  TM-1743',  
                  '(3)  Micro Swich  TM-1305',  
                  '(4)  Micro Swich  TM-1307',  
                  '(5)  Micro Swich  TM-1308',
                  '(6)  Micro Swich  TM-1309',  
                  '(7)  Micro Swich  TM-1300',  
                  '(8)  Micro Swich  TM-1305',  
                  '(9)  Micro Swich  con Bobina',  
         
      
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
    
        
        
         
 
 
        ],      
      },
      //GRUPO13(59,60,61,62,63)-PLC
      {
        id:'59',
        grupo:13,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'PLC LOGO OBA 8 SIEMENS',
        href: '#',
        imageSrc: 'https://i.postimg.cc/Ss6Mn6Hy/PLC-LOGO-1.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'PLC LOGO OBA 8 SIEMENS ',
            codigo:'Codigo',
            description: ` 
            <p>   
            PLC LOGO OBA 8 SIEMENS <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/Ss6Mn6Hy/PLC-LOGO-1.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  PLC LOGO OBA 8-12/24 V SIEMENS',
                  '(2)  PLC LOGO OBA 8-115/240 V SIEMENS',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
 
        ],      
      },
      {
        id:'60',
        grupo:13,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'PLC LOGO OBA 8 SIEMENS',
        href: '#',
        imageSrc: 'https://i.postimg.cc/VkbfDYgT/PLC-LOGO-2.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'PLC LOGO OBA 6 SIEMENS ',
            codigo:'Codigo',
            description: ` 
            <p>   
            PLC LOGO OBA 6 SIEMENS <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/VkbfDYgT/PLC-LOGO-2.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  PLC LOGO OBA 6-12/24 V SIEMENS',
                  '(2)  PLC LOGO OBA 6-115/240 V SIEMENS',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
 
        ],      
      },
      {
        id:'61',
        grupo:13,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'PLC LOGO OBA 8 SIEMENS',
        href: '#',
        imageSrc: 'https://i.postimg.cc/43x1DN2f/PLC-LOGO-3.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'PLC S7 ',
            codigo:'Codigo',
            description: ` 
            <p>   
            PLC S7 <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/43x1DN2f/PLC-LOGO-3.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01', 
                  '(2)  S0-02',                            
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  PLC S7 1200 1212 SIEMENS',
                  '(2)  PLC S7 1200 1214 SIEMENS',  
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
 
        ],      
      },
      {
        id:'62',
        grupo:13,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'HMI KTP700',
        href: '#',
        imageSrc: 'https://i.postimg.cc/43H1fFGq/PLC-LOGO-4.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'HMI KTP700 SIEMENS',
            codigo:'Codigo',
            description: ` 
            <p>   
            HMI KTP700 SIEMENS <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/43H1fFGq/PLC-LOGO-4.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                                     
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  HMI KTP700 SIEMENS',
              
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
 
        ],      
      },
      {
        id:'63',
        grupo:13,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'LOGO TDE SIEMENS',
        href: '#',
        imageSrc: 'https://i.postimg.cc/FKxHLhhL/PLC-LOGO-5.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'LOGO TDE SIEMENS',
            codigo:'Codigo',
            description: ` 
            <p>   
            LOGO TDE SIEMENS <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/FKxHLhhL/PLC-LOGO-5.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                                     
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  LOGO TDE SIEMENS',
              
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
 
        ],      
      },
      //GRUPO14(64)-ACCESORIOS
      {
        id:'64',
        grupo:14,               
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        status: 'delivery',
        productName: 'PEDAL',
        href: '#',
        imageSrc: 'https://i.postimg.cc/TwvcNqbb/Pedal-01.png',
        imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
        details: [          
          {            
            id:'1',
            name: 'Pedal TFS-201',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pedal TFS-201 <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/TwvcNqbb/Pedal-01.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                                     
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pedal TFS-201',
              
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'2',
            name: 'Pedal TFS-01 PVC TMAZTZ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pedal TFS-01 PVC TMAZTZ <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/g01GCrc8/Pedal-02.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                                     
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pedal TFS-01 PVC',
              
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'3',
            name: 'Pedal TFS-01 METAL TMAZTZ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pedal TFS-01 METAL TMAZTZ<br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/T1q4f2mt/Pedal-03.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                                     
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pedal TFS-01 METAL ',
              
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'4',
            name: 'Pedal TFS-2 TMAZTZ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pedal TFS-2 TMAZTZ <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/5tF0pyZY/Pedal-04.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                                     
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pedal TFS-2 TMAZTZ',
              
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
          {            
            id:'5',
            name: 'Pedal TFS-402 TMAZTZ',
            codigo:'Codigo',
            description: ` 
            <p>   
            Pedal TFS-402 TMAZTZ <br>                 
              <br>
              
            </p>
          `,           
            href: '#',
            imageSrc: 'https://i.postimg.cc/Y0f6DbLP/Pedal-05.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            anidado: [
              {
                id:'1',
                name: 'Codigo',
                items: [
                  '(1)  S0-01',                                     
                ], 
            
              
              },
              {
                id:'2',
                  name: 'Nombre',
                  items: [
                  '(1)  Pedal TFS-402 TMAZTZ',
              
                                                          
                  ], 
              
                
                },
                {
                  id:'3',
                  name: 'Caracteristicas',
                  items: [
                    '(1)  -',                                               
          
                  ], 
              
                
                },     
              // More sections...
            ],
          },
 
        ],      
      },

    ],
  }



const product = 
  {
    name: 'Conmutador Salzer',
    id:1,
    grupo:1,
    price: '',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://i.postimg.cc/GmY9FS66/Conmutador1.png',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
          id: 2,
          name: 'Angled view',
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
          alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
          id: 3,
          name: 'Angled view',
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
          alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
          id: 4,
          name: 'Angled view',
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
          alt: 'Angled front view with bag zipped and handles upright.',
      },
      // More images...
    ],
    colors: [
      { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
      { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
    ],
    description: `
      <p>      
        Polos -2,3 y 4<br>
        Intensidad Nominal -16A -400A<br>
        Tension Maxima - 600V AC
      </p>
                `,
    details: [
      {
        name: 'Codigo',
        items: [
          '(1)  S16-61026',
          '(2)  S16-61027',
          '(3)  S16-61028',
          '(4)  S16-61361',
          '(5)  S16-61363',
          '(6)  S16-61039',        
        ], 
    
      
      },
      {
          name: 'Nombre',
          items: [
            '(1)  Conmutador de Linea 1-0-2 ,2 polos 16 amp',
            '(2)  Conmutador de Linea 1-0-2 ,3 polos 16 amp',
            '(3)  Conmutador de Linea 1-0-2 ,4 polos 16 amp',
            '(4)  Conmutador de Linea 1-0-2 ,1 polos 16 amp con Retorno al centro',
            '(5)  Conmutador de Linea 1-0-2 ,3 polos 16 amp con Retorno al centro',
            '(6)  Conmutador de Linea 1-2 , 3 polos 16 amp , sin cero',          
          ], 
      
        
        },
        {
          name: 'Caracteristicas',
          items: [
            '(1)  [CSA/UL 240/1HP]',
            '(2)  [CSA/UL 240/3HP - AC3 415V 5.5KW]',
            '(3)  [CSA/UL 240/3HP - AC3 415V 5.5KW]',
            '(4)  [CSA/UL 240/1HP]',
            '(5)  [CSA/UL 240/3HP - AC3 415V 5.5KW]',
            '(6)  [CSA/UL 240/3HP - AC3 415V 5.5KW]',         
          ], 
      
        
        },     
      // More sections...
    ],
  }
  const [open, setOpen] = useState(false)
  const [parametro, setParametro] = useState(false)
  const [parametroDetalle, setParametroDetalle] = useState(false)
  let [isOpen, setIsOpen] = useState(false)
  //const [selectedColor, setSelectedColor] = useState(ProductDetails[details.name[0]])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
//ProductDetails//categories//details//productName
const [contador, setContador] = useState(false) 
  function closeModal() {
    setIsOpen(false)
  }
 
  function openModal(a) {
    setIsOpen(true)  
    setParametro(a) 
  }
  //const [selectedColor, setSelectedColor] = useState(item.id[0])
  function valorSeleccionado(item) 
  {
    setParametroDetalle(true) 
    setParametroDetalle(item)
    
    //alert(name)
    //alert(descripcion)    
  }
  


  return (

    <div className="bg-white py-8 font-mono text-xl">
      
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="space-y-4">
                          {category.featured.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="group aspect-h-1 aspect-w-1 relative overflow-hidden rounded-md bg-gray-100"
                            >
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-cover object-center group-hover:opacity-75"
                              />
                              
                              <div className="flex flex-col justify-end">
                                <div className="bg-white bg-opacity-60 p-4 text-base sm:text-sm">
                                  <a href={item.href} className="font-medium text-gray-900">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    {item.name}
                                  </a>
                                  <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                    Shop now
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((column, columnIdx) => (
                          <div key={columnIdx} className="space-y-10">
                            {column.map((section) => (
                              <div key={section.name}>
                                <p
                                  id={`${category.id}-${section.id}-heading-mobile`}
                                  className="font-medium text-gray-900"
                                >
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                  className="mt-6 flex flex-col space-y-6"
                                >
                                  {section.items.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <main
        className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-2 border-slate-800 rounded-3xl"
        aria-labelledby="order-history-heading  " 
      >  {/* Menu Principal */}      
          <div className="max-w-xl">
        
            <h1 id="order-history-heading" className="text-3xl font-bold tracking-tight text-gray-900">
              { /* Lista de {params.id}  {params.name} */}
              {'1' == params.id ? (   
                    "Lista de Conmutadores."                
                      
                ) : null}
              {'2' == params.id ? (      
                      "Lista de Variadores."
                ) : null}
              {'3' == params.id ? (      
                      "Lista de Interruptores."
                ) : null}
              {'4' == params.id ? (      
                      "Lista de Sensores."
                ) : null}
              {'5' == params.id ? (      
                      "Lista de Conectores."
                ) : null}
              {'6' == params.id ? (      
                      "Lista de Pulsadores."
                ) : null}
              {'7' == params.id ? (      
                      "Lista de Selectores."
                ) : null}
              {'8' == params.id ? (      
                      "Lista de Sirenas."
                ) : null}
              {'9' == params.id ? (      
                      "Lista de Tableros."
                ) : null}
              {'10' == params.id ? (      
                      "Lista de Fuente de Alimentacion."
                ) : null}
              {'11' == params.id ? (      
                      "Lista de Temporizadores."
                ) : null}
              {'12' == params.id ? (      
                      "Lista Switch."
                ) : null}
              {'13' == params.id ? (      
                      "Lista de PLC."
                ) : null}
              {'14' == params.id ? (      
                      "Lista de Accesorios."
                ) : null}
                  
            </h1>
            <p className="mt-2 text-sm text-gray-500">               
            </p>         
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4 ">
      
            {
              ProductDetails.categories.map((order) => (
                order.grupo == params.id ? (
              <div key={order.id}  className="group relative">              
                        <div  className="  rounded-3xl bg-black group-hover:opacity-50 hover:scale-110 hover:text-sky-500">
                            <button
                                    
                                    type="button"
                                    onClick={()=> openModal(order.id)} 
                                    className=''                       
                                  >
                              <img src={order.imageSrc} alt={order.imageAlt} className="object-cover object-center rounded-3xl  h-40 w-40" /> 
                            </button>              
                      </div>
                    
                {order.grupo == params.id ? (
                  <h3  className="mt-4 text-sm text-gray-500 text-center ...">
                    <a href={order.href}>
                      <span className="absolute justify-center" />
                        {order.productName}
                      </a> 
                  </h3>
                ) : null}
                { /*
                <p className="mt-1 text-lg font-medium">
                  {order.status === 'delivery' ? (
                    <span className="text-gray-900">
                      Delivered on <time dateTime={order.datetime}>{order.date}</time>
                    </span>
                  ) : order.status === 'delivery' ? (
                    <span className="text-indigo-600">Out for delivery</span>
                  ) : order.status === 'delivery' ? (
                    <span className="text-gray-500">Cancelled</span>
                  ) : null}
                  </p> */}
              </div>
              ):null 
            ))}

            
          </div>
         {/* Menu Principal */}           
        {/* AbrirPopalModel */}           
        <Transition appear show={isOpen} as={Fragment} onClose={setOpen}>
                      <Dialog as="div" className="relative z-10 border-2 border-cyan-500" onClose={closeModal}>
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

                        <div className="fixed inset-0 overflow-y-auto">
                          <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                            >
                              <Dialog.Panel className="w-full max-w-7xl transform overflow-hidden border-slate-900 rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                              <div className="bg-white">
                                <div className="mx-auto max-w-6xl   sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-2  rounded-3xl ">
                                  <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                                    <button
                                      type="button"
                                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                      onClick={() => closeModal(false)}
                                    >
                                      <span className="sr-only">Close</span>
                                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                    {/* Image gallery */}
                                        <Tab.Group as="div" className="flex flex-col-reverse">
                                          {/* Image selector */}
                                          <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                                            {/* Aqui se las imagenes chicas */}
                                            <Tab.List className="grid grid-cols-4 gap-6">
                                              {
                                              ProductDetails.categories.map((image)=> (
                                                image.grupo == params.id && image.id==parametro ? ( 
                                                      image.details.map((item, itemIdx,{selected}) => ( 
                                                        
                                                        
                                                        <Tab
                                                          key={item.id}
                                                          className="relative flex h-24 cursor-pointer items-center justify-center rounded-md 
                                                          bg-white text-sm font-medium uppercase text-gray-900 
                                                          hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                          onLoad={
                                                            item.id=='1' ? (
                                                            ()=> valorSeleccionado(item)
                                                            ):null                                                          
                                                          }
                                                        >                                                      
                                                          <div key={item.id}   >
                                                            <span  className="sr-only">{item.subGrupo}</span>
                                                            <span  className="sr-only">{item.name}</span>
                                                            
                                                            <span className="absolute inset-0 overflow-hidden rounded-md"  >
                                                                
                                                                <img onClick={()=> valorSeleccionado(item) }  src={item.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                                                                                                                 
                                                            </span>
                                                            <span
                                                              className={classNames(
                                                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                                                'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                                                              )}
                                                              aria-hidden="true"
                                                            />
                                                          </div>
                                                      
                                                              
                                                        </Tab>    
                                                                                                      
                                                      ))
                                                  ):null            
                                              ))}
                                            </Tab.List>
                                            {/* Aqui se las imagenes chicas */}
                                          </div>
                                          {/* Aqui se almacena la imagen grande */}
                                          <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">                                            
                                            {ProductDetails.categories.map((image)=> (
                                              image.grupo == params.id && image.id==parametro ? (  
                                                image.details.map((item, itemIdx) => (
                                                <Tab.Panel key={item.id}>  
                                                  <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="h-full w-full object-cover object-center sm:rounded-lg"
                                                  />                                                   
                                                </Tab.Panel>
                                                ))
                                              ):null 
                                            ))}
                                          </Tab.Panels>                                      
                                        </Tab.Group>
                                        {/* Product info  Levantamietno PopalModal*/}
                                        { //ProductDetails.categories.map((image)=> (
                                          //image.grupo == params.id && image.id==parametro ? ( 
                                            //image.details.map((item, itemIdx) => (
                                              
                                              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                                                <h1 className="text-3xl font-bold tracking-tight text-gray-900 ">
                                                  {
                                                    parametroDetalle.name
                                                  }
                                                  {/*parametroDetalle.name=='' ? ('mel'):
                                                    ProductDetails.categories.map((image)=> (
                                                      image.grupo == params.id && image.id==parametro ? ( 
                                                          image.details.map((item, itemIdx) => ( 
                                                            item.id=='1' ? (item.name):null
                                                            
                                                          ))
                                                      ):null            
                                                    ))                                                  
                                                          */}   
                                                </h1>                                               
                                                <div className="mt-3">
                                                  <h3 className="sr-only">Reviews</h3>
                                                  <div className="flex items-center"> 
                                                    <p className="sr-only">{product.rating} out of 5 stars</p>
                                                  </div>
                                                </div>
                                                <div
                                                  className="space-y-6 text-base text-gray-700 font-mono "
                                                  dangerouslySetInnerHTML={{ __html: parametroDetalle.description }}
                                                />  
                                        <form className="mt-6">
                                          {/* Colors */}
                                          <div>
                                            <h3 className="text-sm text-gray-600"></h3>

                                            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                                              <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                              <span className="flex items-center space-x-3">
                                              
                                                              
                                              </span>
                                            </RadioGroup>
                                          </div>
                                          <div className="mt-10 flex">
                                          {/*
                                            <button 
                                              as={Link} to="/SectionsContact"                                            
                                              type="button"
                                              className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                            >
                                             
                                                Cotizar
                                            
                                                        </button> */ }
                                            <a
                                              href="https://api.whatsapp.com/send?phone=986701992"                                              
                                            >
                                              <button
                                              type="button"
                                              className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                              >
                                                
                                                    Cotizar
                                                
                                                </button>
                                            </a>
                                          
                                           

                                            <button
                                              type="button"
                                              className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                                            >
                                              
                                              <span className="sr-only">Add to favorites</span>
                                            </button>
                                          </div>

                                        </form>
                                        <section aria-labelledby="details-heading" className="mt-12">
                                          <h2 id="details-heading" className="sr-only">
                                            Additional details
                                          </h2>

                                          <div className="divide-y divide-gray-200 border-t ">
                                            {
                                              ProductDetails.categories.map((image)=> (                                               
                                           
                                                image.grupo == params.id && image.id==parametro ? ( 
                                                  image.details.map((item, itemIdx) => (
                                                    parametroDetalle.id==item.id ? ( 
                                                      item.anidado.map((valor, itemIdx) => (
                                                        //valor.id =='1' ? ( 
                                                          <Disclosure as="div" key={itemIdx}>
                                                           {({ open }) => (
                                                              <>
                                                                <h3>
                                                                  <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                                                    <span 
                                                                      className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                                                                    >                                                                     
                                                                        {valor.name}
                                                                    </span>
                                                                    <span className="ml-6 flex items-center">
                                                                      {open ? (
                                                                        <MinusIcon
                                                                          className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                                                          aria-hidden="true"
                                                                        />
                                                                      ) : (
                                                                        <PlusIcon
                                                                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                                          aria-hidden="true"
                                                                        />
                                                                      )}
                                                                    </span> 


                                                                  </Disclosure.Button>
                                                                </h3>
                                                                {/*  Acoordion    */}
                                                                { /*condition ? <Component /> : null. */ }  
                                                                    <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                                                                      {valor.items.map((am, itemIdx) => (  
                                                                        <ul role="list" key={itemIdx}>
                                                                                           <li className='font-mono text-sm' key={am}>{am}</li>
                                                                                         
                                                                        </ul>
                                                                      ))}
                                                                     
                                                                    </Disclosure.Panel>
                                                      
                                                                {/*  Acoordion    */}
                                                              
                                                              </>
                                                                
                                                            )}
                                                          </Disclosure>   
                                                        //):null
                                                      ))
                                                    ):null    
                                                  ))
                                                ):null 
                                            ))}
                                          </div>
                                        </section>                      
                                           
                                                 
                                                  
                                              </div>
                                            //))
                                           //):null
                                        //))
                                      }
                                  </div>
                                </div>
                              </div>                    
                              </Dialog.Panel>
                            </Transition.Child>
                          </div>
                        </div>
                      </Dialog>
        </Transition>
        {/* AbrirPopalModel */}
        
      </main>
    

    </div>
  )
}
