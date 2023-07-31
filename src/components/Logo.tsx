const Logo = () => {
  return (
    <div className="flex gap-2 sm:gap-3 justify-center items-center">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-b from-primary-500 to-primary-600 grid place-items-center">
        <span className="text-primary-50 sm:text-lg text-sm font-semibold">TG</span>
      </div>
      <span className="sm:text-2xl text-lg font-semibold">TeamGuru</span>
    </div>
  )
}

export default Logo
