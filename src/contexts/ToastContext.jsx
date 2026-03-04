import React, { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext(null)

export const useToast = () => useContext(ToastContext)

export function ToastProvider ({ children }) {
  const [toasts, setToasts] = useState([])

  const show = useCallback((message, opts = {}) => {
    const id = Math.random().toString(36).slice(2, 9)
    const toast = { id, message, type: opts.type || 'info', duration: opts.duration || 3500 }
    setToasts(t => [...t, toast])
    setTimeout(() => {
      setToasts(t => t.filter(x => x.id !== id))
    }, toast.duration)
    return id
  }, [])

  const remove = useCallback(id => {
    setToasts(t => t.filter(x => x.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ show, remove, toasts }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastContext
