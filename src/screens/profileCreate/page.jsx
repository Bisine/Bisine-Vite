import React from 'react'
import InfoSlide from '../../CommonComponets/InfoSlide'
import ProfileCreation from './ProfileCreation'

const ProfileCreatePage = () => {
  return (
    <main className='h-screen bg-blue-50 flex p-4'>
        <InfoSlide/>
        <ProfileCreation/>
    </main>
  )
}

export default ProfileCreatePage