export function Footer() {
  return (
    <footer className="text-[18px] text-white font-normal">
      <article className="bg-black flex flex-col md:flex-row flex-wrap px-4 md:px-[72px] py-8 md:py-[64px] gap-8 md:gap-0">
        <div className="w-full md:w-1/2">
          <img src="/assets/images/pmyncLogo.png" alt="PMYNC LOGO" width={75} />
          <p className="mt-[16px] w-full md:w-3/4">
            Empowering Pakistan&apos;s youth for a progressive future through
            policy, innovation, and inclusive development.
          </p>
          <ul className="mt-[16px] flex flex-row flex-wrap gap-[8px]">
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
        <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-8 md:gap-12">
          <div className="flex gap-[24px] flex-col flex-wrap flex-1">
            <h3 className="text-[20px] font-semibold">Quick Links</h3>
            <ul className="list-none space-y-2">
              <li>
                <a href="/" className="inline hover:text-[#088E48] transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="inline hover:text-[#088E48] transition-colors">About us</a>
              </li>
              <li>
                <a href="/members" className="inline hover:text-[#088E48] transition-colors">Members</a>
              </li>
              <li>
                <a href="/projects" className="inline hover:text-[#088E48] transition-colors">Events</a>
              </li>
              <li>
                <a href="/contact" className="inline hover:text-[#088E48] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-[24px] flex-col flex-wrap flex-1">
            <h3 className="text-[20px] font-semibold">Resources</h3>
            <ul className="list-none space-y-2">
              <li>Youth Policies</li>
              <li>Programs</li>
              <li>Reports &amp; Publications</li>
              <li>News &amp; Updates</li>
            </ul>
          </div>
          <div className="flex gap-[24px] flex-col flex-wrap flex-1">
            <h3 className="text-[20px] font-semibold">Contact Us</h3>
            <ul className="list-none space-y-2">
              <li className="flex gap-[8px] items-start">
                <img src="/assets/images/location.svg" width={18} alt="" className="mt-1 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/uAaxsCQAbMDd7kZm9" className="inline hover:text-[#088E48] transition-colors">
                  Islamabad, Pakistan
                </a>
              </li>
              <li className="flex gap-[8px] items-start">
                <img src="/assets/images/mail.svg" width={18} alt="" className="mt-1 flex-shrink-0" />
                <a href="mailto:info@pmync.gov.pk" target="_blank" className="inline hover:text-[#088E48] transition-colors">
                  info@pmync.gov.pk
                </a>
              </li>
              <li className="flex gap-[8px] items-start">
                <img src="/assets/images/call.svg" width={18} alt="" className="mt-1 flex-shrink-0" />
                <a href="tel:+921234567890" className="inline hover:text-[#088E48] transition-colors">+92 1234567890</a>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <p className="bg-[#088e48] text-center px-[20px] py-[10px] min-h-[65px] flex items-center justify-center text-sm md:text-base">
        © 2025 Prime Minister&apos;s National Youth Council. All rights reserved.
      </p>
    </footer>
  );
}
