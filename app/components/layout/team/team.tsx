import Image from "next/image";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Sophia Adams",
    title: "Lead Developer",
    image:
      "https://i.pinimg.com/236x/49/d8/fe/49d8fec7ccdc91dfeb38cace8e6a27ad.jpg",
    github: "https://github.com/sophiaadams",
    instagram: "https://instagram.com/sophiaadams",
    twitter: "https://twitter.com/sophiaadams",
  },
  {
    name: "Ethan Green",
    title: "Backend Developer",
    image:
      "https://i.pinimg.com/236x/fa/85/ff/fa85ff0a07bda5c3b1848e27c6b37cb0.jpg",
    github: "https://github.com/ethangreen",
    instagram: "https://instagram.com/ethangreen",
    twitter: "https://twitter.com/ethangreen",
  },
  {
    name: "Olivia White",
    title: "UI/UX Designer",
    image:
      "https://i.pinimg.com/236x/63/a6/0b/63a60b7bcf96bb571a3f52de2fbb4bf6.jpg",
    github: "https://github.com/oliviawhite",
    instagram: "https://instagram.com/oliviawhite",
    twitter: "https://twitter.com/oliviawhite",
  },
  {
    name: "Liam Brown",
    title: "Product Manager",
    image:
      "https://i.pinimg.com/736x/a2/f9/e6/a2f9e653506c9c65feb0e0d1f9a8b9ec.jpg",
    github: "https://github.com/liambrown",
    instagram: "https://instagram.com/liambrown",
    twitter: "https://twitter.com/liambrown",
  },

  {
    name: "Mason Lee",
    title: "Project Manager",
    image:
      "https://i.pinimg.com/736x/8c/02/4e/8c024ea506f9e14e055b1b1638f1c99e.jpg",
    github: "https://github.com/masonlee",
    instagram: "https://instagram.com/masonlee",
    twitter: "https://twitter.com/masonlee",
  },
  {
    name: "Charlie Lee",
    title: "Marketing Specialist",
    image:
      "https://i.pinimg.com/236x/5e/b5/6d/5eb56d1f749e78674725241372700e9f.jpg",
    github: "https://github.com/charlielee",
    instagram: "https://instagram.com/charlielee",
    twitter: "https://twitter.com/charlielee",
  },
];

const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full flex justify-center items-center flex-col text-center lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gradient-to-r rounded-lg  lg:from-teal-400 lg:to-blue-500 text-white">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Meet The Team
          </p>
        </div>
        <h2 className="max-w-lg mb-6  text-4xl font-bold leading-none tracking-tight sm:text-5xl md:mx-auto">
          Our talented and passionate team
        </h2>
        <p className="text-base text-gray-100 md:text-lg">
          Get to know the people behind the work.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid gap-10 row-gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-screen-lg w-full sm:mx-auto">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center p-8 duration-500 transition ease-in-out bg-white border-2 border-transparent rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 hover:border-teal-600"
          >
            <Image
              src={member.image}
              alt={member.name}
              className="w-36 h-36 mb-4 rounded-full shadow-xl object-cover"
              width={144}
              height={144}
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.title}</p>
            </div>
            <div className="flex space-x-6 mt-6 justify-center text-gray-800">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-7 h-7 hover:text-teal-500 transition duration-300" />
              </a>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-7 h-7 hover:text-pink-500 transition duration-300" />
              </a>
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-7 h-7 hover:text-blue-500 transition duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
