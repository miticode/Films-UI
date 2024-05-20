import React from "react";
export default function FilmPresentation({ films }) {
    return (
        <div className="container">
            {films.map((films) => (
                <div class="card">
                    <img src={films.image} alt="Film 1" />
                    <div class="card-content">
                        <h2 class="card-title">{films.name}</h2>
                        <p class="card-details">Year: {films.year} | Nation: {films.nation}</p>
                        <button>Watch now</button>
                    </div>
                </div>
            ))}
        </div>
    )
}