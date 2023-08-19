import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";
import { serverLink } from "../../../serverlink/serverlink";



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`${serverLink}/services`)
            .then(res => res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur
                    <br /> adipisicing elit. Quis, nostrum.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCart
                        key={service.id}
                        service={service}
                    ></ServiceCart>)
                }
            </div>
            
        </div>
    );
};

export default Services;
