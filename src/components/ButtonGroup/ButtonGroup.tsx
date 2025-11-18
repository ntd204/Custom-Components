import { useState } from 'react'

const ButtonGroup = () => {
  const [active, setActive] = useState('Monthly')

  const buttons = ['Monthly', 'Yearly', 'Lifetime']

  return (
    <div className="flex justify-center w-full border-t mt-10  overflow-hidden">
      {buttons.map((label, index) => (
        <button
          key={index}
          onClick={() => setActive(label)}
          className={`
            px-4 py-2 text-sm border  transition rounded-md mt-10
            ${active === label ? 'bg-black text-white' : 'hover:bg-gray-100'}
          `}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default ButtonGroup
