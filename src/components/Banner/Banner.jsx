import timg from "../../assets/images/transparent banner.png";
import banner from "../../assets/images/banner.png";
import todayOffer from "../../assets/images/today-offer.png";
import leaf from "../../assets/icons/leaf.svg";

const Banner = () => {
  return (
    <div className="bg-custom-gradient xl:h-screen">
      <div
        className="bg-cover bg-center h-full pt-20 pb-8"
        style={{ backgroundImage: `url(${timg})` }}
      >
        <div className="xl:max-w-screen-xl xl:mx-auto grid xl:grid-cols-2 grid-cols-1  mx-8">
          <div className="relative flex flex-col justify-center text-white">
            <div className="xl:bg-red-500 xl:bg-opacity-30 xl:w-[130%] z-10 border xl:border-black border-none">
              <p className="xl:text-[120px] text-[48px] xl:leading-[130px] uppercase">
                taste the authentic
                <br />
                saudi cuisine
              </p>
            </div>
            <div>
              <p className="roboto xl:mt-4 xl:mb-10">
                Among the best Saudi chefs in the world, serving
                <br />
                you something beyond flavor.
              </p>
              <button className="btn rounded-none bg-custom-yellow hover:bg-custom-yellow-dark border-none roboto mt-8 mb-12">
                EXPLORE MENU
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="xl:w-[700px] xl:h-[649px] "
              src={banner}
              alt="banner"
            />

            <img
              className="size-11 absolute right-0 top-0 translate-x-1/2 -translate-y-1/2"
              src={leaf}
              alt=""
            />
            <img
              className="xl:size-24 size-16 absolute right-0 lg:-bottom-3 bottom-0 xl:translate-x-1/2 "
              src={todayOffer}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
