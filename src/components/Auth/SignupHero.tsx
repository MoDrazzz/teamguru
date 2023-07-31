import { Review } from '@/components'

const SignupHero = () => {
  return (
    <div className="w-96 rounded-lg flex flex-col justify-between text-primary-50 bg-primary-500 p-8">
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
      <div className="gap-3 grid">
        <Review
          review="Provides an efficient and user-friendly way to track team progress."
          avatarUrl="https://i.pravatar.cc/100"
          name="Joanna Adamska"
          title="CEO"
        />
        <div className="flex gap-2 justify-center">
          <span className="block w-2 h-2 rounded-full bg-green-50" />
          <span className="block w-2 h-2 rounded-full bg-green-50 opacity-50" />
          <span className="block w-2 h-2 rounded-full bg-green-50 opacity-50" />
        </div>
      </div>
    </div>
  )
}

export default SignupHero
