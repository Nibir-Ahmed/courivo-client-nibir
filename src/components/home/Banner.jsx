import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="bg-white dark:bg-dark min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
             Learn Without Limits
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Unlock Your <span className="text-primary">Potential</span> With Expert Courses
          </h1>
          <p className="mt-5 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            Explore thousands of courses taught by industry experts. Learn at your own pace and grow your career.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/courses" className="btn-primary">Browse Courses</Link>
            <Link to="/register" className="btn-outline">Get Started</Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
            alt="Learning"
            className="w-full rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Banner;