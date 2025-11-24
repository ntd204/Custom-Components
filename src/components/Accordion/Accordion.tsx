import { useState } from 'react'
import { MdNavigateNext } from 'react-icons/md'
import type { TypeContent } from '../Types'
import { dataContent } from './dataContent'

const Accordion = () => {
  const [content, setContent] = useState<TypeContent[]>(dataContent)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (id: number) => {
    setOpenIndex((prev) => (prev === id ? null : id))
  }
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <ul className="w-1/2">
        {content.map((i) => {
          const isOpen = openIndex === i.id
          return (
            <li key={i.id} className="border-b py-2">
              <button
                onClick={() => handleToggle(i.id)}
                className="flex items-center justify-between w-full"
              >
                <span className="font-semibold">{i.title}</span>
                <MdNavigateNext
                  className={`
                    transition-transform duration-300 ease-in-out cursor-pointer
                    ${isOpen ? 'rotate-270' : 'rotate-90'}
                  `}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-40 mt-2' : 'max-h-0'
                }`}
              >
                <p className="text-sm text-gray-600">{i.detail}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Accordion
