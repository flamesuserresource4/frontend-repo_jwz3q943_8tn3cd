function CTA(){
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-purple-600/20 to-cyan-400/10 border border-white/10 p-10">
          <h3 className="text-2xl sm:text-3xl font-bold">Start building assessments with AI</h3>
          <p className="mt-2 text-purple-100/80">Sign up to get early access and try ExamAi on your course materials.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input placeholder="you@university.edu" className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-purple-200/50 w-full sm:w-80" />
            <button className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-lg shadow-purple-600/25 transition-colors">Request access</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CTA