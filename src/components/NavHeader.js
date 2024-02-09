import { Component } from 'react';

export default function NavHeader(){
	const header = {
		div:{
			listStyleType: "none", 
			display: "flex",
			flexDirection: "row",
			textDecoration: "none",
		},
		a:{
			color: "white",
			textDecoration: "none",
			display: "flex", 
			justifyContent: "center",
			alignItems: "center",
			height: "5em"

		}, 
		sidemenu:{
			flex: 0.08
		}, 

	}

	return( 
		<nav>
			<div style={header.div} >
			<li style={{flex: 1, backgroundColor: "#4782b4"}}><a href="#" style={header.a}>TRILHAS</a></li>	

			<li style={{flex: 1, backgroundColor: "#2197f0"}}><a href="#" style={header.a}>HOME</a></li>	
			<li style={{flex: 1, backgroundColor: "#020090"}}><a href="#" style={header.a}>BLOG</a></li>
			<div style={header.sidemenu}>
			<a href="#">
			<svg style={{margin: "0.1em" }}

		xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">

			
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			
			</svg>
			</a>
			</div>
			</div>	
		</nav>
	);
}
