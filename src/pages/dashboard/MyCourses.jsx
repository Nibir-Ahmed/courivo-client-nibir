import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const dummyCourses = [
  { _id: '1', title: 'Complete Web Development', category: 'Development', price: 49, duration: '12h 30m', imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500' },
  { _id: '4', title: 'React JS from Scratch', category: 'Development', price: 44, duration: '10h 10m', imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500' },
];

const MyCourses = () => {
  const { user } = useAuth();

  const handleDelete = (id) => {
    toast.success('Course deleted!');
  };

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6">My Added Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {dummyCourses.map(course => (
          <div key={course._id} className="card p-0 overflow-hidden">
            <img src={course.imageUrl} alt={course.title} className="w-full h-44 object-cover" />
            <div className="p-5">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {course.category}
              </span>
              <h3 className="font-heading font-semibold text-gray-900 dark:text-white mt-3">
                {course.title}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-primary font-bold">${course.price}</span>
                <span className="text-gray-400 text-sm">{course.duration}</span>
              </div>
              <div className="flex gap-3 mt-4">
                <Link to={`/courses/${course._id}`} className="btn-outline text-sm flex-1 text-center">
                  View
                </Link>
                <Link to={`/dashboard/update-course/${course._id}`} className="btn-primary text-sm flex-1 text-center">
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;