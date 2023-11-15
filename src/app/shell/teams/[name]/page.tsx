'use client'

import { PageHeading } from '@/components'

export default function TeamPage({ params }: { params: { name: string } }) {
  const teamName = params.name.replaceAll('%20', ' ')
  
  return <PageHeading title={teamName} subtitle="See the insights." />
}
