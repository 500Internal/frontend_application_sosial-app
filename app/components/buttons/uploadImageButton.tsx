import React from 'react'
export type UploadImageButtonProps = {
    defaultImage: string,
    setImage: (image:File) => void
}

export default function UploadImageButton({defaultImage,setImage}:UploadImageButtonProps) {
    const [preview, setPreview] = React.useState("")
    const hadlePreview = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files?.[0]
        if (!file) return
        const url = URL.createObjectURL(file)
        setImage(file)
        setPreview(url)
    }
  return (
    <div>uploadImageButton</div>
  )
}
