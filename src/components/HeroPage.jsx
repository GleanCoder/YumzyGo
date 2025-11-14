import React from "react";
const heroImage = new URL("../assets/heropage.png", import.meta.url);
const heroImage2 = new URL("../assets/heropage-2.png", import.meta.url);
const heroImage3 = new URL("../assets/heropage-3.png", import.meta.url);
const heroImage4 = new URL("../assets/heropage-4.png", import.meta.url);
const HeroPage = () => {
  return (
    <div className="relative">
      <section className="px-20 py-20 flex items-center justify-between gap-10 bg-[#E7F8ED]  ">
        {/* Text Content */}
        <div className="max-w-[50%] pl-16">
          <p className="text-[#23A455] font-semibold mb-3 tracking-wide">
            Tasty food delivered fast
          </p>

          <h1 className="text-6xl font-bold text-[#222] leading-tight">
            Enjoy <span className="text-[#23A455]">Delicious</span>
            <br />
            Meals Everyday
          </h1>

          <p className="text-[#555] mt-6 text-lg leading-relaxed">
            Freshly prepared food delivered to your doorstep — quick & healthy.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <button className="bg-[#23A455] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition hover:scale-105">
              Order Now →
            </button>

            <span className="text-[#23A455] font-bold text-2xl">$25</span>
          </div>
        </div>

        {/* Image */}
        <div className="flex gap-8">
          <img src={heroImage} alt="test" className="pr-58 w-[1200px]" />
          <img
            src={heroImage2}
            alt="test"
            className="rotate-180 absolute right-0 top-[98px] w-[550px]"
          />
          {/* <img src={heroImage3} alt="test" /> */}
          <img
            src={heroImage4}
            alt="test"
            className="absolute right-[750px] top-[600px] w-[200px]"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
