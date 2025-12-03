export function Footer() {
  return (
    <footer className="footer">
      <article>
        <div className="left">
          <img src="/assets/images/pmyncLogo.png" alt="PMYNC LOGO" width={75} />
          <p>
            Empowering Pakistan&apos;s youth for a progressive future through
            policy, innovation, and inclusive development.
          </p>
          <ul>
            <a href="#">
              <img
                src="/assets/images/facebook.svg"
                alt="facebook"
                width={20}
              />
            </a>
            <a href="#">
              <img
                src="/assets/images/instagram.svg"
                alt="instagram"
                width={20}
              />
            </a>
            <a href="#">
              <img src="/assets/images/twitter.svg" alt="twitter" width={20} />
            </a>
            <a href="#">
              <img
                src="/assets/images/linkedin.svg"
                alt="linkedin"
                width={20}
              />
            </a>
          </ul>
        </div>
        <div className="right">
          <div className="columnFooter">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/members">Members</a>
              </li>
              <li>
                <a href="/projects">Events</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="columnFooter">
            <h3>Resources</h3>
            <ul>
              <li>Youth Policies</li>
              <li>Programs</li>
              <li>Reports &amp; Publications</li>
              <li>News &amp; Updates</li>
            </ul>
          </div>
          <div className="columnFooter">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <img src="/assets/images/location.svg" width={18} alt="" />
                <a href="https://maps.app.goo.gl/uAaxsCQAbMDd7kZm9">
                  Islamabad, Pakistan
                </a>
              </li>
              <li>
                <img src="/assets/images/mail.svg" width={18} alt="" />
                <a href="mailto:info@pmync.gov.pk" target="_blank">
                  info@pmync.gov.pk
                </a>
              </li>
              <li>
                <img src="/assets/images/call.svg" width={18} alt="" />
                <a href="tel:+921234567890">+92 1234567890</a>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <p>
        © 2025 Prime Minister&apos;s National Youth Council. All rights
        reserved.
      </p>
    </footer>
  );
}
