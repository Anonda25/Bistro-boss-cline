import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import slider1 from '../assets/home/slide1.jpg'
import slider2 from '../assets/home/slide2.jpg'
import slider3 from '../assets/home/slide3.jpg'
import slider4 from '../assets/home/slide4.jpg'
import slider5 from '../assets/home/slide5.jpg'
import SectionTitle from '../Components/Sheard/SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle heading="Odear online" subHadding="from 10:00 to 10:00pm"></SectionTitle>
           <section>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-24 "
                >
                    <SwiperSlide>
                        <img src={slider1} alt="" />
                        <p className='uppercase text-4xl text-center -mb-12  text-white font-bold '>salads</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} alt="" />
                        <p className='uppercase text-4xl text-center -mb-12 '>salads</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} alt="" />
                        <p className='uppercase text-4xl text-center -mb-12 '>salads</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider4} alt="" />
                        <p className='uppercase text-4xl text-center -mb-12 '>salads</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider5} alt="" />
                        <p className='uppercase text-4xl text-center -mb-12 '>salads</p>
                    </SwiperSlide>
                </Swiper>
           </section>
        </div>
    );
};

export default Category;