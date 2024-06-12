import React, { useState } from 'react'
import Featured from './components/featured/Featured'
import Best from './components/best/Best'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  const [isSignin, setIsSignin] = useState(false)

  return (
    <>
      <Navbar isSignin={isSignin} setIsSignin={setIsSignin}/>
      {isSignin ? (
      <>
        <Hero />
        <Best img1="https://i.ytimg.com/vi/UcrPqL-qE7c/maxresdefault.jpg" img2="https://www.indiafilings.com/learn/wp-content/uploads/2015/07/Adventure-Travel-Business-e1437168928152.jpg" img3="https://citizenjournal.net/wp-content/uploads/2017/07/best-adventure-travel-destinations-680x350.jpg" />
  </>
      ) : (
        <h1 style={{textAlign:'center'}}>Loading...</h1>
      )}
      <Footer />
    </>
  );
}

export default App;
