import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        {/* <Sidebar /> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
