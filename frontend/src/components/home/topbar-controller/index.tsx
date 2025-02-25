import LocationController from '@components/home/topbar-controller/LocationController'
import UserController from '@components/home/topbar-controller/UserController'

export default function TopbarController() {
  return (
    <div className='fixed top-0 z-10 flex justify-between w-full p-4 sm:w-[37.5rem]'>
      <LocationController />
      <UserController />
    </div>
  )
}
