const Hero = () => {
    return (
        <section
            id="home"
            className="overflow-hidden bg-white pt-24 pb-0 sm:pt-28 sm:pb-0 lg:pt-32 lg:pb-0"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-2 px-5 sm:gap-4 sm:px-8 lg:grid-cols-2 lg:gap-6 lg:px-10">

                {/* Hero Content */}
                <div className="text-center lg:text-left">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-3 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600"></span>
                        <span className="text-[11px] font-semibold text-pink-600">
                            Build. Explore. Create.
                        </span>
                    </div>

                    <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                        Build Your Ideal
                        <br />
                        <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 lg:mx-0">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                        <a
                            href="#technologies"
                            className="w-full rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 text-center text-xs font-semibold text-white shadow-lg shadow-pink-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/30 sm:w-auto"
                        >
                            Explore Technologies
                        </a>
                        <a
                            href="#about"
                            className="w-full rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-xs font-semibold text-slate-700 transition duration-300 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600 sm:w-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Banner Image */}
                <div className="relative -mt-8 flex justify-center sm:-mt-6 lg:-ml-4 lg:mt-0 lg:justify-end">
                    <div className="absolute left-1/2 top-1/2 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-100/60 blur-3xl sm:h-64 sm:w-64 lg:h-80 lg:w-80"></div>

                    <img
                        src="./src/assets/banner-stack.png"
                        alt="Development Stack"
                        className="relative z-10 w-full max-w-[18rem] object-contain drop-shadow-xl sm:max-w-sm lg:max-w-lg xl:max-w-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;