interface Props {
  items: string[]
}

const TeamFooter = ({ items }: Props) => {
  return (
    <footer className="flex gap-6">
      {items.map((item, index) => (
        <p key={index} className="text-sm font-medium text-slate-600">
          {item}
        </p>
      ))}
    </footer>
  )
}

export default TeamFooter
