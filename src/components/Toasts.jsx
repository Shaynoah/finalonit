import React from 'react'
import { useToast } from '../contexts/ToastContext'

const Toast = ({ id, message, type, onClose }) => {
  return (
    <div className={"toast-item p-3 rounded-lg shadow-md flex items-start gap-3 max-w-xs " + (type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : 'toast-info')} role="status" aria-live="polite">
      <div className="w-7 flex items-center justify-center">
        {type === 'success' ? <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> : type === 'error' ? <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 20h0" /></svg>}
      </div>
      <div className="text-sm flex-1">{message}</div>
      <button onClick={onClose} className="text-slate-500 hover:text-slate-700 ml-2">×</button>
    </div>
  )
}

export default function Toasts () {
  const { toasts, remove } = useToast()
  return (
    <div className="toast-root fixed right-6 bottom-6 flex flex-col gap-3 z-50">{toasts.map(t => <Toast key={t.id} {...t} onClose={() => remove(t.id)} />)}</div>
  )
}
