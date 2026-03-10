import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axiosPublic from '../../api/axiosPublic';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import toast from 'react-hot-toast';

const categories = ['Development', 'Design', 'Data Science', 'Marketing', 'Security'];

const UpdateCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: course, isLoading } = useQuery({
    queryKey: ['course', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/courses/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  if (!course) return <div className="text-center py-20 text-gray-500">Course not found.</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updated = {
      title: form.title.value,
      imageUrl: form.imageUrl.value,
      price: parseFloat(form.price.value),
      duration: form.duration.value,
      category: form.category.value,
      description: form.description.value,
      isFeatured: form.isFeatured.checked,
    };
    try {
      await axiosPublic.put(`/courses/${id}`, updated);
      toast.success('Course updated successfully!');
      navigate('/dashboard/my-courses');
    } catch {
      toast.error('Failed to update course.');
    }
  };

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6">Update Course</h2>
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Title</label>
              <input name="title" type="text" required defaultValue={course.title} className="input-field" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Image URL</label>
              <input name="imageUrl" type="url" required defaultValue={course.imageUrl} className="input-field" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Price ($)</label>
              <input name="price" type="number" required defaultValue={course.price} className="input-field" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Duration</label>
              <input name="duration" type="text" required defaultValue={course.duration} className="input-field" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Category</label>
              <select name="category" required defaultValue={course.category} className="input-field">
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <input name="isFeatured" type="checkbox" id="isFeatured" defaultChecked={course.isFeatured} className="w-4 h-4 accent-primary" />
              <label htmlFor="isFeatured" className="text-sm font-medium text-gray-700 dark:text-gray-300">Mark as Featured</label>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Description</label>
            <textarea name="description" required defaultValue={course.description} className="input-field h-32 resize-none" />
          </div>
          <button type="submit" className="btn-primary">Update Course</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;