import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';

import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full   
                  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Affordable Price for Car Sevesing..</h2>
                        <p>There are many variation of passeges of avilable, But the majority have suffered in som form </p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover more</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full   
                  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Cost-effective Car Maintenance Services..</h2>
                        <p>Cost-effective car maintenance services typically focus on efficiency and practicality. Service providers
                            aim to deliver quality care without compromising on the integrity of the work. </p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover more</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full   
                  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Cost-effective Car Maintenance Services..</h2>
                        <p>Cost-effective car maintenance services typically focus on efficiency and practicality. Service providers
                            aim to deliver quality care without compromising on the integrity of the work. </p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover more</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full   
                  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Cost-effective Car Maintenance Services..</h2>
                        <p>Cost-effective car maintenance services typically focus on efficiency and practicality. Service providers
                            aim to deliver quality care without compromising on the integrity of the work. </p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover more</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;