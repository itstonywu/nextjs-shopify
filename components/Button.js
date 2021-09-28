import React from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Button({ onClick, selectedVariant, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!selectedVariant}
      className={classNames(
        selectedVariant
          ? 'cursor-pointer bg-gray-900 hover:bg-gray-700'
          : 'cursor-not-allowed bg-gray-400 hover:bg:gray-400',
        'flex items-center justify-center px-8 py-3 mt-8 text-base font-medium text-white  border border-transparent  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500'
      )}
    >
      {children}
    </button>
  )
}

export default Button
