import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const allCourses = [
  { _id: '1', title: 'Complete Web Development', category: 'Development', price: 49, duration: '12h 30m', description: 'Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive web development bootcamp.', instructor: 'Sarah Johnson', imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800' },
  { _id: '2', title: 'UI/UX Design Masterclass', category: 'Design', price: 39, duration: '8h 45m', description: 'Master the art of UI/UX design with Figma, user research, wireframing and prototyping techniques.', instructor: 'James Carter', imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800' },
  { _id: '3', title: 'Data Science with Python', category: 'Data Science', price: 59, duration: '15h 20m', description: 'Dive deep into data science using Python, Pandas, NumPy, Matplotlib and machine learning libraries.', instructor: 'Emily Chen', imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800' },
  { _id: '4', title: 'React JS from Scratch', category: 'Development', price: 44, duration: '10h 10m', description: 'Build modern web apps with React JS, hooks, context API, React Router and more.', instructor: 'Michael Ross', imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800' },
  { _id: '5', title: 'Digital Marketing Pro', category: 'Marketing', price: 34, duration: '6h 50m', description: 'Learn SEO, social media marketing, email campaigns and paid advertising strategies.', instructor: 'Sarah Johnson', imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800' },
  { _id: '6', title: 'Cybersecurity Essentials', category: 'Security', price: 54, duration: '11h 00m', description: 'Understand network security, ethical hacking, penetration testing and security best practices.', instructor: 'James Carter', imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800' },
  { _id: '7', title: 'Machine Learning A-Z', category: 'Data Science', price: 64, duration: '18h 00m', description: 'Master machine learning algorithms, deep learning, neural networks and AI applications.', instructor: 'Emily Chen', imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800' },
  { _id: '8', title: 'Figma for Beginners', category: 'Design', price: 29, duration: '5h 30m', description: 'Get started with Figma and learn to create stunning UI designs from scratch.', instructor: 'Michael Ross', imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800' },
];

const CourseDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const course = allCourses.find(c => c._id === id);

  if (!course) return <div className="text-center py-20 text-gray-500">Course not found.</div>;

  const handleEnroll = () => {
    toast.success(`Successfully enrolled in "${course.title}"!`);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="card overflow-hidden">
          <img src={course.imageUrl} alt={course.title} className="w-full h-72 object-cover" />
          <div className="p-8">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {course.category}
            </span>
            <h1 className="font-heading text-3xl font-bold text-gray-900 dark:text-white mt-4">
              {course.title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-600 dark:text-gray-400">
              <div><span className="font-semibold">Instructor:</span> {course.instructor}</div>
              <div><span className="font-semibold">Duration:</span> {course.duration}</div>
              <div><span className="font-semibold">Category:</span> {course.category}</div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <span className="text-primary font-bold text-3xl">${course.price}</span>
              <button onClick={handleEnroll} className="btn-primary text-lg px-8">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;