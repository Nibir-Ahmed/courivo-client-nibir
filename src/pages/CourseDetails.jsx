import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axiosPublic from '../api/axiosPublic';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import { useAuth } from '../context/AuthContext';

const CourseDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const { data: course, isLoading } = useQuery({
    queryKey: ['course', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/courses/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  if (!course) return <div className="text-center py-20 text-gray-500">Course not found.</div>;

  const handleEnroll = async () => {
    const enrollment = {
      courseId: course._id,
      courseTitle: course.title,
      courseImage: course.imageUrl,
      coursePrice: course.price,
      courseDuration: course.duration,
      courseCategory: course.category,
      userEmail: user.email,
      userName: user.displayName,
    };
    try {
      await axiosPublic.post('/enrollments', enrollment);
      toast.success(`Successfully enrolled in "${course.title}"!`);
    } catch {
      toast.error('Enrollment failed. Try again.');
    }
  };
  document.title = `Courivo | ${course?.title || 'Course Details'}`;
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
              <div><span className="font-semibold">Instructor:</span> {course.ownerName}</div>
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