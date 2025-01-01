import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/Sheard/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { MdReviews } from 'react-icons/md';


const Testimoneial = () => {
    const [reviews , setReview]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviwes')
        .then(res => res.json())
        .then(data =>{
            setReview(data)
        })
    },[])
    return (
        <div>
            <SectionTitle subHadding="what our client say" heading="Testimoneials "></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            
                            <div className='flex flex-col items-center m-24'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className='text-9xl font-bold'><MdReviews /></p>
                                <p>{review.details}</p>
                                <p className='text-2xl text-orange-500'>{review.name}</p>
                            </div>
                        </SwiperSlide>)
                    }
                   
                </Swiper>
            </div>
        </div>
    );
};

export default Testimoneial;