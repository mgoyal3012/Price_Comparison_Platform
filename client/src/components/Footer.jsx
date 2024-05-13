import React from 'react'

export default function Footer() {
  const currentYear=new Date().getFullYear()
  return (
    <footer className='bg-pink-500 text-white py-3'>
        <div className='container mx-auto text-center'>
          <p className='text-sm'>Iris &copy; {currentYear}</p>
        </div>
    </footer>
  )
}
