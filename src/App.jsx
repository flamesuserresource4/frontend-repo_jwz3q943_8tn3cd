import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { CreateSection, LessonsSection, GradingSection } from './components/Sections'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B12] text-white">
      {/* Global background with animated blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-purple-700/20 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-cyan-400/20 blur-3xl animate-[pulse_9s_ease-in-out_infinite]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <CreateSection />
        <LessonsSection />
        <GradingSection />
        <CTA />
      </main>
      <footer className="py-10 text-center text-xs text-purple-200/70">© {new Date().getFullYear()} ExamAi</footer>
    </div>
  )
}

export default App
