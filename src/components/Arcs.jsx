import React from 'react';
import './Arcs.css';

const Arcs = () => {
    const arcs = [
        { name: "Romance Dawn", desc: "Beginning of Luffy’s journey and formation of the Straw Hat crew" },
        { name: "Arlong Park", desc: "Establishes emotional depth and crew loyalty" },
        { name: "Arabasta", desc: "First major war and clash with a Warlord" },
        { name: "Skypiea", desc: "Expands world lore and introduces ancient mysteries" },
        { name: "Water 7 / Enies Lobby", desc: "Crew crisis, government conflict, and power growth" },
        { name: "Thriller Bark", desc: "Introduction of key lore and crew expansion" },
        { name: "Sabaody Archipelago", desc: "Turning point showing the true power of the world" },
        { name: "Marineford", desc: "Largest war in the series and major world shift" },
        { name: "Fish-Man Island", desc: "Themes of discrimination and inherited will" },
        { name: "Dressrosa", desc: "Overthrow of a tyrant and rise of the Worst Generation" },
        { name: "Whole Cake Island", desc: "Yonko conflict and Sanji’s character arc" },
        { name: "Wano Country", desc: "Fall of an Emperor and major lore revelations" },
        { name: "Egghead", desc: "Beginning of the Final Saga and world-changing truths" },
        { name: "Elbaf", desc: "The long-awaited land of the giants that reveals ancient lore and plays a crucial role in the Final Saga of One Piece." }
    ];

    return (
        <div className="arcs-container">
            <h1 className="arcs-header">One Piece Map</h1>

            <div className="map-container">
                <img src="/images/onepiece map.jpg" alt="One Piece World Map" className="world-map" />
            </div>

            <h3 className="arcs-subheader">One Piece Arcs</h3>
            <div className="arcs-grid">
                {arcs.map((arc, index) => (
                    <div key={index} className="arc-card">
                        <div className="arc-number">{index + 1}</div>
                        <div className="arc-content">
                            <h3>{arc.name}</h3>
                            <p>{arc.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Arcs;
