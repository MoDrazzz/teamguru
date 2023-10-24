import { ButtonAlt } from '@/components'
import { faCancel, faEdit, faSave } from '@fortawesome/free-solid-svg-icons'

interface Props {
  editAction: () => void
  cancelAction: () => void
  // eslint-disable-next-line no-unused-vars
  saveAction: (...args: any[]) => void
  isEditMode: boolean
  isSaveDisabled: boolean
}

const EditButton = ({
  editAction,
  cancelAction,
  saveAction,
  isEditMode,
  isSaveDisabled,
}: Props) => {
  return (
    <div className="flex gap-2">
      {isEditMode ? (
        <>
          <ButtonAlt
            key="saveBtn"
            disabled={isSaveDisabled}
            onClick={saveAction}
            icon={faSave}
            color="green"
            type="submit"
          >
            Save
          </ButtonAlt>
          <ButtonAlt onClick={cancelAction} icon={faCancel} color="red">
            Cancel
          </ButtonAlt>
        </>
      ) : (
        <ButtonAlt onClick={editAction} icon={faEdit}>
          Edit
        </ButtonAlt>
      )}
    </div>
  )
}

export default EditButton
