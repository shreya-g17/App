import React, { useEffect, useState } from 'react';
import { GET } from '../Helpers/Api.jsx';
import logo from "../assets/logo2.png";
import Slide1 from "../assets/slide5.jpg";
import Slide2 from "../assets/slide2.png";
import Slide3 from "../assets/slide3.jpg";
import About from "../assets/about.jpg";
import Blog1 from "../assets/blog7.jpg";
import Blog2 from "../assets/blog2.jpg";
import Blog3 from "../assets/blog5.jpg";
import Blog4 from "../assets/blog4.jpg";
import Blog5 from "../assets/blog6.jpg";
import Blog6 from "../assets/blog1.jpg";
import Map from "../assets/worldmap.png"
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Navbar } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAward, faPhone, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faPinterest, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "@fontsource/poppins";
import Service1 from "../assets/service1.png"
import Service2 from "../assets/service2.png"
import Service3 from "../assets/service3.png"
import Service4 from "../assets/service4.png"
import Service5 from "../assets/service5.png"


function LandingPage() {

  useEffect(() => {
    Aos.init();
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest("#dropdownNavbarLink") && !event.target.closest("#dropdownNavbar")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const services = [
    { title: "Supporting Farmers",img: Service1 ,desc: "We empower farmers by providing them with a direct-to-consumer platform. By buying from Fresh Roots, you support small-scale farmers, strengthen local agriculture, and promote sustainable farming practices." },
    { title: "Fair Pricing",img: Service2 , desc: "Fresh Roots ensures transparent pricing by eliminating intermediaries. Farmers receive fair compensation for their hard work, and consumers enjoy affordable prices for fresh produce—creating a win-win for everyone." },
    { title: "Secure Payments",img: Service3 , desc: "Shop with confidence using our safe and secure payment system. We offer multiple payment options with encrypted transactions, ensuring a hassle-free and trustworthy shopping experience for both farmers and buyers." },
    { title: "Fast Delivery",img: Service4 , desc: "Enjoy quick and efficient delivery with our streamlined logistics network. We ensure that farm-fresh produce reaches your doorstep in the shortest time possible, maintaining freshness and quality at every step." },
    { title: "Freshness Guaranteed",img: Service5 , desc: "We deliver farm-fresh produce directly from farmers to your doorstep. Our commitment is to provide organic, high-quality, and pesticide-free products, ensuring you always receive the freshest and healthiest food possible." },
  ];

  const blogs = [
    {
      title: "The Rise of Direct-to-Consumer Farming: A Game Changer for Local Farmers",
      desc: "The traditional agricultural supply chain has long been dominated by middlemen, wholesalers, and retailers, often leaving farmers with minimal profits. However, direct-to-consumer (D2C) farming is revolutionizing the industry by allowing farmers to sell their produce directly to consumers, eliminating unnecessary intermediaries and ensuring fair pricing. By cutting out middlemen, farmers earn better profits, reduce post-harvest losses, and create a sustainable and efficient agricultural ecosystem. As this trend continues to grow, direct-to-consumer farming is proving to be a game changer for local farmers, empowering them to thrive in today’s digital age. 🚜🌱",
      img: Blog5,
    },
    {
      title: "Sustainable Agriculture: How Eco-Friendly Farming Benefits Everyone",
      desc: "Sustainable agriculture is more than just a farming practice—it’s a movement toward a healthier planet and a better future. By using eco-friendly methods such as organic farming, crop rotation, composting, and reduced pesticide use, farmers can preserve soil fertility, reduce pollution, and promote biodiversity. By supporting eco-friendly farming, we contribute to a healthier food system, a cleaner environment, and a more resilient agricultural economy. 🌱🌍",
      img: Blog1,
    },
    {
      title: "Technology in Agriculture: Innovations That Are Changing Farming Forever",
      desc: "The agricultural industry is undergoing a technological revolution, transforming traditional farming into a more efficient and sustainable process. Innovations such as drones, AI-powered analytics, precision farming, and IoT-based smart irrigation are helping farmers maximize crop yields while minimizing resource waste. These advancements are not just making farming easier but are also paving the way for a sustainable, productive, and tech-driven agricultural future. 🚜🌾",
      img: Blog4,
    },
    {
      title: "The Importance of Supporting Local Farmers in Today’s Economy",
      desc: "Supporting local farmers is essential for building a stronger, more sustainable economy. When consumers buy directly from farmers, they help keep money within the community, boosting local businesses and creating jobs. By choosing local, we not only support hardworking farmers but also contribute to a healthier environment, stronger food security, and a thriving agricultural sector. 🌾🥕",
      img: Blog3,
    },
    {
      title: "From Farm to Table: The Journey of Fresh Produce",
      desc: "The journey of fresh produce from farm to table is a carefully managed process that ensures quality, nutrition, and sustainability. It starts with farmers planting and cultivating crops using eco-friendly techniques to maintain soil health. Once harvested, the produce is carefully sorted, packed, and transported to local markets or directly to consumers. This farm-to-table approach strengthens local economies, promotes healthy eating, and ensures a transparent food supply chain. 🌱🥦",
      img: Blog2,
    },
    {
      title: "Why Organic Food is Better for Your Health and the Environment",
      desc: "Organic food is gaining popularity as people become more conscious of their health and environmental impact. Unlike conventional farming, organic farming avoids harmful pesticides, synthetic fertilizers, and genetically modified organisms (GMOs). As a result, organic produce contains higher nutritional value and fewer chemical residues. Additionally, organic farming preserves soil health, reduces pollution, and promotes biodiversity.By choosing organic, consumers support sustainable farming while ensuring a healthier diet and a cleaner environment.🥬",
      img: Blog6,
    }
  ];

  useEffect(() => {
    const scrollContainer = document.getElementById("blog-container");
    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 9; // Scroll by 5px each interval
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0; // Reset to the start when it reaches the end
        }
      }
    }, 200); // Adjust time interval for scroll speed

    // Cleanup the interval on component unmount
    return () => clearInterval(scrollInterval);
  }, []);



  return (
    <div>

      <div>
        <nav class="bg-[#643288] w-full border-gray-200 dark:bg-gray-900  fixed z-10" >
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex flex-row p-2">
              <h1 className="text-3xl font-bold text-white">Fresh</h1>
              <img src={logo} alt="" className="h-10" />
              <h1 className="text-3xl font-bold text-white">Roots</h1>
            </div>
            <a href='/home' class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" class="text-[#643288] bg-[#e6e6fa] hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-lg text-sm px-4 py-2 text-center dark:bg-white dark:hover:bg-white dark:focus:ring-white font-bold">SHOP NOW</button>
              <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </a>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#643288] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="#home-container" class="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e6e6fa] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                </li>
                <li>
                  <a href="#about-container" class="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e6e6fa] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                  <a href="#service-container" class="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e6e6fa] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                </li>
                <li>
                  <a href="#blog" class="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e6e6fa] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
                </li>
                <li>
                  <a href="#contact-container" class="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e6e6fa] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
                <li className="relative">
                  <button
                    id="dropdownNavbarLink"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-between w-full py-2 px-3 text-white rounded-sm hover:bg-[#AFE1AF] md:hover:bg-transparent md:border-0 md:hover:text-[#e6e6fa] md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white"
                  >
                    Login
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div id="dropdownNavbar" className="absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700 dark:divide-gray-600">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <a href="/login" className="block px-4 py-2 text-[#800080] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Login as Buyer
                          </a>
                        </li>
                        <li>
                          <a href="/loginseller" className="block px-4 py-2 text-[#800080] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Login as Seller
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

              </ul>
            </div>
          </div>
        </nav>

      </div>


      <div id="home-container" className='flex justify-center pt-10'>

        <div className='w-1/2 h-1/2 flex justify-center items-center'>

          <div data-aos="fade-up" data-aos-duration="2000" className='p-20 justify-center items-center flex pt-40'>
            <p>
              <h1 className='text-5xl text-green-800 pt-6 font-poppins'><b>Welcome to Fresh Roots</b></h1>
              <br />
              <h3 className='text-2xl items-center pl-10 text-[#800080]'><em>Empowering Farmers, Connecting Consumers.</em></h3>
              <br />
              <h3 className='font-medium text-2xl items-center '>Fresh Roots is an innovative platform designed to redefine agricultural trade by empowering farmers and ensuring direct farm-to-market sales. By cutting out intermediaries, we help farmers maximize their earnings while providing consumers with fresh, organic, and affordable produce straight from the source. Join us in nurturing a sustainable farming ecosystem!
              </h3>
            </p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className='w-1/2 h-1/2 pt-9 flex justify-center items-center '>
          <img src={Slide1} alt='Slide' />
        </div>
      </div>

      <div className='flex justify-center'>
        <div data-aos="zoom-in-right" data-aos-duration="2000" className='w-1/2 h-1/2 flex justify-center items-center'>
          <img src={Slide2} alt='Slide2' className='p-4' />
        </div>

        <div data-aos="zoom-in-right" data-aos-duration="2000" className='w-1/2 h-1/2 flex justify-center items-center'>
          <p>
            <h1 className='text-5xl text-[#800080] pl-52 pt-11 font-poppins'><b>Mission</b></h1>
            <br />
            <h3 className='font-medium text-lg items-center p-3 pt-10'>Fresh Roots is dedicated to revolutionizing the agricultural market by bridging the gap between farmers and consumers. Our mission is to create a fair, transparent, and sustainable marketplace where farmers receive the earnings they deserve while consumers access fresh, high-quality produce. By eliminating middlemen, we ensure that farmers maximize their profits while buyers enjoy farm-to-table freshness at competitive prices. We are committed to building a trust-based, community-driven platform that supports small-scale farmers, strengthens local economies, and promotes healthier living. Through innovation and ethical trade, Fresh Roots transforms the way food is sourced, sold, and consumed.</h3>
          </p>
        </div>
      </div>

      <div className='flex justify-center'>
        <div data-aos="zoom-in" data-aos-duration="2000" className='w-1/2 h-1/2 flex justify-center items-center'>
          <p>
            <h1 className='text-5xl text-[#FFA500] pl-60 pt-20 font-poppins'><b>Vision</b></h1>
            <br />
            <h3 className='font-medium text-xl items-center p-6 pt-10'>
              At Fresh Roots, we envision a future where farmers are economically empowered, and consumers have direct access to fresh, high-quality produce at fair prices. By eliminating middlemen, we aim to create a transparent, sustainable, and farmer-centric marketplace that ensures better profits for farmers and healthier choices for consumers. Our vision is to revolutionize the agricultural industry by fostering trust, fairness, and innovation. We aspire to build a self-sustaining ecosystem where farming communities thrive, food security is strengthened, and consumers connect directly with the hands that feed them, ensuring a healthier and more sustainable future for all.
            </h3>
          </p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000" className='w-1/2 h-1/2 flex justify-center items-center'>
          <img src={Slide3} alt='Slide3' />
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" id='about-container' className='flex justify-center items-center'>
        <div className='w-1/2 h-1/2 flex justify-center items-center'>
          <img src={About} alt='About' className='p-9' />
        </div>
        <div className='w-1/2 h-1/2 '>
          <p>
            <h1 className='text-green-800 text-5xl pl-5 pb-10 font-poppins'>
              <b>About Us</b></h1>
            <h1 className='text-[#800080] text-4xl pl-5'>We Produce Organic Food For Your Family!</h1>
            <h4 className='p-2 pl-5 pt-5 text-lg'>Fresh Roots is a farmer-first online marketplace dedicated to removing middlemen, ensuring fair earnings for farmers, and providing fresh, healthy produce to consumers. We bridge the gap between farmers and buyers, creating a transparent, sustainable, and efficient food supply chain. Our mission is to support local agriculture, promote ethical trade, and bring farm-fresh goodness directly to your doorstep. Every purchase on Fresh Roots strengthens farming communities, empowers small-scale farmers, and supports a healthier food ecosystem. Join us in revolutionizing agriculture and making a difference—one harvest at a time!</h4>

            <div className='flex justify-center items-center fa-4x'>
              <div className='w-1/2 h-1/2 pl-5'>
                <FontAwesomeIcon icon={faSeedling} style={{ color: "#AFE1AF" }} />
                <h5 className='text-xl font-bold'>100% Organic</h5>
                <h6 className='text-sm text-green-800'>We guarantee pure, chemical-free, and naturally grown produce. No pesticides, no GMOs—just fresh, healthy, and eco-friendly food straight from the farm to your table. </h6>

              </div>
              <div className='w-1/2 h-1/2 pl-5'>
                <FontAwesomeIcon icon={faAward} style={{ color: "#AFE1AF" }} />
                <h5 className='text-xl font-bold'>Award Winning</h5>
                <h6 className='text-sm text-green-800'>Fresh Roots is proud to be recognized for its commitment to quality, sustainability, and farmer empowerment. Experience excellence with every purchase!</h6>

              </div>
            </div>
          </p>
        </div>
      </div>

      <div id='service-container' className="flex flex-col items-center">
        <h1 data-aos="fade-up" data-aos-duration="2000" className="text-5xl text-green-800 pt-10 font-bold font-poppins">Services</h1>

        {/* Container for Cards */}
        <div className="flex justify-center items-center gap-6 mt-10 flex-wrap">
          {services.map((service, index) => (
            <div data-aos="flip-left" data-aos-duration="2000"
              key={index}
              className="w-[250px] h-[400px] bg-[#e6e6fa] rounded-[20px] flex flex-col items-center justify-center 
            p-4 text-center shadow-lg backdrop-blur-[10px] transition-all duration-500 ease-in-out 
            hover:cursor-pointer hover:scale-105"
            >
              <h2 className="text-xl font-bold text-[#800080] pb-8">{service.title}</h2>
              <img src={service.img} className='h-20 pb-4'/>
              <p className="text-sm text-black mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="blog">
        <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-col items-center w-full py-10">
          <h1 className="text-5xl text-green-800 font-bold mb-10 font-poppins p-3">Our Blog</h1>

          {/* Horizontal Scrolling Container without scrollbar */}
          <div
            id="blog-container"
            className="w-full overflow-hidden flex gap-8"
            style={{
              scrollBehavior: "smooth", // Smooth scroll effect
            }}
          >
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="min-w-[600px] max-w-[600px] h-[500px] bg-[#e6e6fa] rounded-[20px] 
            shadow-lg overflow-hidden transition-all duration-500 ease-in-out hover:cursor-pointer hover:scale-105"
              >
                <img src={blog.img} alt={blog.title} className="w-full h-[250px] object-cover" />
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-[#4b0082]">{blog.title}</h2>
                  <p className="text-sm text-black mt-2">{blog.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


      <div id='contact-container' data-aos="fade-up" data-aos-duration="2000" className='flex-col w-full bg-white h-100 text-black'>
        <div className='flex flex-col-3 w-full'>
          <div className="flex pt-24 pl-10 w-1/3">
            <h1 className="text-3xl font-bold text-[#643288]">Fresh</h1>
            <img src={logo} alt="" className="h-10" />
            <h1 className="text-3xl font-bold text-[#643288]">Roots</h1> 
          </div>
          <div className='flex justify-center items-center w-1/3'>
            <p>
              <h2 className='text-2xl p-2 font-semibold whitespace-nowrap dark:text-black text-[#643288]'><b>Quick Links</b></h2>
              <a href='#home-container' className='hover:text-[#800080]'>
                <FontAwesomeIcon icon={faArrowRight} className='pr-2' />Home<br />
              </a>
              <a href='#about-container' className='hover:text-[#800080]'>
                <FontAwesomeIcon icon={faArrowRight} className='pr-2' />About Us<br />
              </a>
              <a href='#services-container' className='hover:text-[#800080]'>
                <FontAwesomeIcon icon={faArrowRight} className='pr-2' />Our Services<br />
              </a>
              <a href='#blog' className='hover:text-[#800080]'>
                <FontAwesomeIcon icon={faArrowRight} className='pr-2' /> Our Blog<br />
              </a>
              <a href='#contact-container' className='hover:text-[#800080]'>
                <FontAwesomeIcon icon={faArrowRight} className='pr-2' />Contact Us<br />
              </a>
            </p>
          </div>
          <div className='flex justify-center items-center w-1/3'>
            <p>
              <h2 className='text-2xl p-2 pt-24 font-semibold whitespace-nowrap dark:text-black text-[#643288]'><b>Contact Us</b></h2>
              <a className='hover:text-[#800080]'>
                <FontAwesomeIcon icon={faPhone} className='pr-2' />+91 7260040597<br />
              </a>
              <a className='hover:text-[#800080]'>
                <FontAwesomeIcon icon={faEnvelope} className='pr-2' />support@freshroots.com<br />
              </a>
              <img src={Map} alt='Map' className='p-2' />
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center p-4 gap-4 pb-7 text-[#643288]'>
          <FontAwesomeIcon icon={faTwitter} className='h-10' />
          <FontAwesomeIcon icon={faSquareInstagram} className='h-10' />
          <FontAwesomeIcon icon={faFacebook} className='h-10' />
          <FontAwesomeIcon icon={faPinterest} className='h-10' />
        </div>
        <div className="flex justify-center text-xl p-2">
          <p className='text-[#800080] p-2'>©Fresh Roots 2025. All rights are reserved!</p>
        </div>
      </div>


    </div>
  )
}

export default LandingPage