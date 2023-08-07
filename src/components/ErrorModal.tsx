import { Modal, CodeBlock, Link } from '@/components'
import { Icon } from '@/components'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
  error: {
    code: number
    message: string
  }
}

const ErrorModal = ({ isVisible, setIsVisible, error }: Props) => {
  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      <div className="grid gap-8 w-96">
        <div className="grid justify-items-center">
          <Icon icon={faExclamationCircle} className="text-8xl text-red-500" />
          <h1 className="font-semibold mt-3 text-5xl text-red-500">Oops...</h1>
        </div>
        <div>
          <h2 className="font-semibold mb-3">
            Something went wrong! An error occurred.
          </h2>
          <CodeBlock>
            {error.code}: {error.message}
          </CodeBlock>
        </div>
        <p>
          If this error happens again, give it another shot later or{' '}
          <Link href="/message">drop us a message</Link>.
        </p>
      </div>
    </Modal>
  )
}

export default ErrorModal