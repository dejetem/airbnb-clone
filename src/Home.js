import React from 'react'
import Banner from './Banner'
import './Home.css'
import Card from './Card.js'

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home_section">
               <Card 
                  src="https://www.bravotv.com/sites/bravo/files/styles/blog-post-embedded--mobile-1_5x/public/2019-05/mauricio-umansky-agency-full-house-05.jpg?itok=9v-VXcfP"
                  title="Modern House Lagos"
                  description="Copyright ownership gives the owner the exclusive right to use the work, with some exceptions. When a person creates an original work, fixed in a tangible medium, he or she automatically owns copyright to the work."
                  price="$300/night"
               />
               <Card 
                  src="https://www.bravotv.com/sites/bravo/files/styles/blog-post-embedded--mobile-1_5x/public/2019-05/mauricio-umansky-agency-full-house-06.jpg?itok=FJc1sh_E"
                  title="Modern House Lekki 1"
                  description="Copyright ownership gives the owner the exclusive right to use the work, with some exceptions. When a person creates an original work, fixed in a tangible medium, he or she automatically owns copyright to the work."
                  price="$180/night"
               />
               <Card 
                  src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PZ325BUIKII6TJEREXPWDR4NYQ.jpg"
                  title="Modern House Lekki 2"
                  description="Copyright ownership gives the owner the exclusive right to use the work, with some exceptions. When a person creates an original work, fixed in a tangible medium, he or she automatically owns copyright to the work."
                  price="$220/night"
               />
            </div>
            <div className="home_section">
               <Card
                  src="https://i0.wp.com/www.forthefrillofit.com/wp-content/uploads/2019/05/forthefrillofit-full-house-house-2019-49.jpg?resize=1000%2C667&ssl=1"
                  title="Modern House Ajah"
                  description="We've seen them captivate an audience and strut across the runway, but how do the stars live when the cameras aren't pointed their way."
                  price="$120/night"
               />
               <Card
                  src="https://i.pinimg.com/736x/40/a4/ab/40a4ab950f5ef3b3c1450fff92389712.jpg"
                  title="Modern House Ikoyi"
                  description="We've seen them captivate an audience and strut across the runway, but how do the stars live when the cameras aren't pointed their way."
                  price="$320/night" 
               />
               <Card 
                  src="https://www.bravotv.com/sites/bravo/files/styles/blog-post-embedded--mobile-1_5x/public/2019-05/mauricio-umansky-agency-full-house-09.jpg?itok=etmilFnD"
                  title="Modern House Bannan Island"
                  description="We've seen them captivate an audience and strut across the runway, but how do the stars live when the cameras aren't pointed their way."
                  price="$280/night"
               />
            </div>
        </div>
    )
}

export default Home
