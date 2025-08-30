import type { FC, ReactNode } from 'react'

interface ModalWindowProps {
  children: ReactNode
  route?: string
}

const ModalBackground: FC<ModalWindowProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center mx-auto pointer-events-none">
      <div className="fixed inset-0 bg-gray-200/50" />
      <div className="relative z-10 pointer-events-auto">
        {children}
      </div>
    </div>
  )
}

export default ModalBackground