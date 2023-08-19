import React from 'react'
import { Raleway } from "next/font/google"
import Image from 'next/image'
import styles from './card.module.css'
const raleway = Raleway({
  weight: ['500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Card({ img }) {
  return (
    <div className='col-6 py-lg-0 py-md-0 col-xl-4 col-lg-4 d-flex justify-content-center'>
      <div className={`${styles["card"]} position-relative w-75 py-4 py-lg-0 py-xl-0`}>
        <Image src={'/Images' + img}
          className={styles["card-img-top"]}
          alt="image"
          sizes='100vw'
          width={0}
          height={0}
          style={{ width: '100%',height:'100%' }}
          loading="lazy"
        />
        <div className={`${styles['card-title']} position-absolute text-white d-flex align-items-center justify-content-center ${raleway.className}`}>
          Card title
        </div>

      </div>
    </div>
  )
}
