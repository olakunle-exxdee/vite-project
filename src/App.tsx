import Awards from './components/Awards';
import Company from './components/Company';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Sidebar from './components/SIdebar';

const App = () => {
  return (
    <div className='sm:px-2'>
      <Navbar />
      <Company />
      <Section />
      <Awards />
      <Sidebar />
    </div>
  );
};

export default App;
