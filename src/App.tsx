import Awards from './components/Awards';
import Blogs from './components/Blogs';
import Company from './components/Company';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Sidebar from './components/SIdebar';
import Testimony from './components/Testimony';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className=' mx-auto sm:px-2'>
      <Navbar />
      <Company />
      <Section />
      <Awards />
      <Sidebar />
      <Testimony />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
