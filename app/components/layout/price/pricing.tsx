import Image from "next/image";
import Link from "next/link";
import Hello from "./cat.gif";
import Hello1 from "./pad.gif";
import Hello2 from "./buy.gif";
import { TextAnimate } from "@/components/ui/text-animate";

const Pricing = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20 text-center flex justify-center items-center flex-col">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Our Pricing
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold  text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              <TextAnimate animation="blurInUp" as="h1">
                Transparent pricing. Pay as you grow.
              </TextAnimate>
            </h1>
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg font-bold">
          Choose the plan that right for you
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {/* Start Plan Card */}
        <div className="flex flex-col justify-between p-8 h-[60vh] transition duration-300 dark:bg-gray-950 bg-white border rounded-lg shadow-lg sm:items-center hover:shadow-2xl hover:scale-105 transform hover:transition-all">
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-500">Start</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold text-green-500">Free</div>
            </div>
            <div className="mt-5 space-y-3 text-gray-700">
              <div>10 deploys per day</div>
              <div>10 GB of storage</div>
              <div>20 domains</div>
            </div>
            <div className="mt-6">
              <Image
                src={Hello1}
                alt="hello"
                layout="responsive"
                width={250}
                height={250}
              />
            </div>
          </div>
          <div>
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white bg-green-600 rounded-md shadow-md hover:bg-green-500 transition-all"
            >
              Start for free
            </Link>
            <p className="mt-6 text-xs text-gray-600 sm:text-sm text-center sm:max-w-sm sm:mx-auto">
              Just login and start using Myaimix have fun with that
            </p>
          </div>
        </div>

        {/* Pro Plan Card */}
        <div className="relative flex flex-col justify-between p-8 transition duration-300 dark:bg-gray-900 bg-white border rounded-lg shadow-lg sm:items-center hover:bg-gray-100 hover:shadow-2xl hover:scale-105 border-blue-600 transform hover:transition-all">
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-deep-purple-accent-400">
              Most Popular
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-600">Pro</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold text-blue-600">$38</div>
              <div className="text-gray-700">/ mo</div>
            </div>
            <div className="mt-5 space-y-3 text-gray-700">
              <div>200 deploys per day</div>
              <div>80 GB of storage</div>
              <div>Global CDN</div>
            </div>
            <div className="mt-6">
              <Image
                src={Hello}
                alt="hello"
                layout="responsive"
                width={250}
                height={250}
              />
            </div>
          </div>
          <div>
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-500 transition-all"
            >
              Buy Pro
            </Link>
            <p className="mt-6 text-xs text-gray-600 sm:text-sm text-center sm:max-w-sm sm:mx-auto">
              Need to an a upgrade the is over most popular plane
            </p>
          </div>
        </div>

        {/* Business Plan Card */}
        <div className="flex flex-col justify-between p-8 transition duration-300 bg-white border dark:bg-gray-950 rounded-lg shadow-lg sm:items-center hover:shadow-2xl hover:scale-105 transform hover:transition-all">
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-600">Business</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold text-yellow-600">$78</div>
              <div className="text-gray-700">/ mo</div>
            </div>
            <div className="mt-5 space-y-3 text-gray-700">
              <div>500 GB of storage</div>
              <div>Unlimited domains</div>
              <div>24/7 Support</div>
            </div>
            <div className="mt-6">
              <Image
                src={Hello2}
                alt="hello"
                layout="responsive"
                width={250}
                height={250}
              />
            </div>
          </div>
          <div>
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white bg-yellow-600 rounded-md shadow-md hover:bg-yellow-500 transition-all"
            >
              Buy Business
            </Link>
            <p className="mt-6 text-xs text-gray-600 sm:text-sm text-center sm:max-w-sm sm:mx-auto">
              Like to intergrate in the bussiness try over bussiness plane for
              using this
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
