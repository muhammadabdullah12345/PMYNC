import { useEffect } from "react";
import { setupRevealAnimations } from "../smoothAnimations.js";
import NYCEvents from "../components/NYCEvents.js";
import FAQs from "../components/FAQs.js";
import CTABanner from "../components/CTABanner.js";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicated projects data (9 total cards)
  const projects = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
  const cardsToShow = 9;
  const maxIndex = projects.length - cardsToShow;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };
  const stats1 = [
    {
      image: "/images/diversity.png",
      number: "52%",
      label: "Women Participants",
    },
    {
      image: "/images/distance.png",
      number: "15k+",
      label: "Youth From Rural Areas",
    },
    {
      image: "/images/check_circle.png",
      number: "100+",
      label: "Districts Covered",
    },
    {
      image: "/images/star.png",
      number: "8",
      label: "Provinces Represented",
    },
  ];
  const stats = [
    {
      number: "150+",
      label: "International Delegations",
    },
    {
      number: "35+",
      label: "Countries Engaged",
    },
    {
      number: "100+",
      label: "Global Forums",
    },
    {
      number: "500+",
      label: "Youth Represented",
    },
  ];
  useEffect(() => {
    setupRevealAnimations();
  }, []);

  return (
    <>
      <section className="relative h-[calc(100vh-100px)]">
        <img
          src="/assets/images/indexHero.jpg"
          alt=""
          className="absolute top-0 -z-50 w-full h-full object-fill brightness-50"
        />
        <div className="w-full flex flex-col justify-center items-start h-full pl-[67px]">
          <h1 className="text-4xl md:text-[80px] font-[800] mb-[12px] max-w-[992px] leading-[90px]">
            <span className="text-[#088e48]">Pakistan&apos;s </span>
            <span className="text-white">Young Leaders</span>
          </h1>
          <p className="text-2xl md:text-[34px] text-transparent [-webkit-text-stroke:1px_white] font-['Open_Sans'] font-[800] mt-2">
            Empowering Pakistan Future Leaders
          </p>
          <p className="text-base md:text-[18px] italic font-medium mt-[12px] text-white max-w-[992px]">
            The Prime Minister&apos;s National Youth Council serves as the
            official body representing young voices across Pakistan — driving
            inclusion, innovation, and policy development for a brighter
            tomorrow
          </p>
          <div className="w-full flex gap-[16px] justify-start items-center mt-[32px]">
            <a
              href="#"
              className="px-[24px] py-[12px] bg-[#088e48] border-none rounded-[12px] text-white"
            >
              Join the movement
            </a>
            <a
              href="#"
              className="px-[24px] py-[11px] border border-white rounded-[12px] flex items-center justify-center text-white"
            >
              <span className="text-white">Explore Council Members</span>
              <img
                src="/assets/images/anchorArrow.svg"
                width={20}
                alt=""
                className="ml-2"
              />
            </a>
          </div>
        </div>
        <img
          src="/assets/images/applynowCircle.svg"
          alt=""
          className="absolute -z-50 w-[100px] md:w-[164px] right-[68px] bottom-[84px] hidden md:block"
        />
      </section>

      <section className="h-auto bg-white flex flex-row px-4 md:px-[60px] py-[45px] items-center justify-center gap-8 2xl:gap-16 max-w-[1440px] mx-auto w-full">
        <div className="text-center max-w-[894px] w-full">
          <img
            src="/assets/images/white-section_Left.png"
            alt="Speaker speaking"
            className="max-w-[624px] h-[444px] object-cover mx-auto "
          />
        </div>
        <div className="max-w-[643px]">
          <h2 className="text-transparent [-webkit-text-stroke:1px_black] text-white font-['Open_Sans'] text-[24px] font-[800]">
            What is the Youth Council?
          </h2>
          <h1 className="mt-[12px] w-full  text-3xl md:text-[40px] font-bold max-w-[522px] leading-10 uppercase">
            A Platform for Voices, Growth, Change
          </h1>
          <p className="text-[18px] text-[#6a7282] w-full font-['Roboto'] mt-[18px]">
            Constituted under the approval of the Prime Minister of Pakistan,
            the National Youth Council represents youth from all provinces and
            overseas. It aims to integrate young people into policymaking,
            development, and leadership at all levels of government.
          </p>
          <button className="px-[24px] py-[12px] bg-[#088e48] border-none rounded-[12px] w-auto  mt-[24px] inline-flex items-center justify-center text-white gap-2">
            About Us
            <img src="/assets/images/anchorArrow.svg" width={20} alt="" />
          </button>
        </div>
      </section>

      <section className="text-center text-[18px] text-[#6a7282] px-4 md:px-[87px] py-[90px] flex flex-col items-center gap-[12px] bg-gradient-to-br from-gray-900 via-green-950 to-black">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-[40px] font-bold text-white mb-2 uppercase">
              Featured Stories
            </h1>
            <h2 className="text-[#088e48] text-lg md:text-xl font-bold mb-2 uppercase tracking-wide">
              Inclusive. Diverse. Representing Every Young Pakistani
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-[942px] mx-auto leading-relaxed">
              Real stories from young Pakistanis whose journeys have been shaped
              by learning programs, leadership opportunities, community
              projects, and NYC initiatives. These voices represent the
              resilience, talent, and dreams of our youth—from cities, villages,
              mountains, and coastlines across Pakistan.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-[120px]">
            {stats1.map((stat, index) => {
              // const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div>
                      <img src={stat.image} alt="" className="w-10 h-10" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-[44px] font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#088e48] text-sm md:text-base font-semibold max-w-[174px]">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap text-left justify-center gap-6 md:gap-[24px] mt-[40px] text-[16px] 2xl:mb-20">
          <div className="w-full md:w-[30%] gap-[24px] rounded-[12px] h-[482px]">
            <img
              src="/assets/images/ayeshaAzhar.svg"
              alt=""
              className="w-full"
            />
            <div className="p-[20px] flex flex-col gap-[8px] bg-white rounded-b-[12px] items-start">
              <div className="">
                <div className="text-[16px] text-black font-bold">
                  Ayesha Azhar
                </div>
                <div className="text-[14px] text-[#6a7282]">
                  Hunza, Gilgit Baltistan
                </div>
              </div>
              <div className="text-[#088e48] font-medium text-[14px]">
                DIGITAL SKILLS &amp; FREELANCING
              </div>
              <p className="text-[#475063] text-[14px] font-medium text-left ">
                &quot;Before joining the NYC Digital Skills track, I didn&apos;t
                know how to turn my passion into a career. Today, I work with
                global clients and teach young girls in my village how to
                freelance confidently.&quot;
              </p>
            </div>
          </div>
          <div className="w-full md:w-[30%] gap-[24px]  rounded-[12px] h-[482px]">
            <img
              src="/assets/images/bilalAbbas.svg"
              alt=""
              className="w-full"
            />
            <div className="p-[20px] flex flex-col gap-[8px] bg-white rounded-b-[12px] items-start">
              <div>
                <div className="text-[16px] text-black font-bold">
                  Bilal Abbas
                </div>
                <div className="text-[14px] text-[#6a7282]">Lyari, Karachi</div>
              </div>
              <div className="text-[#088e48] font-medium text-[14px]">
                DIGITAL SKILLS &amp; FREELANCING
              </div>
              <p className="text-[#475063] text-[14px] font-medium text-left">
                &quot;NYC gave me my first platform to speak about youth sports
                and community development. I used that confidence to start a
                small football program for children in Lyari.&quot;
              </p>
            </div>
          </div>
          <div className="w-full md:w-[30%] gap-[24px] rounded-[12px] h-[482px]">
            <img src="/assets/images/sanaKhan.svg" alt="" className="w-full" />
            <div className="p-[20px] flex flex-col gap-[8px] bg-white rounded-b-[12px] items-start">
              <div>
                <div className="text-[16px] text-black font-bold">
                  Sana Khan
                </div>
                <div className="text-[14px] text-[#6a7282]">Multan, Punjab</div>
              </div>
              <div className="text-[#088e48] font-medium text-[14px]">
                WOMEN ENTREPRENEURSHIP
              </div>
              <p className="text-[#475063] text-[14px] font-medium text-left">
                &quot;Through the NYC Entrepreneurship Workshops, I learned how
                to register my small craft business. Now I employ three young
                women from my neighborhood.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="S md:pl-[44px] bg-[#F6F6F6]">
        <div className="flex flex-col md:flex-row">
          <div className="max-w-3xl mx-auto flex flex-col gap-6 items-start">
            {/* Header */}
            <div className="text-start max-w-[643px]">
              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black mb-6 uppercase">
                Global Engagement &<br />
                International Partnerships
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-tight">
                Our impact extends far beyond national borders. Through active
                participation in international conferences, youth assemblies,
                and global innovation programs, the Council connects Pakistan's
                young visionaries with changemakers around the world — promoting
                collaboration, exchange, and shared progress
              </p>
            </div>

            {/* Stats Grid */}
            <div className="flex items-center justify-start gap-6 ">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#088e48] text-white rounded-lg w-[134px] h-[105px] text-center hover:bg-[#077a3d] transition-colors duration-300 flex flex-col justify-center items-center "
                >
                  <div className="text-[24px] font-bold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-[14px] font-normal leading-snug max-w-[93px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img
              src="/images/map.png"
              alt=""
              className="object-contain h-[598px]"
            />
          </div>
        </div>
      </section>

      <section className="text-center flex flex-col flex-wrap justify-center items-center text-white bg-[url('/assets/images/greenbg1.svg')] py-[100px] px-[24px]">
        <div className="w-[45%] text-[18px] flex flex-col justify-center items-center">
          <h1>
            <span className="text-transparent [-webkit-text-stroke:1px_white] font-['Open_Sans'] text-[44px] font-[800]">
              NYC{" "}
            </span>{" "}
            <span className="text-[44px] font-[800] uppercase text-white">
              Projects
            </span>
          </h1>
          <p className="w-full max-w-[608px] text-center">
            Transforming Pakistan through youth-led initiatives across
            leadership, technology, environment, and social development
          </p>
        </div>

        <div className="w-[90%] flex justify-center items-center mt-[40px] relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 z-10 text-white bg-[#088e48] rounded-full p-3 shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={24} className="cursor-pointer" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden w-full max-w-[1300px]">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-[32px]"
              style={{
                transform: `translateX(-${currentIndex * (400 + 32)}px)`,
              }}
            >
              {projects.map((idx, i) => (
                <div
                  className="w-[400px] flex-shrink-0 h-auto bg-white text-black text-left border-none rounded-[12px]"
                  key={i}
                >
                  <img
                    src={`/assets/images/NYC${idx}.png`}
                    alt="NYC members images"
                    className="w-full h-[70%] min-h-[300px] object-cover rounded-[12px]"
                  />
                  <div className="flex justify-start items-center gap-[24px] px-[20px] mt-[12px]">
                    <div className="flex flex-row gap-[4px] justify-center items-center text-sm">
                      <img src="/assets/images/calendar.svg" alt="" />
                      Nov, 2025
                      <img src="/assets/images/left-arrow.svg" alt="" />
                      Dec, 2025
                    </div>
                  </div>
                  <h1 className="mt-[12px] px-[20px] text-[16px] font-bold">
                    Project {idx}
                  </h1>
                  <p className="text-[14px] text-[#6a7282] mt-[4px] px-[20px]">
                    Comprehensive leadership training workshops empowering young
                    leaders across Pakistan with...
                  </p>
                  <hr className="mt-3 mx-4" />
                  <div className="separator" />
                  <div className="mt-[16px] flex flex-row gap-[4px] justify-between items-center px-[20px]">
                    <div className="flex items-center">
                      <img
                        src="/assets/images/people.svg"
                        alt=""
                        className="h-[60%]"
                      />
                      <div className="flex flex-col gap-[0.4px] ml-[8px] items-start">
                        <div className="text-[12px] font-normal text-[#6A7282]">
                          Participants
                        </div>
                        <div className="text-[#088e48] font-medium">2500+</div>
                      </div>
                    </div>
                    <div>
                      <img src="/assets/images/participants.svg" alt="" />
                    </div>
                  </div>
                  <a
                    href=""
                    className="px-[24px] py-[12px] bg-[#088e48] border-none rounded-[12px] m-[24px_20px] inline-flex items-center gap-2"
                  >
                    Learn More
                    <img
                      src="/assets/images/anchorArrow.svg"
                      width={20}
                      alt=""
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 z-10 text-white bg-[#088e48] rounded-full p-3 shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight size={24} className="cursor-pointer" />
          </button>
        </div>
      </section>

      <section className=" text-[#041502] bg-[#F6F6F6] font-['Open_Sans']  px-4 md:px-[110px] py-[45px]  ">
        <div className="flex justify-center gap-8 flex-row flex-wrap max-w-[1440px] mx-auto">
          <div className="w-full md:w-[20%] mb-6 md:mb-0 ">
            <h1 className="mt-[16px] text-2xl md:text-3xl lg:text-[44px] font-extrabold">
              Thematic Areas
            </h1>
            <p className="text-[#6a7282] mt-[12px] text-[15px]">
              Seven interconnected pillars driving youth empowerment across
              Pakistan
            </p>
          </div>
          <div className="bg-white border-none rounded-[12px] p-[24px] h-[220px] w-full sm:w-[calc(50%-8px)] md:w-[20%] flex flex-col items-start justify-center">
            <img src="/assets/images/gray-doc.svg" alt="" />
            <h3 className="mt-[16px] text-[20px] font-bold">Policy Support</h3>
            <p className="text-[#6a7282] mt-[8px] max-w-[232px] text-[13px] w-full">
              Strengthening youth policies and accountability mechanism
            </p>
          </div>
          <div className="bg-white flex flex-col items-start justify-center border-none rounded-[12px] p-[24px] w-full h-[220px] sm:w-[calc(50%-8px)] md:w-[20%]">
            <img src="/assets/images/mediaSupport.svg" alt="" />
            <h3 className="mt-[16px] text-[20px] font-bold">Media Support</h3>
            <p className="text-[#6a7282] mt-[8px] max-w-[232px] text-[13px] w-full">
              Promoting youth narratives through digital platforms
            </p>
          </div>
          <div className="bg-white flex flex-col items-start justify-center border-none rounded-[12px] p-[24px] w-full h-[220px] sm:w-[calc(50%-8px)] md:w-[20%]">
            <img src="/assets/images/institutionalization.svg" alt="" />
            <h3 className="mt-[16px] text-[20px] font-bold">
              Institutionalization
            </h3>
            <p className="text-[#6a7282] mt-[8px] max-w-[232px] text-[13px] w-full">
              Building a strong and sustainable council structure
            </p>
          </div>
          <div className="bg-white flex flex-col items-start justify-center border-none rounded-[12px] p-[24px] w-full h-[220px] sm:w-[calc(50%-8px)] md:w-[20%]">
            <img src="/assets/images/youthSupport.svg" alt="" />
            <h3 className="mt-[16px] text-[20px] font-bold">
              Support to Marginalized Youth
            </h3>
            <p className="text-[#6a7282] mt-[8px] max-w-[232px] text-[13px] w-full">
              Strengthening youth policies and accountability mechanism
            </p>
          </div>
          <div className="bg-white flex flex-col items-start justify-center border-none rounded-[12px] p-[24px] w-full h-[220px] sm:w-[calc(50%-8px)] md:w-[20%]">
            <img src="/assets/images/employment.svg" alt="" />
            <h3 className="mt-[16px] text-[20px] font-bold">Employment</h3>
            <p className="text-[#6a7282] mt-[8px] max-w-[232px] text-[13px] w-full">
              Creating opportunities and skill-building for youth
            </p>
          </div>
          <div className="bg-white flex flex-col items-start justify-center border-none rounded-[12px] p-[24px] h-[220px] w-full sm:w-[calc(50%-8px)] md:w-[20%]">
            <img src="/assets/images/rhr.svg" alt="" />
            <h3 className="mt-[16px] text-[20px] font-bold">RHR</h3>
            <p className="text-[#6a7282] mt-[8px] max-w-[232px] text-[13px] w-full">
              Advocating for youth health awareness
            </p>
          </div>
          <div className="bg-white flex flex-col items-start justify-center border-none rounded-[12px] p-[24px] h-[220px] w-full sm:w-[calc(50%-8px)] md:w-[20%]">
            <img src="/assets/images/youthEngagement.svg" alt="" />
            <h3 className="mt-[16px] text-[20px] font-bold">
              Youth Engagement
            </h3>
            <p className="text-[#6a7282] mt-[8px] max-w-[232px] text-[13px] w-full">
              Encouraging civic participation and leadership
            </p>
          </div>
        </div>
      </section>

      <NYCEvents />
      <FAQs />
      <CTABanner />
    </>
  );
}
