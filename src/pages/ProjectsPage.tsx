export function ProjectsPage() {
  return (
    <>
      <section className="hero" />

      <div id="searchSection">
        <span className="searchBar">Search by name or city...</span>
        <span>
          <img src="" alt="" />
          <p></p>
        </span>
        <div className="filters">
          <div className="filter">
            <label htmlFor=""></label>
            <select name="" id="">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor=""></label>
            <select name="" id="">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor=""></label>
            <select name="" id="">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor=""></label>
            <select name="" id="">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>

      <section className="pastEvents">
        <h1>EVENTS AND ACTIVITIES</h1>
        <p>Discover upcoming and past events under this program</p>
        <div className="cards">
          {[1, 2, 3].map((idx) => (
            <div className="card" key={idx}>
              <img src="/assets/images/NYC1.png" alt="NYC members images" />
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
              <div className="separator"></div>
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

      <section className="upcomingEvents">
        <h1>EVENTS AND ACTIVITIES</h1>
        <p>Discover upcoming and past events under this program</p>
        <div className="cards">
          {[1, 2, 3].map((idx) => (
            <div className="card" key={idx}>
              <img src="/assets/images/NYC1.png" alt="NYC members images" />
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
              <div className="separator"></div>
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

      <section className="allEvents">
        <h1>EVENTS AND ACTIVITIES</h1>
        <p>Discover upcoming and past events under this program</p>
        <div className="cards">
          {[1, 2, 3].map((idx) => (
            <div className="card" key={idx}>
              <img src="/assets/images/NYC1.png" alt="NYC members images" />
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
              <div className="separator"></div>
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

      <section className="joinUs">
        <h1>Be part of our next Event</h1>
        <p>
          Join Pakistan&apos;s national youth network — stay informed about
          upcoming opportunities, programs, and workshops
        </p>
        <div className="joinButton">
          <button>Register as a participant</button>
          <button>Subscribe for Updates</button>
        </div>
      </section>
    </>
  );
}
