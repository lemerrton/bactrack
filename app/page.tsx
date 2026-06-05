import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-label-white border border-warm-gray px-3 py-1">
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-mono">
                0/1
              </span>
            </div>
            <span className="text-sm tracking-[0.25em] uppercase font-light">
              BacTrack
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#product"
              className="text-[11px] tracking-[0.2em] uppercase text-gray-500 hover:text-black transition-colors"
            >
              Product
            </a>
            <a
              href="#how-it-works"
              className="text-[11px] tracking-[0.2em] uppercase text-gray-500 hover:text-black transition-colors"
            >
              How It Works
            </a>
            <a
              href="#why"
              className="text-[11px] tracking-[0.2em] uppercase text-gray-500 hover:text-black transition-colors"
            >
              Why
            </a>
            <a
              href="#order"
              className="text-[11px] tracking-[0.2em] uppercase text-gray-400 border border-gray-300 px-4 py-2 hover:bg-black hover:text-white hover:border-black transition-all"
            >
              Pre-Order
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div className="animate-fade-up">
              <div className="inline-block bg-label-white border border-warm-gray px-4 py-2 mb-10">
                <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-mono">
                  Patent Pending
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-[0.95] mb-8 animate-fade-up-d1">
              Bac
              <span className="font-normal">Track</span>
            </h1>

            <div className="w-12 h-px bg-gray-300 mb-8 animate-fade-up-d2" />

            <p className="text-sm md:text-base tracking-[0.12em] uppercase font-light text-gray-500 leading-relaxed mb-12 animate-fade-up-d2">
              Lock your keys before you drink.
              <br />
              Blow clean to get them back.
            </p>

            <div className="animate-fade-up-d3">
              <a
                href="#order"
                className="inline-block text-[11px] tracking-[0.3em] uppercase border border-black px-10 py-4 hover:bg-black hover:text-white transition-all duration-300"
              >
                Pre-Order — $149
              </a>
            </div>
          </div>

          <div className="animate-fade-in relative">
            <div className="bg-cream/40 p-8 md:p-12 relative">
              <Image
                src="/product-front.png"
                alt="BacTrack breathalyzer key vault — front view showing BAC display and locked key compartment"
                width={600}
                height={600}
                priority
                className="w-full h-auto"
              />
              <div className="absolute top-3 left-3 text-[9px] tracking-[0.2em] text-gray-300 font-mono">
                01
              </div>
              <div className="absolute top-3 right-3 text-[9px] tracking-[0.2em] text-gray-300 font-mono">
                V.1.0
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Margiela Label Divider */}
      <div className="flex justify-center py-6">
        <div className="bg-label-white border border-warm-gray px-6 py-3 text-center">
          <span className="text-[9px] tracking-[0.5em] uppercase text-gray-400 font-mono block">
            Maison BacTrack
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-gray-300 font-mono block mt-1">
            San Diego, CA
          </span>
        </div>
      </div>

      {/* Product Section */}
      <section id="product" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Product Image — Angle */}
            <div className="bg-cream/30 border border-warm-gray p-8 md:p-12 relative order-2 md:order-1">
              <Image
                src="/product-angle.png"
                alt="BacTrack vault — angled view showing breathalyzer mouthpiece and key storage"
                width={600}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute bottom-4 left-4 text-[9px] tracking-[0.2em] text-gray-300 font-mono">
                02
              </div>
              <div className="absolute bottom-4 right-4 text-[9px] tracking-[0.2em] text-gray-300 font-mono">
                SS26
              </div>
            </div>

            {/* Product Details */}
            <div className="order-1 md:order-2">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-mono block mb-6">
                The Vault
              </span>
              <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-8 leading-tight">
                Your keys stay locked
                <br />
                until you&apos;re safe.
              </h2>
              <div className="space-y-6 text-sm text-gray-600 leading-relaxed font-light">
                <p>
                  Drop your keys into the vault before your first drink. The
                  magnetic lock engages automatically. When you&apos;re ready to
                  leave, blow into the integrated breathalyzer sensor.
                </p>
                <p>
                  Below the legal limit? The vault opens. Above it? Your keys
                  stay locked, and the app helps you call a ride.
                </p>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-mono block mb-2">
                      Sensor
                    </span>
                    <span className="text-sm font-light">Fuel-cell BAC</span>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-mono block mb-2">
                      Battery
                    </span>
                    <span className="text-sm font-light">30-day USB-C</span>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-mono block mb-2">
                      Capacity
                    </span>
                    <span className="text-sm font-light">Up to 5 keys</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-6 bg-cream/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-mono block mb-6">
              Process
            </span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight">
              How it works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                num: "01",
                title: "Lock",
                desc: "Drop your keys into the vault before you start drinking. One press locks them in.",
              },
              {
                num: "02",
                title: "Blow",
                desc: "When you're ready to leave, blow into the sensor. Results in under 5 seconds.",
              },
              {
                num: "03",
                title: "Go",
                desc: "Under the limit? Vault opens. Over? It stays locked and suggests a ride home.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="inline-block bg-white border border-warm-gray px-3 py-1 mb-6">
                  <span className="text-[10px] tracking-[0.3em] text-gray-400 font-mono">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg tracking-[0.15em] uppercase font-light mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Why — Personal Story */}
      <section id="why" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-mono block mb-6">
              The Why
            </span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight mb-4">
              Because it&apos;s personal.
            </h2>
          </div>

          <div className="bg-label-white border border-warm-gray p-10 md:p-16 relative">
            {/* Margiela stitch marks */}
            <div className="absolute -top-3 left-8 w-6 h-6 bg-white border border-warm-gray rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-warm-gray rounded-full" />
            </div>
            <div className="absolute -top-3 right-8 w-6 h-6 bg-white border border-warm-gray rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-warm-gray rounded-full" />
            </div>

            <p className="text-base md:text-lg font-light leading-relaxed text-gray-600 mb-6">
              Two of my close friends got DUIs within the same week. Not because
              they were reckless people — because in the moment, after a few
              drinks, the decision to drive feels easier than it should.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-gray-600 mb-6">
              BacTrack removes that decision entirely. You lock your keys
              before you drink, when your judgment is still clear. By the time
              you want to leave, the vault holds you accountable.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-gray-600">
              This isn&apos;t about punishment. It&apos;s about prevention.
            </p>

            <div className="mt-10 pt-6 border-t border-warm-gray">
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-mono">
                — Founder, BacTrack
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <span className="text-4xl md:text-5xl font-extralight block mb-3">
                10,000+
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-mono">
                DUI arrests per day in the US
              </span>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-extralight block mb-3">
                $10K+
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-mono">
                Average cost of a DUI
              </span>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-extralight block mb-3">
                37
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-mono">
                People killed daily by drunk drivers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase — Full Width */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream/30 border border-warm-gray p-8 relative">
              <Image
                src="/product-front.png"
                alt="BacTrack vault front view"
                width={600}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute bottom-3 left-3 text-[9px] tracking-[0.2em] text-gray-300 font-mono">
                Front
              </div>
            </div>
            <div className="bg-cream/30 border border-warm-gray p-8 relative">
              <Image
                src="/product-angle.png"
                alt="BacTrack vault angle view"
                width={600}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute bottom-3 left-3 text-[9px] tracking-[0.2em] text-gray-300 font-mono">
                Profile
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-mono">
              Compact design &middot; Fits any countertop &middot; 4.2&quot; &times; 3.1&quot; &times; 5.8&quot;
            </span>
          </div>
        </div>
      </section>

      {/* Pre-Order */}
      <section id="order" className="py-32 px-6 bg-cream/20">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-mono block mb-6">
            Reserve Yours
          </span>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight mb-6">
            Pre-Order
          </h2>
          <p className="text-sm text-gray-500 font-light leading-relaxed mb-12 max-w-md mx-auto">
            Be among the first to own the BacTrack vault. Estimated shipping
            Q1 2027. Fully refundable deposit.
          </p>

          <div className="bg-white border border-warm-gray p-10 md:p-14 mb-8">
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-4xl font-extralight">$149</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-mono">
                USD
              </span>
            </div>
            <ul className="text-sm text-gray-500 font-light space-y-3 mb-10">
              <li>BacTrack Vault</li>
              <li>USB-C Charging Cable</li>
              <li>Companion App (iOS + Android)</li>
              <li>Free Shipping</li>
            </ul>
            <button className="w-full md:w-auto text-[11px] tracking-[0.3em] uppercase bg-black text-white px-14 py-4 hover:bg-gray-800 transition-colors cursor-pointer">
              Reserve Now
            </button>
          </div>

          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-mono">
            100% refundable &middot; No charge until shipping
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-label-white border border-warm-gray px-3 py-1">
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-mono">
                0/1
              </span>
            </div>
            <span className="text-xs tracking-[0.25em] uppercase font-light">
              BacTrack
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-mono">
              San Diego State University
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-mono">
              Lavin Center
            </span>
          </div>
          <span className="text-[10px] tracking-[0.2em] text-gray-300 font-mono">
            &copy; 2026 BacTrack
          </span>
        </div>
      </footer>
    </div>
  );
}
