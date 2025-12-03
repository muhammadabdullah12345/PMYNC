import { useEffect } from "react";
import { setupRevealAnimations } from "../smoothAnimations.js";
import NYCEvents from "../components/NYCEvents.js";
import FAQs from "../components/FAQs.js";
import CTABanner from "../components/CTABanner.js";

export function HomePage() {
  useEffect(() => {
    setupRevealAnimations();
  }, []);

  return (
    <>
      <section className="relative h-[80vh]">
        <img
          src="/assets/images/indexHero.jpg"
          alt=""
          className="absolute top-0 -z-50 w-full h-full object-cover brightness-50"
        />
        <div className="w-full md:w-1/2 pt-8 md:pt-[44px] pl-4 md:pl-[48px] px-4 md:px-0">
          <h1 className="text-4xl md:text-[64px] font-[800] leading-tight md:leading-[72px] mb-[12px]">
            <span className="text-[#088e48]">Pakistan&apos;s </span>
            <span className="text-white">Young Leaders</span>
          </h1>
          <p className="text-2xl md:text-[34px] text-transparent [-webkit-text-stroke:1px_white] font-['Open_Sans'] font-[800]">
            Empowering Pakistan Future Leaders
          </p>
          <p className="text-base md:text-[18px] italic font-medium mt-[12px] text-white">
            The Prime Minister&apos;s National Youth Council serves as the
            official body representing young voices across Pakistan — driving
            inclusion, innovation, and policy development for a brighter
            tomorrow
          </p>
          <div className="w-full md:w-1/2 pt-8 md:pt-[44px] pl-4 md:pl-[48px] px-4 md:px-0 mt-[24px] flex gap-[16px] flex-wrap">
            <a
              href="#"
              className="px-[24px] py-[12px] bg-[#088e48] border-none rounded-[12px] text-white"
            >
              Join the movement
            </a>
            <a
              href="#"
              className="px-[24px] py-[12px] border border-white rounded-[12px] flex items-center justify-center text-white"
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
          className="absolute -z-50 w-[100px] md:w-[164px] right-[18px] bottom-[44px] hidden md:block"
        />
      </section>

      <section className="h-auto bg-white flex flex-row flex-wrap px-4 md:px-[60px] py-[45px]">
        <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
          <img
            src="/assets/images/white-section_Left.png"
            alt="Speaker speaking"
            className="w-full md:w-[80%] h-full object-cover mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-transparent [-webkit-text-stroke:1px_black] text-white font-['Open_Sans'] text-[24px] font-[800]">
            What is the Youth Council?
          </h2>
          <h1 className="mt-[12px] w-full md:w-[80%] text-3xl md:text-4xl font-bold">
            A Platform for Voices, Growth, Change
          </h1>
          <p className="text-[18px] text-[#6a7282] w-full md:w-[80%] font-['Roboto'] mt-[18px]">
            Constituted under the approval of the Prime Minister of Pakistan,
            the National Youth Council represents youth from all provinces and
            overseas. It aims to integrate young people into policymaking,
            development, and leadership at all levels of government.
          </p>
          <a
            href="#"
            className="px-[24px] py-[12px] bg-[#088e48] border-none rounded-[12px] w-auto md:w-[20%] mt-[24px] inline-flex items-center justify-center text-white gap-2"
          >
            About Us
            <img src="/assets/images/anchorArrow.svg" width={20} alt="" />
          </a>
        </div>
      </section>

      <section className="text-center text-[18px] text-[#6a7282] px-4 md:px-[87px] py-[45px] flex flex-col items-center gap-[12px]">
        <h1 className="text-3xl md:text-[40px] text-black">WHY NYC MATTERS</h1>
        <p className="w-full md:w-[68%]">
          The NYC exists to connect young people with real opportunities,
          amplify their voices in national decision-making, and create pathways
          to leadership, learning, and impact. It bridges Pakistan&apos;s youth
          with government, experts, and global platforms—ensuring every young
          person has a chance to grow, lead, and contribute
        </p>
        <div className="flex justify-center items-stretch flex-row flex-wrap gap-4 md:gap-[12px] mt-[40px] text-[16px]">
          <div className="flex flex-wrap text-left gap-[12px] items-center bg-[#f6f6f6] px-[16px] py-[24px] border-none rounded-[12px] w-full md:w-[45%]">
            <img src="/assets/images/pplfeedback.svg" alt="" />
            <div>
              <h4>Empowering Youth Voices</h4>
              <p className="text-[#475063]">
                Gives young people a direct platform in policymaking and natural
                dialogue
              </p>
            </div>
          </div>
          <div className="flex flex-wrap text-left gap-[12px] items-center bg-[#f6f6f6] px-[16px] py-[24px] border-none rounded-[12px] w-full md:w-[45%]">
            <img src="/assets/images/handshakeNYC.svg" alt="" />
            <div>
              <h4>Connecting Youth to Government</h4>
              <p className="text-[#475063]">
                Bridges young citizens with ministries and development
                initiatives
              </p>
            </div>
          </div>
          <div className="flex flex-wrap text-left gap-[12px] items-center bg-[#f6f6f6] px-[16px] py-[24px] border-none rounded-[12px] w-full md:w-[45%]">
            <img src="/assets/images/opportunityNYC.svg" alt="" />
            <div>
              <h4>Creating Real Opportunities</h4>
              <p className="text-[#475063]">
                Scholarships, internships, trainings, and programs for
                skill-building
              </p>
            </div>
          </div>
          <div className="flex flex-wrap text-left gap-[12px] items-center bg-[#f6f6f6] px-[16px] py-[24px] border-none rounded-[12px] w-full md:w-[45%]">
            <img src="/assets/images/starNYC.svg" alt="" />
            <div>
              <h4>Building Future Leaders</h4>
              <p className="text-[#475063]">
                Mentorship, leadership exposure, and national representation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center text-[18px] text-[#6a7282] px-4 md:px-[87px] py-[45px] flex flex-col items-center gap-[12px]">
        <h1 className="text-3xl md:text-[40px] text-black">
          Young Voices: Stories of Change
        </h1>
        <p className="w-full md:w-[66%]">
          Real stories from young Pakistanis whose journeys have been shaped by
          learning programs, leadership opportunities, community projects, and
          NYC initiatives. These voices represent the resilience, talent, and
          dreams of our youth—from cities, villages, mountains, and coastlines
          across Pakistan.
        </p>
        <div className="flex flex-col md:flex-row flex-wrap text-left justify-center gap-6 md:gap-[24px] mt-[40px] text-[16px]">
          <div className="w-full md:w-[30%] gap-[24px] border border-[#cccccc] rounded-[12px]">
            <img
              src="/assets/images/ayeshaAzhar.svg"
              alt=""
              className="w-full"
            />
            <div className="p-[20px] flex flex-col gap-[8px]">
              <div>
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
              <p className="text-[#475063] text-[14px] font-bold text-left">
                &quot;Before joining the NYC Digital Skills track, I didn&apos;t
                know how to turn my passion into a career. Today, I work with
                global clients and teach young girls in my village how to
                freelance confidently.&quot;
              </p>
            </div>
          </div>
          <div className="w-full md:w-[30%] gap-[24px] border border-[#cccccc] rounded-[12px]">
            <img
              src="/assets/images/bilalAbbas.svg"
              alt=""
              className="w-full"
            />
            <div className="p-[20px] flex flex-col gap-[8px]">
              <div>
                <div className="text-[16px] text-black font-bold">
                  Bilal Abbas
                </div>
                <div className="text-[14px] text-[#6a7282]">Lyari, Karachi</div>
              </div>
              <div className="text-[#088e48] font-medium text-[14px]">
                DIGITAL SKILLS &amp; FREELANCING
              </div>
              <p className="text-[#475063] text-[14px] font-bold text-left">
                &quot;NYC gave me my first platform to speak about youth sports
                and community development. I used that confidence to start a
                small football program for children in Lyari.&quot;
              </p>
            </div>
          </div>
          <div className="w-full md:w-[30%] gap-[24px] border border-[#cccccc] rounded-[12px]">
            <img src="/assets/images/sanaKhan.svg" alt="" className="w-full" />
            <div className="p-[20px] flex flex-col gap-[8px]">
              <div>
                <div className="text-[16px] text-black font-bold">
                  Sana Khan
                </div>
                <div className="text-[14px] text-[#6a7282]">Multan, Punjab</div>
              </div>
              <div className="text-[#088e48] font-medium text-[14px]">
                WOMEN ENTREPRENEURSHIP
              </div>
              <p className="text-[#475063] text-[14px] font-bold text-left">
                &quot;Through the NYC Entrepreneurship Workshops, I learned how
                to register my small craft business. Now I employ three young
                women from my neighborhood.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center flex flex-col flex-wrap justify-center items-center text-white bg-[url('/assets/images/greenbg1.svg')] py-12 md:py-[100px] px-4 md:px-[24px]">
        <div className="w-full md:w-[45%] text-base md:text-[18px]">
          <h1>
            <span className="text-transparent [-webkit-text-stroke:1px_white] text-white font-['Open_Sans'] text-3xl md:text-[48px] font-[800]">
              Council{" "}
            </span>
            Highlights
          </h1>
          <p>
            From nationwide initiatives to community programs — here&apos;s a
            glimpse of how our youth are driving change every day.
          </p>
        </div>
        <div className="gap-6 md:gap-[30px] px-4 md:px-[60px] py-8 md:py-[80px] flex flex-col md:flex-row justify-center items-center">
          <div className="text-center">
            <img
              src="/assets/images/ppl.svg"
              alt="People SVG"
              className="mx-auto"
            />
            <h1 className="text-4xl md:text-5xl font-bold">100+</h1>
            <div className="text-[#088e48] font-semibold">Youth Empowered</div>
            <p className="text-sm md:text-base">
              Through leadership, innovation, and civic programs across Pakistan
            </p>
          </div>
          <div className="text-center">
            <img
              src="/assets/images/handshake.svg"
              alt="handshake svg"
              className="mx-auto"
            />
            <h1 className="text-4xl md:text-5xl font-bold">100+</h1>
            <div className="text-[#088e48] font-semibold">Collaborations</div>
            <p className="text-sm md:text-base">
              With public, private, and academic institutions promoting youth
              inclusion
            </p>
          </div>
          <div className="text-center">
            <img
              src="/assets/images/rocket.svg"
              alt="Rocket svg"
              className="mx-auto"
            />
            <h1 className="text-4xl md:text-5xl font-bold">300+</h1>
            <div className="text-[#088e48] font-semibold">
              Youth-led Projects
            </div>
            <p className="text-sm md:text-base">
              Driving positive impact in education, technology, and
              sustainability
            </p>
          </div>
          <div className="text-center">
            <img
              src="/assets/images/globe.svg"
              alt="globe svg"
              className="mx-auto"
            />
            <h1 className="text-4xl md:text-5xl font-bold">5</h1>
            <div className="text-[#088e48] font-semibold">
              Regions Connected
            </div>
            <p className="text-sm md:text-base">
              Representation from all provinces ensuring nationwide inclusivity
            </p>
          </div>
        </div>
      </section>

      <section className="py-[40px] px-4 md:pl-[44px] bg-[#F6F6F6]">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col flex-wrap justify-center md:pl-[50px] w-full md:w-[60%] mb-8 md:mb-0">
            <h1 className="text-2xl md:text-4xl font-bold">
              Global Engagement &amp; International Partnerships
            </h1>
            <p className="w-full md:w-[88%] mt-[12px]">
              Our impact extends far beyond national borders. Through active
              participation in international conferences, youth assemblies, and
              global innovation programs, the Council connects Pakistan&apos;s
              young visionaries with changemakers around the world — promoting
              collaboration, exchange, and shared progress
            </p>
          </div>
          <div className="relative w-full md:w-[40%] overflow-hidden">
            <img
              src="/assets/images/worldMap1.svg"
              alt=""
              className="object-contain w-full"
            />
          </div>
        </div>
      </section>

      <section className="text-center flex flex-col flex-wrap justify-center items-center text-white bg-[url('/assets/images/greenbg1.svg')] py-[100px] px-[24px]">
        <div className="w-[45%] text-[18px]">
          <h1>
            <span className="text-transparent [-webkit-text-stroke:1px_white] text-white font-['Open_Sans'] text-[48px] font-[800]">
              NYC{" "}
            </span>
            Projects
          </h1>
          <p>
            Transforming Pakistan through youth-led initiatives across
            leadership, technology, environment, and social development
          </p>
        </div>
        <div className="w-[90%] flex justify-center items-center flex-row flex-wrap mt-[40px] gap-[32px]">
          {[1, 2, 3].map((idx) => (
            <div
              className="w-[400px] h-auto bg-white text-black text-left border-none rounded-[12px]"
              key={idx}
            >
              <img
                src={`/assets/images/NYC${idx}.png`}
                alt="NYC members images"
                className="w-full h-[70%] min-h-[300px] object-cover rounded-[12px]"
              />
              <div className="flex justify-start items-center gap-[24px] px-[20px] mt-[12px]">
                <div className="flex flex-row gap-[4px] justify-center items-center">
                  <img src="/assets/images/calendar.svg" alt="" />
                  Nov, 2025
                  <img src="/assets/images/left-arrow.svg" alt="" />
                  Dec, 2025
                </div>
              </div>
              <h1 className="text-[16px] mt-[24px] px-[20px]">Project 1</h1>
              <p className="text-[14px] text-[#6a7282] mt-[4px] px-[20px]">
                Comprehensive leadership training workshops empowering young
                leaders across Pakistan with...
              </p>
              <div className="separator" />
              <div className="mt-[16px] flex flex-row gap-[4px] justify-between items-center px-[20px]">
                <div className="flex items-center">
                  <img
                    src="/assets/images/people.svg"
                    alt=""
                    className="h-[60%]"
                  />
                  <div className="flex flex-col gap-[0.4px] ml-[8px]">
                    <div>Participants</div>
                    <div className="text-[#088e48] font-medium">2500+</div>
                  </div>
                </div>
                <div>
                  <img src="/assets/images/participants.svg" alt="" />
                </div>
              </div>
              <a
                href=""
                className="px-[24px] py-[12px] bg-[#088e48] border-none rounded-[12px] w-[40%] m-[24px_20px] inline-flex"
              >
                Learn More
                <img src="/assets/images/anchorArrow.svg" width={20} alt="" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center text-[18px] text-[#6a7282] px-4 md:px-[87px] py-[45px] flex flex-col items-center gap-[12px]">
        <img
          src="/assets/images/ourCommitment.svg"
          alt=""
          className="max-w-full"
        />
        <h1 className="text-2xl md:text-[40px] text-black">
          Inclusive. Diverse. Representing Every Young Pakistani
        </h1>
        <p className="w-full md:w-[68%]">
          The National Youth Council is committed to representing the real
          Pakistan—its girls and boys, students and freelancers, rural
          communities and urban creators, and youth from every province and
          background. Our mission is to ensure that every young voice matters
          and every region is seen, heard, and empowered.
        </p>
        <div className="flex justify-center items-stretch flex-row flex-wrap gap-4 md:gap-[24px] mt-[40px] text-center w-full">
          <div className="bg-[#088e48] text-white border border-[#cccccc] rounded-[4px] flex flex-col gap-[10px] px-[20px] py-[30px] w-full sm:w-[calc(50%-8px)] md:w-[calc(25%-18px)]">
            <img
              src="/assets/images/diversionWomen.svg"
              alt=""
              height={40}
              className="mx-auto"
            />
            <div className="font-[800] text-[44px]">52%</div>
            <div className="text-[14px]">Women Participants</div>
          </div>
          <div className="bg-[#088e48] text-white border border-[#cccccc] rounded-[4px] flex flex-col gap-[10px] px-[20px] py-[30px] w-full sm:w-[calc(50%-8px)] md:w-[calc(25%-18px)]">
            <img
              src="/assets/images/diversionLocation.svg"
              alt=""
              height={40}
              className="mx-auto"
            />
            <div className="font-[800] text-[44px]">15K+</div>
            <div className="text-[14px]">Youth from Rural Areas</div>
          </div>
          <div className="bg-[#088e48] text-white border border-[#cccccc] rounded-[4px] flex flex-col gap-[10px] px-[20px] py-[30px] w-full sm:w-[calc(50%-8px)] md:w-[calc(25%-18px)]">
            <img
              src="/assets/images/diversionCheck.svg"
              alt=""
              height={40}
              className="mx-auto"
            />
            <div className="font-[800] text-[44px]">100+</div>
            <div className="text-[14px]">Districts Covered</div>
          </div>
          <div className="bg-[#088e48] text-white border border-[#cccccc] rounded-[4px] flex flex-col gap-[10px] px-[20px] py-[30px] w-full sm:w-[calc(50%-8px)] md:w-[calc(25%-18px)]">
            <img
              src="/assets/images/diversionStar.svg"
              alt=""
              height={40}
              className="mx-auto"
            />
            <div className="font-[800] text-[44px]">8</div>
            <div className="text-[14px]">Provinces Represented</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-[24px] border-none rounded-[12px] text-left mt-[40px] w-full">
          <div className="flex flex-col gap-[16px] px-[20px] py-[30px] w-full md:w-[calc(50%-12px)] text-[14px] text-[#475063]">
            <img
              src="/assets/images/womenEmpowerment.svg"
              alt=""
              className="max-w-full"
            />
            <h2 className="text-[22px] text-black">
              Women &amp; Girls in Leadership
            </h2>
            <p>
              We actively promote women&apos;s leadership, digital skills, and
              economic participation—because empowering women transforms
              communities and accelerates national growth
            </p>
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center before:content-[url('/assets/images/diversionCheckMark.svg')] before:text-[#088e48] before:mr-[8px] before:mt-[4px]">
                Dedicated mentorship programs for young women
              </div>
              <div className="flex items-center before:content-[url('/assets/images/diversionCheckMark.svg')] before:text-[#088e48] before:mr-[8px] before:mt-[4px]">
                Tech and digital skills training for female entrepreneurs
              </div>
              <div className="flex items-center before:content-[url('/assets/images/diversionCheckMark.svg')] before:text-[#088e48] before:mr-[8px] before:mt-[4px]">
                Leadership workshops in underserved communities
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] px-[20px] py-[30px] w-full md:w-[calc(50%-12px)] text-[14px] text-[#475063]">
            <img
              src="/assets/images/diversionMap.svg"
              alt=""
              className="max-w-full"
            />
            <h2 className="text-[22px] text-black">Regional Representation</h2>
            <p>
              From Gilgit Baltistan to Gwadar and from rural Sindh to the
              valleys of Khyber Pakhtunkhwa, NYC ensures equal access to
              opportunities for youth across all provinces.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-[12px]">
              <div className="flex items-center before:content-[url('/assets/images/diversionCheckMark.svg')] before:text-[#088e48] before:mr-[8px] before:mt-[4px]">
                Punjab
              </div>
              <div className="flex items-center before:content-[url('/assets/images/diversionCheckMark.svg')] before:text-[#088e48] before:mr-[8px] before:mt-[4px]">
                KPK
              </div>
              <div className="flex items-center before:content-[url('/assets/images/diversionCheckMark.svg')] before:text-[#088e48] before:mr-[8px] before:mt-[4px]">
                GB
              </div>
              <div className="flex items-center before:content-[url('/assets/images/diversionCheckMark.svg')] before:text-[#088e48] before:mr-[8px] before:mt-[4px]">
                ICT
              </div>
              <div className="flex items-center before:content-[url('/assets/images/diversionCheckMark.svg')] before:text-[#088e48] before:mr-[8px] before:mt-[4px]">
                Sindh
              </div>
              <div className="flex items-center before:content-[url('/assets/images/diversionCheckMark.svg')] before:text-[#088e48] before:mr-[8px] before:mt-[4px]">
                Balochistan
              </div>
              <div className="flex items-center before:content-[url('/assets/images/diversionCheckMark.svg')] before:text-[#088e48] before:mr-[8px] before:mt-[4px]">
                AJK
              </div>
              <div className="flex items-center before:content-[url('/assets/images/diversionCheckMark.svg')] before:text-[#088e48] before:mr-[8px] before:mt-[4px]">
                FATA
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] px-[20px] py-[30px] w-full md:w-[calc(50%-12px)] text-[14px] text-[#475063]">
            <img
              src="/assets/images/diversionFreelance.svg"
              alt=""
              className="max-w-full"
            />
            <h2 className="text-[22px] text-black">
              Digital Creators &amp; Freelancers
            </h2>
            <p>
              NYC recognizes the growing digital workforce of Pakistan,
              empowering young freelancers, creators, and learners with skills
              training and mentorship.
            </p>
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center before:content-[url('/assets/images/diversionCheckMark.svg')] before:text-[#088e48] before:mr-[8px] before:mt-[4px]">
                Free digital skills bootcamps across Pakistan
              </div>
              <div className="flex items-center before:content-[url('/assets/images/diversionCheckMark.svg')] before:text-[#088e48] before:mr-[8px] before:mt-[4px]">
                Freelancing and remote work training programs
              </div>
              <div className="flex items-center before:content-[url('/assets/images/diversionCheckMark.svg')] before:text-[#088e48] before:mr-[8px] before:mt-[4px]">
                Content creation and social media workshops
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f6f6] text-[#041502] font-['Open_Sans'] flex gap-4 md:gap-[24px] justify-between flex-row flex-wrap px-4 md:px-[110px] py-[30px]">
        <div className="w-full md:w-[20%] mb-6 md:mb-0">
          <h1 className="mt-[16px] text-2xl md:text-3xl">Thematic Areas</h1>
          <p className="text-[#6a7282] mt-[8px]">
            Seven interconnected pillars driving youth empowerment across
            Pakistan
          </p>
        </div>
        <div className="bg-white border-none rounded-[12px] p-[24px] w-full sm:w-[calc(50%-8px)] md:w-[20%]">
          <img src="/assets/images/gray-doc.svg" alt="" />
          <h3 className="mt-[16px]">Policy Support</h3>
          <p className="text-[#6a7282] mt-[8px]">
            Strengthening youth policies and accountability mechanism
          </p>
        </div>
        <div className="bg-white border-none rounded-[12px] p-[24px] w-full sm:w-[calc(50%-8px)] md:w-[20%]">
          <img src="/assets/images/mediaSupport.svg" alt="" />
          <h3 className="mt-[16px]">Media Support</h3>
          <p className="text-[#6a7282] mt-[8px]">
            Promoting youth narratives through digital platforms
          </p>
        </div>
        <div className="bg-white border-none rounded-[12px] p-[24px] w-full sm:w-[calc(50%-8px)] md:w-[20%]">
          <img src="/assets/images/institutionalization.svg" alt="" />
          <h3 className="mt-[16px]">Institutionalization</h3>
          <p className="text-[#6a7282] mt-[8px]">
            Building a strong and sustainable council structure
          </p>
        </div>
        <div className="bg-white border-none rounded-[12px] p-[24px] w-full sm:w-[calc(50%-8px)] md:w-[20%]">
          <img src="/assets/images/youthSupport.svg" alt="" />
          <h3 className="mt-[16px]">Support to Marginalized Youth</h3>
          <p className="text-[#6a7282] mt-[8px]">
            Strengthening youth policies and accountability mechanism
          </p>
        </div>
        <div className="bg-white border-none rounded-[12px] p-[24px] w-full sm:w-[calc(50%-8px)] md:w-[20%]">
          <img src="/assets/images/employment.svg" alt="" />
          <h3 className="mt-[16px]">Employment</h3>
          <p className="text-[#6a7282] mt-[8px]">
            Creating opportunities and skill-building for youth
          </p>
        </div>
        <div className="bg-white border-none rounded-[12px] p-[24px] w-full sm:w-[calc(50%-8px)] md:w-[20%]">
          <img src="/assets/images/rhr.svg" alt="" />
          <h3 className="mt-[16px]">RHR</h3>
          <p className="text-[#6a7282] mt-[8px]">
            Advocating for youth health awareness
          </p>
        </div>
        <div className="bg-white border-none rounded-[12px] p-[24px] w-full sm:w-[calc(50%-8px)] md:w-[20%]">
          <img src="/assets/images/youthEngagement.svg" alt="" />
          <h3 className="mt-[16px]">Youth Engagement</h3>
          <p className="text-[#6a7282] mt-[8px]">
            Encouraging civic participation and leadership
          </p>
        </div>
      </section>

      <section className="text-center px-4 md:px-[87px] py-[45px] flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          EXPLORE OPPORTUNITIES FOR YOUTH
        </h1>
        <p className="w-full md:w-[58%] text-[#6A7282] mt-[12px]">
          Discover scholarships, internships, grants, digital learning programs,
          and fellowships designed to help young Pakistanis grow, upskill, and
          contribute—whether you&apos;re from a big city or a remote mountain
          valley.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full md:w-[80%] mt-[44px]">
          <div className="flex items-center text-left gap-[16px] p-[16px] bg-[#E6F0FF] border-none rounded-[12px] text-[#0066FF] text-[16px] font-bold">
            <img
              src="/assets/images/scholarshipTile.svg"
              alt=""
              className="flex-shrink-0"
            />
            <h5>Scholarships &amp; Grants</h5>
          </div>
          <div className="flex items-center text-left gap-[16px] p-[16px] bg-[#E6F0FF] border-none rounded-[12px] text-[#0066FF] text-[16px] font-bold">
            <img
              src="/assets/images/internshipTile.svg"
              alt=""
              className="flex-shrink-0"
            />
            <h5>Internships &amp; Fellowships</h5>
          </div>
          <div className="flex items-center text-left gap-[16px] p-[16px] bg-[#E6F0FF] border-none rounded-[12px] text-[#0066FF] text-[16px] font-bold">
            <img
              src="/assets/images/careerTile.svg"
              alt=""
              className="flex-shrink-0"
            />
            <h5>Career &amp; Industry Placements</h5>
          </div>
          <div className="flex items-center text-left gap-[16px] p-[16px] bg-[#E6F0FF] border-none rounded-[12px] text-[#0066FF] text-[16px] font-bold">
            <img
              src="/assets/images/startupTile.svg"
              alt=""
              className="flex-shrink-0"
            />
            <h5>Startup &amp; Entrepreneurship Support</h5>
          </div>
          <div className="flex items-center text-left gap-[16px] p-[16px] bg-[#E6F0FF] border-none rounded-[12px] text-[#0066FF] text-[16px] font-bold">
            <img
              src="/assets/images/digitalSkillsTile.svg"
              alt=""
              className="flex-shrink-0"
            />
            <h5>Digital Skills &amp; Tech programs</h5>
          </div>
          <div className="flex items-center text-left gap-[16px] p-[16px] bg-[#E6F0FF] border-none rounded-[12px] text-[#0066FF] text-[16px] font-bold">
            <img
              src="/assets/images/leadershipTrainingTile.svg"
              alt=""
              className="flex-shrink-0"
            />
            <h5>Leadership Trainings &amp; Youth Exchange</h5>
          </div>
        </div>
        <button className="mt-[40px] flex justify-center items-center px-[24px] py-[12px] border border-[#006600] rounded-[12px] text-[#006600] bg-white gap-2">
          Browse All Opportunities
          <img src="/assets/images/greenArrow.svg" alt="" />
        </button>
      </section>

      <section className="text-center px-4 md:px-[87px] py-[45px] flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-bold">HOW IT WORKS</h1>
        <p className="w-full md:w-[58%] text-[#6A7282] mt-[12px]">
          Join thousands of young Pakistanis on a clear path to growth,
          leadership, and impact. Here is exactly what to expect when you become
          part of NYC.
        </p>
        <div className="mt-[44px] flex flex-col md:flex-row flex-wrap justify-center items-center md:items-stretch gap-4 md:gap-[16px] w-full">
          <div className="flex flex-col flex-wrap gap-[18px] bg-[#E1FFEF66] w-full sm:w-[calc(50%-8px)] md:w-[16%] p-[8px] border-none rounded-[8px]">
            <span className="tileNo">1</span>
            <img
              src="/assets/images/registerWorking.svg"
              alt=""
              className="mx-auto"
            />
            <h3>Register</h3>
            <div className="text-[14px] text-[#4D4D4D]">
              Create your free account in under 2 minutes. Tell us about
              yourself, your province, and your aspirations.
            </div>
          </div>
          <img
            src="/assets/images/threedots.svg"
            width={20}
            className="hidden md:block self-center"
          />
          <div className="flex flex-col flex-wrap gap-[18px] bg-[#E1FFEF66] w-full sm:w-[calc(50%-8px)] md:w-[16%] p-[8px] border-none rounded-[8px]">
            <span className="tileNo">2</span>
            <img
              src="/assets/images/interestWorking.svg"
              alt=""
              className="mx-auto"
            />
            <h3>Select Your Interests</h3>
            <div className="text-[14px] text-[#4D4D4D]">
              Choose areas you are passionate about—tech, leadership,
              entrepreneurship, arts, or social impact.
            </div>
          </div>
          <img
            src="/assets/images/threedots.svg"
            width={20}
            className="hidden md:block self-center"
          />
          <div className="flex flex-col flex-wrap gap-[18px] bg-[#E1FFEF66] w-full sm:w-[calc(50%-8px)] md:w-[16%] p-[8px] border-none rounded-[8px]">
            <span className="tileNo">3</span>
            <img
              src="/assets/images/programWorking.svg"
              alt=""
              className="mx-auto"
            />
            <h3>Join Programs</h3>
            <div className="text-[14px] text-[#4D4D4D]">
              Access workshops, training sessions, bootcamps, and events
              tailored to your interests and goals.
            </div>
          </div>
          <img
            src="/assets/images/threedots.svg"
            width={20}
            className="hidden md:block self-center"
          />
          <div className="flex flex-col flex-wrap gap-[18px] bg-[#E1FFEF66] w-full sm:w-[calc(50%-8px)] md:w-[16%] p-[8px] border-none rounded-[8px]">
            <span className="tileNo">4</span>
            <img
              src="/assets/images/mentorshipWorking.svg"
              alt=""
              className="mx-auto"
            />
            <h3>Get Mentorship</h3>
            <div className="text-[14px] text-[#4D4D4D]">
              Connect with experienced mentors, industry professionals, and
              fellow youth leaders who guide your journey.
            </div>
          </div>
          <img
            src="/assets/images/threedots.svg"
            width={20}
            className="hidden md:block self-center"
          />
          <div className="flex flex-col flex-wrap gap-[18px] bg-[#E1FFEF66] w-full sm:w-[calc(50%-8px)] md:w-[16%] p-[8px] border-none rounded-[8px]">
            <span className="tileNo">5</span>
            <img
              src="/assets/images/projectWorking.svg"
              alt=""
              className="mx-auto"
            />
            <h3>Lead Community Projects</h3>
            <div className="text-[14px] text-[#4D4D4D]">
              Take the lead on initiatives that create real impact in your
              community and across Pakistan.
            </div>
          </div>
        </div>
      </section>
      <NYCEvents />
      <FAQs />
      <CTABanner />
    </>
  );
}
