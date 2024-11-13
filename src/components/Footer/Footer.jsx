import clock from "../../assets/icons/clock.png";
import call from "../../assets/icons/call-yellow.svg";
import mail from "../../assets/icons/mail.png";
import map from "../../assets/icons/map-pin.png";
import fb from "../../assets/icons/social/fb.png";
import xlink from "../../assets/icons/social/x.png";
import ig from "../../assets/icons/social/ig.png";
import lin from "../../assets/icons/social/in.png";
import footerImg from "../../assets/images/footer-img.jpeg";

const Footer = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className="bg-black bg-opacity-80">
        <div className="max-w-screen-xl xl:mx-auto mx-8 py-8 text-center text-white">
          <h1 className="uppercase text-5xl text-white mb-12">
            we ready to have you the best dining experiences
          </h1>
          <div className="grid xl:grid-cols-4">
            <div className="flex flex-col items-center my-6">
              <img className="size-8" src={clock} alt="" />
              <h1 className="text-xl my-3">opening hours</h1>
              <div className="roboto">
                <p>Monday - Sunday</p>
                <p>9:00 AM to 11:30 PM</p>
              </div>
            </div>
            <div className="flex flex-col items-center my-6">
              <img className="size-8" src={call} alt="" />
              <h1 className="text-xl my-3">let&apos;s talk</h1>
              <div className="roboto">
                <p>Phone: 1-800-222-4545</p>
                <p>Fax: 1-800-222-4545</p>
              </div>
            </div>
            <div className="flex flex-col items-center my-6">
              <img className="size-8" src={mail} alt="" />
              <h1 className="text-xl my-3">book a table</h1>
              <div className="roboto">
                <p>Email: demo@website.com</p>
                <p>Support: support@website.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center my-6">
              <img className="size-8" src={map} alt="" />
              <h1 className="text-xl my-3">our address</h1>
              <div className="roboto">
                <p>123 Stree New York City</p>
                <p>United States Of America</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mb-4 mt-20">
            <img className="size-9" src={fb} alt="" />
            <img className="size-9" src={xlink} alt="" />
            <img className="size-9" src={ig} alt="" />
            <img className="size-9" src={lin} alt="" />
          </div>
          <p className="roboto">© 2024 All Rights Reserved </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
