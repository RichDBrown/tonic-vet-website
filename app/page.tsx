import Image from "next/image";
import Link from "next/link";
import RightArrow from '@/public/right-arrow.svg'
import MenuButton from "./_ui/menu-button";

export default function LandingPage() {
  return (
    <main className="px-4">
      <header className="flex items-center justify-between py-4 mb-9">
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Tonic Vet</h1>
        <MenuButton />
      </header>
      <section className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">
          Never Take SOAP Notes Again &mdash; Let Tonic Vet Handle It
        </h2>
        <p className="text-xl text-center mb-4">
          Tonic Vet is a fast, affordable AI scribe that listens to your exam and creates your SOAP notes &mdash; so you can focus on what matters most.
        </p>
        <p className="text-lg text-center mb-8">
          Built for busy vets who'd rather focus on patients, not paperwork.
        </p>
        <Link href='/waitlist' className="flex items-center justify-center bg-primary hover:bg-[#5995F8] active:bg-[#5995F8] hover:shadow-button active:shadow-button rounded-full w-full py-3 transition-all">
          <p className="text-lg font-bold text-white">Join the waitlist</p>
          <Image src={RightArrow} alt="" className="ml-2 w-5 h-auto" />
        </Link>
      </section>
    </main>
  );
}
