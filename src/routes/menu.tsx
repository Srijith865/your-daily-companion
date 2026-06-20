import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Lillie's - The Boho Cafe" },
      {
        name: "description",
        content:
          "Seasonal brunch plates, signature artisanal brews, smoothie bowls, and more — explore Lillie's full menu.",
      },
      { property: "og:title", content: "Menu — Lillie's - The Boho Cafe" },
      {
        property: "og:description",
        content: "Seasonal brunch plates and signature artisanal brews.",
      },
    ],
  }),
  component: Menu,
});

const MANGO_HDR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBa76EBIwCaiopkeudrZERosN_3QHwHC2-Np39J3VhzoEOsjcXFAz5XIXMEPSaDpmsUCizcE3HlvsiGkiq-ImC6E-4jLny_-XjyY1a8X47tq0S4C_WQ73DHmLqxr6LX7ckDDBLIk5PR93hlr9UuHNkqCnFYEPCXdNKuoKyu27CRaj97ZHeXK2PUwr3iAHFfYE-1YdYGuvrg6AmLKq-E0oQIzqo3MgeGa1GQegaICAaYL0OvVFCqeH1AVLjbVZq1EhiOBMYIyfQ_x-ZV";
const CAFE_INT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBo39hr7G5efGE9b50m1AS9fRaKdiJkOu9a6iYdEwB83UNQB1bmnah7Sg3tXqQHGlr75Yi2MgaPJUX9-H--Ido-SzR2GQBKTAeEHsBldSa9aJZY7tpYD-KsfyWmVzH3VUxBaoujxB41EhFRe3weQ-3qEWIFjEHDJIerQTRXAbis2IrONJrh6SNHeGLTq25kkfV6N7XQHGpJu2eAZwv8XUQ0wZhZ-7QgJYGqK3t9vTDuxGnaH8merkqsOEeduWLudRh1iESke29jycyw";
const TOAST_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDgYXpQ-WDAMVTgaKY140Lk9Tgy9AJIeFokdd9WeJAt-beE--dcFqoiEZ1B52nw0KfOieZOvnkBoBT6S1Uc2BUSvwFp7pgH5lFWwJtGsfevZ5kV_tbmo41jqrdItgLxEgG7kNaIK92FMKIZYRV6wXcsJPmVKJzYKlvcrJdNnFzzq3VynNNtQxyv8hnUymn4k3em7LG7bVfoDI9-Y4b3A4DkQqY6pX9jO3hS5m6M4WehhD2IUgsiR3y_zYLYZuzUTDQ-8Xmcuevrjijc";
const BOWL_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAQkpm_2SWjAwizt1Yj04RO9txp-vNE9AQmwYcMlMKMf_HntTa7b46BL5MWYDinrQ0lZJuLcoIvLdA8BnWneQFXQVidiq3-T6qjtGJQohi3tujTaGJ9wW_sp9yEXCCYtHBfqguwpsYbsS-990El1ju72MTBmLEdripghPJWh6sbqTswQbWlWbKgvrZYtPFyxRuyqH-2oMtuA0-eoED--a09hp5ygR1cuRZ1Zs6JkmBwwOVOmg_zuuODI83LENPETHOiHKGvmWoScHCO";

const categories = [
  { id: "hey-mango", label: "HEY MANGO! (SEASONAL)" },
  { id: "all-day-breakfast", label: "ALL DAY BREAKFAST" },
  { id: "classic-black", label: "CLASSIC BLACK" },
  { id: "white-coffee", label: "WHITE COFFEE" },
  { id: "cold-brew", label: "COLD BREW" },
  { id: "frappes", label: "FRAPPES & BLENDED" },
  { id: "matcha", label: "MATCHA ERA" },
  { id: "teas", label: "AUTHENTIC TEAS" },
  { id: "mocktails", label: "THERAPEUTIC MOCKTAILS" },
  { id: "smoothie-bowls", label: "SMOOTHIE BOWLS & CHIA" },
  { id: "toasts", label: "TOASTS" },
  { id: "small-plates", label: "FRENCH FRIES & SMALL PLATES" },
  { id: "pastas", label: "PASTAS" },
  { id: "sandwiches", label: "SANDWICHES & BURGERS" },
  { id: "bowls", label: "BOHO BOWLS & SALADS" },
  { id: "croissants", label: "CROISSANTS" },
];

function Item({
  name,
  desc,
  price,
}: {
  name: string;
  desc?: string;
  price: string;
}) {
  return (
    <article className="space-y-2">
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="text-headline-sm font-headline uppercase">{name}</h3>
        <span className="text-headline-sm font-headline whitespace-nowrap">{price}</span>
      </div>
      {desc && (
        <p className="text-body-md text-on-surface-variant border-b border-soft-gray pb-4">
          {desc}
        </p>
      )}
    </article>
  );
}

function CompactItem({ name, price }: { name: string; price: string }) {
  return (
    <li className="flex justify-between items-baseline border-b border-soft-gray/60 pb-2">
      <span className="text-body-lg uppercase">{name}</span>
      <span className="text-headline-sm font-headline">{price}</span>
    </li>
  );
}

function Menu() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-section-gap max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <section className="mb-24">
          <div className="max-w-4xl">
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline mb-6 leading-tight">
              THE CAFÉ MENU
            </h1>
            <p className="text-body-lg max-w-2xl text-on-surface-variant">
              From seasonal brunch plates to our signature artisanal brews, explore the culinary
              soul of Lillie's. Curated for clarity, comfort, and character.
            </p>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
            <div className="pr-4">
              <h3 className="text-label-caps font-mono uppercase mb-6 border-b border-soft-gray pb-2 opacity-50">
                MENU CATEGORIES
              </h3>
              <ul className="space-y-4">
                {categories.map((c, i) => (
                  <li key={c.id}>
                    <a
                      href={`#${c.id}`}
                      className={
                        i === 0
                          ? "text-label-caps font-mono uppercase text-vibrant-magenta block"
                          : "text-label-caps font-mono uppercase text-stark-black hover:text-vibrant-magenta transition-colors block"
                      }
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="flex-grow space-y-32 min-w-0">
            <section className="scroll-mt-32" id="hey-mango">
              <div className="mb-12">
                <img
                  alt="Hey Mango"
                  src={MANGO_HDR}
                  className="w-full h-[400px] object-cover border border-soft-gray mb-8"
                />
                <h2 className="text-label-caps font-mono uppercase text-vibrant-magenta mb-4 flex items-center gap-4">
                  <span>HEY MANGO! (SEASONAL)</span>
                  <span className="h-px bg-vibrant-magenta/30 flex-grow" />
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <Item
                  name="Mango French Toast"
                  desc="Brioche, whipped coconut cream, fresh Alphonso slices, macadamia crumble."
                  price="₹450.00"
                />
                <Item
                  name="Mango Sticky Rice Latte"
                  desc="Condensed milk, double espresso, mango purée, toasted sesame."
                  price="₹380.00"
                />
              </div>
            </section>

            <section className="scroll-mt-32" id="all-day-breakfast">
              <h2 className="text-label-caps font-mono uppercase text-stark-black mb-8 flex items-center gap-4">
                <span>ALL DAY BREAKFAST</span>
                <span className="h-px bg-stark-black/10 flex-grow" />
              </h2>
              <div className="space-y-8">
                {[
                  {
                    n: "Classic Lillie's Breakfast",
                    d: "Two eggs your way, sourdough toast, bacon or halloumi, roasted tomatoes.",
                    p: "₹550.00",
                  },
                  {
                    n: "Truffle Scrambled Eggs",
                    d: "Creamy eggs, shaved truffles, parmesan, chives on toasted brioche.",
                    p: "₹495.00",
                  },
                ].map((i) => (
                  <div key={i.n} className="flex justify-between items-start gap-6">
                    <div className="max-w-2xl">
                      <h4 className="text-headline-sm font-headline uppercase mb-1">{i.n}</h4>
                      <p className="text-body-md text-on-surface-variant">{i.d}</p>
                    </div>
                    <span className="text-headline-sm font-headline whitespace-nowrap">{i.p}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <section className="scroll-mt-32" id="classic-black">
                <h2 className="text-label-caps font-mono uppercase mb-8 border-b border-soft-gray pb-2">
                  CLASSIC BLACK
                </h2>
                <ul className="space-y-6">
                  <CompactItem name="Espresso / Americano" price="₹220.00" />
                  <CompactItem name="Pour Over (Seasonal)" price="₹350.00" />
                </ul>
              </section>
              <section className="scroll-mt-32" id="white-coffee">
                <h2 className="text-label-caps font-mono uppercase mb-8 border-b border-soft-gray pb-2">
                  WHITE COFFEE
                </h2>
                <ul className="space-y-6">
                  <CompactItem name="Cappuccino / Flat White" price="₹280.00" />
                  <CompactItem name="Iced Spanish Latte" price="₹320.00" />
                </ul>
              </section>
            </div>

            <div className="w-full aspect-[21/9] overflow-hidden border border-soft-gray">
              <img alt="Cafe Interior" src={CAFE_INT} className="w-full h-full object-cover" />
            </div>

            <section className="scroll-mt-32" id="toasts">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <img
                  alt="Artisanal Toast"
                  src={TOAST_IMG}
                  className="w-full aspect-square object-cover border border-soft-gray"
                />
                <div>
                  <h2 className="text-label-caps font-mono uppercase mb-8">ARTISANAL TOASTS</h2>
                  <div className="space-y-8">
                    <Item
                      name="Sourdough Avo Smash"
                      desc="Hass avocado, chili flakes, feta, poached eggs."
                      price="₹483.00"
                    />
                    <Item
                      name="Burrata & Heirloom Tomato"
                      desc="Basil oil, balsamic glaze, toasted rustic loaf."
                      price="₹510.00"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="scroll-mt-32" id="smoothie-bowls">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-label-caps font-mono uppercase mb-8 flex items-center gap-4">
                    <span>SMOOTHIE BOWLS &amp; CHIA</span>
                    <span className="h-px bg-stark-black/10 flex-grow" />
                  </h2>
                  <ul className="space-y-8">
                    {[
                      {
                        n: "Acai Power Bowl",
                        d: "Organic acai, granola, banana, bee pollen.",
                        p: "₹460.00",
                      },
                      {
                        n: "Coconut Chia Pudding",
                        d: "Overnight chia, seasonal berries, honey.",
                        p: "₹395.00",
                      },
                    ].map((i) => (
                      <li key={i.n} className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="text-headline-sm font-headline uppercase">{i.n}</h4>
                          <p className="text-body-md text-on-surface-variant">{i.d}</p>
                        </div>
                        <span className="text-headline-sm font-headline whitespace-nowrap">
                          {i.p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    alt="Vibrant Fruit Bowl"
                    src={BOWL_IMG}
                    className="w-full h-full object-cover border border-soft-gray"
                  />
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="scroll-mt-32" id="matcha">
                <h2 className="text-label-caps font-mono uppercase mb-8 border-b border-soft-gray pb-2">
                  MATCHA ERA
                </h2>
                <ul className="space-y-6">
                  <CompactItem name="Uji Matcha Latte" price="₹420.00" />
                  <CompactItem name="Iced Strawberry Matcha" price="₹450.00" />
                </ul>
              </div>
              <div className="scroll-mt-32" id="sandwiches">
                <h2 className="text-label-caps font-mono uppercase mb-8 border-b border-soft-gray pb-2">
                  SANDWICHES &amp; BURGERS
                </h2>
                <ul className="space-y-6">
                  <CompactItem name="Truffle Beef Burger" price="₹650.00" />
                  <CompactItem name="Caprese Panini" price="₹420.00" />
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      <section className="bg-surface-container py-16 border-t border-stark-black">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["accessible", "Wheelchair Accessible"],
            ["female", "Women-Owned"],
            ["deck", "Rooftop Seating"],
            ["pets", "Dog Friendly"],
          ].map(([icon, label]) => (
            <div key={label} className="flex items-center gap-4 text-stark-black">
              <span className="material-symbols-outlined text-3xl">{icon}</span>
              <span className="text-label-caps font-mono uppercase text-xs">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-stark-black text-surface-white border-t border-white/10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap">
          <div className="md:col-span-2">
            <h2 className="text-headline-md font-headline mb-6 uppercase">
              Lillie's - The Boho Cafe
            </h2>
            <div className="flex items-start gap-3 opacity-70">
              <span className="material-symbols-outlined mt-1">location_on</span>
              <p className="text-body-md">
                3rd Floor Terrace - Chhatwal's, Nandi Hills,
                <br />
                Rd No. 51, BNR Hills, BN Reddy Colony,
                <br />
                Rai Durg, Hyderabad, Telangana 500033
              </p>
            </div>
            <p className="text-metadata font-mono mt-4 opacity-50 uppercase tracking-widest">
              9 AM — 1 AM daily
            </p>
          </div>
          <div>
            <h3 className="text-label-caps font-mono uppercase mb-6 opacity-60">EXPLORE</h3>
            <ul className="space-y-3">
              {["Full Menu", "Subscriptions", "Wholesale", "Careers"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-body-md hover:text-vibrant-magenta transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-label-caps font-mono uppercase mb-6 opacity-60">STAY CONNECTED</h3>
            <form className="mb-8">
              <div className="relative">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-transparent border-b border-white/30 py-2 text-label-caps font-mono uppercase placeholder:text-white/30 focus:outline-none focus:border-vibrant-magenta transition-all"
                />
                <button type="submit" className="absolute right-0 bottom-2 text-vibrant-magenta">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </form>
            <div className="flex gap-4">
              <a href="#" className="hover:text-vibrant-magenta transition-colors">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a href="#" className="hover:text-vibrant-magenta transition-colors">
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-metadata font-mono opacity-40 uppercase">
            © 2024 Lillie's - The Boho Cafe. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-metadata font-mono opacity-40 hover:opacity-100 uppercase">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-metadata font-mono opacity-40 hover:opacity-100 uppercase">
              TERMS OF SERVICE
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
