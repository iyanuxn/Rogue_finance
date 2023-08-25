import Navbar from "./components/Navbar"
import Body from "./components/Body"

const App = () => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white font-primary font-body p-4">
      <Navbar />
      <Body />
    </div>
  )
}

export default App