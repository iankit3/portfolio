import Head from "next/head";
import Page from "../Components/Page";
import Project from "../Components/Project/Project";

function HomePage({ selectedRouteIndex }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <div className="relative z-10 pb-8 bg-grey sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Ankit Kumar </span>
                <span className="block text-indigo-600 xl:inline">
                  {" "}
                  Software Engineer
                </span>
              </h1>
              <p className="mt-3 text-base text-white-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I am a Software Engineer with more than 5 years of experience
                building Web applications.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow bg-indigo-600">
                  <a
                    href="https://iankit3.github.io/resume/ankit.pdf"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-#b5e8e0-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Resume
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "rgba(156, 163, 175, 0.30)", minHeight: "200px" }}>
        <h1 className="text-2xl tracking-tight font-extrabold text-white-900 sm:text-3xl md:text-4xl mb-4">
          My Projects
        </h1>
        <Project limit={6} cardSize={"big"} />
      </div>
    </>
  );
}

export default Page(HomePage);
