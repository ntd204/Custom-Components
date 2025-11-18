import { useState } from 'react'

const AlertDialog = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  return (
    <div className="flex justify-center items-center relative border-t">
      <button
        onClick={() => setOpenDialog(true)}
        className=" mt-10 border bg-gray-100 hover:bg-gray-200 font-semibold px-4 py-2 rounded-md"
      >
        Show Dialog
      </button>
      {openDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/50 animate-fadeIn"
            onClick={() => setOpenDialog(false)}
          />
          <div
            className="
              relative z-50 bg-white rounded-lg shadow-lg w-[420px] p-6 
              animate-scaleIn
            "
          >
            <h2 className="text-xl font-bold">Are you absolutely sure?</h2>
            <p className="text-gray-600 mt-2">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpenDialog(false)}
                className="px-4 py-2 rounded-md border hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={() => setOpenDialog(false)}
                className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AlertDialog
