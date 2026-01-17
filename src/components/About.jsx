import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-header">GOAT OF ANIME</h1>

            <div className="video-wrapper">
                <iframe
                    width="540"
                    height="305"
                    src="https://www.youtube.com/embed/gt61WFQ-Uu0?si=fgX18cuX6QuGxKqD"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="about-info">
                <h2>The Legend of the Pirate King</h2>
                <p>
                    Witness the journey that redefined the genre. One Piece is not just an anime; it's an odyssey of freedom, dreams, and adventure.
                    This video captures the essence of why it stands at the pinnacle of storytelling.
                </p>
            </div>

            <div className="about-info" style={{ marginTop: '30px' }}>
                <p>
                    One Piece is a legendary Japanese anime created by Eiichiro Oda that follows Monkey D. Luffy on his journey to become the King of the Pirates by finding the mysterious treasure known as the One Piece.
                    Set in a vast world of oceans, islands, and unique cultures, the story is celebrated for its exceptional world-building and long-term storytelling. The series features a diverse cast of characters, each with deep backstories, personal dreams, and emotional growth. 
                    Power systems such as Devil Fruits and Haki add strategic depth to battles, while major themes like freedom, friendship, inherited will, and justice drive the narrative forward. One Piece balances action, humor, and emotional moments, often addressing serious topics such as oppression, corruption, and sacrifice. 
                    Its intricate lore, including the Void Century and the Will of D, keeps audiences engaged with ongoing mysteries. Spanning decades, the anime has influenced global pop culture and inspired millions of fans worldwide.
                    With its consistent character development, epic adventures, and powerful messages, One Piece stands as one of the greatest and most impactful anime series of all time.
                </p>
            </div>
        </div>
    );
};

export default About;
