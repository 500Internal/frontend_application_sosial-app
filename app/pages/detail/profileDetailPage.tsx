import React from 'react'
import { useParams } from 'react-router';
import BannerProfile from '~/features/profile/components/bannerProfile';

export default function ProfileDetailPage() {
  return (
    <div className='flex justify-center '>
      <BannerProfile />
    </div>
  )
}
