import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background grain and gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(124,58,237,0.25),transparent),radial-gradient(800px_400px_at_90%_110%,rgba(34,211,238,0.18),transparent)]" />
      <div className="absolute inset-0 pointer-events-none mix-blend-soft-light [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Animated blobs */}
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-purple-600/20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[35rem] h-[35rem] rounded-full bg-cyan-400/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />

      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-purple-200/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live AI grading • PDF • PPT • Whiteboard images
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            ExamAi — Create, deliver, and grade assessments with AI
          </h1>
          <p className="mt-4 text-purple-100/80 text-lg leading-relaxed">
            Turn lectures, slides, and handwritten work into auto-graded assessments. Give students rich, actionable feedback — instantly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#create" className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-lg shadow-purple-600/25 transition-colors">
              Get Started
            </a>
            <a href="#learn" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/10 backdrop-blur transition-colors">
              Build a Lesson
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-3xl border border-white/10 bg-black/30 backdrop-blur overflow-hidden">
          <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" />
        </div>
      </div>
    </section>
  )
}

export default Hero
