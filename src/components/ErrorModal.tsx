import { Modal, CodeBlock, Icon, Link } from '@/components'
import { Error, ModalProps } from '@/types'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

interface Props extends ModalProps {
  error: Error
}

const ErrorModal = ({ isVisible, setIsVisible, error }: Props) => {
  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      <div className="grid w-96 gap-8">
        <div className="grid justify-items-center">
          <Icon icon={faExclamationCircle} className="text-8xl text-red-500" />
          <h1 className="mt-3 text-5xl font-semibold text-red-500">Oops...</h1>
        </div>
        <div>
          <h2 className="mb-3 font-semibold">
            Something went wrong! An error occurred.
          </h2>
          <CodeBlock>
            {error.code && <>{error.code}: </>}
            {error.message}
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
