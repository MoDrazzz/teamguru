import { ButtonAlt } from '@/components'
import { faCancel, faEdit, faSave } from '@fortawesome/free-solid-svg-icons'

interface Props {
  editAction: () => void
  cancelAction: () => void
  saveAction: () => void
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
            disabled={isSaveDisabled}
            onClick={saveAction}
            icon={faSave}
            color="green"
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
