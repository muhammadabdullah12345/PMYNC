import React from "react";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const EventCard = ({
  image,
  title,
  date,
  location,
  attendees,
  description,
  category,
  isUpcoming,
}) => (
  <div className="bg-[#FAFAFA] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-[300px] object-fill" />
      {isUpcoming && (
        <span className="absolute top-3 right-3 bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
          Upcoming
        </span>
      )}
    </div>

    <div className="p-5">
      <h3 className="font-bold text-lg mb-3 text-gray-900">{title}</h3>

      <div className="space-y-2 mb-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-green-600" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2 text-green-600" />
            <span>{attendees}</span>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600 justify-start">
          <MapPin className="w-4 h-4 mr-2 text-green-600" />
          <span>{location}</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

      <div className="flex items-center justify-between">
        <span className="inline-block bg-green-100 text-[#090] px-3 py-1 rounded-full text-[14px] font-medium">
          {category}
        </span>
        <div>
          <img src="/assets/images/participants.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
);

const NYCEvents = () => {
  const events = [
    {
      image: "/images/image1.png",
      title: "Youth Entrepreneurship Workshop",
      date: "November 15, 2025",
      location: "Punjab, Pakistan",
      attendees: "150+ Attendees",
      description:
        "Annual gathering of young leaders from across Pakistan to discuss policy development, innovation, and youth empowerment strategies.",
      category: "Technology",
      isUpcoming: true,
    },
    {
      image: "/images/image2.png",
      title: "Youth Entrepreneurship Workshop",
      date: "November 15, 2025",
      location: "Punjab, Pakistan",
      attendees: "150+ Attendees",
      description:
        "Annual gathering of young leaders from across Pakistan to discuss policy development, innovation, and youth empowerment strategies.",
      category: "Technology",
      isUpcoming: false,
    },
    {
      image: "/images/image3.png",
      title: "Youth Entrepreneurship Workshop",
      date: "November 15, 2025",
      location: "Punjab, Pakistan",
      attendees: "150+ Attendees",
      description:
        "Annual gathering of young leaders from across Pakistan to discuss policy development, innovation, and youth empowerment strategies.",
      category: "Technology",
      isUpcoming: true,
    },
    {
      image: "/images/image2.png",
      title: "Youth Entrepreneurship Workshop",
      date: "November 15, 2025",
      location: "Punjab, Pakistan",
      attendees: "150+ Attendees",
      description:
        "Annual gathering of young leaders from across Pakistan to discuss policy development, innovation, and youth empowerment strategies.",
      category: "Technology",
      isUpcoming: false,
    },
    {
      image: "/images/image3.png",
      title: "Youth Entrepreneurship Workshop",
      date: "November 15, 2025",
      location: "Punjab, Pakistan",
      attendees: "150+ Attendees",
      description:
        "Annual gathering of young leaders from across Pakistan to discuss policy development, innovation, and youth empowerment strategies.",
      category: "Technology",
      isUpcoming: true,
    },
    {
      image: "/images/image1.png",
      title: "Youth Entrepreneurship Workshop",
      date: "November 15, 2025",
      location: "Punjab, Pakistan",
      attendees: "150+ Attendees",
      description:
        "Annual gathering of young leaders from across Pakistan to discuss policy development, innovation, and youth empowerment strategies.",
      category: "Technology",
      isUpcoming: false,
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[44px] font-extrabold mb-3 text-transparent [-webkit-text-stroke:1px_black] text-white">
            NYC
          </span>{" "}
          <span className="text-black text-[44px] font-extrabold">EVENTS</span>
          <p className="text-gray-600 max-w-[608px] mx-auto">
            Join us at upcoming events and explore past initiatives that brought
            youth voices to the forefront
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-2 border border-green-600 rounded-xl text-green-700 bg-white hover:bg-gray-50 transition-colors duration-300 font-medium">
            Show all events
            <ArrowRight className="ml-2 w-4 h-4 -rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NYCEvents;
