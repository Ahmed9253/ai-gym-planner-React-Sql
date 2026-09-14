import { ArrowRight, Check, Dumbbell } from "lucide-react";

const features = [
  ["01", "A plan that fits", "Tell us your goal, schedule and experience. GYM BROS builds the week around your real life."],
  ["02", "Every machine, explained", "Walk into any gym with clear instructions, target muscles and form cues in your pocket."],
  ["03", "Progress you can feel", "Log each session and see the numbers that matter: strength, volume and consistency."],
];

const workoutRows = [
  ["01", "Barbell squat", "4 x 8", "72.5 kg"],
  ["02", "Romanian deadlift", "3 x 10", "55 kg"],
  ["03", "Leg press", "3 x 12", "120 kg"],
];

export default function Landing() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#08111c] text-[#f3f5f7]">
      <main>
        <section id="home" className="border-b border-[#26364a]">
          <div className="mx-auto grid min-h-[760px] max-w-7xl lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-between px-6 pb-12 pt-28 sm:px-10 lg:px-14 lg:pb-16">
              <div>
                <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-[#5ea7ff]">
                  GYM BROS / Personal training, made clear
                </p>
                <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Train with a
                  <br />
                  <span className="text-[#5ea7ff]">better plan.</span>
                </h1>
                <p className="mt-9 max-w-lg text-lg leading-8 text-[#b2b8a8]">
                  Your{" "}
                  <span className="relative inline-block pb-4 font-black tracking-[0.08em] text-[#5ea7ff]">
                    AI
                    <svg
                      aria-hidden="true"
                      className="absolute bottom-1 left-1/2 h-3 w-16 -translate-x-1/2"
                      viewBox="0 0 64 12"
                      fill="none"
                    >
                      <path
                        d="M2 7.5C17 1 45 1 62 7.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                      />
                    </svg>
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.24em] text-[#8fa1b5]">
                      smart coaching
                    </span>
                  </span>{" "}
                  gym planner turns a goal into a plan you can actually follow.
                  Know what to do, why it matters and how to get better.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a href="/auth/sign-up" className="inline-flex items-center gap-3 rounded-lg bg-[#3d8fe8] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#5ea7ff]">
                    Build my plan <ArrowRight size={18} />
                  </a>
                  <a href="#how-it-works" className="inline-flex items-center rounded-lg border border-[#40536a] px-6 py-4 text-sm font-bold text-[#f3f5f7] transition hover:border-[#5ea7ff] hover:text-[#5ea7ff]">
                    See how it works
                  </a>
                </div>
              </div>
              <div className="mt-16 grid max-w-xl grid-cols-3 border-t border-[#26364a] pt-5">
                <div><p className="text-2xl font-black text-[#5ea7ff]">500+</p><p className="mt-1 text-xs text-[#8fa1b5]">Exercises</p></div>
                <div className="border-l border-[#26364a] pl-4"><p className="text-2xl font-black text-[#5ea7ff]">24/7</p><p className="mt-1 text-xs text-[#8fa1b5]">AI coaching</p></div>
                <div className="border-l border-[#26364a] pl-4"><p className="text-2xl font-black text-[#5ea7ff]">10k+</p><p className="mt-1 text-xs text-[#8fa1b5]">Sessions logged</p></div>
              </div>
            </div>
            <div className="relative min-h-[520px] border-t border-[#26364a] lg:border-l lg:border-t-0">
              <img src="/images/hero.jpg" alt="Athlete training with a barbell" className="h-full min-h-[520px] w-full object-cover grayscale-[15%]" />
              <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-[#5ea7ff] bg-[#08111c]/90 p-5 sm:left-10 sm:right-10">
                <div className="flex items-center justify-between border-b border-[#40536a] pb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5ea7ff]">Today / Lower body</p>
                  <p className="text-xs text-[#8fa1b5]">52 min</p>
                </div>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <div><p className="text-2xl font-black">Strength foundation</p><p className="mt-1 text-sm text-[#b8c4d0]">Built for your current level</p></div>
                  <Dumbbell className="shrink-0 text-[#5ea7ff]" size={28} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-b border-[#26364a] bg-[#10253d] text-[#f3f5f7]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-14">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <h2 className="max-w-sm text-4xl font-black leading-none tracking-[-0.04em] sm:text-5xl">Less guessing.<br />More doing.</h2>
              <div className="grid gap-8 sm:grid-cols-3">
                {features.map(([number, title, text]) => (
                  <article key={number} className="border-t border-[#3d5976] pt-4">
                    <p className="text-sm font-black text-[#5ea7ff]">{number}</p><h3 className="mt-8 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-[#b8c4d0]">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="equipment" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-14">
          <div className="overflow-hidden rounded-lg border border-[#26364a]"><img src="/images/equpments.jpg" alt="Strength training equipment in a gym" className="h-[500px] w-full object-cover" /></div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5ea7ff]">The gym, decoded</p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-[0.98] tracking-[-0.04em] sm:text-5xl">Stop walking past the equipment.</h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-[#b8c4d0]">Search by muscle, movement or machine. GYM BROS gives you the setup, movement and form cues before you touch the weight.</p>
            <ul className="mt-8 grid gap-4 text-sm text-[#e0e6ec] sm:grid-cols-2">
              {["Target muscle guides", "Beginner form cues", "Machine alternatives", "Exercise instructions"].map((item) => <li key={item} className="flex items-center gap-3 border-t border-[#26364a] pt-3"><Check size={16} className="text-[#5ea7ff]" />{item}</li>)}
            </ul>
            <a href="#how-it-works" className="mt-10 inline-flex items-center gap-3 text-sm font-bold text-[#5ea7ff] hover:text-[#83c1ff]">Explore the method <ArrowRight size={17} /></a>
          </div>
        </section>

        <section id="how-it-works" className="border-y border-[#26364a] bg-[#0d1a2a]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5ea7ff]">Your training loop</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.04em] sm:text-5xl">Plan. Train. Adjust.</h2>
              <p className="mt-6 max-w-sm leading-7 text-[#b8c4d0]">A good plan responds to your performance. Your AI coach keeps the next session useful, challenging and achievable.</p>
            </div>
            <div className="rounded-lg border border-[#40536a] bg-[#08111c] p-5 sm:p-8">
              <div className="flex items-center justify-between border-b border-[#26364a] pb-5"><div><p className="text-xs uppercase tracking-[0.18em] text-[#8fa1b5]">This week</p><h3 className="mt-2 text-2xl font-black">Lower body / Strength</h3></div><p className="text-sm font-bold text-[#5ea7ff]">3 / 4 complete</p></div>
              <div className="mt-6 overflow-x-auto"><div className="min-w-[440px]"><div className="grid grid-cols-[48px_1fr_80px_90px] border-b border-[#26364a] pb-3 text-xs uppercase tracking-[0.12em] text-[#8fa1b5]"><span>#</span><span>Exercise</span><span>Sets</span><span>Load</span></div>{workoutRows.map(([number, exercise, sets, load]) => <div key={number} className="grid grid-cols-[48px_1fr_80px_90px] border-b border-[#26364a] py-5 text-sm"><span className="text-[#5ea7ff]">{number}</span><span className="font-bold">{exercise}</span><span className="text-[#b8c4d0]">{sets}</span><span className="text-[#b8c4d0]">{load}</span></div>)}</div></div>
              <div className="mt-6 flex items-center justify-between border-t border-[#26364a] pt-5 text-sm"><span className="text-[#b8c4d0]">Next session adapts to your log</span><Check className="text-[#5ea7ff]" size={19} /></div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5ea7ff]">Progress, made visible</p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-[0.98] tracking-[-0.04em] sm:text-5xl">Make consistency count.</h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-[#b8c4d0]">From your first session to your next personal best, see the work adding up in a way that keeps you moving.</p>
            <a href="/auth/sign-up" className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#3d8fe8] px-6 py-4 text-sm font-bold text-white hover:bg-[#5ea7ff]">Start training smarter <ArrowRight size={18} /></a>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#26364a]"><img src="/images/ai progression.jpg" alt="Athlete tracking fitness progress" className="h-[430px] w-full object-cover" /></div>
        </section>

        <section className="border-t border-[#26364a] bg-[#10253d] text-[#f3f5f7]">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:px-14"><h2 className="max-w-2xl text-4xl font-black leading-[0.98] tracking-[-0.04em] sm:text-5xl">Your next workout starts with a better plan.</h2><a href="/auth/sign-up" className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#3d8fe8] px-6 py-4 text-sm font-bold text-white hover:bg-[#5ea7ff]">Create free account <ArrowRight size={18} /></a></div>
        </section>
      </main>

      <footer className="border-t border-[#26364a]"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-[#8fa1b5] sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14"><a href="#home" className="flex items-center gap-2 font-black text-[#f3f5f7]"><Dumbbell className="text-[#5ea7ff]" size={20} />GYM BROS</a><p>Personal training, made clear.</p><p>© 2026 GYM BROS</p></div></footer>
    </div>
  );
}