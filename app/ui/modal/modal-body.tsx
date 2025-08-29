import ModalBackground from "./modal-background"
import { CloseModalButton } from "../buttons";

export default async function ModalBody(
  { 
    title,
    route,
    children,
  } : {
    title?: string,
    route?: string
    children: React.ReactNode
  }) {
  
  return (
    <ModalBackground route={route}>
      <div className="container mx-auto">
        <div className="rounded-md m-4 w-2xl min-h-3/4 bg-white p-8">
          <div className="flex flex-row justify-between">
                <h1 className="text-2xl">{title}</h1>
                <CloseModalButton route={route} />
          </div>
          {children}
        </div>
      </div>
    </ModalBackground>
  )
}