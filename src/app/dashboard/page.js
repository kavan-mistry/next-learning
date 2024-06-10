"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import '../globals.css'

function page() {

  const router = useRouter();

  const route = () => {
    router.push('/')
  }

  const [count, setCount] = useState(0)

  return (
    <>

        <div class="container">
          <h1>
            Main dashboard
          </h1>
        </div>

        <div class="container">
          <p>You clicked {count} times</p>
          <button class="btn btn-warning" onClick={() => setCount(count + 1)}>Click me</button>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
          integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
          crossorigin="anonymous"></script>

    </>
  )
}

export default page
