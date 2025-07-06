import React from 'react'
import { useParams } from 'react-router';

export default function ProfileDetailPage() {
  const { profileId } = useParams();
  return (
    <div>profileDetailPage {profileId}</div>
  )
}
