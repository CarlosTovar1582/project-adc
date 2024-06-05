import react from "react";
import CarrouselCard from "./CarrouselCard";

const Carousel = () =>{
    const images =[
        {
            
            title :"Producto 1",
            price: 12000,
            url:"https://i.postimg.cc/Zq6YZS6L/delixi-2.webp",
            

        },
        {
            title :"Producto 2",
            price: 50000,
            url:"https://i.postimg.cc/QxzGxw6H/autonics-banner.webp",

        },
        {
            title :"Producto 3",
            price: 50000,
            url:"https://i.postimg.cc/KzYDgQf4/ssiemen.png",

        },
        {
            title :"Producto 4",
            price: 50000,
            url:"https://i.postimg.cc/XJ9dXRc3/siemens7.jpg",

        },
        {
            title :"Producto 5",
            price: 50000,
            url:"https://i.postimg.cc/VLfnLHSQ/chint2.jpg",

        },
        {
            title :"Producto 6",
            price: 50000,
            url:"https://i.postimg.cc/pdFn1wS8/delixi1.webp",

        },
        {
            title :"Producto 7",
            price: 50000,
            url:"https://i.postimg.cc/s2YgWs8n/schneider-banner-jpg.jpg",

        },   
        {
            title :"Producto 8",
            price: 50000,
            url:"https://i.postimg.cc/NGJfmNJw/siemens2.png",

        }, 
        {
            title :"Producto 9",
            price: 50000,
            url:"https://i.postimg.cc/0Nynj6tn/Whats-App-Image-2024-05-03-at-11-33-18-PM.jpg",

        },
        {
            title :"Producto 10",
            price: 50000,
            url:"https://i.postimg.cc/MZ7Bk65p/Whats-App-Image-2024-05-03-at-11-33-17-PM-1.jpg",

        },
        {
            title :"Producto 11",
            price: 50000,
            url:"https://i.postimg.cc/Zqv9w40Z/Whats-App-Image-2024-05-03-at-11-33-16-PM-1.jpg",

        },
        {
            title :"Producto 12",
            price: 50000,
            url:"https://i.postimg.cc/C1VKJ8WH/Whats-App-Image-2024-05-03-at-11-33-16-PM.jpg",

        },    
    ];


    

    return(
        <div>        
            <CarrouselCard images={images}/>           
        </div>
        
    )
}
export default Carousel