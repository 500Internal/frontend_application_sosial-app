import React from 'react'
import { useParams } from 'react-router';
import { useGetProfileByParams } from '../hooks/useGetProfileByParams';
import { Label } from 'shared/shadcn/label';

export default function InfoProfileCardContent() {
    const {profileId} = useParams();
    const {data: profile} = useGetProfileByParams(profileId!);
  return (
    <section>
        <div>
            <div>
                <Label className='text-lg text-white/85 font-semibold'>Name</Label>
                <p className='text-sm px-4  text-white/60 whitespace-pre-wrap break-words break-all text-left'>{profile?.data.name}</p>
            </div>
            <div>
                <Label className='text-lg text-white/85 font-semibold'>Bio</Label>
                <p className='text-sm px-4  text-white/60 whitespace-pre-wrap break-words break-all text-left'>{profile?.data.bio || "-"}</p>
            </div>
            <div>
                <Label className='text-lg text-white/85 font-semibold'>Negara</Label>
                <p className='text-sm px-4  text-white/60 whitespace-pre-wrap break-words break-all text-left'>{profile?.data.negara || "-"}</p>
            </div>
            <div>
                <Label className='text-lg text-white/85 font-semibold'>Kota</Label>
                <p className='text-sm px-4  text-white/60 whitespace-pre-wrap break-words break-all text-left'>{profile?.data.kota || "-"}</p>
            </div>
            <div>
                <Label className='text-lg text-white/85 font-semibold'>Pekerjaan</Label>
                <p className='text-sm px-4  text-white/60 whitespace-pre-wrap break-words break-all text-left'>{profile?.data.pekerjaan || "-"}</p>
            </div>
            <div>
                <Label className='text-lg text-white/85 font-semibold'>Website</Label>
                <p className='text-sm px-4  text-white/60 whitespace-pre-wrap break-words break-all text-left'>{profile?.data.website || "-"}</p>
            </div>
        </div>
    </section>
  )
}
