import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import ScrollButton from '../components/ScrollButton'
import Footer from '../components/Footer'

function LandingPage() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="overflow-y-scroll">
                {/* Your content here */}
                <ScrollButton />
            </div>
            <div>
                <Main />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage
