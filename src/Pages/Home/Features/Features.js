import React from 'react';
import Feature from '../Feature/Feature';

const Features = () => {

    const features = [



        {
            id: 1,
            featureTitle: "First Delevery",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero expedita cupiditate dolorum dicta enim vitae accusantium impedit quisquam culpa perferendis!",
            icon: "https://i.ibb.co/4Rkn5rF/Group-204.png",
            img: "https://i.ibb.co/5k31pK6/adult-blur-blurred-background-687824.png"
        }, {
            id: 2,
            featureTitle: "A Good Auto Responder",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero expedita cupiditate dolorum dicta enim vitae accusantium impedit quisquam culpa perferendis!",
            icon: "https://i.ibb.co/6W6R29N/Group-1133.png",
            img: "https://i.ibb.co/PNdgnPW/chef-cook-food-33614.png"
        }, {
            id: 3,
            featureTitle: "Home Delevery",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero expedita cupiditate dolorum dicta enim vitae accusantium impedit quisquam culpa perferendis!",
            icon: "https://i.ibb.co/gDjCLK3/Group-245.png",
            img: "https://i.ibb.co/J25v0C5/architecture-building-city-2047397.png"
        }
    ]
    
    return (
        <div className='text-left container mt-6 mx-auto mb-5 p-4'>
            <h4 className=' text-4xl font-mono mb-4'>Why you choose us</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className='grid md:grid-cols-3 gap-x-8 mt-8'>
                {features.map(feature => <Feature key={feature.id} feature={feature}></Feature>)}
            </div>
        </div>
    );
};

export default Features;