import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Features from "./sections/Features"
import Characters from "./sections/Characters"

function App() {
  return (
    <>
      <main className="overflow-hidden">
        <Header/>
        <Hero/>
        <Features/>
        <Characters/>
      </main>
    </>
  )
}

export default App
