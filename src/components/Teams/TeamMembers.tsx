import {
  ArticleWrapper,
  ButtonAlt,
  ScrollGradient,
  TableHead,
  TableHeadData,
  TeamFooter,
  TeamMember,
  Title,
} from '@/components'
import { TeamMemberType } from '@/types'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

interface Props {
  members: TeamMemberType[]
}

const TeamMembers = ({ members }: Props) => {
  const handleAddMember = () => {}

  return (
    <ArticleWrapper>
      <Title>Members</Title>
      <div className="wrapper py-2">
        <TableHead>
          <TableHeadData width="16rem">Name</TableHeadData>
          <TableHeadData width="8rem">Role</TableHeadData>
        </TableHead>
        <ScrollGradient>
          <ul className="h-52 overflow-auto overscroll-contain">
            {members.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </ul>
        </ScrollGradient>
        <div className="px-8 py-3">
          <TeamFooter items={[`Members: ${members.length}`]}>
            <ButtonAlt
              onClick={handleAddMember}
              color="green"
              icon={faUserPlus}
            >
              Add members
            </ButtonAlt>
          </TeamFooter>
        </div>
      </div>
    </ArticleWrapper>
  )
}

export default TeamMembers
