import { Transition } from '@headlessui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import { CSSTransition,SwitchTransition } from 'react-transition-group'



const CarrouselCard =({images}) => {
    const [indice,setIndice] = useState(0)
    let myInterval

    const next = () => {        
        clearInterval(myInterval)
        if(indice<images.length - 1){
            setIndice(indice + 1)           
        }else{
            setIndice(0)

        }
    }
    const back = () => {
        clearInterval(myInterval)
        if(indice > 0){
            
            setIndice(indice - 1)
            
        }else{
           
            setIndice(images.length - 1)
           

        }
    }

    const autoNext = () => {
        if(indice < images.length - 1){
            setIndice(indice + 1)
        }else{
            setIndice(0)

        }

    }
    useEffect(()=>{
        myInterval=setTimeout(autoNext,8000) 
       
            
        }, [indice]);



{/* sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  */}
    return(  

        
                <div className='flex flex-row items-center  '>           
                            <div className=''>
                                <FaArrowAltCircleLeft  onClick={back}  className=' h-6 w-6 sm:h-6 sm:w-6 md:h-16 md:w-16 lg:h-16 lg:w-16 xl:grid-cols-4 text-slate-800 duration-300 cursor-pointer hover:scale-110 hover:text-blue-300' />
                            </div>
               
                    <SwitchTransition>
                        <CSSTransition    
                        key={images[indice].url}           
                        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                        classNames="fade">
                            <div className=''>
                                <img src={images[indice].url} alt="Hola" className='  rounded-3xl '/>
                            </div>
                    </CSSTransition>
                    </SwitchTransition>
                    <div className=''>
                        <FaArrowAltCircleLeft onClick={next} className='h-6 w-6 sm:h-6 sm:w-6 md:h-16 md:w-16 lg:h-16 lg:w-16  text-slate-800 duration-300 cursor-pointer hover:scale-110 hover:text-blue-300 rotate-180' />          
                    </div>                
                </div>
                   
    )
}
export default CarrouselCard
