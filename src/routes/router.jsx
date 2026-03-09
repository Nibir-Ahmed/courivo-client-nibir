import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import CourseDetails from '../pages/CourseDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import AddCourse from '../pages/dashboard/AddCourse';
import MyCourses from '../pages/dashboard/MyCourses';
import UpdateCourse from '../pages/dashboard/UpdateCourse';
import MyEnrolledCourses from '../pages/dashboard/MyEnrolledCourses';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'courses', element: <Courses /> },
      {
        path: 'courses/:id',
        element: <PrivateRoute><CourseDetails /></PrivateRoute>,
      },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      { path: 'add-course', element: <AddCourse /> },
      { path: 'my-courses', element: <MyCourses /> },
      { path: 'update-course/:id', element: <UpdateCourse /> },
      { path: 'enrolled', element: <MyEnrolledCourses /> },
    ],
  },
]);

export default router;