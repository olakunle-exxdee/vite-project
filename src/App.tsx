import Awards from './components/Awards';
import Company from './components/Company';
import Navbar from './components/Navbar';
import Section from './components/Section';

const App = () => {
  return (
    <div className='sm:px-2'>
      <Navbar />
      <Company />
      <Section />
      <Awards />
    </div>
  );
};

export default App;
