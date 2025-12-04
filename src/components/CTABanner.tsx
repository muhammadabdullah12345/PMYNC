import React from "react";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-gray-900 via-green-950 to-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Overlay pattern for texture */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-5xl mx-auto text-center py-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight ">
          Ready to Become Part of the National Youth Council?
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto mb-8 leading-relaxed">
          Join a nationwide network of young leaders shaping Pakistan's future
          through innovation, policy, community development, and global
          representation. Discover the eligibility criteria and see how you can
          make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg">
            Check Eligibility & Criteria
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>

          <button className="inline-flex items-center px-6 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300">
            Start your application
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
