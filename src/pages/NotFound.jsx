import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  document.title = 'Courivo | 404';
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <h1 className="font-heading text-9xl font-bold text-primary">404</h1>
        <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn-primary inline-block mt-8">
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;