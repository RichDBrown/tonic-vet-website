import MenuButton from "./menu-button";

export default function CompactHeader() {
  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-4 mb-9 lg:hidden">
      <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Tonic Vet</h1>
      <MenuButton />
    </header>
  )
}