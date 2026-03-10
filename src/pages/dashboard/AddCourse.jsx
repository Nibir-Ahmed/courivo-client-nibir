import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import axiosPublic from '../../api/axiosPublic';
import toast from 'react-hot-toast';

const categories = ['Development', 'Design', 'Data Science', 'Marketing', 'Security'];

const AddCourse = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const course = {
      title: form.title.value,
      imageUrl: form.imageUrl.value,
      price: parseFloat(form.price.value),
      duration: form.duration.value,
      category: form.category.value,
      description: form.description.value,
      isFeatured: form.isFeatured.checked,
      ownerName: user.displayName,
      ownerEmail: user.email,
      ownerPhoto: user.photoURL,
    };
    try {
      await axiosPublic.post('/courses', course);
      toast.success('Course added successfully!');
      form.reset();
    } catch {
      toast.error('Failed to add course.');
    } finally {
      setLoading(false);
    }
  };
  document.title = 'Courivo | Add Course';
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6">Add New Course</h2>
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Title</label>
              <input name="title" type="text" required className="input-field" placeholder="Course title" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Image URL</label>
              <input name="imageUrl" type="url" required className="input-field" placeholder="https://..." />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Price ($)</label>
              <input name="price" type="number" required className="input-field" placeholder="49" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Duration</label>
              <input name="duration" type="text" required className="input-field" placeholder="10h 30m" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Category</label>
              <select name="category" required className="input-field">
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <input name="isFeatured" type="checkbox" id="isFeatured" className="w-4 h-4 accent-primary" />
              <label htmlFor="isFeatured" className="text-sm font-medium text-gray-700 dark:text-gray-300">Mark as Featured</label>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Description</label>
            <textarea name="description" required className="input-field h-32 resize-none" placeholder="Course description..." />
          </div>
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? 'Adding...' : 'Add Course'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;