import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  const navLinks = {
    "Quick Links": ["Programs", "Blog", "Thursday Tribune", "IMCE Sessions"],
    Support: ["Donate", "Volunteer", "Book Campaign", "Unashamed Pledge"],
  };

  const contactInfo = [
    {
      icon: SlLocationPin,
      content: "No 4, Awosika Street, Old Bodija, Ibadan.",
    },
    {
      icon: HiOutlineMail,
      content: "asidofoundation@gmail.com",
    },
    {
      icon: FiPhone,
      content: ["+234 818 077 7458", "+234 902 808 0416"],
    },
  ];

  return (
    <footer className="bg-primary-100 text-white px-9 py-[60px] md:px-10 md:pt-10 md:pb-7 xl:px-20 xl:pt-22 xl:pb-14 relative">
      <div className="md:max-w-3xl lg:max-w-full">
        {/* Top section with logo and navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and tagline section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-[120px] h-[40px] md:w-[140px] md:h-[45px] lg:w-[164px] lg:h-[52px] mb-2.5 md:mb-5">
              <Image
                alt="Asido Foundation Logo"
                src="/logo-white.png"
                fill
                sizes="(max-width: 768px) 120px, (max-width: 1024px) 140px, 164px"
                className="object-contain"
                priority
                quality={90}
              />
            </div>

            <p className="text-xs md:text-base md:font-medium text-center md:text-left md:max-w-80 leading-tight md:mb-10 xl:mb-[89.68px]">
              Making mental health support accessible through advocacy and
              action
            </p>
            {/* Social media links */}
            <div className="hidden md:flex gap-4 xl:mb-[55px]">
              <a
                href="#twitter"
                className="w-9 h-9 flex justify-center items-center"
              >
                <FaTwitter size={25} />
              </a>

              <a
                href="#facebook"
                className="w-9 h-9 flex justify-center items-center"
              >
                <FaFacebookF size={25} />
              </a>

              <a
                href="#linkedin"
                className="w-9 h-9 flex justify-center items-center"
              >
                <FaLinkedinIn size={25} />
              </a>

              <a
                href="#instagram"
                className="w-9 h-9 flex justify-center items-center"
              >
                <AiFillInstagram size={25} />
              </a>
            </div>
          </div>
          {/* Navigation sections */}
          <div className="grid grid-cols-2 md:col-span-2 md:flex justify-between xl:gap-[120px] z-50">
            {Object.entries(navLinks).map(([title, links]) => (
              <div key={title} className="mb-10 text-sm ">
                <hr className="w-[135px] mb-5 bg-secondary-400 md:hidden" />

                <h3 className="md:text-xl font-bold mb-4">{title}</h3>

                <ul className="space-y-2 font-medium md:text-base">
                  {links.map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Contact Us section with icons */}
            <div className="col-span-2 pt-5 border-t border-secondary-400 text-sm md:border-t-0 md:pt-0">
              <h3 className="font-bold mb-4 text-center md:text-xl md:text-left">
                Contact Us
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex gap-[9.5px] items-start">
                      <Icon size={28} className="mt-0.5 flex-shrink-0" />
                      <div className="md:text-base font-medium">
                        {Array.isArray(item.content) ? (
                          <div className="flex flex-row md:flex-col gap-[12px] ">
                            {item.content.map((phone, i) => (
                              <a
                                key={i}
                                href={`tel:${phone.replace(/\s+/g, "")}`}
                              >
                                {phone}
                              </a>
                            ))}
                          </div>
                        ) : item.icon === HiOutlineMail ? (
                          <a href={`mailto:${item.content}`}>{item.content}</a>
                        ) : (
                          <span>{item.content}</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom section with copyright and social links */}
        <div className="pt-5 border-t border-secondary-400 flex  flex-col items-center md:block">
          <p className="text-xs md:text-base font-medium mb-5 md:mb-0">
            © 2025 Asido Foundation. All Rights Reserved.
          </p>

          {/* Social media links */}
          <div className="flex md:hidden gap-4">
            <a
              href="#twitter"
              className="w-9 h-9 flex justify-center items-center"
            >
              <FaTwitter size={25} />
            </a>

            <a
              href="#facebook"
              className="w-9 h-9 flex justify-center items-center"
            >
              <FaFacebookF size={25} />
            </a>

            <a
              href="#linkedin"
              className="w-9 h-9 flex justify-center items-center"
            >
              <FaLinkedinIn size={25} />
            </a>

            <a
              href="#instagram"
              className="w-9 h-9 flex justify-center items-center"
            >
              <AiFillInstagram size={25} />
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute top-0 right-[198px]">
        <div className="relative">
          <Image
            alt="footer-design"
            src={"/path58-middle.png"}
            width={350}
            height={320}
            className="object-contain"
          />
        </div>

        <div className="absolute -top-[15%] -right-[75%]">
          <Image
            alt="footer-design"
            src={"/path58-up.svg"}
            width={262}
            height={277}
            className="object-contain"
          />
        </div>

        <div className="absolute -bottom-[40%] -left-[30%]">
          <Image
            alt="footer-design"
            src={"/path58-down.svg"}
            width={236}
            height={250}
            className="object-contain"
          />
        </div>

        <div className="absolute top-0 -left-20">
          <Image
            alt="footer-design"
            src={"/path58-left.svg"}
            width={240}
            height={254}
            className="object-contain"
          />
        </div>

        <div className="absolute -bottom-[40%] -right-[40%]">
          <Image
            alt="footer-design"
            src={"/path58-right.svg"}
            width={290}
            height={303}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
