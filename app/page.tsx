import Image from "next/image";
import Link from "next/link";
import RightArrow from '@/public/right-arrow.svg'
import FeatureCard from "./_ui/feature-card";
import Brain from '@/public/brain.svg'
import Lightning from '@/public/lightning.svg'
import PiggyBank from '@/public/piggy-bank.svg'
import Step from "./_ui/how-it-works-step";

export default function LandingPage() {
  return (
    <main className="px-4 md:px-6">
      <section className="flex flex-col items-center pb-24 lg:py-24">
        <h2 className="text-4xl lg:text-6xl font-bold text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">
          Never Take SOAP Notes Again &mdash; Let Tonic Vet Handle It
        </h2>
        <p className="text-xl lg:text-2xl text-center mb-4">
          Tonic Vet is a fast, affordable AI scribe that listens to your exam and creates your SOAP notes &mdash; so you can focus on what matters most.
        </p>
        <p className="text-lg text-center mb-8">
          Built for busy vets who'd rather focus on patients, not paperwork.
        </p>
        <Link href='/waitlist' className="flex items-center justify-center bg-primary hover:bg-[#5995F8] active:bg-[#5995F8] hover:shadow-button active:shadow-button rounded-full w-full py-3 transition-all md:w-auto md:px-6">
          <p className="text-lg font-bold text-white">Join the waitlist</p>
          <Image data-testid="waitlist-icon-button" src={RightArrow} alt="" className="ml-2 w-5 h-auto" />
        </Link>
      </section>
      <section className="flex flex-col py-24 items-center">
        <h2 className="text-3xl text-center font-bold mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" >
          Why Vets Love Tonic Vet
        </h2>
        <div className="flex flex-col gap-12 lg:flex-row">
          <FeatureCard imageContainerColor="bg-[#2463EB]/20" imgSrc={Brain} title="Smarter Notes Less Effort" titleTextColor="text-primary" description="Captures the key points from appointments — no fluff, no filler." />
          <FeatureCard imageContainerColor="bg-[#7C3BED]/20" imgSrc={Lightning} title="Fast & Lightweight" titleTextColor="text-accent" description="No bloated features. Just upload, wait a few seconds, and get your notes." />
          <FeatureCard imageContainerColor="bg-[#0DA2E7]/20" imgSrc={PiggyBank} title="Built to Be Affordable" titleTextColor="text-secondary" description="We keep it simple so we can keep it affordable. No hidden fees. No nonsense." />
        </div>
      </section>
      <section className="flex flex-col py-24 items-center">
        <h2 className="text-3xl text-center font-bold mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          How Tonic Vet Works
        </h2>
        <div className="flex flex-col gap-12 text-center lg:flex-row">
          <Step num="1" numColor="text-primary" numContainerColor="bg-[#2463EB]/20" title="Record your appointment" desc="Use Tonic Vet to capture the appointment — right from your phone, tablet, or computer." />
          <Step num="2" numColor="text-accent" numContainerColor="bg-[#7C3BED]/20" title="We handle the rest" desc="Your recording is automatically turned into a clear, structured SOAP note in seconds." />
          <Step num="3" numColor="text-secondary" numContainerColor="bg-[#0DA2E7]/20" title="Paste it into your PMS" desc="Review and tweak if needed, then copy and paste your finished notes directly into your practice management system." />
        </div>
      </section>
      <section className="flex flex-col py-24 items-center">
        <h2 className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Interested in Tonic Vet?</h2>
        <p className="text-xl text-center mb-8" >Get early access (and the demo before anyone else)</p>
        <Link href='/waitlist' className="flex items-center justify-center bg-primary hover:bg-[#5995F8] active:bg-[#5995F8] hover:shadow-button active:shadow-button rounded-full w-full py-3 transition-all md:w-auto md:px-6">
          <p className="text-lg font-bold text-white">Join the waitlist</p>
          <Image data-testid="waitlist-icon-button" src={RightArrow} alt="" className="ml-2 w-5 h-auto" />
        </Link>
      </section>
    </main>
  );
}
