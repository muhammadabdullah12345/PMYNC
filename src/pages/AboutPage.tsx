export function AboutPage() {
  return (
    <>
      <section className="relative h-[80vh] flex flex-row flex-wrap justify-center items-center">
        <img src="/assets/images/aboutPage/aboutHeroImg.png" alt="" className="absolute top-0 -z-[100] w-full h-full object-cover brightness-50" />
        <div className="w-[60%] pt-[44px] pl-[48px] text-white text-center">
          <h1 className="text-[64px]">
            About the Prime Minister&apos;s <span className="text-[#088e48]">National Youth Council</span>
          </h1>
          <p className="text-[18px] italic">
            A national platform uniting passionate young Pakistanis under one
            vision — empowering youth to lead, innovate, and drive the
            country&apos;s sustainable future
          </p>
        </div>
      </section>

      <section className="flex flex-row flex-wrap justify-between items-center px-[87px] py-[60px]">
        <div className="w-[60%]">
          <h2 className="text-[40px]">
            A Vision Backed by <span className="text-[#088e48]">National Leadership</span>
          </h2>
          <p className="text-[#6a7282] text-[18px]">
            The Prime Minister&apos;s National Youth Council (NYC) was
            established in December 2024 under the Ministry of Planning,
            Development &amp; Special Initiatives as part of the Government of
            Pakistan&apos;s long-term commitment to strengthen youth engagement
            in public policy and nation-building. Rooted in the belief that
            young people are central to Pakistan&apos;s sustainable future, the
            Council serves as an institutional platform that connects youth
            leaders, policymakers, and development partners
          </p>
        </div>
        <div className="w-[35%] text-[20px] items-baseline flex flex-col justify-center">
          <div className="flex flex-row flex-wrap gap-[18px] after:content-[url('/assets/images/aboutPage/orangeSeparator.svg')] after:ml-[28px]">
            <img src="/assets/images/aboutPage/hammer.svg" alt="" />
            <div className="flex flex-col">
              <h3>Council Established</h3>
              <div className="text-[#6a7282] text-[18px]">2024</div>
              <div className="text-[#6a7282] text-[18px]">
                NYC constituted under Prime Minister&apos;s Office
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-[18px] after:content-[url('/assets/images/aboutPage/orangeSeparator.svg')] after:ml-[28px]">
            <img src="/assets/images/aboutPage/clipboard.svg" alt="" />
            <div className="flex flex-col">
              <h3>National Youth Policy Collaboration</h3>
              <div className="text-[#6a7282] text-[18px]">2026</div>
              <div className="text-[#6a7282] text-[18px]">
                Active participation in policy development
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-[18px]">
            <img src="/assets/images/aboutPage/collaboration.svg" alt="" />
            <div className="flex flex-col">
              <h3>Regional Representation Expanded</h3>
              <div className="text-[#6a7282] text-[18px]">2025</div>
              <div className="text-[#6a7282] text-[18px]">
                All provinces and territories represented
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[40px] pl-[44px] bg-[#f6f6f6]">
        <div className="flex">
          <div className="flex flex-col flex-wrap justify-center pl-[50px] w-[60%]">
            <h1>Global Engagement &amp; International Partnerships</h1>
            <p className="w-[88%] mt-[12px]">
              Our impact extends far beyond national borders. Through active
              participation in international conferences, youth assemblies, and
              global innovation programs, the Council connects Pakistan&apos;s
              young visionaries with changemakers around the world — promoting
              collaboration, exchange, and shared progress
            </p>
            <div className="flex justify-center items-stretch flex-row flex-wrap gap-[24px] mt-[40px] text-center">
              <div className="bg-[#088e48] text-white border border-[#cccccc] rounded-[4px] flex flex-col gap-[10px] px-[20px] py-[30px] w-[calc(25%-18px)]">
                <div className="font-[800] text-[44px]">150+</div>
                <div className="text-[14px]">International Delegations</div>
              </div>
              <div className="bg-[#088e48] text-white border border-[#cccccc] rounded-[4px] flex flex-col gap-[10px] px-[20px] py-[30px] w-[calc(25%-18px)]">
                <div className="font-[800] text-[44px]">35+</div>
                <div className="text-[14px]">Countries Engaged</div>
              </div>
              <div className="bg-[#088e48] text-white border border-[#cccccc] rounded-[4px] flex flex-col gap-[10px] px-[20px] py-[30px] w-[calc(25%-18px)]">
                <div className="font-[800] text-[44px]">100+</div>
                <div className="text-[14px]">Global Forums</div>
              </div>
              <div className="bg-[#088e48] text-white border border-[#cccccc] rounded-[4px] flex flex-col gap-[10px] px-[20px] py-[30px] w-[calc(25%-18px)]">
                <div className="font-[800] text-[44px]">500+</div>
                <div className="text-[14px]">Youth Represented</div>
              </div>
            </div>
          </div>
          <div className="relative right-0 w-[40%] overflow-hidden">
            <img src="/assets/images/worldMap1.svg" alt="" className="object-contain" />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-[87px] py-[60px] text-center">
        <h1>WHERE WE REPRESENT PAKISTAN</h1>
        <p className="text-[#6a7282] text-[18px] w-[68%]">
          NYC youth are recognized voices in major international platforms,
          showcasing Pakistan&apos;s talent, innovation, and leadership
          potential globally
        </p>
        <div className="grid grid-cols-2 text-left p-[18px] gap-[20px]">
          <div className="flex flex-col gap-[18px]">
            <h3 className="text-[#088e48] text-[20px]">United Nations Programs</h3>
            <p className="text-[#4d4d4d] text-[14px] w-[80%]">
              NYC youth actively participate in UN Youth Assemblies, ECOSOC
              forums, and SDG advocacy platforms, representing Pakistan&apos;s
              vision on the global stage.
            </p>
            <div className="flex items-center gap-[4px]">
              <img src="/assets/images/aboutPage/checkMark.svg" alt="" />
              <h5 className="flex items-center gap-[4px] text-[#088e48] text-[14px]">Key Achievement</h5>
            </div>
            <ul>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                Youth delegates at UN General Assembly
              </li>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                Participation in ECOSOC Youth Forum
              </li>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                SDG Champions and Advocates
              </li>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                UN Climate Action Summit representatives
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[18px]">
            <h3 className="text-[#088e48] text-[20px]">Commonwealth Youth Networks</h3>
            <p className="text-[#4d4d4d] text-[14px] w-[80%]">
              Engaging with 54 Commonwealth nations through youth councils,
              leadership programs, and collaborative initiatives that amplify
              Pakistani youth voices.
            </p>
            <div className="flex items-center gap-[4px]">
              <img src="/assets/images/aboutPage/checkMark.svg" alt="" />
              <h5 className="flex items-center gap-[4px] text-[#088e48] text-[14px]">Key Achievement</h5>
            </div>
            <ul>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                Commonwealth Youth Parliament delegates
              </li>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                Regional youth leadership forums
              </li>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                Cross-cultural exchange programs
              </li>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                Policy development workshops
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[18px]">
            <h3 className="text-[#088e48] text-[20px]">International Youth Assemblies</h3>
            <p className="text-[#4d4d4d] text-[14px] w-[80%]">
              From Asia-Pacific forums to global youth summits, NYC members
              represent Pakistan in shaping international youth policy and
              innovation.
            </p>
            <div className="flex items-center gap-[4px]">
              <img src="/assets/images/aboutPage/checkMark.svg" alt="" />
              <h5 className="flex items-center gap-[4px] text-[#088e48] text-[14px]">Key Achievement</h5>
            </div>
            <ul>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                World Youth Forum participation
              </li>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                Asia-Pacific Youth Assembly
              </li>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                Global Youth Leadership Summit
              </li>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                Regional collaboration initiatives
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[18px]">
            <h3 className="text-[#088e48] text-[20px]">Global Innovation Forums</h3>
            <p className="text-[#4d4d4d] text-[14px] w-[80%]">
              NYC youth showcase Pakistani innovation at international tech
              conferences, startup summits, and digital transformation forums
              worldwide.
            </p>
            <div className="flex items-center gap-[4px]">
              <img src="/assets/images/aboutPage/checkMark.svg" alt="" />
              <h5 className="flex items-center gap-[4px] text-[#088e48] text-[14px]">Key Achievement</h5>
            </div>
            <ul>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                Tech innovation competitions
              </li>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                Global startup pitch events
              </li>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                Digital skills conferences
              </li>
              <li className="flex flex-row items-center">
                <img src="/assets/images/aboutPage/listArrow.svg" alt="" />
                International hackathons
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center text-[18px] text-[#6a7282] px-[87px] py-[45px] flex flex-col items-center gap-[12px]">
        <h1 className="text-[40px] text-black w-[65%]">GUIDED BY A SHARED VISION FOR PAKISTAN&apos;S YOUTH</h1>
        <p className="w-[67%]">
          At the heart of the Prime Minister&apos;s National Youth Council lies
          a vision to empower young Pakistanis to lead, innovate, and inspire
          change. Our mission is not only to involve youth in decision-making
          but to help them become architects of Pakistan&apos;s progress
        </p>
        <div className="flex flex-row flex-wrap justify-center items-stretch gap-[32px] mt-[40px] text-center">
          <div className="flex flex-col gap-[16px] justify-start items-start border border-[#088e48] w-[30%] text-left px-[16px] py-[24px] text-[#475063] text-[16px] rounded-[12px]">
            <img src="/assets/images/aboutPage/eye.svg" alt="" />
            <h2 className="text-[16px] font-[600] text-[#006600]">Vision</h2>
            <p>
              To inspire and mobilize young Pakistanis as active contributors to
              national growth, innovation, and governance
            </p>
          </div>
          <div className="flex flex-col gap-[16px] justify-start items-start border border-[#088e48] w-[30%] text-left px-[16px] py-[24px] text-[#475063] text-[16px] rounded-[12px]">
            <img src="/assets/images/aboutPage/mission.svg" alt="" />
            <h2 className="text-[16px] font-[600] text-[#006600]">Mission</h2>
            <p>
              To connect, empower, and represent youth through inclusive
              programs, leadership opportunities, and policy advocacy
            </p>
          </div>
          <div className="flex flex-col gap-[16px] justify-start items-start border border-[#088e48] w-[30%] text-left px-[16px] py-[24px] text-[#475063] text-[16px] rounded-[12px]">
            <img src="/assets/images/aboutPage/heart.svg" alt="" />
            <h2 className="text-[16px] font-[600] text-[#006600]">Core Values</h2>
            <p>
              Integrity · Inclusion · Innovation · Collaboration · Service Our
              values define our approach, ensuring every initiative.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-[87px] py-[60px] text-center">
        <h1>WHAT WE DO</h1>
        <p className="text-[#6a7282] text-[18px] w-[68%]">
          Empowering youth through strategic initiatives across policy, media,
          and institutional development
        </p>
        <div className="grid grid-cols-3 text-left p-[18px] gap-[32px] mt-[32px]">
          <div className="flex flex-col gap-[18px] bg-[#fafafa] p-[24px] border-none rounded-[12px_12px_50px_12px]">
            <h3 className="text-[#088e48] text-[20px]">Policy Advisory</h3>
            <p className="text-[#4d4d4d] text-[14px] w-[80%]">Advise government on youth-related reforms and policies</p>
          </div>
          <div className="flex flex-col gap-[18px] bg-[#fafafa] p-[24px] border-none rounded-[12px_12px_50px_12px]">
            <h3 className="text-[#088e48] text-[20px]">Skill Development</h3>
            <p className="text-[#4d4d4d] text-[14px] w-[80%]">Conduct leadership and skill development programs</p>
          </div>
          <div className="flex flex-col gap-[18px] bg-[#fafafa] p-[24px] border-none rounded-[12px_12px_50px_12px]">
            <h3 className="text-[#088e48] text-[20px]">Initiative Monitoring</h3>
            <p className="text-[#4d4d4d] text-[14px] w-[80%]">
              Tracking the impact of national youth schemes and ensuring
              transparent outcomes
            </p>
          </div>
          <div className="flex flex-col gap-[18px] bg-[#fafafa] p-[24px] border-none rounded-[12px_12px_50px_12px]">
            <h3 className="text-[#088e48] text-[20px]">Institutional Collaboration</h3>
            <p className="text-[#4d4d4d] text-[14px] w-[80%]">
              Facilitate collaboration between youth and public institutions
            </p>
          </div>
          <div className="flex flex-col gap-[18px] bg-[#fafafa] p-[24px] border-none rounded-[12px_12px_50px_12px]">
            <h3 className="text-[#088e48] text-[20px]">International Representation</h3>
            <p className="text-[#4d4d4d] text-[14px] w-[80%]">
              Representing Pakistan&apos;s youth in national and global forums
              to amplify their voice
            </p>
          </div>
          <div className="flex flex-col gap-[18px] bg-[#fafafa] p-[24px] border-none rounded-[12px_12px_50px_12px]">
            <h3 className="text-[#088e48] text-[20px]">Partnership Building</h3>
            <p className="text-[#4d4d4d] text-[14px] w-[80%]">
              Collaborating with public, private, and international
              organizations to expand youth participation
            </p>
          </div>
          <div className="flex flex-col gap-[18px] bg-[#fafafa] p-[24px] border-none rounded-[12px_12px_50px_12px]">
            <h3 className="text-[#088e48] text-[20px]">Government Support</h3>
            <p className="text-[#4d4d4d] text-[14px] w-[80%]">
              Collaborate with ministries to strengthen and expand youth
              development initiatives
            </p>
          </div>
          <div className="flex flex-col gap-[18px] bg-[#fafafa] p-[24px] border-none rounded-[12px_12px_50px_12px]">
            <h3 className="text-[#088e48] text-[20px]">Impact Monitoring</h3>
            <p className="text-[#4d4d4d] text-[14px] w-[80%]">Evaluate national youth programs to ensure effectiveness</p>
          </div>
          <div className="flex flex-col gap-[18px] bg-[#fafafa] p-[24px] border-none rounded-[12px_12px_50px_12px]">
            <h3 className="text-[#088e48] text-[20px]">Capacity Building</h3>
            <p className="text-[#4d4d4d] text-[14px] w-[80%]">
              Equip youth with leadership skills and mentorship for meaningful
              contribution
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-[14px] px-[87px] py-[45px] w-full">
          <img src="/assets/images/aboutPage/image1.svg" alt="" className="w-[calc(100%/3-9.33px)]" />
          <img src="/assets/images/aboutPage/image2.svg" alt="" className="w-[calc(100%/3-9.33px)]" />
          <img src="/assets/images/aboutPage/image3.svg" alt="" className="w-[calc(100%/3-9.33px)]" />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-[87px] py-[60px] text-center">
        <h1>MEET THE LEADERSHIP</h1>
        <p className="text-[#6a7282] text-[18px] w-[68%]">
          The NYC operates under the supervision of the Prime Minister&apos;s
          Office and the Ministry of Planning, Development &amp; Special
          Initiatives, supported by a dedicated Secretariat team and regional
          coordinator
        </p>
        <div className="flex gap-[32px] mt-[40px] font-[600]">
          <div className="border border-[#088e48] rounded-[12px] pb-[12px] flex flex-col gap-[8px]">
            <img src="/assets/images/placeholders/glassesGuy.svg" alt="" />
            <p>Dr Ahmed Khan</p>
            <p className="text-[#088e48]">Chairperson</p>
          </div>
          <div className="border border-[#088e48] rounded-[12px] pb-[12px] flex flex-col gap-[8px]">
            <img src="/assets/images/placeholders/gingerGirl.svg" alt="" />
            <p>Sarah Malik</p>
            <p className="text-[#088e48]">Coordinator</p>
          </div>
          <div className="border border-[#088e48] rounded-[12px] pb-[12px] flex flex-col gap-[8px]">
            <img src="/assets/images/placeholders/frontShot.svg" alt="" />
            <p>Bilal Hussain</p>
            <p className="text-[#088e48]">Secretariat Head</p>
          </div>
          <div className="border border-[#088e48] rounded-[12px] pb-[12px] flex flex-col gap-[8px]">
            <img src="/assets/images/placeholders/frontShot.svg" alt="" />
            <p>Billa Hussain</p>
            <p className="text-[#088e48]">Secretariat Head</p>
          </div>
        </div>
      </section>
    </>
  );
}
