import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Icon } from "@fortawesome/fontawesome-svg-core";
// import { IconProp } from "@fortawesome/fontawesome-svg-core";/
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

interface ContactFooterProps {
  className?: string;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ className }) => {
  return (
    <footer
      className={`w-10/12 rounded-2xl  backdrop:blur-lg bg-black/[0.5] border border-white dark:border-white/[0.2] group-hover:border-slate-700 text-white py-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row ">
          {/* Logo */}
          <div className="mb-4 flex justify-start items-start md:mb-0">
            <Link
              href="/"
              className="text-2xl flex justify-start items-start  font-bold"
            >
              <Image
                src="/favi.svg"
                alt="Company Logo"
                className="h-20 "
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="flex justify-center items-center w-full flex-col">
            {" "}
            <div className="flex flex-col justify-center items-center gap-8">
              {/* Contact Information */}
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/sumitp0khrel/"
                  className="text-gray-400 hover:text-[#f38c75]"
                >
                  <FaInstagram size={34} />
                </Link>
                <Link
                  href="https://www.facebook.com/Ozsumit"
                  className="text-gray-400 hover:text-[#f38c75]"
                >
                  <FaFacebook size={34} />
                </Link>
                <Link
                  href="https://github.com/ozsumit"
                  className="text-gray-400 hover:text-[#f38c75]"
                >
                  <FaGithub size={34} />
                </Link>
              </div>
              <div className="text-center md:text-left font-mono mb-4 md:mb-0">
                <a href="tel:9842134149" className="text-lg font-mono">
                  Phone: 9842134149
                </a>
                <p className="text-lg font-mono">
                  Address: Buddhashanti-2, Jhapa
                </p>
                <a href="mailto:" className="text-lg font-mono">
                  Email: pokhrelsumit36@gmail.com
                </a>
              </div>

              {/* Social Media Links */}

              <div className=" text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Vash.inc All rights reserved.
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
