import { MdNavigateNext } from 'react-icons/md'
import { dataRef } from './dataRef'

const Breadcrumb = () => {
  return (
    <>
      <nav className="flex text-sm items-center justify-center border-t mt-10">
        {dataRef.map((i, idx) => {
          const isLast = idx === dataRef.length - 1
          return (
            <div key={idx} className="flex items-center mt-10">
              {isLast ? (
                <span className="font-medium text-gray-900">{i.label}</span>
              ) : (
                <a
                  href={i.href}
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  {i.label}
                </a>
              )}
              {!isLast && (
                <span className="mx-2 text-gray-400">
                  <MdNavigateNext />
                </span>
              )}
            </div>
          )
        })}
      </nav>
    </>
  )
}

export default Breadcrumb
