import './App.css'

function App() {

  return (
    <>
      { /* ------------------- BUTTON ------------------- */}
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        Click Me
      </button>      


      { /* ---------------- RESPONSIVE FLEXBOX ---------------- */}
      <div className="flex flex-wrap justify-center">
        <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 m-2 w-64">
          <h2 className="text-xl font-bold mb-2">Card 1</h2>
          <p>This is the content of card 1.</p>
        </div>
        <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 m-2 w-64">
          <h2 className="text-xl font-bold mb-2">Card 2</h2>
          <p>This is the content of card 2.</p>
        </div>
        <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 m-2 w-64">
          <h2 className="text-xl font-bold mb-2">Card 3</h2>
          <p>This is the content of card 3.</p>
        </div>
        <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 m-2 w-64">
          <h2 className="text-xl font-bold mb-2">Card 4</h2>
          <p>This is the content of card 4.</p>
        </div>
      </div>

    { /* --------------  Responsive header with breakpoints -------------*/}

    { /* 
        The navigation links are wrapped in a nav element with hidden md:flex space-x-4 classes, making them hidden on small screens and displayed as a flex container with spacing between the links on medium screens and up.

        The hamburger menu button (md:hidden) is displayed only on small screens, using an SVG icon for the menu.
      */}

    <header className="bg-gray-800 text-white">
    <div className="container mx-auto flex items-center justify-between p-4">
      <div className="text-lg font-bold">
        <a href="#" className="hover:text-gray-400">MyLogo</a>
      </div>
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">About</a>
        <a href="#" className="hover:text-gray-400">Services</a>
        <a href="#" className="hover:text-gray-400">Contact</a>
      </nav>
      <div className="md:hidden">
        <button className="text-gray-400 hover:text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>

    </>
  )
}

export default App

/*
sm: 640px and up (small screens)
md: 768px and up (medium screens)
lg: 1024px and up (large screens)
xl: 1280px and up (extra large screens)
2xl: 1536px and up (2x extra large screens)
*/

