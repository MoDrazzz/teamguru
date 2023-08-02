import { Reviews } from '@/components'

const SignupHero = () => {
  return (
    <section className="w-96 rounded-lg flex flex-col justify-between text-primary-50 bg-primary-500 p-8">
      <div className="grid gap-16">
        <h5 className="font-semibold">TEAMGURU</h5>
        <div>
          <h2 className="text-3xl font-semibold">
            Manage team easier than ever.
          </h2>
          <h4 className="font-light mt-3">
            Join our community today and make your live easier!
          </h4>
        </div>
      </div>
      <Reviews />
    </section>
  )
}

export default SignupHero
