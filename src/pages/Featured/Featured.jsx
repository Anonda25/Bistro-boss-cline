import React from 'react';
import SectionTitle from '../../Components/Sheard/SectionTitle';
import FeaturedImg from '../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-items text-white pt-8 my-20 bg-fixed'>
            <SectionTitle heading="Featured Items" subHadding="Check it out"></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-50 pb-20 pt-12 px-36  gap-10'>
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>
                <div>
                    <p>Aug 19, 2019</p>
                    <p className='text-2xl uppercase'>where get i some </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, laborum, impedit veritatis consequuntur fugiat laudantium, consectetur quia odit dolores repellat deleniti nemo accusamus enim inventore! Exercitationem et praesentium corrupti quos facilis nam, animi quia alias odit corporis. Amet iure doloribus neque nostrum laudantium quos consequuntur dignissimos a quam. Consectetur, laudantium?</p>
                    <button className='btn btn-outline border-0 border-b-2'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;