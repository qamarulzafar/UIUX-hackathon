import React from "react";
import BlogImage3 from '../../Images/BlogImage3.png'
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About Us
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Discover who we are, our mission, and the values that drive us.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative w-full h-80 md:h-[400px]">
          <Image
              src={BlogImage3}
              alt="About us"
              layout="fill"
              objectFit="cover"
              className="rounded-md shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              We are a passionate team dedicated to delivering exceptional
              services and products to our customers. Our mission is to create
              value and make a difference in the lives of people by offering
              innovative solutions that inspire and empower.
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mt-4">
              With years of experience, we have built a reputation for
              excellence and trust. We believe in fostering long-term
              relationships with our customers, partners, and the community.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card */}
            <div className="bg-white p-6  rounded-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Integrity
              </h3>
              <p className="text-gray-600">
                We uphold the highest standards of honesty and transparency in
                everything we do.
              </p>
            </div>

            {/* Value Card */}
            <div className="bg-white p-6  rounded-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We embrace creativity and seek to continuously improve through
                innovative solutions.
              </p>
            </div>

            {/* Value Card */}
            <div className="bg-white p-6  rounded-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive to exceed expectations and deliver outstanding
                results.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-[#FFF9E5] text-black py-12 px-6 md:px-16 rounded-md text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Join Our Journey
          </h2>
          <p className="text-gray-800 mt-4 text-lg">
            Be a part of our mission to make a difference. Let’s grow together
            and create something extraordinary.
          </p>
          <button className="mt-6 px-8 py-3 bg-[#B88E2F] text-white font-semibold rounded hover:bg-[#9a7c29] transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
