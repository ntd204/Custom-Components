import { useState, createContext, useContext } from 'react'
import { MdNavigateNext } from 'react-icons/md'

export type AccordionType = 'single' | 'multiple'

interface AccordionContextType {
  type: AccordionType
  openItems: string[]
  toggleItem: (value: string) => void
}

interface AccordionProps {
  type?: AccordionType
  collapsible?: boolean
  children: React.ReactNode
}

interface AccordionItemProps {
  value: string
  children: React.ReactNode
}

interface AccordionTriggerProps {
  children: React.ReactNode
  value: string
}

interface AccordionContentProps {
  value: string
  children: React.ReactNode
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
)
const useAccordion = () => {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error('Accordion components must be inside <Accordion />')
  return ctx
}

export const Accordion = ({
  type = 'single',
  collapsible = false,
  children
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      const isOpen = prev.includes(value)

      if (type === 'single') {
        if (isOpen) return collapsible ? [] : prev
        return [value]
      }

      return isOpen ? prev.filter((v) => v !== value) : [...prev, value]
    })
  }
  return (
    <AccordionContext.Provider value={{ type, openItems, toggleItem }}>
      <div className="flex flex-col items-center justify-center w-full p-4">
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export const AccordionItem = ({ value, children }: AccordionItemProps) => {
  return (
    <div
      data-value={value}
      className="flex flex-col items-center justify-center border-b w-1/2"
    >
      {children}
    </div>
  )
}

export const AccordionTrigger = ({
  children,
  value
}: AccordionTriggerProps) => {
  const { toggleItem, openItems } = useAccordion()
  const isOpen = openItems.includes(value)

  return (
    <button
      onClick={() => toggleItem(value)}
      className="flex w-full items-center justify-between py-4 text-left font-medium transition"
    >
      {children}

      <MdNavigateNext
        className={`transition-transform duration-300 ease-in-out cursor-pointer ${
          isOpen ? '-rotate-90' : 'rotate-90'
        }`}
      />
    </button>
  )
}

export const AccordionContent = ({
  value,
  children
}: AccordionContentProps) => {
  const { openItems } = useAccordion()
  const isOpen = openItems.includes(value)

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen py-2' : 'max-h-0'
      }`}
    >
      {children}
    </div>
  )
}

export default {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
}
