import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import axiosPublic from '../api/axiosPublic';
import LoadingSpinner from '../components/shared/LoadingSpinner';

const categories = ['All', 'Development', 'Design', 'Data Science', 'Marketing', 'Security'];

const Courses = () => {
  const [selected, setSelected] = useState('All');

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ['courses', selected],
    queryFn: async () => {
      const url = selected === 'All' ? '/courses' : `/courses?category=${selected}`;
      const res = await axiosPublic.get(url);
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  document.title = 'Courivo | All Courses';
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl font-bold text-gray-900 dark:text-white">All Courses</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-3">Find the perfect course for your goals</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                selected === cat
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length === 0
            ? <p className="text-center col-span-3 text-gray-400">No courses found.</p>
            : courses.map((course, index) => (
              <motion.div
                key={course._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="card p-0 overflow-hidden"
              >
                <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <h3 className="font-heading font-semibold text-gray-900 dark:text-white mt-3 text-lg leading-snug">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-primary font-bold text-xl">${course.price}</span>
                    <span className="text-gray-400 text-sm">{course.duration}</span>
                  </div>
                  <Link to={`/courses/${course._id}`} className="btn-primary w-full text-center mt-4 block">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Courses;