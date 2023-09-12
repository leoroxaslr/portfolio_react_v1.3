const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            ABOUT ME
          </h2>
          <p className="mb-4">
            Hey there! I'm Leo, a passionate problem solver..
          </p>
          <p>
            I started my tech journey when I was 7. I immediately got hooked and
            curious on how it works. Programming and engineering stuff.
            classNameic script kiddie story that fueled my dreams in tech. Fast
            forward a few years, I wrote my first code. A 1000 line instruction
            that makes a stupid little cockroach robot react when the light
            turns on.
          </p>
          <br />
          <p>
            I now specialize in weaving marketing and technology. From
            conceptualizing to executing, I've dabbled in crafting automated
            campaigns that harness the power of various APIs and tools. Seeing
            the pieces come together to create a dynamic and efficient marketing
            system satisfies my itch for development.
          </p>
          <br />
          <p>
            With my experience in marketing and development, We can create a
            unique customer experience that leaves a mark.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="./src/assets/Ta lent.png"
            alt="about image 1"
          />
          <img
            className="w-full rounded-lg"
            src="./src/assets/Ta lent.png"
            alt="about image 2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
