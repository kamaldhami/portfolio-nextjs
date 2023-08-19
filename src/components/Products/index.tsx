import { Raleway } from "next/font/google"
import Card from "../ProductCard"

const raleway = Raleway({
    weight: ['500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

var imgArr = [
    '/daniel.jpg',
    '/dugba.jpg',
    '/erik.jpg'
]

export default function OneProduct() {


    return (
        <div className="container-fluid bg-white py-5" id="features">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-10 d-flex justify-content-center">
                    <div className={raleway.className}>One Product Three Solutions</div>
                </div>
            </div>

            <div className="row py-4 px-5">
                {imgArr.map((a, i) => (
                    <Card img={a} key={i}/>
                ))}
            </div>
        </div>
    )
}