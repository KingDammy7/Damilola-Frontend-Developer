import React, { useEffect, useState } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import RocketGrid from "./components/CapsuleGrid";
import LoadingSpinner from './components/LoadingSpinner';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set the time as needed
  }, []); 

  return (
    <div>
       {isLoading ? (
        <LoadingSpinner />
      ) : (
      <main className="h-screen w-screen">
     
        <Header />

        <div className="w-full xl:max-w-[1250px] mx-auto px-6">
          <Hero />
          <RocketGrid />
        </div>
        <div className="m-4 text-center">Made with love by Damilola</div>
      
      </main>
      )}
    </div>
  );
}

export default App;
