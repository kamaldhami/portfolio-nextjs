import Image from 'next/image';
import { useState } from 'react';
import styles from './Carousel.module.css'

export default function Carousel() {
    const [inViewport, setInViewport] = useState<boolean>(true);
    const divClassName = inViewport ? `${styles['nameText']} position-absolute` : '';



    return (
        <div className={`container-fluid p-0`}>

            <div className="row">
                <div className="col-12">
                    <div className={styles["main-div"]}>
                        <Image
                            src="/Images/apple.jpg"
                            quality={80}
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%' }}
                            className={styles['main-div']}
                            alt='main' />
                        <div className={divClassName} />
                    </div>
                </div>
            </div>
        </div>
    )
}