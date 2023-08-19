import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';


export default function Parallax() {
    const divRef = useRef(null);
    const [inViewport, setInViewport] = useState(false);

    useEffect(() => {
        const div = divRef.current;

        if (!div) return;

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setInViewport(true);
                } else {
                    setInViewport(false);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        });

        observer.observe(div);

        return () => {
            if (observer && observer.unobserve) {
                observer.unobserve(div);
            }
        };
    }, []);


    const divClassName = inViewport ? `nameText position-absolute` : '';

    return (
        <div>
            <div
                style={{
                    background: 'url("/Images/main.jpg")',
                    height: '100vh',
                    minHeight: '500px',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            />

            <div style={{ height: '70vw', fontSize: "36px" }} className='position-relative' ref={divRef} >
                <Image src='/Images/apple.jpg' sizes='100vw' width={0} height={0} style={{ width: '100vw', height: '70vw' }} alt='Par'/>
                <div className={divClassName} />
            </div>


        </div>
    )
}
