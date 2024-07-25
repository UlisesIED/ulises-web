/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { english, spanish } from '@ulises/constants/lenguages';
import { useEffect, useState } from 'react';
import { ImagePrincipal, Left_size, Links, MessageHome } from '../components/home';

export default function Home() {
  const [tongue, setTongue] = useState(1)
  const languages = [english, spanish]
  const [language, setLanguage] = useState(languages[1])
  useEffect(() => {
    setLanguage(languages[tongue])
  }, [tongue])
  if (!language) return null

  return (
    <main className="min-h-screen items-center mx-auto py-24 px-5 max-w-[1250px]">
      <div className="
          h-[80vh]
          pcXs:h-auto
          flex
          pc:flex-row
          pcXs:flex-col
        "
      >
        <div className="
          flex
          flex-col
          w-5/12
          pcXs:w-full
          md:p-7 
          sm:p-4
          justify-center
        ">
          <MessageHome language={language} />
          <ImagePrincipal />
          <Links language={language} />
        </div>
        <div
          className='
            opacity-0
            h-auto
            w-full
            ml-8
            pcXs:ml-0
            pcXs:h-[50vh]
            bg-[#2E2F2F]
            rounded-[1.5rem]
            border-4
            border-[#CDDDDD]
            p-5
            overflow-y-auto
            overflow-hidden
            no-scrollbar
            animate-fade-in-3.4
          '
          style={{ borderStyle: 'groove' }}
        >
          <Left_size language={language} />
        </div>
      </div>
    </main>
  );
}