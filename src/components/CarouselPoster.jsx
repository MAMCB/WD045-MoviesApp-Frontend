import React from "react";
import { Carousel } from "flowbite-react";
import Fargo from "../assets/fargo2.avif";
import HarryPotter from "../assets/hp2.jpg";
import FindingNemo from "../assets/finding-nemo.jpg";
import Departed from "../assets/departed1.jpg";


function CarouselPoster() {
	return (
		
		<div className="mb-14 mt-5 h-56 sm:h-64 xl:h-80 2xl:h-96">
			<Carousel>
				<img className="object-cover w-full h-full" src={FindingNemo} alt="findingnemo-poster" />
				<img className="object-cover w-full h-full" src={HarryPotter} alt="harrypotter-poster" />
				<img className="object-cover w-full h-full" src={Fargo} alt="fargo-poster" />
				<img className="object-cover w-full h-full" src={Departed} alt="departed-poster" />

			</Carousel>
		</div> 
		/*

		<div className="mb-9 mt-5 h-56 sm:h-64 xl:h-80 2xl:h-96">
		<Carousel>
			<div className="w-full h-full flex items-center justify-center">
				<img className="max-h-full max-w-full" src={FindingNemo} alt="findingnemo-poster" />
			</div>
			<div className="w-full h-full flex items-center justify-center">
				<img className="max-h-full max-w-full" src={HarryPotter} alt="harrypotter-poster" />
			</div>
			<div className="w-full h-full flex items-center justify-center">
				<img className="max-h-full max-w-full" src={Fargo} alt="fargo-poster" />
			</div>
			<div className="w-full h-full flex items-center justify-center">
				<img className="max-h-full max-w-full" src={IngloriousBasterds} alt="IngloriousBasterds-poster" />
			</div>
			<div className="w-full h-full flex items-center justify-center">
				<img className="max-h-full max-w-full" src={Titanic} alt="titanic-poster" />
			</div>
		</Carousel>
		</div> 

		<div className="mb-9 mt-5 h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <div className="w-full h-full bg-center" style={{backgroundSize: 'contain', backgroundImage: `url(${FindingNemo})`}} />
                <div className="w-full h-full bg-center bg-cover" style={{backgroundImage: `url(${HarryPotter})`}} />
                <div className="w-full h-full bg-center bg-cover" style={{backgroundImage: `url(${Fargo})`}} />
                <div className="w-full h-full bg-center" style={{backgroundSize: 'contain', backgroundImage: `url(${IngloriousBasterds})`}} />
                <div className="w-full h-full bg-center bg-cover" style={{backgroundImage: `url(${Titanic})`}} />
            </Carousel>
        </div>
		

		<div className="mb-9 mt-5 h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <div className="w-full h-full bg-center" style={{backgroundSize: 'contain', backgroundImage: `url(${FindingNemo})`, backgroundRepeat: 'no-repeat'}} />
                <div className="w-full h-full bg-center bg-cover" style={{backgroundImage: `url(${HarryPotter})`, backgroundRepeat: 'no-repeat'}} />
                <div className="w-full h-full bg-center bg-cover" style={{backgroundImage: `url(${Fargo})`, backgroundRepeat: 'no-repeat'}} />
                <div className="w-full h-full bg-center" style={{backgroundSize: 'contain', backgroundImage: `url(${IngloriousBasterds})`, backgroundRepeat: 'no-repeat'}} />
                <div className="w-full h-full bg-center bg-cover" style={{backgroundImage: `url(${Titanic})`, backgroundRepeat: 'no-repeat'}} />
            </Carousel>
        </div>
		*/



	);
}
export default CarouselPoster;
