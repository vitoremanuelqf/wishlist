import { FiInbox } from 'react-icons/fi'

export function Loading() {
  return (
    <div className="animate__animated animate__zoomIn w=full flex h-auto max-w-96 flex-col items-center justify-center gap-2 py-6 sm:py-8">
      <div className="flex h-min w-min items-center justify-center rounded-full border border-gray-700 bg-[#5b2b84] p-4">
        <FiInbox className="animate__animated animate__heartBeat animate__infinite h-8 w-8 text-white" />
      </div>

      <h2 className="text-center text-base font-medium text-gray-700 sm:text-xl">
        Carregando...
      </h2>
    </div>
  )
}
