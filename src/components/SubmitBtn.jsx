import React from 'react'

const SubmitBtn = ({buttonText}) => {
  return (
    <button type="submit" className="py-3 px-8 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  {buttonText}
</button>
  )
}

export default SubmitBtn