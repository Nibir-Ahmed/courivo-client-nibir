import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const allCourses = [
  { _id: '1', title: 'Complete Web Development', category: 'Development', price: 49, duration: '12h 30m', description: 'Learn HTML, CSS, JavaScript, React, Node.js and more.', imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500', isFeatured: true },
  { _id: '4', title: 'React JS from Scratch', category: 'Development', price: 44, duration: '10h 10m', description: 'Build modern web apps with React JS.', imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500', isFeatured: false },
];

const categories = ['Development', 'Design', 'Data Science', 'Marketing', 'Security'];

const UpdateCourse = () => {
  const { id } = useParams();
  const course = allCourses.find(c => c._id === id);

  if (!course) return <div className="text-center py-20 text-gray-500">Course not found.</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Course updated successfully!');
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