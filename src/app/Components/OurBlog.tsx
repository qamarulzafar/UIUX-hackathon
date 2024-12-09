import { FC } from 'react';
import Image from 'next/image';
import { FaRegClock } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import { StaticImageData } from 'next/image';

import BlogImage1 from '../../Images/BlogImage (1).png';
import BlogImage2 from '../../Images/BlogImage (2).png';
import BlogImage3 from '../../Images/BlogImage (3).png';

interface Blog {
  id: number;
  title: string;
  image: StaticImageData; // Use Next.js StaticImageData type for imported images
  time: string;
  date: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: 'Going all-in with millennial design',
    image: BlogImage1,
    time: '5 min',
    date: '12th Oct 2022',
  },
  {
    id: 2,
    title: 'Going all-in with millennial design',
    image: BlogImage2,
    time: '5 min',
    date: '12th Oct 2022',
  },
  {
    id: 3,
    title: 'Going all-in with millennial design',
    image: BlogImage3,
    time: '5 min',
    date: '12th Oct 2022',
  },
];

const BlogSection: FC = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Our Blogs</h2>
        <p className="text-gray-600 mb-10">
          Find a bright idea to suit your taste with our great selection
        </p>
        <div className=" flex flex-wrap justify-center gap-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className=" w-80 rounded-lg overflow-hidden"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto"
                placeholder="blur"
              />
              <div className="p-4">
                <h3 className="text-lg mb-2">{blog.title}</h3>
                <button className="text-xl font-semibold font-sans mb-2">
                  Read More
                </button>
                <div className='w-20 m-auto h-[2px] bg-black mb-5'></div>
                <div className="flex justify-center gap-6 items-center text-gray-500 text-sm">
                  <span className="flex items-center gap-1">
                    <FaRegClock /> {blog.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <AiOutlineCalendar /> {blog.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-12 text-lg">View All Post</button>
        <div className="w-16 h-[1px] bg-black mt-2 m-auto "></div>
      </div>
    </section>
  );
};

export default BlogSection;
