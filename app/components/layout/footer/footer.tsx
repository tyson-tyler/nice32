import Image from "next/image";
import Logo from "./logo.svg";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gray-100 dark:bg-gray-900 dark:text-white text-black font-semibold dark:bg-dark pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* Section 1 */}
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="w-full mb-10">
              <a
                href="#"
                className="mb-6 max-w-[160px] flex justify-center items-center"
              >
                <Image
                  src={Logo}
                  alt="logo"
                  width={50}
                  height={50}
                  className="w-14 h-14 mr-3"
                />
                <span className="text-2xl font-semibold">Myaimix</span>
              </a>
              <p className="text-base text-body-color dark:text-dark-6 mb-7 font-semibold">
                Myaimix is an AI Services & Products company that makes life
                easy.
              </p>
              <p className="flex items-center text-sm font-semibold text-dark dark:text-white">
                <span className="mr-3 text-green-600">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                      fill="#18c00c"
                    />
                  </svg>
                </span>
                <span className="text-green-600 font-semibold">
                  myaimix@gmail.com
                </span>
              </p>
            </div>
          </div>

          {/* Additional sections (Resources, Company, etc.) */}
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="w-full mb-10">
              <h4 className="text-lg font-semibold text-white mb-9">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                  >
                    SaaS Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                  >
                    Our Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                  >
                    User Flow
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                  >
                    User Strategy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="w-full mb-10">
              <h4 className="text-lg font-semibold text-white mb-9">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                  >
                    About Myaimix
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                  >
                    Contact & Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                  >
                    Success History
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                  >
                    Setting & Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="w-full mb-10">
              <h4 className="text-lg font-semibold text-white mb-9">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                  >
                    Premium Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                  >
                    Know Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                  >
                    Download App
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Repeat similar sections for "Company", "Quick Links", and "Follow Us On" */}
        </div>
      </div>
      {/* Decorative SVGs */}
      <div>
        <span className="absolute left-0 bottom-0 z-[-1]">
          <svg
            width="217"
            height="229"
            viewBox="0 0 217 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_5"
                x1="76.5"
                y1="281"
                x2="76.5"
                y2="1.22829e-05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.08" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
