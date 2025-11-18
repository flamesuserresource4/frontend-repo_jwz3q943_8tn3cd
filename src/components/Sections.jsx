import { motion } from 'framer-motion'
import { Upload, FileText, ImageIcon, Bot, Edit3, CheckCheck, BookOpen, PenTool } from 'lucide-react'

export function CreateSection() {
  return (
    <section id="create" className="relative py-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-purple-200/90 backdrop-blur">
            <Upload className="w-3.5 h-3.5" /> Upload sources
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Create assessments from slides, books, or whiteboards</h2>
          <p className="text-purple-100/80 leading-relaxed">
            Upload a PDF or PPT, or snap a photo of your whiteboard. Our AI extracts key concepts and auto-generates questions across multiple formats.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 text-purple-100/90">
            <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-purple-300" /> PDFs</li>
            <li className="flex items-center gap-2"><Edit3 className="w-4 h-4 text-purple-300" /> PPT</li>
            <li className="flex items-center gap-2"><ImageIcon className="w-4 h-4 text-purple-300" /> Images</li>
            <li className="flex items-center gap-2"><Bot className="w-4 h-4 text-purple-300" /> AI Question Gen</li>
          </ul>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium">Upload</button>
            <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium border border-white/10">Try with sample</button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/60 to-slate-900/60 p-6 shadow-2xl shadow-purple-900/40"
        >
          <div className="grid grid-cols-3 gap-4">
            {["Multiple Choice", "Short Answer", "Essay", "True/False", "Fill-in", "Matching"].map((t) => (
              <div key={t} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center text-sm text-purple-100/90">
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function LessonsSection() {
  return (
    <section id="lessons" className="relative py-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-purple-200/90 backdrop-blur">
            <BookOpen className="w-3.5 h-3.5" /> Interactive lessons
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let students learn at their own pace</h2>
          <p className="text-purple-100/80 leading-relaxed">
            Build rich, interactive lessons with text, media, and checks for understanding. Students progress with instant feedback and adaptive practice.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 text-purple-100/90">
            <li className="flex items-center gap-2"><PenTool className="w-4 h-4 text-purple-300" /> Rich content blocks</li>
            <li className="flex items-center gap-2"><CheckCheck className="w-4 h-4 text-purple-300" /> Built-in quizzes</li>
            <li className="flex items-center gap-2"><Bot className="w-4 h-4 text-purple-300" /> Adaptive practice</li>
            <li className="flex items-center gap-2"><ImageIcon className="w-4 h-4 text-purple-300" /> Media embeds</li>
          </ul>
          <div className="flex gap-3">
            <a href="#" className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium">Create lesson</a>
            <a href="#" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium border border-white/10">View examples</a>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/60 to-slate-900/60 p-6 shadow-2xl shadow-purple-900/40">
            <div className="space-y-4">
              <div className="h-12 rounded-lg bg-white/5 border border-white/10" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 rounded-lg bg-white/5 border border-white/10" />
                <div className="h-24 rounded-lg bg-white/5 border border-white/10" />
              </div>
              <div className="h-12 rounded-lg bg-white/5 border border-white/10" />
              <div className="h-40 rounded-lg bg-white/5 border border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function GradingSection() {
  return (
    <section id="grade" className="relative py-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-purple-200/90 backdrop-blur">
            <CheckCheck className="w-3.5 h-3.5" /> AI grading with feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Grade any submission — even handwriting</h2>
          <p className="text-purple-100/80 leading-relaxed">
            Upload scans of paper homework or exams. The AI recognizes handwriting, evaluates each question, and returns clear feedback with points awarded.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 text-purple-100/90">
            <li className="flex items-center gap-2"><ImageIcon className="w-4 h-4 text-purple-300" /> Handwriting OCR</li>
            <li className="flex items-center gap-2"><Bot className="w-4 h-4 text-purple-300" /> Per-question feedback</li>
            <li className="flex items-center gap-2"><Edit3 className="w-4 h-4 text-purple-300" /> Rubric support</li>
            <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-purple-300" /> Exports & reports</li>
          </ul>
        </div>
        <div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/60 to-slate-900/60 p-6 shadow-2xl shadow-purple-900/40">
            <div className="space-y-4">
              <div className="h-6 w-1/2 rounded-lg bg-white/5 border border-white/10" />
              <div className="h-6 w-2/3 rounded-lg bg-white/5 border border-white/10" />
              <div className="h-24 rounded-lg bg-white/5 border border-white/10" />
              <div className="grid grid-cols-3 gap-4">
                <div className="h-16 rounded-lg bg-white/5 border border-white/10" />
                <div className="h-16 rounded-lg bg-white/5 border border-white/10" />
                <div className="h-16 rounded-lg bg-white/5 border border-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
