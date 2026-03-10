import { Link } from 'react-router-dom';

const enrolledCourses = [
  { _id: '2', title: 'UI/UX Design Masterclass', category: 'Design', price: 39, duration: '8h 45m', imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500' },
  { _id: '3', title: 'Data Science with Python', category: 'Data Science', price: 59, duration: '15h 20m', imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500' },
];

const MyEnrolledCourses = () => {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6">My Enrolled Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {enrolledCourses.map(course => (
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
              <Link
                to={`/courses/${course._id}`}
                className="btn-primary w-full text-center mt-4 block"
              >
                Continue Learning
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrolledCourses;