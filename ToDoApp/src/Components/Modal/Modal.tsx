import {createPortal} from 'react-dom'

export default function Modal({children}: {children: React.ReactNode}) {
  return createPortal(
    <div className="modalBackground">
      {children}
    </div>,
    document.getElementById('modal')!
  )
}