import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import profile from "../../assets/images/profile_image.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ContactUs = () => {
  return (
    <div className="flex justify-center" data-aos="zoom-in">
      <div className=" w-96 rounded-xl bg-yellow-100 text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-yellow-500 bg-clip-border text-gray-700 shadow-lg">
          <img src={profile} alt="profile-picture" />
        </div>

        <div className="mt-4 text-center">
          <h4 className="text-4xl font-babe ">
            Md Fahim Muntashir
          </h4>
          <p className="font-mono font-semibold">
            CEO / Co-Founder
          </p>
        </div>

        <div className="flex justify-center gap-7 p-4 ">
          <a href="#facebook">
            <FaFacebook className="text-blue-700 text-xl"></FaFacebook>
          </a>
          <a href="#facebook">
            <FaTwitter className="text-blue-700 text-xl"></FaTwitter>
          </a>
          <a href="#facebook">
            <FaInstagram className="text-orange-600 text-xl"></FaInstagram>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
