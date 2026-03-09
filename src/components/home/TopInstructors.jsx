import { motion } from 'framer-motion';

const instructors = [
  {
    name: 'Sarah Johnson',
    role: 'Web Development',
    students: '12.4k',
    courses: 18,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'James Carter',
    role: 'UI/UX Design',
    students: '9.8k',
    courses: 12,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Emily Chen',
    role: 'Data Science',
    students: '15.2k',
    courses: 22,
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Michael Ross',
    role: 'Cybersecurity',
    students: '7.1k',
    courses: 9,
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
];

const TopInstructors = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white">
            Top Instructors
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg">
            Learn from the brightest minds in the industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <img
                src={instructor.avatar}
                alt={instructor.name}
                className="w-20 h-20 rounded-full object-cover mx-auto ring-4 ring-primary/20"
              />
              <h3 className="font-heading font-semibold text-gray-900 dark:text-white mt-4">
                {instructor.name}
              </h3>
              <p className="text-primary text-sm font-medium mt-1">
                {instructor.role}
              </p>
              <div className="flex justify-center gap-6 mt-4 text-sm text-gray-500 dark:text-gray-400">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{instructor.students}</p>
                  <p>Students</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{instructor.courses}</p>
                  <p>Courses</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;