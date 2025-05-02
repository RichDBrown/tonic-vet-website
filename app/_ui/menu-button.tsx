'use client'

import Image from "next/image"
import Menu from '@/public/menu.svg'
import HoveredMenu from '@/public/hovered-menu.svg'
import { useId, useState } from "react"
import NavigationDrawer from "./navigation-drawer"

export default function MenuButton() {
  const dialogId = useId()
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [buttonStyle, setButtonStyle] = useState<string>('enabled')

  const openDialog = () => {
    setIsDialogOpen(true)
  }

  return (
    <div>
      <button onClick={openDialog} className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-accent active:bg-accent"
        onPointerEnter={() => setButtonStyle('hovered')}
        onPointerLeave={() => setButtonStyle('enabled')}
        aria-controls={dialogId}
        aria-expanded={isDialogOpen}>
        <Image src={buttonStyle === 'enabled' ? Menu : HoveredMenu} alt="Open menu" className="w-4.5 h-auto hover:text-white" />
      </button>
      <NavigationDrawer dialogId={dialogId} isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
    </div>
  )
}