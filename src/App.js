import logo from './logo.svg';
import './App.css';
import Card from './Card';


function App() {
  return (
    <div className='app'>
      <div className=' header mt-20 mb-16 flex flex-col lg:items-center'>
        < div className= ' header-text w-96 '>
          <h2 className='title1 text-grayishBlue text-3xl text-center font-semibold'>Reliable, Efficient, Delivery</h2>
          <h2 className='title2 text-veryDarkBlue  text-center  font-bold text-3xl '>Powered By Technology</h2>
          <p className='title-text text-grayishBlue text-center mt-5 text-wrap'>Our Artificial Intelligence powered tools use
           millions of project data points to ensure that your project is succesfull.</p>
    </div>
      </div>

      <div className="container mb-14 flex flex-col lg:flex-row">
      <div className="flex mb-4 flex-col lg:justify-center lg:mr-5">
        <Card 
          title="Supervisor" 
          text="Monitor activity to identify project roadblocks." 
          image="icon-supervisor.svg"
          borderColor="border-Cyan" 
          borderRadius="rounded-md"

        />
      </div>
      <div className="flex flex-col gap-4 justify-between">
        <Card 
          title="Team Builder" 
          text="Scans out talent network to create the optimal team for your project" 
          image="icon-team-builder.svg" 
          borderColor="border-Red" 
          borderRadius="rounded-md"
        />
        <Card 
          title="Karma" 
          text="Regularly evaluates our taalent to ensure quality" 
          image="icon-karma.svg"
          borderColor="border-Orange" 
          borderRadius="rounded-md"

        />
      </div>
      <div className="flex flex-col mt-4 lg:justify-center lg:ml-4">
        <Card 
          title="Calculator" 
          text="Uses data form past projects to provide better project estimates." 
          image="icon-calculator.svg" 
          borderColor="border-Blue" 
          borderRadius="rounded-md"

        />
      </div>
    </div>
    </div>

  );
}

export default App;
