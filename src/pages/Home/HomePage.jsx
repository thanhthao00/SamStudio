import React, { useEffect } from 'react';
import './HomePage.css';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import '../../../node_modules/swiper/swiper.css';
import '../../../node_modules/swiper/modules/navigation.min.css';
import '../../../node_modules/swiper/modules/pagination.min.css';
import '../../../node_modules/swiper/swiper-bundle.min.css';

import img1 from "../../Components/Image/7.jpg";
import img2 from "../../Components/Image/8.jpg";
import img3 from "../../Components/Image/9.jpg";
import img4 from "../../Components/Image/11.jpg";
import img5 from "../../Components/Image/12.jpg";
import img6 from "../../Components/Image/13.jpg";
import img7 from "../../Components/Image/14.jpg";
import img8 from "../../Components/Image/15.jpg";
import img9 from "../../Components/Image/16.jpg";
import img10 from "../../Components/Image/17.jpg";
import img11 from "../../Components/Image/18.jpg";
import img12 from "../../Components/Image/19.jpg";
import img13 from "../../Components/Image/20.jpg";

const Home = () => {
    useEffect(() => {
        const nextButton = document.querySelector('.swiper-button-next');
        const prevButton = document.querySelector('.swiper-button-prev');

        // Change button color on hover without sliding
        const handleMouseEnter = (e) => {
            e.target.style.backgroundColor = '#ddd'; // Example hover color
        };

        const handleMouseLeave = (e) => {
            e.target.style.backgroundColor = ''; // Reset to original color
        };

        if (nextButton) {
            nextButton.addEventListener('mouseenter', handleMouseEnter);
            nextButton.addEventListener('mouseleave', handleMouseLeave);
        }
        if (prevButton) {
            prevButton.addEventListener('mouseenter', handleMouseEnter);
            prevButton.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (nextButton) {
                nextButton.removeEventListener('mouseenter', handleMouseEnter);
                nextButton.removeEventListener('mouseleave', handleMouseLeave);
            }
            if (prevButton) {
                prevButton.removeEventListener('mouseenter', handleMouseEnter);
                prevButton.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="home-page">
            <Navbar />
            <div className="img1"></div>
            <div className="text-wrapper-1">Wedding</div>
            <div className="overlap-1">
                <div className="img2"></div>
                <div className="img3"></div>
                <p className="text-wrapper-2">
                    Xin chào các cô dâu chú rể tương lai! Hãy để <Link to="https://www.facebook.com/samweddingstudio">Sam Wedding Studio</Link> đồng hành cùng bạn trong hành trình chuẩn bị cho ngày cưới.
                    Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn từng bước, từ việc chọn áo cưới hoàn hảo đến việc tạo nên album ảnh cưới đẹp lung linh.
                </p>
                <p className="text-wrapper-3">
                    Chúng tôi tự hào mang đến bộ sưu tập áo cưới đẹp mắt và đa dạng, phù hợp với mọi phong cách và sở thích.
                    Từ những thiết kế cổ điển, thanh lịch đến hiện đại, phá cách, chúng tôi cam kết mang đến cho bạn những lựa chọn hoàn hảo để bạn tỏa sáng trong ngày trọng đại.
                    Mỗi chiếc áo cưới đều được chúng tôi chọn lọc kỹ lưỡng, đảm bảo chất lượng cao và sự thoải mái tuyệt đối.
                </p>
            </div>
            <div className="overlap-2">
                <div className="img4"></div>
                <div className="overlap-3">
                    <div className="img5"></div>
                    <p className="text-wrapper-4">
                        Bên cạnh đó, chúng tôi cũng cung cấp dịch vụ chụp hình cưới chuyên nghiệp, giúp bạn lưu giữ những khoảnh khắc tuyệt đẹp và ý nghĩa nhất của cuộc đời.
                        Đội ngũ nhiếp ảnh gia tài năng và giàu kinh nghiệm của chúng tôi sẽ làm việc tận tâm để tạo ra những bức ảnh đầy cảm xúc, thể hiện trọn vẹn tình yêu và niềm hạnh phúc của bạn.
                    </p>
                </div>
            </div>
            <div className="text-wrapper-5">Concept</div>
            <div className="overlap-4">
                <div className="image-container">
                    <div className="image-wrapper">
                        <img src={img1} alt="Image 1" className="image" />
                        <div className="overlay-text small-text">Concept 1</div>
                        <div className="overlay-text full-text">Concept 1</div>
                    </div>
                    <div className="image-wrapper">
                        <img src={img2} alt="Image 2" className="image" />
                        <div className="overlay-text small-text">Concept 2</div>
                        <div className="overlay-text full-text">Concept 2</div>
                    </div>
                    <div className="image-wrapper">
                        <img src={img3} alt="Image 3" className="image" />
                        <div className="overlay-text small-text">Concept 3</div>
                        <div className="overlay-text full-text">Concept 3</div>
                    </div>
                </div>
            </div>
            <div className="text-wrapper-6">Store</div>
            <div className="carousel-container">
                <div className="swiper-buttons">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={4}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    className="swiper-container"
                    
                >
                    <SwiperSlide>
                        <div className="image-wrapper1">
                            <img src={img4} alt="Image 1" className="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-wrapper1">
                            <img src={img5} alt="Image 2" className="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-wrapper1">
                            <img src={img6} alt="Image 3" className="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-wrapper1">
                            <img src={img7} alt="Image 4" className="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-wrapper1">
                            <img src={img8} alt="Image 5" className="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-wrapper1">
                            <img src={img9} alt="Image 6" className="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-wrapper1">
                            <img src={img10} alt="Image 7" className="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-wrapper1">
                            <img src={img11} alt="Image 8" className="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-wrapper1">
                            <img src={img12} alt="Image 9" className="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-wrapper1">
                            <img src={img13} alt="Image 10" className="image" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Home;
