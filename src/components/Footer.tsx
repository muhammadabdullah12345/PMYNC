export function Footer() {
  return (
    <footer className="text-[18px] text-white font-normal bg-black">
      <div className=" flex px-[72px] py-[64px] justify-between items-center max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col items-start justify-center max-w-[368px]">
          <img src="/assets/images/pmyncLogo.png" alt="PMYNC LOGO" width={75} />
          <p className="mt-[16px] max-w-[368px]">
            Empowering Pakistan&apos;s youth for a progressive future through
            policy, innovation, and inclusive development.
          </p>
          <ul className="mt-[16px] flex gap-[16px]">
            <a href="#">
              <img
                src="/assets/images/facebook.svg"
                alt="facebook"
                className="w-[24px] h-[24px]"
              />
            </a>
            <a href="#">
              <img
                src="/assets/images/instagram.svg"
                alt="instagram"
                className="w-[24px] h-[24px]"
              />
            </a>
            <a href="#">
              <img
                src="/assets/images/twitter.svg"
                alt="twitter"
                className="w-[24px] h-[24px]"
              />
            </a>
            <a href="#">
              <img
                src="/assets/images/linkedin.svg"
                alt="linkedin"
                className="w-[24px] h-[24px]"
              />
            </a>
          </ul>
        </div>
        <div className=" flex gap-20 items-start justify-start">
          <div className="flex gap-[24px] flex-col justify-start items-start">
            <h3 className="text-[20px] font-semibold">Quick Links</h3>
            <ul className="list-none space-y-4">
              <li>
                <a
                  href="/"
                  className="inline hover:text-[#088E48] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="inline hover:text-[#088E48] transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/members"
                  className="inline hover:text-[#088E48] transition-colors"
                >
                  Members
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="inline hover:text-[#088E48] transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="inline hover:text-[#088E48] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-[24px] flex-col justify-start items-start">
            <h3 className="text-[20px] font-semibold">Resources</h3>
            <ul className="list-none space-y-4">
              <li>Youth Policies</li>
              <li>Programs</li>
              <li>Reports &amp; Publications</li>
              <li>News &amp; Updates</li>
            </ul>
          </div>
          <div className="flex gap-[24px] flex-col justify-start items-start">
            <h3 className="text-[20px] font-semibold">Contact Us</h3>
            <ul className="list-none space-y-4 flex flex-col items-start">
              <li className="flex gap-[8px] items-start">
                <img
                  src="/assets/images/location.svg"
                  width={18}
                  alt=""
                  className="mt-1 flex-shrink-0"
                />
                <a
                  href="https://maps.app.goo.gl/uAaxsCQAbMDd7kZm9"
                  className="inline hover:text-[#088E48] transition-colors"
                >
                  Islamabad, Pakistan
                </a>
              </li>
              <li className="flex gap-[8px] items-start">
                <img
                  src="/assets/images/mail.svg"
                  width={18}
                  alt=""
                  className="mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:info@pmync.gov.pk"
                  target="_blank"
                  className="inline hover:text-[#088E48] transition-colors"
                >
                  info@pmync.gov.pk
                </a>
              </li>
              <li className="flex gap-[8px] items-start">
                <img
                  src="/assets/images/call.svg"
                  width={18}
                  alt=""
                  className="mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+921234567890"
                  className="inline hover:text-[#088E48] transition-colors"
                >
                  +92 1234567890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="bg-[#088e48] text-center px-[20px] py-[10px] min-h-[65px] flex items-center justify-center text-sm md:text-base">
        © 2025 Prime Minister&apos;s National Youth Council. All rights
        reserved.
      </p>
    </footer>
  );
}
