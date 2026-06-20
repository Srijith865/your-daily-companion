export function Footer() {
  return (
    <footer className="bg-soft-gray border-t border-stark-black">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-[1440px] mx-auto">
        <div className="md:col-span-1">
          <h2 className="text-headline-md font-headline text-stark-black mb-6 uppercase">
            Lillie's - The Boho Cafe
          </h2>
          <p className="text-metadata font-mono mb-4 uppercase tracking-widest">
            © 2024 Lillie's - The Boho Cafe.
            <br />
            ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <h4 className="text-label-caps font-mono uppercase text-stark-black/40 mb-2">VISIT US</h4>
          <p className="text-body-md">Road No. 36, Jubilee Hills</p>
          <p className="text-body-md">Hyderabad, TS 500033</p>
          <p className="text-body-md">9 AM – 1 AM DAILY</p>
        </div>
        <div className="flex flex-col space-y-3">
          <h4 className="text-label-caps font-mono uppercase text-stark-black/40 mb-2">EXPLORE</h4>
          <a className="text-body-md hover:underline underline-offset-4" href="/reservations">
            Reservations
          </a>
          <a className="text-body-md hover:underline underline-offset-4" href="#">
            Order on Zomato
          </a>
          <a className="text-body-md hover:underline underline-offset-4" href="#">
            Order on Swiggy
          </a>
          <a className="text-body-md hover:underline underline-offset-4" href="#">
            Instagram
          </a>
        </div>
        <div className="flex flex-col space-y-3 items-start md:items-end">
          <h4 className="text-label-caps font-mono uppercase text-stark-black/40 mb-2">CONNECT</h4>
          <div className="flex space-x-4">
            <a className="hover:text-vibrant-magenta transition-colors" href="#" aria-label="Email">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a
              className="hover:text-vibrant-magenta transition-colors"
              href="#"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
