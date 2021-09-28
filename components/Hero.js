export default function Hero() {
  return (
    <section className="mt-10 mb-8 text-center md:mt-16 sm:mt-12 lg:mt-20 xl:mt-28">
      <h1 className="text-4xl font-bold text-gray-900 uppercase tracking-loose sm:text-5xl">
        The only tee shirt you will ever need.
      </h1>
      <p className="mt-8 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto sm:text-center md:mt-12 md:text-xl">
        Built to last. Our shirts are made from 100% sustainably grow cotton.
      </p>
      <div className="mt-12 sm:flex sm:justify-center">
        <div>
          <a
            href="#"
            className="px-8 py-3 text-base font-medium text-white bg-black border border-transparent hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
          >
            Shop the collection
          </a>
        </div>
      </div>
    </section>
  )
}
