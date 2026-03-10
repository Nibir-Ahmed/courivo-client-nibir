import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../context/AuthContext';
import axiosPublic from '../../api/axiosPublic';
import LoadingSpinner from '../../components/shared/LoadingSpinner';

const MyEnrolledCourses = () => {
  const { user } = useAuth();

  const { data: enrollments = [], isLoading } = useQuery({
    queryKey: ['enrollments', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/enrollments/${user.email}`);
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6">My Enrolled Courses</h2>
      {enrollments.length === 0
        ? <p className="text-gray-400">No enrolled courses yet.</p>
        : <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {enrollments.map(enrollment => (
              <div key={enrollment._id} className="card p-0 overflow-hidden">
                <img src={enrollment.courseImage} alt={enrollment.courseTitle} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {enrollment.courseCategory}
                  </span>
                  <h3 className="font-heading font-semibold text-gray-900 dark:text-white mt-3">
                    {enrollment.courseTitle}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-primary font-bold">${enrollment.coursePrice}</span>
                    <span className="text-gray-400 text-sm">{enrollment.courseDuration}</span>
                  </div>
                  <Link to={`/courses/${enrollment.courseId}`} className="btn-primary w-full text-center mt-4 block">
                    Continue Learning
                  </Link>
                </div>
              </div>
            ))}
          </div>
      }
    </div>
  );
};

export default MyEnrolledCourses;