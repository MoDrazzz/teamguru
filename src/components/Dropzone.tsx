'use client'

import classNames from 'classnames'
import { Accept, useDropzone } from 'react-dropzone'

interface Props {
  // eslint-disable-next-line no-unused-vars
  onDrop: (acceptedFiles: File[]) => void
  accept?: Accept
  multiple?: boolean
  label?: string
}

const Dropzone = ({ onDrop, accept, multiple, label }: Props) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept,
    multiple,
    noKeyboard: true,
  })

  return (
    <div
      {...getRootProps({
        className: classNames(
          'flex h-full w-full items-center rounded-lg border-2 border-dashed bg-slate-200 p-2 transition duration-300 cursor-pointer',
          {
            'border-green-500 text-green-700': isDragAccept,
            'border-red-500 text-red-700': isDragReject,
            'hover:text-slate-900 hover:border-slate-700 text-slate-700 border-slate-500':
              !isDragActive,
          },
        ),
      })}
    >
      <input {...getInputProps()} />
      <p className="text-center text-xs font-semibold">
        {label || 'Drag and drop some files here, or click to select files'}
      </p>
    </div>
  )
}

export default Dropzone
