import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import axiosPublic from '../../api/axiosPublic';
import LoadingSpinner from '../shared/LoadingSpinner';

const CourseCard = ({ course, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    viewport={{ once: true }}
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
);

const PopularCourses = () => {
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ['featuredCourses'],
    queryFn: async () => {
      const res = await axiosPublic.get('/courses/featured');
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white">Popular Courses</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg">Handpicked courses loved by thousands of learners</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length === 0
            ? <p className="text-center col-span-3 text-gray-400">No featured courses yet.</p>
            : courses.map((course, index) => <CourseCard key={course._id} course={course} index={index} />)
          }
        </div>
        <div className="text-center mt-10">
          <Link to="/courses" className="btn-outline">See All Courses</Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;