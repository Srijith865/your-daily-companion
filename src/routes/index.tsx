import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lillie's - The Boho Cafe | A Sanctuary for Senses" },
      {
        name: "description",
        content:
          "A sanctuary where organic textures meet modern refinement. Brunch, coffee, and boho vibes in Jubilee Hills, Hyderabad.",
      },
      { property: "og:title", content: "Lillie's - The Boho Cafe" },
      {
        property: "og:description",
        content: "A sanctuary where organic textures meet modern refinement.",
      },
    ],
  }),
  component: Home,
});

import HERO from "@/assets/hero.png";
const BOWL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAQkpm_2SWjAwizt1Yj04RO9txp-vNE9AQmwYcMlMKMf_HntTa7b46BL5MWYDinrQ0lZJuLcoIvLdA8BnWneQFXQVidiq3-T6qjtGJQohi3tujTaGJ9wW_sp9yEXCCYtHBfqguwpsYbsS-990El1ju72MTBmLEdripghPJWh6sbqTswQbWlWbKgvrZYtPFyxRuyqH-2oMtuA0-eoED--a09hp5ygR1cuRZ1Zs6JkmBwwOVOmg_zuuODI83LENPETHOiHKGvmWoScHCO";
const TOAST =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDgYXpQ-WDAMVTgaKY140Lk9Tgy9AJIeFokdd9WeJAt-beE--dcFqoiEZ1B52nw0KfOieZOvnkBoBT6S1Uc2BUSvwFp7pgH5lFWwJtGsfevZ5kV_tbmo41jqrdItgLxEgG7kNaIK92FMKIZYRV6wXcsJPmVKJzYKlvcrJdNnFzzq3VynNNtQxyv8hnUymn4k3em7LG7bVfoDI9-Y4b3A4DkQqY6pX9jO3hS5m6M4WehhD2IUgsiR3y_zYLYZuzUTDQ-8Xmcuevrjijc";
const G1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCDoLuYLKtqQVJmUjI0NbMG8NX-d-e3egbDSKZ5XI6Aa39d-wJjPP5gANubrkE9Ttq1UU2maYtvzqyY8Z9z8ld9YVn0ZDHRMdH0mM_5wTL_anSBmNSp5y87rBB4JQp90miUq5dy5MFP2r6MOxkFVBugTFDCB1VchX7w_0CGCg34QmbgYV7CXcAkuq_ZmzMR4wLqxe3dP8kNw2B7DIjVtiPyFgOtwmBEPuvP5CGyQWgqu6pO1lkiTH_wX9GCRmI3pmD0FI3FJolu7bEI";
const G2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDl5ECYxM4xD2uFD6Wb0Co2VmZNe4sjLiMNQtvfcQQfl0IbUlZacc27Qe8px7lZvDhOAbLXn3NqxIgiCVHS9uAENam6-numhe5H-cKfZqP_hCHTZHy43CzHtCOwdwseTk-LLnO7_WeqlF5eu8HVuqZeq52Dxs_rb5kfTJxqQWsPZl1XqogjORf2I5dEWhaQb6NXK1yHcRHrYluA97hkFcxamYsv4mJCjbzilb23ALvc4Xai_oXixxc6Fm_ZTps8HovnoAr1WqI7x-xk";
const G3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBo39hr7G5efGE9b50m1AS9fRaKdiJkOu9a6iYdEwB83UNQB1bmnah7Sg3tXqQHGlr75Yi2MgaPJUX9-H--Ido-SzR2GQBKTAeEHsBldSa9aJZY7tpYD-KsfyWmVzH3VUxBaoujxB41EhFRe3weQ-3qEWIFjEHDJIerQTRXAbis2IrONJrh6SNHeGLTq25kkfV6N7XQHGpJu2eAZwv8XUQ0wZhZ-7QgJYGqK3t9vTDuxGnaH8merkqsOEeduWLudRh1iESke29jycyw";
const G4 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuASIMc6RPEJ_TyJq6w-cDoYFEsJRMzXL7eiv3K18SKhM0j7R-0vIku6eoJnaO80y7RRJvIBOytLkKVqYJBoDjHzj4GodgLMtSSDFO7oTsdxy6R9xSvjYlGAFjyClCJjLOWKKoZilqaGSJs5upTcOQeR68OzVjISuRAHxlFEncO04AixFRwv4w7gapmStOMdtvKHdOp8d_ro60X_rnsKrgEj90sAJKblmpi7SQWiqFBCAjic16AFmJyCXPoVIYWnLdS_dtDrFVflYDAq";

function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative w-full h-[50vh] sm:h-[70vh] md:h-[90vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${HERO}")` }}
          />
          <div className="absolute inset-0 bg-black/10" />
        </section>

        <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-label-caps font-mono uppercase mb-12 tracking-widest">THE VIBE</h2>
            <p className="text-headline-md font-headline mb-12 leading-snug">
              Lillie's - The Boho Cafe Jubilee Hills is a sanctuary where organic textures meet
              modern refinement. From our sun-drenched rattan corners to the aromatic presence of
              our micro-roastery, we offer a serene escape designed for connection and culinary
              delight.
            </p>
            <div className="flex justify-center gap-12 flex-wrap">
              <Link
                to="/reservations"
                className="text-label-caps font-mono uppercase border-b border-stark-black pb-1 hover:text-vibrant-magenta hover:border-vibrant-magenta transition-colors"
              >
                RESERVE TABLE
              </Link>
              <Link
                to="/about"
                className="text-label-caps font-mono uppercase border-b border-stark-black pb-1 hover:text-vibrant-magenta hover:border-vibrant-magenta transition-colors"
              >
                OUR STORY
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="mb-12">
            <h2 className="text-label-caps font-mono uppercase tracking-widest text-center">
              MENU HIGHLIGHTS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {[
              {
                img: BOWL,
                title: "TROPICAL DRAGON BOWL",
                desc: "Fresh dragon fruit, pomegranate seeds, and sliced banana served on a bed of nutrient-rich seeds.",
              },
              {
                img: TOAST,
                title: "SIGNATURE MANGO TOAST",
                desc: "Thick brioche toast topped with fresh alphonso mango, whipped cream, and delicate florals.",
              },
            ].map((h) => (
              <div key={h.title} className="flex flex-col">
                <div className="aspect-square bg-soft-gray overflow-hidden mb-6">
                  <img
                    alt={h.title}
                    src={h.img}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-headline-sm font-headline mb-2">{h.title}</h3>
                  <p className="text-body-md text-on-surface-variant mb-4">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/menu"
              className="inline-block px-12 py-4 border border-stark-black text-label-caps font-mono uppercase hover:bg-stark-black hover:text-surface-white transition-all duration-300 active:scale-95"
            >
              VIEW FULL MENU
            </Link>
          </div>
        </section>

        <section className="py-16 md:py-section-gap bg-surface">
          <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[700px]">
              <div className="h-[300px] md:h-full overflow-hidden">
                <img alt="Cafe Interior" src={G1} className="w-full h-full object-cover" />
              </div>
              <div className="h-auto md:h-full flex flex-col gap-4">
                <div className="h-[200px] md:h-1/2 overflow-hidden">
                  <img alt="Outdoor Seating" src={G2} className="w-full h-full object-cover" />
                </div>
                <div className="h-[200px] md:h-1/2 overflow-hidden">
                  <img alt="Cozy Interior" src={G3} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="h-[300px] md:h-full overflow-hidden hidden md:block">
                <img alt="Barista Counter" src={G4} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-soft-gray py-16 md:py-section-gap">
          <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto flex flex-col items-center text-center">
            <div className="max-w-2xl bg-white p-12 border border-stark-black/10">
              <h2 className="text-headline-md font-headline mb-6 uppercase">RESERVE A TABLE</h2>
              <p className="text-body-lg mb-8 text-on-surface-variant leading-relaxed">
                Join us for brunch, coffee, or a quiet afternoon. Book your spot in our Jubilee
                Hills oasis to guarantee a cozy corner.
              </p>
              <Link
                to="/reservations"
                className="inline-block w-full md:w-auto px-8 py-4 bg-stark-black text-surface-white text-label-caps font-mono uppercase hover:bg-vibrant-magenta transition-all duration-300 active:scale-95"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="border-t border-stark-black pt-12 flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-md">
              <h4 className="text-label-caps font-mono uppercase mb-4">STAY CONNECTED</h4>
              <p className="text-body-md">
                Be the first to know about new menu drops and exclusive boho events.
              </p>
            </div>
            <form className="w-full md:max-w-md flex items-end border-b border-stark-black pb-2 focus-within:border-b-2 transition-all">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-none p-0 focus:ring-0 focus:outline-none text-label-caps font-mono uppercase placeholder:text-on-surface-variant/50"
              />
              <button
                type="submit"
                className="text-label-caps font-mono uppercase hover:text-vibrant-magenta transition-colors ml-4 whitespace-nowrap"
              >
                FOLLOW US ON INSTAGRAM
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
