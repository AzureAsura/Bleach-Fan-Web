import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Features from "./sections/Features"
import Characters from "./sections/Characters"
import Membership from "./sections/Membership"

function App() {
  return (
    <>
      <main className="overflow-hidden">
        <Header/>
        <Hero/>
        <Features/>
        <Characters/>
        <Membership/>
      </main>
    </>
  )
}

export default App
