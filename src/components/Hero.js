import image from "../images/spaces.jpg";

function Hero() {
  return (
    <div>
      <section class="dark:text-black space-x-4">
        <div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 class="text-5xl font-bold lead sm:text-6xl">
              Capsules with
              <span class="pl-3 text-violet-400 dark:text-violet-400">
                SpaceX
              </span>
            </h1>
            <p class="mt-6 mb-8 text-lg sm:mb-12">
              Find out everything you need to know about SpaceX capsules
            </p>
            <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button
                href="#"
                class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Get Started
              </button>
              <button
                href="#"
                class="px-8 py-3 text-lg font-semibold border rounded dark:border-violet-400"
              >
                View Grid
              </button>
            </div>
          </div>
          <div class="flex items-center justify-center p- md:p-6 mt-4 md:mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={image}
              alt=""
              class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
