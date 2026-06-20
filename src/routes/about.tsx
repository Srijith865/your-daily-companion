import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Lillie's - The Boho Cafe" },
      {
        name: "description",
        content:
          "Bohemian spirit. Culinary precision. The story behind Lillie's in Jubilee Hills, Hyderabad.",
      },
      { property: "og:title", content: "Our Story — Lillie's - The Boho Cafe" },
      { property: "og:description", content: "Bohemian spirit. Culinary precision." },
    ],
  }),
  component: About,
});

const SANCT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB_lH3c0Z6vSH3W29WTRlp9U6HACXSJtBOlX-ayLMU6JS_ig0OKtv5b3-Rl9YkU94OzAh6rsEyyoOcY2zwvT9Eufw4OVa8VAZ8Z1muJMUapFg1GTJPt7sd5JskW2VuZVLMPOLkreYNNQSl6wK3rXqohM_2eOnKDE6FN6x69pNo9-wLnnnY3NiBdq9FzANlvrd4Z75RqdVf0JWtaZiNFREjWI7K4-8vpHnbnrB4TsuDmfuUx1bnthsNAxS_140ifJB56zkZxuzTY1GZO";
const HEARTS =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDuhtdury7_2U7LDcKEN70fCzLVG4kifNHnVMHPGsK4uDbhVxt6HJXKdy0NXT-ZNuKRjs0URiXIDzZvZ1O6xAeSTOEkagrggsNYAXS5wQjAAcdGWM2I7UBVHHa_YD3749rd2zizNCxalYJYCrAC9_u2l3DHpl_jTh_YEt8kuerri4aHb3AbG-Pfv4sh2tmjmVecOcKEUbySwK9_cnZ7FpjbPZD4E7DO_uHvGgK-3tNbum8ITsFtqTKRv2BGzNsqbRtBPxnTIb5CjF32";
const ROOF =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDl5ECYxM4xD2uFD6Wb0Co2VmZNe4sjLiMNQtvfcQQfl0IbUlZacc27Qe8px7lZvDhOAbLXn3NqxIgiCVHS9uAENam6-numhe5H-cKfZqP_hCHTZHy43CzHtCOwdwseTk-LLnO7_WeqlF5eu8HVuqZeq52Dxs_rb5kfTJxqQWsPZl1XqogjORf2I5dEWhaQb6NXK1yHcRHrYluA97hkFcxamYsv4mJCjbzilb23ALvc4Xai_oXixxc6Fm_ZTps8HovnoAr1WqI7x-xk";
const BAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDJqmcv2M37qEdjmdjaIhEbyFKQk7_g2MLN6vEHaQAsedpDOSDiEmMtotkEoVj2-xIDLIrSpXsf2_Ps9c9gAXDBtUyc5ZRo20QIuAKLIYDhzo_CY5cY1vD-HEVpO5A5-tTuCmoQcP-A3FrjEQut1ZknZ3r6ZuE__Cz-AGoNkoKR1MDD_R-Z3Sm6eR8PLZUk18XRs3P6-fmKTgnbComVfYN_rNtYdsj7vLlZ9sPo-IghTdn2eEmakA-ikDxhzq6QUwgEf9AGuracEg2X";
const WARM =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD-qZzD_ey4rmvxx_rcIab8G4IcMfb_EX24zbqgGciVPNM0QARIHBynnRNbZjwwX7Dlj7U7Q_KQ4zJRfglcPzZkHX9P7N-6lc9Fv2oTCJrFL0A1kCNC4A_5luD7dK7lXyOJ71vbrI06_7-XmhueAuk33gc3hnZ0m0rr9_eJla0XiCfkuevzoKgHPr-yWgtiOI-cvYhqxFyL8iwkIawX4Dsh-tL26Au7CKOD_WW3upzQQGsnHngTUhd9BhXp8MY4eM2zeOa5o4xIdXo4";

function About() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="min-h-[80vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-section-gap max-w-[1440px] mx-auto border-b border-stark-black">
          <div className="max-w-4xl">
            <p className="text-label-caps font-mono uppercase text-vibrant-magenta mb-8">
              EST. 2024 — HYDERABAD
            </p>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline uppercase mb-12 leading-tight">
              BOHEMIAN SPIRIT. <span className="italic font-light">CULINARY</span> PRECISION.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-end">
              <p className="text-body-lg text-on-surface-variant">
                Lillie's - The Boho Cafe is an intersection of laid-back elegance and gastronomic
                excellence. Inspired by the free-spirited essence of bohemian living, we've created
                a sanctuary where every detail is intentional.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="h-px bg-stark-black w-full" />
                <p className="text-metadata font-mono uppercase">01 / OUR ETHOS</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-[1440px] mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8">
              <div className="aspect-[4/5] md:aspect-video bg-soft-gray overflow-hidden">
                <img alt="The Sanctuary" src={SANCT} className="w-full h-full object-cover" />
              </div>
              <div className="mt-6 flex justify-between items-start gap-4 flex-wrap">
                <h2 className="text-headline-md font-headline uppercase">The Sanctuary</h2>
                <span className="text-metadata font-mono uppercase border border-stark-black px-3 py-1">
                  JUBILEE HILLS, HYDERABAD
                </span>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col justify-end space-y-12">
              <div>
                <h3 className="text-label-caps font-mono uppercase mb-4 text-vibrant-magenta">
                  AESTHETIC & TEXTURE
                </h3>
                <p className="text-body-md">
                  Step into a space defined by organic warmth. Our design language speaks through
                  hand-woven rattan textures, lush indoor greenery that breathes life into every
                  corner, and the grounding depth of warm terracotta accents.
                </p>
              </div>
              <div className="p-gutter border border-soft-gray bg-soft-gray">
                <p className="text-metadata font-mono uppercase mb-2">The Atmosphere</p>
                <p className="text-headline-sm font-headline mb-4">Lillie's Interior</p>
                <p className="text-body-md mb-6">
                  "We wanted to build a home away from home, where the sunlight hits the marble and
                  the plants feel like old friends."
                </p>
                <a
                  href="#"
                  className="text-label-caps font-mono uppercase underline underline-offset-8 hover:text-vibrant-magenta transition-colors"
                >
                  EXPLORE THE SPACE
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-stark-black text-surface-white py-section-gap overflow-hidden">
          <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
            <h2 className="text-[12vw] leading-[0.9] font-headline font-bold uppercase tracking-tighter opacity-10 select-none">
              VIBRANT LIVING
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-section-gap mt-[-4vw]">
              <div className="z-10">
                <p className="text-headline-md font-headline mb-8">Fuel for the soul.</p>
                <p className="text-body-lg text-surface-container-highest max-w-md">
                  Our menu is a celebration of vitality. From superfood-packed smoothies that glow
                  with natural color to artisan lattes poured with surgical precision, every
                  serving is a testament to our commitment to quality and craft.
                </p>
              </div>
              <div className="aspect-square bg-surface-container-highest overflow-hidden">
                <img alt="Latte art" src={HEARTS} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-gutter">
            <div className="md:w-1/3">
              <div className="md:sticky md:top-32">
                <p className="text-label-caps font-mono uppercase mb-4">02 / CRAFT</p>
                <h2 className="text-headline-md font-headline uppercase mb-8">
                  The Kitchen Ritual
                </h2>
                <p className="text-body-md text-on-surface-variant mb-12">
                  Behind the boho exterior lies a kitchen driven by technical mastery. Our chefs
                  balance the whimsical with the scientific, ensuring every plate is as balanced in
                  nutrition as it is in flavor.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ORGANIC SOURCING", "CULINARY TECH", "BOHO PLATING"].map((t) => (
                    <span key={t} className="text-metadata font-mono uppercase border border-soft-gray p-2">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="space-y-gutter">
                <div className="aspect-[3/4] bg-soft-gray overflow-hidden">
                  <img alt="Rooftop Terrace" src={ROOF} className="w-full h-full object-cover" />
                </div>
                <p className="text-metadata font-mono uppercase">The Rooftop Terrace</p>
              </div>
              <div className="pt-24 space-y-gutter">
                <div className="aspect-[3/4] bg-soft-gray overflow-hidden">
                  <img alt="Botanical Bar" src={BAR} className="w-full h-full object-cover" />
                </div>
                <p className="text-metadata font-mono uppercase">The Botanical Bar</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop pb-section-gap max-w-[1440px] mx-auto">
          <div className="aspect-video w-full overflow-hidden bg-soft-gray">
            <img alt="Warm interior" src={WARM} className="w-full h-full object-cover" />
          </div>
        </section>

        <section className="border-t border-stark-black px-margin-mobile md:px-margin-desktop py-section-gap max-w-[1440px] mx-auto text-center">
          <h2 className="text-headline-md font-headline uppercase mb-6">Join the Tribe</h2>
          <p className="text-body-md max-w-xl mx-auto mb-12">
            Receive weekly dispatches from the cafe, featuring secret recipes, upcoming acoustic
            nights, and special table bookings.
          </p>
          <form className="max-w-md mx-auto flex flex-col md:flex-row items-end gap-4">
            <div className="flex-1 w-full text-left">
              <label className="text-label-caps font-mono uppercase block mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="w-full bg-transparent border-0 border-b border-stark-black focus:ring-0 focus:outline-none focus:border-b-2 focus:border-vibrant-magenta px-0 py-2 transition-all"
              />
            </div>
            <button className="bg-stark-black text-surface-white px-8 py-3 text-label-caps font-mono uppercase hover:bg-vibrant-magenta transition-colors w-full md:w-auto">
              SUBSCRIBE
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
