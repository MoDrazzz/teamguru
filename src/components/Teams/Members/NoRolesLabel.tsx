import { TooltipIcon } from '@/components'

const NoRolesLabel = () => {
  return (
    <span className="flex items-center gap-2">
      Role
      <TooltipIcon
        variant="error"
        tooltipMessage={[
          "You haven't set up any roles yet. To do this,",
          "go to the organisation tab. It's a good idea",
          'to do this before adding team members.',
        ]}
      />
    </span>
  )
}

export default NoRolesLabel
