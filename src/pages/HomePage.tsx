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
      <section className="hero">
        <img src="/assets/images/indexHero.jpg" alt="" />
        <div className="hero-content">
          <h1>
            <span className="green">Pakistan&apos;s</span>
            <span className="white">Young Leaders</span>
          </h1>
          <p className="catchphrase white outlined-text">
            Empowering Pakistan Future Leaders
          </p>
          <p className="description white">
            The Prime Minister&apos;s National Youth Council serves as the
            official body representing young voices across Pakistan — driving
            inclusion, innovation, and policy development for a brighter
            tomorrow
          </p>
          <div className="cta-buttons">
            <a href="#">Join the movement</a>
            <a href="#">
              <span>Explore Council Members</span>
              <img src="/assets/images/anchorArrow.svg" width={20} alt="" />
            </a>
          </div>
        </div>
        <img src="/assets/images/applynowCircle.svg" alt="" />
      </section>

      <section className="white-section">
        <div className="left">
          <img
            src="/assets/images/white-section_Left.png"
            alt="Speaker speaking"
          />
        </div>
        <div className="right">
          <h2 className="outlined-text-black-offset">
            What is the Youth Council?
          </h2>
          <h1>A Platform for Voices, Growth, Change</h1>
          <p>
            Constituted under the approval of the Prime Minister of Pakistan,
            the National Youth Council represents youth from all provinces and
            overseas. It aims to integrate young people into policymaking,
            development, and leadership at all levels of government.
          </p>
          <a href="#">
            About Us
            <img src="/assets/images/anchorArrow.svg" width={20} alt="" />
          </a>
        </div>
      </section>

      <section className="nycAndVoices">
        <h1>WHY NYC MATTERS</h1>
        <p>
          The NYC exists to connect young people with real opportunities,
          amplify their voices in national decision-making, and create pathways
          to leadership, learning, and impact. It bridges Pakistan&apos;s youth
          with government, experts, and global platforms—ensuring every young
          person has a chance to grow, lead, and contribute
        </p>
        <div className="tilesnycAndVoices">
          <div className="tile">
            <img src="/assets/images/pplfeedback.svg" alt="" />
            <div className="contentNYC">
              <h4>Empowering Youth Voices</h4>
              <p>
                Gives young people a direct platform in policymaking and natural
                dialogue
              </p>
            </div>
          </div>
          <div className="tile">
            <img src="/assets/images/handshakeNYC.svg" alt="" />
            <div className="contentNYC">
              <h4>Connecting Youth to Government</h4>
              <p>
                Bridges young citizens with ministries and development
                initiatives
              </p>
            </div>
          </div>
          <div className="tile">
            <img src="/assets/images/opportunityNYC.svg" alt="" />
            <div className="contentNYC">
              <h4>Creating Real Opportunities</h4>
              <p>
                Scholarships, internships, trainings, and programs for
                skill-building
              </p>
            </div>
          </div>
          <div className="tile">
            <img src="/assets/images/starNYC.svg" alt="" />
            <div className="contentNYC">
              <h4>Building Future Leaders</h4>
              <p>
                Mentorship, leadership exposure, and national representation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="nycAndVoices">
        <h1>Young Voices: Stories of Change</h1>
        <p>
          Real stories from young Pakistanis whose journeys have been shaped by
          learning programs, leadership opportunities, community projects, and
          NYC initiatives. These voices represent the resilience, talent, and
          dreams of our youth—from cities, villages, mountains, and coastlines
          across Pakistan.
        </p>
        <div className="cardTiles">
          <div className="youngVoicesCard">
            <img src="/assets/images/ayeshaAzhar.svg" alt="" />
            <div className="personInformation">
              <div className="personDetails">
                <div className="personName">Ayesha Azhar</div>
                <div className="personArea">Hunza, Gilgit Baltistan</div>
              </div>
              <div className="skills">DIGITAL SKILLS &amp; FREELANCING</div>
              <p>
                &quot;Before joining the NYC Digital Skills track, I didn&apos;t
                know how to turn my passion into a career. Today, I work with
                global clients and teach young girls in my village how to
                freelance confidently.&quot;
              </p>
            </div>
          </div>
          <div className="youngVoicesCard">
            <img src="/assets/images/bilalAbbas.svg" alt="" />
            <div className="personInformation">
              <div className="personDetails">
                <div className="personName">Bilal Abbas</div>
                <div className="personArea">Lyari, Karachi</div>
              </div>
              <div className="skills">DIGITAL SKILLS &amp; FREELANCING</div>
              <p>
                &quot;NYC gave me my first platform to speak about youth sports
                and community development. I used that confidence to start a
                small football program for children in Lyari.&quot;
              </p>
            </div>
          </div>
          <div className="youngVoicesCard">
            <img src="/assets/images/sanaKhan.svg" alt="" />
            <div className="personInformation">
              <div className="personDetails">
                <div className="personName">Sana Khan</div>
                <div className="personArea">Multan, Punjab</div>
              </div>
              <div className="skills">WOMEN ENTREPRENEURSHIP</div>
              <p>
                &quot;Through the NYC Entrepreneurship Workshops, I learned how
                to register my small craft business. Now I employ three young
                women from my neighborhood.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="green-section">
        <div className="green-section-content">
          <h1>
            <span className="outlined-text">Council </span>Highlights
          </h1>
          <p>
            From nationwide initiatives to community programs — here&apos;s a
            glimpse of how our youth are driving change every day.
          </p>
        </div>
        <div className="flex">
          <div className="highlight">
            <img src="/assets/images/ppl.svg" alt="People SVG" />
            <h1>100+</h1>
            <div className="green">Youth Empowered</div>
            <p>
              Through leadership, innovation, and civic programs across Pakistan
            </p>
          </div>
          <div className="highlight">
            <img src="/assets/images/handshake.svg" alt="handshake svg" />
            <h1>100+</h1>
            <div className="green">Collaborations</div>
            <p>
              With public, private, and academic institutions promoting youth
              inclusion
            </p>
          </div>
          <div className="highlight">
            <img src="/assets/images/rocket.svg" alt="Rocket svg" />
            <h1>300+</h1>
            <div className="green">Youth-led Projects</div>
            <p>
              Driving positive impact in education, technology, and
              sustainability
            </p>
          </div>
          <div className="highlight">
            <img src="/assets/images/globe.svg" alt="globe svg" />
            <h1>5</h1>
            <div className="green">Regions Connected</div>
            <p>
              Representation from all provinces ensuring nationwide inclusivity
            </p>
          </div>
        </div>
      </section>

      <section className="white-section-2">
        <div className="white-section-2-content">
          <div className="left">
            <h1>Global Engagement &amp; International Partnerships</h1>
            <p>
              Our impact extends far beyond national borders. Through active
              participation in international conferences, youth assemblies, and
              global innovation programs, the Council connects Pakistan&apos;s
              young visionaries with changemakers around the world — promoting
              collaboration, exchange, and shared progress
            </p>
          </div>
          <div className="right">
            <img src="/assets/images/worldMap1.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="green-section">
        <div className="green-section-content">
          <h1>
            <span className="outlined-text">NYC </span>Projects
          </h1>
          <p>
            Transforming Pakistan through youth-led initiatives across
            leadership, technology, environment, and social development
          </p>
        </div>
        <div className="card-list">
          {[1, 2, 3].map((idx) => (
            <div className="card" key={idx}>
              <img
                src={`/assets/images/NYC${idx}.png`}
                alt="NYC members images"
              />
              <div className="dateAndDay">
                <div className="from">
                  <img src="/assets/images/calendar.svg" alt="" />
                  Nov, 2025
                  <img src="/assets/images/left-arrow.svg" alt="" />
                  Dec, 2025
                </div>
              </div>
              <h1>Project 1</h1>
              <p>
                Comprehensive leadership training workshops empowering young
                leaders across Pakistan with...
              </p>
              <div className="separator" />
              <div className="participants">
                <div className="left">
                  <img src="/assets/images/people.svg" alt="" />
                  <div className="participantName">
                    <div>Participants</div>
                    <div className="green bold">2500+</div>
                  </div>
                </div>
                <div className="right">
                  <img src="/assets/images/participants.svg" alt="" />
                </div>
              </div>
              <a href="">
                Learn More
                <img src="/assets/images/anchorArrow.svg" width={20} alt="" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="nycAndVoices">
        <img src="/assets/images/ourCommitment.svg" alt="" />
        <h1>Inclusive. Diverse. Representing Every Young Pakistani</h1>
        <p>
          The National Youth Council is committed to representing the real
          Pakistan—its girls and boys, students and freelancers, rural
          communities and urban creators, and youth from every province and
          background. Our mission is to ensure that every young voice matters
          and every region is seen, heard, and empowered.
        </p>
        <div className="diversionCards">
          <div className="diversionCard">
            <img src="/assets/images/diversionWomen.svg" alt="" height={40} />
            <div className="diversionFigure">52%</div>
            <div className="diversionMetric">Women Participants</div>
          </div>
          <div className="diversionCard">
            <img
              src="/assets/images/diversionLocation.svg"
              alt=""
              height={40}
            />
            <div className="diversionFigure">15K+</div>
            <div className="diversionMetric">Youth from Rural Areas</div>
          </div>
          <div className="diversionCard">
            <img src="/assets/images/diversionCheck.svg" alt="" height={40} />
            <div className="diversionFigure">100+</div>
            <div className="diversionMetric">Districts Covered</div>
          </div>
          <div className="diversionCard">
            <img src="/assets/images/diversionStar.svg" alt="" height={40} />
            <div className="diversionFigure">8</div>
            <div className="diversionMetric">Provinces Represented</div>
          </div>
        </div>
        <div className="diversionCards2">
          <div className="diversionCard2">
            <img src="/assets/images/womenEmpowerment.svg" alt="" />
            <h2>Women &amp; Girls in Leadership</h2>
            <p>
              We actively promote women&apos;s leadership, digital skills, and
              economic participation—because empowering women transforms
              communities and accelerates national growth
            </p>
            <div className="diversionChecks">
              <div className="diversionCheck">
                Dedicated mentorship programs for young women
              </div>
              <div className="diversionCheck">
                Tech and digital skills training for female entrepreneurs
              </div>
              <div className="diversionCheck">
                Leadership workshops in underserved communities
              </div>
            </div>
          </div>
          <div className="diversionCard2">
            <img src="/assets/images/diversionMap.svg" alt="" />
            <h2>Regional Representation</h2>
            <p>
              From Gilgit Baltistan to Gwadar and from rural Sindh to the
              valleys of Khyber Pakhtunkhwa, NYC ensures equal access to
              opportunities for youth across all provinces.
            </p>
            <div className="diversionChecks" id="specialDiversionCheck">
              <div className="diversionCheck">Punjab</div>
              <div className="diversionCheck">KPK</div>
              <div className="diversionCheck">GB</div>
              <div className="diversionCheck">ICT</div>
              <div className="diversionCheck">Sindh</div>
              <div className="diversionCheck">Balochistan</div>
              <div className="diversionCheck">AJK</div>
              <div className="diversionCheck">FATA</div>
            </div>
          </div>
          <div className="diversionCard2">
            <img src="/assets/images/diversionFreelance.svg" alt="" />
            <h2>Digital Creators &amp; Freelancers</h2>
            <p>
              NYC recognizes the growing digital workforce of Pakistan,
              empowering young freelancers, creators, and learners with skills
              training and mentorship.
            </p>
            <div className="diversionChecks">
              <div className="diversionCheck">
                Free digital skills bootcamps across Pakistan
              </div>
              <div className="diversionCheck">
                Freelancing and remote work training programs
              </div>
              <div className="diversionCheck">
                Content creation and social media workshops
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gray-section">
        <div>
          <h1>Thematic Areas</h1>
          <p>
            Seven interconnected pillars driving youth empowerment across
            Pakistan
          </p>
        </div>
        <div className="gray-section-card">
          <img src="/assets/images/gray-doc.svg" alt="" />
          <h3>Policy Support</h3>
          <p>Strengthening youth policies and accountability mechanism</p>
        </div>
        <div className="gray-section-card">
          <img src="/assets/images/mediaSupport.svg" alt="" />
          <h3>Media Support</h3>
          <p>Promoting youth narratives through digital platforms</p>
        </div>
        <div className="gray-section-card">
          <img src="/assets/images/institutionalization.svg" alt="" />
          <h3>Institutionalization</h3>
          <p>Building a strong and sustainable council structure</p>
        </div>
        <div className="gray-section-card">
          <img src="/assets/images/youthSupport.svg" alt="" />
          <h3>Support to Marginalized Youth</h3>
          <p>Strengthening youth policies and accountability mechanism</p>
        </div>
        <div className="gray-section-card">
          <img src="/assets/images/employment.svg" alt="" />
          <h3>Employment</h3>
          <p>Creating opportunities and skill-building for youth</p>
        </div>
        <div className="gray-section-card">
          <img src="/assets/images/rhr.svg" alt="" />
          <h3>RHR</h3>
          <p>Advocating for youth health awareness</p>
        </div>
        <div className="gray-section-card">
          <img src="/assets/images/youthEngagement.svg" alt="" />
          <h3>Youth Engagement</h3>
          <p>Encouraging civic participation and leadership</p>
        </div>
      </section>

      <section className="opportunities">
        <h1>EXPLORE OPPORTUNITIES FOR YOUTH</h1>
        <p>
          Discover scholarships, internships, grants, digital learning programs,
          and fellowships designed to help young Pakistanis grow, upskill, and
          contribute—whether you&apos;re from a big city or a remote mountain
          valley.
        </p>
        <div className="opportunityTiles">
          <div className="opportunityTile">
            <img src="/assets/images/scholarshipTile.svg" alt="" />
            <h5>Scholarships &amp; Grants</h5>
          </div>
          <div className="opportunityTile">
            <img src="/assets/images/internshipTile.svg" alt="" />
            <h5>Internships &amp; Fellowships</h5>
          </div>
          <div className="opportunityTile">
            <img src="/assets/images/careerTile.svg" alt="" />
            <h5>Career &amp; Industry Placements</h5>
          </div>
          <div className="opportunityTile">
            <img src="/assets/images/startupTile.svg" alt="" />
            <h5>Startup &amp; Entrepreneurship Support</h5>
          </div>
          <div className="opportunityTile">
            <img src="/assets/images/digitalSkillsTile.svg" alt="" />
            <h5>Digital Skills &amp; Tech programs</h5>
          </div>
          <div className="opportunityTile">
            <img src="/assets/images/leadershipTrainingTile.svg" alt="" />
            <h5>Leadership Trainings &amp; Youth Exchange</h5>
          </div>
        </div>
        <button>
          Browse All Opportunities
          <img src="/assets/images/greenArrow.svg" alt="" />
        </button>
      </section>

      <section className="working">
        <h1 className="">HOW IT WORKS</h1>
        <p>
          Join thousands of young Pakistanis on a clear path to growth,
          leadership, and impact. Here is exactly what to expect when you become
          part of NYC.
        </p>
        <div className="workingTiles">
          <div className="workingTile">
            <span className="tileNo">1</span>
            <img src="/assets/images/registerWorking.svg" alt="" />
            <h3>Register</h3>
            <div className="description">
              Create your free account in under 2 minutes. Tell us about
              yourself, your province, and your aspirations.
            </div>
          </div>
          <img src="/assets/images/threedots.svg" width={20} />
          <div className="workingTile">
            <span className="tileNo">2</span>
            <img src="/assets/images/interestWorking.svg" alt="" />
            <h3>Select Your Interests</h3>
            <div className="description">
              Choose areas you are passionate about—tech, leadership,
              entrepreneurship, arts, or social impact.
            </div>
          </div>
          <img src="/assets/images/threedots.svg" width={20} />
          <div className="workingTile">
            <span className="tileNo">3</span>
            <img src="/assets/images/programWorking.svg" alt="" />
            <h3>Join Programs</h3>
            <div className="description">
              Access workshops, training sessions, bootcamps, and events
              tailored to your interests and goals.
            </div>
          </div>
          <img src="/assets/images/threedots.svg" width={20} />
          <div className="workingTile">
            <span className="tileNo">4</span>
            <img src="/assets/images/mentorshipWorking.svg" alt="" />
            <h3>Get Mentorship</h3>
            <div className="description">
              Connect with experienced mentors, industry professionals, and
              fellow youth leaders who guide your journey.
            </div>
          </div>
          <img src="/assets/images/threedots.svg" width={20} />
          <div className="workingTile">
            <span className="tileNo">5</span>
            <img src="/assets/images/projectWorking.svg" alt="" />
            <h3>Lead Community Projects</h3>
            <div className="description">
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
