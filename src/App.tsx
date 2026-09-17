import Header from './components/Header'
import Hero from './components/Hero'
import PaperSection from './components/PaperSection'
import FinderSection from './components/FinderSection'
import CodeSection from './components/CodeSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <PaperSection />
        <FinderSection />
        <CodeSection />
      </main>
      <Footer />
    </>
  )
}
