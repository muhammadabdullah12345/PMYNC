export function ContactPage() {
  return (
    <>
      <section className="hero">
        <h1>Get in Touch</h1>
        <p>
          Have a question or want to get involved? We&apos;d love to hear from
          you. Fill out the form below or reach out through our contact
          information
        </p>
      </section>

      <section className="howWeHelp">
        <h1>HOW CAN WE HELP YOU TODAY?</h1>
        <p>
          Choose the category that best matches your inquiry and we will connect
          you to the right support team.
        </p>
        <div className="selections">
          <div className="selection">
            <img src="" alt="" />
            <h2>General Inquiries</h2>
            <p>Ask Us anything!</p>
          </div>
          <div className="selection">
            <img src="" alt="" />
            <h2>Joining our programs</h2>
            <p>Learn How to get involved</p>
          </div>
          <div className="selection">
            <img src="" alt="" />
            <h2>Technical Support</h2>
            <p>Report a site issue</p>
          </div>
          <div className="selection">
            <img src="" alt="" />
            <h2>Partnership inquiries</h2>
            <p>Let&apos;s Work together</p>
          </div>
          <div className="selection">
            <img src="" alt="" />
            <h2>Feedback</h2>
            <p>Help us improve</p>
          </div>
        </div>
      </section>

      <section className="sendMsg">
        <div className="left">
          <h2>Contact Information</h2>
          <div className="address">
            <div className="placeName">Office Address</div>
            <div className="placeAddress">
              Prime Minister&apos;s Office Constitution Avenue, Islamabad,
              Pakistan
            </div>
          </div>
          <div className="email">
            <h2>Email</h2>
            <div className="emailList">
              <a href="mailto:support@pmnycpk.gov.pk">support@pmnycpk.gov.pk</a>
              <a href="mailto:info@pmnycpk.gov.pk">info@pmnycpk.gov.pk</a>
            </div>
            <div className="phone">
              <h2>Phone</h2>
              <div className="phoneList">
                <p>+92 123456789</p>
                <p>+92 123456789</p>
              </div>
            </div>
            <div className="officeTime">
              <h2>Office Hours</h2>
              <div className="hours">
                <p>Monday - Friday</p>
                <p>9:00 AM - 5:00 PM (PKT)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
              <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div className="formbold-form-title">
                  <h2>Send us a Message</h2>
                  <p>
                    Fill out the form below and our team will get back to you
                    within 2-3 business days.
                  </p>
                </div>

                <div className="formbold-input-flex">
                  <div>
                    <label htmlFor="firstname" className="formbold-form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="formbold-form-input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="formbold-form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="formbold-form-input"
                      required
                    />
                  </div>
                </div>

                <div className="formbold-input-flex">
                  <div>
                    <label htmlFor="email" className="formbold-form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="formbold-form-input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="formbold-form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="formbold-form-input"
                      required
                    />
                  </div>
                </div>

                <div className="formbold-input-flex">
                  <div>
                    <label htmlFor="province" className="formbold-form-label">
                      Province
                    </label>
                    <input
                      type="text"
                      name="province"
                      id="province"
                      className="formbold-form-input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="formbold-form-label">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="formbold-form-input"
                      required
                    />
                  </div>
                </div>

                <div className="formbold-mb-3">
                  <label htmlFor="inquiry" className="formbold-form-label">
                    Type of Inquiry
                  </label>
                  <select
                    name="inquiry"
                    id="inquiry"
                    className="formbold-form-input"
                    required
                  >
                    <option value="">Select inquiry type</option>
                    <option value="General">General</option>
                    <option value="Support">Support</option>
                    <option value="Sales">Sales</option>
                  </select>
                </div>

                <div className="formbold-mb-3">
                  <label htmlFor="subject" className="formbold-form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="formbold-form-input"
                    required
                  />
                </div>

                <div className="formbold-mb-3">
                  <label htmlFor="message" className="formbold-form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="formbold-form-input"
                    rows={6}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="formbold-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="focusPoints">
        <h1>REGIONAL FOCUAL POINTS</h1>
        <p>
          Our regional representatives ensure youth from every province and
          territory can access guidance and support locally.
        </p>
        <div className="focalPoints">
          <div className="focalPoint">
            <div className="focalLocation">Punjab</div>
            <div className="focalName">Ali Hassan</div>
            <div className="focalContact">
              <div className="focalEmail">123@pmnycpk.gov.pk</div>
              <div className="focalPhone">+92 1234567890</div>
              <div className="focalSupport">Local Support Available</div>
            </div>
          </div>
          <div className="focalPoint">
            <div className="focalLocation">Sindh</div>
            <div className="focalName">Fatima Ahmed</div>
            <div className="focalContact">
              <div className="focalEmail">123@pmnycpk.gov.pk</div>
              <div className="focalPhone">+92 1234567890</div>
              <div className="focalSupport">Local Support Available</div>
            </div>
          </div>
          <div className="focalPoint">
            <div className="focalLocation">KPK</div>
            <div className="focalName">Bilal Shah</div>
            <div className="focalContact">
              <div className="focalEmail">123@pmnycpk.gov.pk</div>
              <div className="focalPhone">+92 1234567890</div>
              <div className="focalSupport">Local Support Available</div>
            </div>
          </div>
          <div className="focalPoint">
            <div className="focalLocation">Balochistan</div>
            <div className="focalName">Ayesha Khan</div>
            <div className="focalContact">
              <div className="focalEmail">123@pmnycpk.gov.pk</div>
              <div className="focalPhone">+92 1234567890</div>
              <div className="focalSupport">Local Support Available</div>
            </div>
          </div>
          <div className="focalPoint">
            <div className="focalLocation">Gilgit Baltistan</div>
            <div className="focalName">Zainab Hassan</div>
            <div className="focalContact">
              <div className="focalEmail">123@pmnycpk.gov.pk</div>
              <div className="focalPhone">+92 1234567890</div>
              <div className="focalSupport">Local Support Available</div>
            </div>
          </div>
          <div className="focalPoint">
            <div className="focalLocation">Islamabad/RWP</div>
            <div className="focalName">Hassan Raza</div>
            <div className="focalContact">
              <div className="focalEmail">123@pmnycpk.gov.pk</div>
              <div className="focalPhone">+92 1234567890</div>
              <div className="focalSupport">Local Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <h1>Visit Our Office</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.249580909787!2d73.0963438!3d33.7283618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc087a9c924ff%3A0x58cdd597422db5c0!2sConstitution%20Ave%2C%20Islamabad!5e0!3m2!1sen!2s!4v1764418536842!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
