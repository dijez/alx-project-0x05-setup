import Link from "next/link";


const Footer: React.FC = () => {

    return(
        <footer>
            <div>
                <h1>
                    Image Generation App
                </h1>
                <p>
                    © {new Date().getFullYear()}. All rights reserved.
                </p>
                <div>
                    <Link href="#"> Privacy Policy</Link>
                    <Link href="#">Terms of Service</Link>
                    <Link href="#"> Contact Us</Link>
                </div>
            </div>
        </footer>
    )
}


export default Footer