import { GraduationCap, Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-white">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 shadow-lg shadow-purple-600/25">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight">ExamAi</span>
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#create" className="text-purple-100/80 hover:text-white transition-colors">Create</a>
          <a href="#lessons" className="text-purple-100/80 hover:text-white transition-colors">Lessons</a>
          <a href="#grade" className="text-purple-100/80 hover:text-white transition-colors">Grade</a>
          <a href="/test" className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200"><Sparkles className="w-4 h-4" /> Test</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
