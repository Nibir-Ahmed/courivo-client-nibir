import Banner from '../components/home/Banner';
import PopularCourses from '../components/home/PopularCourses';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TopInstructors from '../components/home/TopInstructors';

const Home = () => {
  document.title = 'Courivo | Home';
  return (
    <main>
      <Banner />
      <PopularCourses />
      <WhyChooseUs />
      <TopInstructors />
    </main>
  );
};

export default Home;