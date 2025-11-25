import { createContext, useContext, useState, type ReactNode } from 'react'

interface AlertDialogContextType {
  open: boolean
  setOpen: (value: boolean) => void
}

const AlertDialogContext = createContext<AlertDialogContextType | null>(null)

const useAlertDialog = () => {
  const ctx = useContext(AlertDialogContext)
  if (!ctx) throw new Error('AlertDialog must be used inside provider')
  return ctx
}

export const AlertDialog = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)

  return (
    <AlertDialogContext.Provider value={{ open, setOpen }}>
      {children}
    </AlertDialogContext.Provider>
  )
}

export const AlertDialogTrigger = ({ children }: { children: ReactNode }) => {
  const { setOpen } = useAlertDialog()

  return (
    <div
      onClick={() => setOpen(true)}
      className="cursor-pointer flex justify-center items-center"
    >
      {children}
    </div>
  )
}

export const AlertDialogContent = ({ children }: { children: ReactNode }) => {
  const { open, setOpen } = useAlertDialog()

  if (!open) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black/50 animate-fadeIn"
        onClick={() => setOpen(false)}
      />
      <div className="relative z-50 bg-white rounded-lg shadow-lg w-[420px] p-6 animate-scaleIn">
        {children}
      </div>
    </div>
  )
}

export const AlertDialogHeader = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col gap-2">{children}</div>
)

export const AlertDialogTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-xl font-bold">{children}</h2>
)

export const AlertDialogDescription = ({
  children
}: {
  children: ReactNode
}) => <p className="text-gray-600 text-sm">{children}</p>

export const AlertDialogFooter = ({ children }: { children: ReactNode }) => (
  <div className="flex justify-end gap-3 mt-6">{children}</div>
)

export const AlertDialogCancel = ({ children }: { children: ReactNode }) => {
  const { setOpen } = useAlertDialog()
  return (
    <button
      onClick={() => setOpen(false)}
      className="px-4 py-2 rounded-md border hover:bg-gray-100"
    >
      {children}
    </button>
  )
}

export const AlertDialogAction = ({ children }: { children: ReactNode }) => {
  const { setOpen } = useAlertDialog()
  return (
    <button
      onClick={() => setOpen(false)}
      className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800"
    >
      {children}
    </button>
  )
}
