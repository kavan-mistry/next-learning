"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './globals.css'

function page() {

  const router = useRouter();

  const route = () => {
    router.push('/dashboard')
  }

  return (
    <>
      
      <h1 class="text-rainbow-animation container-fluid">Kavan Mistry</h1>

    </>
  )
}

export default page
