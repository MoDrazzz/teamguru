import { Reviews } from '@/components'

const SignupHero = () => {
  return (
    <section className="flex w-96 flex-col justify-between rounded-lg bg-primary-500 p-8 text-primary-50">
      <div className="grid gap-16">
        <h5 className="font-semibold">TEAMGURU</h5>
        <div>
          <h2 className="text-3xl font-semibold">
            Manage team easier than ever.
          </h2>
          <h4 className="mt-3 font-light">
            Join our community today and make your live easier!
          </h4>
        </div>
      </div>
      <Reviews />
    </section>
  )
}

export default SignupHero
