import React, { useState } from 'react'
import { Raleway } from "next/font/google"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'
import { IconContext } from "react-icons";
import styles from './social.module.css'
import { useRouter } from 'next/router'

const raleway = Raleway({
  weight: ['500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})



export default function Social() {
  const router = useRouter()

  const handleRedirect = (url: string) => {
    router.push(url)
  }

  let links = [
    <FaLinkedin key={1} onClick={() => handleRedirect('https://in.linkedin.com/in/kamal-dhami-485464163?trk=people-guest_people_search-card')} />,
    <FaGithub key={2} onClick={() => handleRedirect('https://github.com/kamaldhami')} />,
    <FiMail key={3} onClick={() => handleRedirect("mailto: kamaldhami741@gmail.com")} />
  ]

  return (
    <div id='stack'>
      <div className='container py-5'>
        <div className='row d-flex justify-content-center'>
          <div className={`col-6 d-flex justify-content-center ${raleway.className}`}>
            Social Links
          </div>
        </div>

        <div className='row py-5 '>
          {links.map((l, i) => (
            <div className='col-4 d-flex justify-content-center position-relative' key={i}>
              <IconContext.Provider value={{ className: styles["shared-class"], size: '70' }}>
                {l}
              </IconContext.Provider>
              {/* <div className='position-absolute stack-iframe'> */}
              {/* {open & i == index ? ( */}
              {/* <iframe src="https://github.com/kamaldhami" className='iframe-fix' /> */}
              {/* ) : ''} */}
              {/* </div> */}

            </div>
          ))}

        </div>

      </div>
    </div>
  )
}
