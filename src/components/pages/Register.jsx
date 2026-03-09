import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const { register, updateUserProfile, googleLogin } = useAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password)) return 'Password must have an uppercase letter.';
    if (!/[a-z]/.test(password)) return 'Password must have a lowercase letter.';
    if (password.length < 6) return 'Password must be at least 6 characters.';
    return null;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const validationError = validatePassword(password);
    if (validationError) return setError(validationError);

    try {
      await register(email, password);
      await updateUserProfile(name, photo);
      toast.success('Account created!');
      navigate('/');
    } catch {
      setError('Registration failed. Email may already be in use.');
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success('Welcome!');
      navigate('/');
    } catch {
      toast.error('Google login failed.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-8">
        <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white text-center">
          Create Account
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mt-2 mb-8">
          Join Courivo and start learning today
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Full Name</label>
            <input name="name" type="text" required className="input-field" placeholder="John Doe" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Email</label>
            <input name="email" type="email" required className="input-field" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Photo URL</label>
            <input name="photo" type="url" className="input-field" placeholder="https://..." />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Password</label>
            <input name="password" type="password" required className="input-field" placeholder="••••••••" />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="btn-primary w-full">Register</button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 border border-gray-200 dark:border-gray-700 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition font-medium"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
