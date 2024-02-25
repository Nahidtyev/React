import React from 'react'
import Head from '../Head';
import StoryCard from './story-card';
import "./story.scss"

const Story = () => {
  return (
    <div className="story">
        <Head motto="WHERE WE DO" heading="Success Stories"/>
        <div className="cards">
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>
        </div>

    </div>
  )
}

export default Story;