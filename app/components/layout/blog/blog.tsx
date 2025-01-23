import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="dark:bg-gray-900 my-10 dark:text-gray-800">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center my-5 pt-9  text-white">
        <TextAnimate animation="blurInUp" as="h1">
          Blog
        </TextAnimate>
      </h1>
      <p className="text-base text-center text-gray-700 md:text-lg font-bold">
        There are some blog check out watch our feature plane and current
        working plane
      </p>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 rounded-lg">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50 mt-8 rounded-lg"
        >
          <Image
            src="https://i.pinimg.com/736x/da/07/93/da0793eda161a2f9b620f16601040d20.jpg"
            alt="Blog Image"
            className="object-cover w-full h-[400px] rounded sm:h-96 lg:col-span-4 dark:bg-gray-500 "
            width={480}
            height={760}
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              Noster tincidunt reprimique ad pro
            </h3>
            <span className="text-xs dark:text-gray-600">
              February 19, 2021
            </span>
            <p>
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
          </div>
        </a>

        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 rounded-lg">
          {[
            {
              id: 1,
              date: "January 21, 2021",
              src: "https://i.pinimg.com/736x/fb/c5/66/fbc566855b6f75676a8420aa71f6f2ec.jpg",
            },
            {
              id: 2,
              date: "January 22, 2021",
              src: "https://i.pinimg.com/736x/52/45/0c/52450c9a39a11a65cb070a00d3958505.jpg",
            },
            {
              id: 3,
              date: "January 23, 2021",
              src: "https://i.pinimg.com/736x/f5/3d/c7/f53dc7a7b3c8e24686681d08399b69d3.jpg",
            },
            {
              id: 4,
              date: "January 24, 2021",
              src: "https://i.pinimg.com/736x/e7/cc/03/e7cc03f1ac86fccd59db30c3953a9f8b.jpg",
            },
            {
              id: 5,
              date: "January 25, 2021",
              src: "https://i.pinimg.com/736x/bb/a6/35/bba635d5dd1c2a8127eafa6fa2697899.jpg",
            },
            {
              id: 6,
              date: "January 26, 2021",
              src: "https://i.pinimg.com/736x/0f/6c/88/0f6c888adf4f0fc5c95b145f10f9b59e.jpg",
            },
          ].map(({ id, date, src }) => (
            <a
              key={id}
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline rounded-lg dark:bg-gray-50"
            >
              <Image
                src={src}
                alt={`Blog image ${id}`}
                className="object-cover w-full rounded h-[450px] dark:bg-gray-500"
                width={1480}
                height={1360}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-600">{date}</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
}
