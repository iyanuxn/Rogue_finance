import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white font-primary font-body p-4">
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default App