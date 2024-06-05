import React ,{ useState,Suspense } from 'react'

import { BrowserRouter,Route,Routes } from 'react-router-dom'

import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from '@react-three/drei';
import LogoElectric from '../public/LogoElectric'
import Cubo from '../public/Cubo'
import Header from './components/Header'
import Carousel  from './components/Carousel ' 
import Footer from './components/Footer'
<<<<<<< HEAD
=======
import Body from './components/Body'
>>>>>>> bde628b (Agregar archivo cuerpo,modificar index)
import About from './components/About';
import SectionsContact from './components/SectionsContact';
import News from './components/News';
import CategoryProducts from './components/CategoryProducts'
import Products from './components/Products'
import DetailsProducts from './components/DetailsProducts' 
import { FloatingWhatsApp } from 'react-floating-whatsapp'




function App() {


  return (
    <>
    <div className="flex flex-col ... gap-2">
      {/* 
      Degradado
      relative [background:linear-gradient(180deg,_#f5ede7_26.5%,_#f7ac75_38%,_#f96e0a_69%)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] 
      */}
      <BrowserRouter>
        <div><Header/></div>
          <div className='flex items-center justify-center py-10 '>
            <Routes>   
                <Route path="/" element={<Carousel/>}/>
                <Route path="/Carousel" element={<Carousel/>}/>                
                <Route path="/About" element={<About/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/Products/:id" element={<Products/>}/>
                <Route path="/DetailsProducts" element={<DetailsProducts/>}/>
                <Route path="/CategoryProducts" element={<CategoryProducts/>}/>
                <Route path="/CategoryProducts/:id" element={<Products/>}/>    
                <Route path="/News" element={<News/>}/>
                <Route path="/SectionsContact" element={<SectionsContact/>}/>
                  
            </Routes>           
<<<<<<< HEAD
          </div>                   
=======
          </div>      
        <div><Body/></div>             
>>>>>>> bde628b (Agregar archivo cuerpo,modificar index)
        <div><Footer/></div> 
        {/* https://www.npmjs.com/package/react-floating-whatsapp  */}
        <FloatingWhatsApp phoneNumber='944278201' statusMessage='Linea' accountName='ADC Electric e Import' chatMessage='Bienvenido en que podemos ayudarlo' 
        avatar='https://i.postimg.cc/d1fVsp21/Industrial-ADC.png'   />    
        
        
      </BrowserRouter>      
    </div>

    
   

        
    
    </>
  )
}

export default App

{/*      <div style={{ width:"50%" , height:"60vh"}}>
      <Canvas>    
          <ambientLight/>
          <pointLight position={[100,100,0]} intensity={0.4}/>
          <pointLight position={[-35,35,0]} intensity={0.4}/>
          <OrbitControls enableZoom={false} autoRotate={true} />
          <Suspense fallback={null}>
            <Cubo/>          
          </Suspense>
          <Environment preset='sunset'/>
      </Canvas> 

    </div>  */}
