import React from 'react'
import { Card, CardContent } from 'shared/shadcn/card'
import InfoProfileCardContent from './infoProfileCardContent'

export default function InfoProfileCard() {
  return (
    <Card className="bg-[#1d232a] border-0 mt-4 rounded-sm shadow-lg">
        <CardContent>
            <InfoProfileCardContent />
        </CardContent>
    </Card>
  )
}
