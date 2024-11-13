import leftArrow from "../../assets/icons/left arrow.png";
import rightArrow from "../../assets/icons/right arrow.png";
import muttonKacchi from "../../assets/images/mutton-kacchi.png";
import customarProfile from "../../assets/images/customar-profile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CustomerReview = () => {
  return (
    <div>
      <div className="bg-custom-offwhite xl:pb-28">
        <div className="max-w-screen-xl xl:mx-auto mx-8">
          {/* first part */}
          <div className="">
            <div className="xl:pt-[120px] pt-8 xl:pb-[60px] xl:flex justify-between items-center">
              <div>
                <p className="text-[#BD1F17] xl:font-bold roboto">
                  &#9642; Crispy, Every Bite Taste
                </p>
                <h1 className="uppercase text-5xl">
                  what some of my customers say
                </h1>
              </div>
              <div className="hidden xl:flex ">
                <div className="h-[60px] w-[60px] bg-white flex items-center justify-center rounded-full shadow-md mr-8 custom-swiper-prev cursor-pointer">
                  <img src={leftArrow} alt="" />
                </div>
                <div className="h-[60px] w-[60px] bg-white flex items-center justify-center rounded-full shadow-md custom-swiper-next cursor-pointer">
                  <img src={rightArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* 2nd part */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            //   centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="roboto">
                <div className="grid xl:grid-cols-2">
                  <img className="" src={muttonKacchi} alt="" />
                  <div className="bg-custom-yellow p-6">
                    <div className="flex flex-col justify-end">
                      <div>
                        <p className="text-xl ml-4">
                          “You can&apos;t go wrong with Chicken Mandi, I had it
                          twice. The chicken was cooked perfectly, juicy & soft
                          (usually mandi chicken is a bit dry). I would
                          defiantly recommend it.
                        </p>
                      </div>
                      <div className="bg-red-600">
                        <div className="flex justify-between mt-10">
                          <div className="">
                            <h1 className="text-xl font-bold">
                              KHALID AL DAWSRY
                            </h1>
                            <p>Jeddah, Saudi</p>
                          </div>
                          <div>
                            <img src={customarProfile} alt="" />
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="h-1 w-10 bg-[#BD1F17]"></div>
                        </div>
                        <div className="h-0.5 w-full bg-[#0A1425] mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roboto">
                <div className="grid xl:grid-cols-2">
                  <img className="" src={muttonKacchi} alt="" />
                  <div className="bg-custom-yellow p-6">
                    <div className="flex flex-col justify-end">
                      <div>
                        <p className="text-xl ml-4">
                          “You can&apos;t go wrong with Chicken Mandi, I had it
                          twice. The chicken was cooked perfectly, juicy & soft
                          (usually mandi chicken is a bit dry). I would
                          defiantly recommend it.
                        </p>
                      </div>
                      <div className="bg-red-600">
                        <div className="flex justify-between mt-10">
                          <div className="">
                            <h1 className="text-xl font-bold">
                              KHALID AL DAWSRY
                            </h1>
                            <p>Jeddah, Saudi</p>
                          </div>
                          <div>
                            <img src={customarProfile} alt="" />
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="h-1 w-10 bg-[#BD1F17]"></div>
                        </div>
                        <div className="h-0.5 w-full bg-[#0A1425] mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roboto">
                <div className="grid xl:grid-cols-2">
                  <img className="" src={muttonKacchi} alt="" />
                  <div className="bg-custom-yellow p-6">
                    <div className="flex flex-col justify-end">
                      <div>
                        <p className="text-xl ml-4">
                          “You can&apos;t go wrong with Chicken Mandi, I had it
                          twice. The chicken was cooked perfectly, juicy & soft
                          (usually mandi chicken is a bit dry). I would
                          defiantly recommend it.
                        </p>
                      </div>
                      <div className="bg-red-600">
                        <div className="flex justify-between mt-10">
                          <div className="">
                            <h1 className="text-xl font-bold">
                              KHALID AL DAWSRY
                            </h1>
                            <p>Jeddah, Saudi</p>
                          </div>
                          <div>
                            <img src={customarProfile} alt="" />
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="h-1 w-10 bg-[#BD1F17]"></div>
                        </div>
                        <div className="h-0.5 w-full bg-[#0A1425] mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* newb */}
          {/* <div className="roboto">
            <div className="grid xl:grid-cols-2">
              <img className="" src={muttonKacchi} alt="" />
              <div className="bg-custom-yellow p-6">
                <div className="flex flex-col justify-end">
                  <div>
                    <p className="text-xl ml-4">
                      “You can&apos;t go wrong with Chicken Mandi, I had it
                      twice. The chicken was cooked perfectly, juicy & soft
                      (usually mandi chicken is a bit dry). I would defiantly
                      recommend it.
                    </p>
                  </div>
                  <div className="bg-red-600">
                    <div className="flex justify-between mt-10">
                      <div className="">
                        <h1 className="text-xl font-bold">KHALID AL DAWSRY</h1>
                        <p>Jeddah, Saudi</p>
                      </div>
                      <div>
                        <img src={customarProfile} alt="" />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="h-1 w-10 bg-[#BD1F17]"></div>
                    </div>
                    <div className="h-0.5 w-full bg-[#0A1425] mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* ================================================================== */}
          <div className="xl:flex  xl:justify-between  xl:[120px]">
            {/*  */}
            <div className="flex justify-center mt-8 pb-8 xl:hidden">
              <div className="h-[40px] w-[40px] bg-white flex items-center justify-center rounded-full shadow-md mr-8 custom-swiper-prev cursor-pointer">
                <img src={leftArrow} alt="" />
              </div>
              <div className="h-[40px] w-[40px] bg-white flex items-center justify-center rounded-full shadow-md custom-swiper-next cursor-pointer">
                <img src={rightArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
