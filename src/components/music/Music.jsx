import Iframe from "react-iframe";
import "./music.css";

export const Music = () => {
	return (
	<div style={{height: "65.6rem"}} className="flex justify-center bg-slate-400">
		<div className="flex justify-center">
			<Iframe
		          className="songs"
		          url="https://open.spotify.com/embed/playlist/2CvFcxANy3zBtMEZG1CzWP?theme=0"
			  allow="encrypted-media"
		          position="relative"
	        	/>
		</div>

		<div className="flex justify center">
			<Iframe
		          className="songs"
		          url="https://open.spotify.com/embed/playlist/6B1gjdNP4EqaWqnemacYu9?theme=0"
			  allow="encrypted-media"
		          position="relative"
	        	/>
		</div>
	</div>
	);
};

