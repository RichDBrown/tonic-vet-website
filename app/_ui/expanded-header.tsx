import Link from "next/link";

export default function ExpandedHeader() {
  return (
    <header className="hidden lg:flex items-center justify-between py-4 sticky top-0 border-b border-[#C4C6D0] bg-white">
      <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent ml-6">Tonic Vet</h1>
      <nav className="flex gap-x-1">
        <Link href='/pricing' className="px-6 py-2.5 rounded-full text-sm font-medium text-[#0F1729] hover:bg-accent hover:text-white active:bg-accent active:text-white">
          Pricing
        </Link>
        <Link href='/about-us' className="px-6 py-2.5 rounded-full text-sm font-medium text-[#0F1729] hover:bg-accent hover:text-white active:bg-accent active:text-white">
          About us
        </Link>
      </nav>
      <Link href='/login' className="px-6 py-2.5 mr-6 rounded-full border border-primary text-sm font-medium text-primary hover:bg-primary hover:border-none hover:text-white active:bg-primary active:border-none active:text-white">
        Log in
      </Link>
    </header>
  )
}