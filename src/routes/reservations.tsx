import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations & Events — Lillie's - The Boho Cafe" },
      {
        name: "description",
        content:
          "Reserve a table or host private events at Lillie's - The Boho Cafe in Jubilee Hills, Hyderabad.",
      },
      { property: "og:title", content: "Reservations & Events — Lillie's" },
      { property: "og:description", content: "Reserve your sanctuary." },
    ],
  }),
  component: Reservations,
});

const INT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDl5ECYxM4xD2uFD6Wb0Co2VmZNe4sjLiMNQtvfcQQfl0IbUlZacc27Qe8px7lZvDhOAbLXn3NqxIgiCVHS9uAENam6-numhe5H-cKfZqP_hCHTZHy43CzHtCOwdwseTk-LLnO7_WeqlF5eu8HVuqZeq52Dxs_rb5kfTJxqQWsPZl1XqogjORf2I5dEWhaQb6NXK1yHcRHrYluA97hkFcxamYsv4mJCjbzilb23ALvc4Xai_oXixxc6Fm_ZTps8HovnoAr1WqI7x-xk";
const T1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDuhtdury7_2U7LDcKEN70fCzLVG4kifNHnVMHPGsK4uDbhVxt6HJXKdy0NXT-ZNuKRjs0URiXIDzZvZ1O6xAeSTOEkagrggsNYAXS5wQjAAcdGWM2I7UBVHHa_YD3749rd2zizNCxalYJYCrAC9_u2l3DHpl_jTh_YEt8kuerri4aHb3AbG-Pfv4sh2tmjmVecOcKEUbySwK9_cnZ7FpjbPZD4E7DO_uHvGgK-3tNbum8ITsFtqTKRv2BGzNsqbRtBPxnTIb5CjF32";
const T2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCDoLuYLKtqQVJmUjI0NbMG8NX-d-e3egbDSKZ5XI6Aa39d-wJjPP5gANubrkE9Ttq1UU2maYtvzqyY8Z9z8ld9YVn0ZDHRMdH0mM_5wTL_anSBmNSp5y87rBB4JQp90miUq5dy5MFP2r6MOxkFVBugTFDCB1VchX7w_0CGCg34QmbgYV7CXcAkuq_ZmzMR4wLqxe3dP8kNw2B7DIjVtiPyFgOtwmBEPuvP5CGyQWgqu6pO1lkiTH_wX9GCRmI3pmD0FI3FJolu7bEI";
const T3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCczTGQ6JpQYC3WfrMCpwQocDh4fJqt9fn5yZ3rqJwO2F-XFyeHL8L5h5DUuSMpuzKHsZkcZKwxgobPaDhDgF9a2fi6IMmiPtXV7_7b2tVDmCGCjvhTWynr0GqC77RU6UXY5KPDO_BXbjl3Q_997Vx_bCV5eKQ52P5JvkwKk54y-JeALTgQSSQYc8caokw-Z4lC6RgkvwDLRIyf1fpvI6u7UZ1HYO4bD0sE4IQYdXhIZtGdbObhabpYrp0rkihCHyWhAz1oGTQKHg58";
const COFFEE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDJqmcv2M37qEdjmdjaIhEbyFKQk7_g2MLN6vEHaQAsedpDOSDiEmMtotkEoVj2-xIDLIrSpXsf2_Ps9c9gAXDBtUyc5ZRo20QIuAKLIYDhzo_CY5cY1vD-HEVpO5A5-tTuCmoQcP-A3FrjEQut1ZknZ3r6ZuE__Cz-AGoNkoKR1MDD_R-Z3Sm6eR8PLZUk18XRs3P6-fmKTgnbComVfYN_rNtYdsj7vLlZ9sPo-IghTdn2eEmakA-ikDxhzq6QUwgEf9AGuracEg2X";

function OptionCard({
  num,
  title,
  topline,
  sub,
  body,
  highlight,
  img,
  badge,
}: {
  num: string;
  title: string;
  topline: string;
  sub: string;
  body: string;
  highlight?: boolean;
  img: string;
  badge?: string;
}) {
  return (
    <div
      className={
        (highlight ? "border-2" : "border") +
        " border-stark-black flex flex-col h-full relative bg-white hover:border-vibrant-magenta transition-colors duration-300 group"
      }
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-vibrant-magenta text-surface-white px-4 py-1 text-metadata font-mono uppercase tracking-widest">
          {badge}
        </div>
      )}
      <div className="h-48 overflow-hidden">
        <img
          alt={title}
          src={img}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-gutter flex flex-col flex-grow">
        <div className="mb-12">
          <p className="text-metadata font-mono uppercase mb-2">OPTION {num}</p>
          <h3 className="text-headline-sm font-headline uppercase mb-4">{title}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-headline-md font-headline">{topline}</span>
            <span className="text-label-caps font-mono uppercase">/{sub}</span>
          </div>
        </div>
        <div className="flex-grow space-y-4 mb-12">
          <p className="text-body-md pb-4 border-b border-soft-gray">{body.split("|")[0]}</p>
          <p className="text-on-surface-variant">{body.split("|")[1]}</p>
        </div>
        <button
          className={
            highlight
              ? "w-full py-4 bg-stark-black text-surface-white text-label-caps font-mono uppercase hover:bg-vibrant-magenta transition-colors"
              : "w-full py-4 border border-stark-black text-label-caps font-mono uppercase group-hover:bg-stark-black group-hover:text-surface-white transition-colors"
          }
        >
          RESERVE NOW
        </button>
      </div>
    </div>
  );
}

function Reservations() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <header className="pt-section-gap pb-gutter px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto border-b border-soft-gray">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
            <div className="md:col-span-8">
              <p className="text-label-caps font-mono uppercase text-vibrant-magenta mb-4">
                GATHER & CELEBRATE
              </p>
              <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline uppercase mb-8">
                RESERVE YOUR SANCTUARY
              </h1>
              <p className="text-body-lg max-w-2xl text-on-surface-variant">
                From intimate brunch dates to grand private gatherings, our Jubilee Hills sanctuary
                offers the perfect backdrop for your most meaningful moments. Immerse yourself in a
                space designed for connection.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <button className="bg-stark-black text-surface-white px-10 py-5 text-label-caps font-mono uppercase hover:bg-vibrant-magenta transition-colors duration-300 w-full md:w-auto active:scale-95">
                BOOK A TABLE
              </button>
            </div>
          </div>
        </header>

        <section className="py-gutter px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 border border-stark-black">
            <div className="md:col-span-7 bg-white">
              <img
                alt="Cafe interior"
                src={INT}
                className="w-full h-[500px] md:h-[700px] object-cover"
                style={{ filter: "contrast(1.05)" }}
              />
            </div>
            <div className="md:col-span-5 flex flex-col justify-center p-gutter md:p-16 bg-soft-gray">
              <div className="space-y-8">
                <h2 className="text-headline-md font-headline uppercase">The Event Standard</h2>
                <p className="text-body-md">
                  Our space is defined by its architectural harmony and lush greenery. We offer
                  curated experiences for those seeking a tranquil yet sophisticated environment
                  for their next event.
                </p>
                <ul className="space-y-4">
                  {[
                    "Dedicated event coordinator",
                    "Customizable brunch & drink menus",
                    "Indoor and outdoor garden seating",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-vibrant-magenta pt-1">
                        check_circle
                      </span>
                      <span className="text-metadata font-mono uppercase tracking-widest">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <h2 className="text-headline-md font-headline uppercase">Tailored Experiences</h2>
            <p className="text-label-caps font-mono uppercase text-on-surface-variant">
              BOOKING OPTIONS FOR EVERY OCCASION
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <OptionCard
              num="01"
              title="Table for 2"
              topline="Brunch"
              sub="Daily"
              body="90 Minute Seatings.|An intimate escape in our window-side booths. Perfect for morning coffee rituals or a relaxed weekday brunch."
              img={T1}
            />
            <OptionCard
              num="02"
              title="Group Brunch"
              topline="6-12"
              sub="Guests"
              body="Communal Garden Table.|The ideal setting for birthdays and reunions. Includes a curated selection of our seasonal shareables and coffee flights."
              img={T2}
              highlight
              badge="Weekend Favorite"
            />
            <OptionCard
              num="03"
              title="Private Event"
              topline="Full"
              sub="Buyout"
              body="Complete Sanctuary Access.|Host your corporate launch, wedding reception, or private dinner. Full catering and decor support provided."
              img={T3}
            />
          </div>
        </section>

        <section className="bg-soft-gray py-section-gap px-margin-mobile md:px-margin-desktop">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-12 mb-8">
              <h2 className="text-headline-md font-headline uppercase border-b border-stark-black pb-4">
                Process & Logistics
              </h2>
            </div>
            <div className="md:col-span-4 space-y-4">
              <div className="text-vibrant-magenta text-headline-lg font-headline font-bold">
                01
              </div>
              <h4 className="text-label-caps font-mono uppercase">Advance Booking</h4>
              <p className="text-on-surface-variant">
                Weekend brunch tables are released every Monday at 9 AM. We recommend booking at
                least 7 days in advance for groups.
              </p>
            </div>
            <div className="md:col-span-4 space-y-4">
              <div className="text-vibrant-magenta text-headline-lg font-headline font-bold">
                02
              </div>
              <h4 className="text-label-caps font-mono uppercase">Custom Menus</h4>
              <p className="text-on-surface-variant">
                Our culinary team works with you to design a bespoke menu that reflects the season
                and your specific dietary requirements.
              </p>
              <div className="mt-6 aspect-video overflow-hidden">
                <img alt="Coffee" src={COFFEE} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-4 space-y-4">
              <div className="text-vibrant-magenta text-headline-lg font-headline font-bold">
                03
              </div>
              <h4 className="text-label-caps font-mono uppercase">Seamless Delivery</h4>
              <p className="text-on-surface-variant">
                From valet parking to audio-visual setup, we handle the intricacies so you can
                focus entirely on your guests.
              </p>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto border-t border-stark-black">
          <div className="flex flex-col md:flex-row justify-between items-center gap-gutter">
            <div>
              <h2 className="text-headline-sm font-headline uppercase">Stay Informed</h2>
              <p className="text-on-surface-variant">New lots and seasonal shifts, twice a month.</p>
            </div>
            <div className="w-full md:w-1/2 flex border-b border-stark-black items-center py-2">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-none outline-none flex-grow text-label-caps font-mono uppercase focus:ring-0"
              />
              <button className="text-label-caps font-mono uppercase hover:text-vibrant-magenta transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
