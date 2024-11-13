import aboutImg from "../../assets/images/About.png";
import marketExp from "../../assets/images/Market Place.png";
import callAlt from "../../assets/icons/call-alt.png";
import fastDelivery from "../../assets/icons/Fast Delivery.png";
import absoluteDining from "../../assets/icons/Absolute Dining.png";
import pickupDelivery from "../../assets/icons/Pickup Delivery.png";
import bowlSalad from "../../assets/images/bowl-salad.png";
const About = () => {
  return (
    <>
      <div className="xl:mt-[120px] grid xl:grid-cols-2 max-w-screen-xl xl:mx-auto mx-8 mt-8">
        <div className="xl:absolute xl:right-0 hidden xl:block">
          <img className="" src={bowlSalad} alt="" />
        </div>
        <div className="relative">
          <div>
            <img
              className="xl:h-[460px] xl:w-[617px] mb-8"
              src={aboutImg}
              alt=""
            />
          </div>
          <div className="absolute top-5 left-0">
            <img className="h-[73px] xl:h-32" src={marketExp} alt="" />
          </div>
        </div>

        {/* tab   */}
        <div className="relative">
          <div className="absolute top-7 h-1 w-full bg-[#BD1F17] mx-auto"></div>
          <div role="tablist" className="tabs tabs-bordered">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab roboto text-black checked:bg-[#B52B1D] checked:text-white"
              aria-label="About"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content p-10">
              <h1 className="text-2xl uppercase">
                Exceptional culinary experience and delicious food
              </h1>
              <p className="roboto">
                An exceptional culinary journey that delights every sense, where
                flavors are artfully crafted and beautifully presented. Each
                dish tells a story, blending tradition with innovation. Truly
                unforgettable dining that leaves a lasting impression.
              </p>
              {/* button and call */}
              <div className="flex  items-center mt-8">
                <div>
                  <button className="btn rounded-none bg-custom-yellow hover:bg-custom-yellow-dark border-none mr-8 roboto">
                    ABOUT MORE
                  </button>
                </div>
                <div className="flex ">
                  <img src={callAlt} alt="" />
                  <p className="xl:font-bold text-sm ml-1">+88 3426 739 485</p>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab roboto text-black checked:bg-[#B52B1D] checked:text-white"
              aria-label="Experience"
            />
            <div role="tabpanel" className="tab-content p-10">
              <h1 className="text-2xl uppercase">
                An Unforgettable Culinary Experience
              </h1>
              <p className="roboto">
                The meal was a perfect blend of creativity and flavor, elevating
                each ingredient into something extraordinary. Every dish was
                presented with elegance, and each bite was a memorable delight.
                This was more than just dining; it was a celebration of taste
                and artistry.
              </p>
              {/* button and call */}
              <div className="flex  items-center mt-8">
                <div>
                  <button className="btn rounded-none bg-custom-yellow hover:bg-custom-yellow-dark border-none mr-8 roboto">
                    ABOUT MORE
                  </button>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab roboto text-black checked:bg-[#B52B1D] checked:text-white"
              aria-label="Contact"
            />
            <div role="tabpanel" className="tab-content p-10">
              <h1 className="text-2xl uppercase">Contact Us</h1>
              <p className="roboto">
                For reservations or inquiries, please reach out via phone or
                email us. We look forward to creating an exceptional dining
                experience for you.
              </p>
              {/* button and call */}
              <div className="flex  items-center mt-8">
                <div className="flex ">
                  <img src={callAlt} alt="" />
                  <p className="xl:font-bold text-sm ml-1">+88 3426 739 485</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* extra part */}
      <div className=" xl:grid xl:grid-cols-3 xl:max-w-screen-xl xl:mx-auto xl:mt-20 mb-28 mx-8">
        {/* item 1 */}
        <div className="flex items-center mb-8">
          <div className=" rounded-full shadow-lg p-6 mr-4 ">
            <img src={fastDelivery} alt="" />
          </div>
          <div>
            <h1 className="xl:uppercase xl:font-bold text-2xl">
              fast delivery
            </h1>
            <p>Within 30 minutes</p>
          </div>
        </div>
        {/* item 3 */}
        <div className="flex items-center mb-8">
          <div className=" rounded-full shadow-lg p-6 mr-4">
            <img src={absoluteDining} alt="" />
          </div>
          <div>
            <h1 className="uppercase xl:font-bold text-2xl">absolute dining</h1>
            <p>Best buffet resturant</p>
          </div>
        </div>
        {/* item 2 */}
        <div className="flex items-center mb-8">
          <div className=" rounded-full shadow-lg p-6 mr-4">
            <img src={pickupDelivery} alt="" />
          </div>
          <div>
            <h1 className="uppercase xl:font-bold text-2xl">pickup delivery</h1>
            <p>Grab your food order</p>
          </div>
        </div>
        {/* end */}
      </div>
    </>
  );
};

export default About;
