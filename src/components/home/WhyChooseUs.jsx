import { motion } from 'framer-motion';
import { BadgeCheck, Clock, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: BadgeCheck,
    title: 'Expert Instructors',
    desc: 'Learn from industry professionals with years of real-world experience.',
  },
  {
    icon: Clock,
    title: 'Learn At Your Pace',
    desc: 'Lifetime access to all course materials. Study whenever suits you best.',
  },
  {
    icon: Users,
    title: 'Vibrant Community',
    desc: 'Join thousands of learners and grow together through collaboration.',
  },
  {
    icon: Trophy,
    title: 'Recognized Certificates',
    desc: 'Earn certificates that are valued by top companies worldwide.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose Courivo
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg">
            Everything you need to accelerate your learning journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <feature.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 dark:text-white mt-4 text-lg">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;