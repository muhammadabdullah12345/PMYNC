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
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-fill" />
      {isUpcoming && (
        <span className="absolute top-3 right-3 bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
          Upcoming
        </span>
      )}
    </div>

    <div className="p-5">
      <h3 className="font-bold text-lg mb-3 text-gray-900">{title}</h3>

      <div className="space-y-2 mb-3">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2 text-green-600" />
          <span>{date}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-green-600" />
          <span>{location}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Users className="w-4 h-4 mr-2 text-green-600" />
          <span>{attendees}</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

      <div className="flex items-center justify-between">
        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </span>

        <div className="flex items-center space-x-1">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white flex items-center justify-center text-xs text-white">
              +2
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const NYCEvents = () => {
  const events = [
    {
      image: "/images/image1.png",
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
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">
            NYC <span className="font-black">EVENTS</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us at upcoming events and explore past initiatives that brought
            youth voices to the forefront
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300 font-medium">
            Show all events
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NYCEvents;
