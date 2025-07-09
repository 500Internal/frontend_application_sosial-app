// src/pages/notification/page.tsx (jika pakai Next.js Pages Router)
// atau
// src/app/notification/page.tsx (jika pakai App Router)

import React from 'react'
import { Bell, Heart, MessageCircle, UserPlus } from 'lucide-react'

type Notification = {
  id: number
  type: 'like' | 'comment' | 'comment_reply' | 'friend_request'
  message: string
  isRead: boolean
  createdAt: string
}

const dummyNotifications: Notification[] = [
  {
    id: 1,
    type: 'like',
    message: 'Siam menyukai postinganmu',
    isRead: false,
    createdAt: '1 jam lalu',
  },
  {
    id: 2,
    type: 'comment',
    message: 'Ibnu mengomentari postinganmu',
    isRead: true,
    createdAt: '2 jam lalu',
  },
  {
    id: 3,
    type: 'friend_request',
    message: 'Yuda mengirim permintaan pertemanan',
    isRead: false,
    createdAt: '3 jam lalu',
  },
]

function renderIcon(type: Notification['type']) {
  switch (type) {
    case 'like':
      return <Heart className="text-pink-500" size={20} />
    case 'comment':
      return <MessageCircle className="text-blue-500" size={20} />
    case 'comment_reply':
      return <MessageCircle className="text-green-500" size={20} />
    case 'friend_request':
      return <UserPlus className="text-yellow-500" size={20} />
    default:
      return <Bell size={20} />
  }
}

export default function NotificationPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-4">Notifikasi</h1>

      <div className="space-y-3">
        {dummyNotifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-center gap-3 p-3 rounded-lg ${
              notif.isRead ? 'bg-gray-100' : 'bg-blue-50'
            }`}
          >
            {renderIcon(notif.type)}
            <div className="flex-1">
              <p className="text-sm">{notif.message}</p>
              <span className="text-xs text-gray-500">{notif.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
