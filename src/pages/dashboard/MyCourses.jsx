import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../../context/AuthContext';
import axiosPublic from '../../api/axiosPublic';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import toast from 'react-hot-toast';

const MyCourses = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ['myCourses', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/courses/user/${user.email}`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    try {
      await axiosPublic.delete(`/courses/${id}`);
      toast.success('Course deleted!');
      queryClient.invalidateQueries(['myCourses']);
    } catch {
      toast.error('Failed to delete.');
    }
  };

  if (isLoading) return <LoadingSpinner />;
  document.title = 'Courivo | My Courses';
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6">My Added Courses</h2>
      {courses.length === 0
        ? <p className="text-gray-400">No courses added yet.</p>
        : <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map(course => (
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
                    <Link to={`/courses/${course._id}`} className="btn-outline text-sm flex-1 text-center">View</Link>
                    <Link to={`/dashboard/update-course/${course._id}`} className="btn-primary text-sm flex-1 text-center">Update</Link>
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
      }
    </div>
  );
};

export default MyCourses;