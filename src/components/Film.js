import React, { Component } from 'react'

export default class Film extends Component {
    render() {
        return (
            <div class="container">
			<div class="card">
				<img src="./assets/images/poster1.jpg" alt="Film 1" />
				<div class="card-content">
					<h2 class="card-title">LEAVE NO TRACE</h2>
					<p class="card-details">Year: 2018 | Nation: USA</p>
					<p class="card-description">A father and his thirteen-year-old daughter are living an ideal existence in a vast urban park in Portland, Oregon when a small mistake derails their lives forever.

</p>
				</div>
			</div>
		</div>
        )
    }
}
