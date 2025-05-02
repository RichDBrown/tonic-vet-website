import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useId, useRef } from "react";

type NavigationDrawerProps = {
  dialogId: string,
  isDialogOpen: boolean,
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>
}

export default function NavigationDrawer({ dialogId, isDialogOpen, setIsDialogOpen }: NavigationDrawerProps) {
  const dialogTitle = useId()
  const dialogDescription = useId()
  const firstFocusableElement = useRef<HTMLAnchorElement>(null)

  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  useEffect(() => {
    if (isDialogOpen && firstFocusableElement.current) {
      firstFocusableElement.current.focus()
    }
  }, [isDialogOpen])

  return (
    <div
      data-testid="dialog"
      id={dialogId}
      role="dialog"
      aria-hidden={!isDialogOpen}
      aria-labelledby={dialogTitle}
      aria-describedby={dialogDescription}
      className={`flex h-full w-full fixed top-0 right-0 z-1 bg-black/80 transition-all duration-300 ${isDialogOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <div data-testid="close-dialog" onClick={closeDialog} aria-hidden='true' className={`h-full transition-all duration-300 ${isDialogOpen ? 'w-[calc(34vw)]' : 'w-full'}`} />
      <nav className={`flex fixed flex-col w-[calc(66vw)] h-full pt-12 p-4 gap-y-4 bg-white transform-content rounded-l-xl transition-all duration-300 ${isDialogOpen ? 'right-0' : 'right-[calc(-66vw)]'}`}>
        <h2 id={dialogTitle} className="sr-only">Navigation Menu</h2>
        <p id={dialogDescription} className="sr-only">Use the links below to navigate the site.</p>
        <Link ref={firstFocusableElement} href='/pricing' className="pl-4 py-2 text-lg font-medium text-[#0F1729] hover:bg-accent hover:text-white active:bg-accent active:text-white rounded-full transition-all">Pricing</Link>
        <Link href='/about-us' className="pl-4 py-2 text-lg font-medium text-[#0F1729] hover:bg-accent hover:text-white active:bg-accent active:text-white rounded-full transition-all">About us</Link>
        <Link href={'/login'} className="flex justify-center w-full py-3 mt-4 bg-primary rounded-full text-white text-sm font-medium hover:bg-[#5995F8] active:bg-[#5995F8] hover:shadow-button active:shadow-button transition-all">Log in</Link>
      </nav>
    </div>
  )
}