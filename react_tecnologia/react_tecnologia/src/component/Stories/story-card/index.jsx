import React from 'react'
import "./story-card.scss"

const StoryCard = () => {
  return (
    <div className="card">
        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Insurance-1024x743.jpg" alt="" />
        <span>CLOUD HOSTING</span>
        <h3>Major Insurance Provider Saves $750k per Month With Big Data Migration</h3>
        <p>The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.</p>
        <div className="serv">
            <span>Modern Infrastructure</span>
            <span>Colsulting Services</span>
        </div>
        <span className='learn'>Learn More</span>
    </div>
  )
}

export default StoryCard;