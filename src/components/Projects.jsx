import furrypalsImage from "./src/assets/furrypals.png";
import takataxImage from "./src/assets/takatax.png";
import aboutskinImage from "./src/assets/aboutskin.png";

const Projects = () => {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Projects
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <img
              className="w-full rounded-lg"
              src={furrypalsImage}
              alt="about image 1"
            />
            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Furry Pals
            </span>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Website
            </h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Online Veterinary Consultation platform developed using ReactJS,
              Tailwind CSS, and Firebase.
            </p>
            <a
              href="https://furrypals.online/"
              title=""
              className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              role="button"
            >
              View Demo
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="space-y-4">
            <img
              className="w-full rounded-lg"
              src={takataxImage}
              alt="about image 1"
            />
            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Taka Tax
            </span>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Online tax compliance tool
            </h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Takatax is a tax compliance tool developed using ReactJS, Tailwind
              CSS, and Firebase.
            </p>
            <a
              href="https://www.taka-tax.online/"
              title=""
              className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              role="button"
            >
              View demo
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="space-y-4">
            <img
              className="w-full rounded-lg"
              src={aboutskinImage}
              alt="about image 3"
            />
            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              AboutSkin PH
            </span>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              E-commerce Website
            </h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Skincare solutions website Developed using ReactJS, Tailwind CSS,
              and Rest API.
            </p>
            <a
              href="https://aboutskin-client.vercel.app/"
              title=""
              className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              role="button"
            >
              View demo
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
