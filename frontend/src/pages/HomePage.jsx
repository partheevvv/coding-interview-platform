import {Link} from "react-router";
import {ArrowRightIcon, Binary, CheckIcon, Code2Icon, UsersIcon, VideoIcon, ZapIcon} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";


function HomePage() {
  return (
    <div className="antialiased bg-linear-to-br from-base-100 via-base-200 to-base-300 tracking-ti">
      {/*NAVBAR*/}
      <nav className="bg-base-100/80 backdrop-blur-md border-b border-b-drac-comment sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          {/*LOGO*/}
          <Link to={"/"} className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-hero-yellow/20 rounded-xl blur-md group-hover:bg-hero-yellow/30 transition duration-300"></div>
              <div className="relative size-11 rounded-xl bg-linear-to-br from-[#44475a] via-drac-bg to-[#1e1f29] border border-drac-comment/40 flex items-center justify-center shadow-2xl">
                <Binary className="size-6 text-drac-yellow drop-shadow-[0_0_8px_rgba(189,147,249,0.3)]" />
              </div>
            </div>

            {/* Refined Typography */}
            <div className="flex flex-col leading-tight">
              <span className="font-brand text-2xl font-black tracking-tighter">
                <span className="text-drac-yellow drop-shadow-[0_0_8px_rgba(241,250,140,0.4)]">
                  Interview
                </span>
                <span className="text-[#f8f8f2] ml-0.5">
                  ID
                </span>
              </span>
              <span className="text-[9px] font-mono text-white font-bold uppercase tracking-[0.4em] ml-0.5 opacity-90">
                CODE TOGETHER
              </span>
            </div>
          </Link>


          {/*Auth BTN*/}
          <SignInButton mode="modal">
            <button className="font-mono group px-6 py-3 bg-linear-to-b from-drac-yellow to-drac-sec-yellow rounded-xl text-drac-black font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
              <span>Get Started</span>
              <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </SignInButton>
        </div>
      </nav>
      {/*HERO SECTION*/}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*LEFT CONTENT*/}
          <div className="space-y-8">
            <div className="bg-drac-yellow badge badge-primary badge-lg border-drac-yellow">
              <ZapIcon className="size-4" />
              <span className="font-mono tracking-tight">Real-Time Collaboration</span>
            </div>

            <h1 className="font-mono font-black text-5xl lg:text-6xl leading-tight">
              <span className="bg-linear-to-r from-drac-yellow via-drac-sec-yellow to-accent bg-clip-text text-transparent">
                Code Together
              </span>
              <br />
              <span className="text-base-content">Learn Together</span>
            </h1>

            <p className="font-mono text-xl text-base-content/70 leading-relaxed max-w-xl">
              The ultimate platform for collaborative coding interviews and pair programming.
              Connect face-to-face, code in real-time, and ace your technical interviews.
            </p>

            <div className="font-mono not-odd:flex flex-wrap gap-3">
              <div className="badge bade-lg badge-outline">
                <CheckIcon className="size-4 text-success" />
                Live Video Chat
              </div>
              <div className="badge bade-lg badge-outline">
                <CheckIcon className="size-4 text-success" />
                Code Editor
              </div>
              <div className="badge bade-lg badge-outline">
                <CheckIcon className="size-4 text-success" />
                Multi-Language
              </div>
            </div>

            {/* CTA Btns*/}
            <div className="font-mono flex flex-wrap gap-4">
              <SignInButton mode="modal">
                <button className="btn bg-linear-to-b from-drac-yellow to-drac-sec-yellow btn-lg text-drac-black shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 tracking-tight">
                  Start Coding Now
                  <ArrowRightIcon className="size-5" />
                </button>
              </SignInButton>
              <button className="btn btn-outline btn-lg ">
                <VideoIcon className="size-5" />
                Watch Demo
              </button>
            </div>

            {/* STATS*/}
            <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-lg">
              <div className="stat">
                <div className="stat-value">10K+</div>
                <div className="stat-title">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-value text-drac-yellow">50K+</div>
                <div className="stat-title">Sessions</div>
              </div>
              <div className="stat">
                <div className="stat-value text-accent">99.9%</div>
                <div className="stat-title">Uptime</div>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <img
          src="/hero.png"
          alt="CodeCollab Platform"
          className="w-full h-auto rounded-3xl shadow-2xl border-4 border-base-100 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      
      <section className="max-w-7xl mx-auto px-6 py-9">
        {/* FEATURES SECTION */}
        <div className ="font-mono max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to <span className="text-drac-yellow ">Succeed</span>
            </h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto ">
              Powerful features deigned to make your coding interviews seamless and productive
            </p>
          </div>
        </div>


        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* {Feature1} */}
          <div className="card bg-base-100 shadow-xl">
            <div className="font-mono card-body items-center text-center">
              <div className="size-16 bg-drac-yellow/10 rounded-2xl flex items-center justify-center mb-4">
                <VideoIcon className="size-8 text-drac-yellow" />
              </div>
              <h3 className="card-title">HD Video Calls</h3>
              <p className="text-base-content/70">Crystal clear audio for seamless communication during interviews</p>
            </div>
          </div>
          {/* {Feature 2} */}
          <div className="card bg-base-100 shadow-xl">
            <div className="font-mono card-body items-center text-center">
              <div className="size-16 bg-drac-yellow/10 rounded-2xl flex items-center justify-center mb-4">
                <Code2Icon className="size-8 text-drac-yellow" />
              </div>
              <h3 className="card-title">Live Code Editor</h3>
              <p className="text-base-content/70">Collaborate in real-time with syntax highlighting and multiple language support</p>
            </div>
          </div>
          {/* {Feature1} */}
          <div className="card bg-base-100 shadow-xl">
            <div className="font-mono card-body items-center text-center">
              <div className="size-16 bg-drac-yellow/10 rounded-2xl flex items-center justify-center mb-4">
                <UsersIcon className="size-8 text-drac-yellow" />
              </div>
              <h3 className="card-title">Easy Collaboration</h3>
              <p className="text-base-content/70">Share your screen, discuss solutions, and learn from each other in real-time</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default HomePage