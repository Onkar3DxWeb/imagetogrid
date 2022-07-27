import React from 'react'
import {motion} from 'framer-motion'
import img2 from '../img/2.jpg'
import img3 from '../img/2.jpg'
import img4 from '../img/2.jpg'
import img5 from '../img/2.jpg'
import img6 from '../img/2.jpg'
import img7 from '../img/2.jpg'
import img8 from '../img/2.jpg'
import img9 from '../img/2.jpg'
import img10 from '../img/2.jpg'
import img11 from '../img/2.jpg'
import img12 from '../img/2.jpg'
import "../components/Afterclick.js"



const Afterclick = () => {
    
	const image1 = {
		hidden: { y: -40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
			
            transition: {
                duration: 5,
            },
        },
	}

  return (
    <div className="grid">
				<h2 className="grid__item grid__item--title">
					<span>Siobhan</span>
					<span>O'dwaya</span>
				</h2>
				<div className="grid__item grid__item--back"><button className="button-back unbutton"><svg width="100px" height="18px" viewBox="0 0 50 9"><path vector-effect="non-scaling-stroke" d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path></svg></button></div>
				<motion.div variants={image1} initial="hidden" animate="visible" className="grid__item" >
					<img className="grid__item-img" src={img2} alt="Carrutha Method"/>
					<h3 className="grid__item-title oh"><span className="oh__inner">Carrutha Method</span></h3>
				</motion.div>
				<div className="grid__item" >
                <img className="grid__item-img" src={img3}/>
					<h3 className="grid__item-title oh"><span className="oh__inner">Maria Coluga</span></h3>
				</div>
				<div className="grid__item" >
                <img className="grid__item-img" src={img4}/>
					<h3 className="grid__item-title grid__item-title--above oh"><span className="oh__inner">Gabeta Quest</span></h3>
				</div>
				<div className="grid__item" >
                <img className="grid__item-img" src={img5}/>
					<h3 className="grid__item-title oh"><span className="oh__inner">Lithera Britta</span></h3>
				</div>
				<div className="grid__item grid__item--target" >
                <img className="grid__item-img" src={img6}/>
					<h3 className="grid__item-title oh"><span className="oh__inner">Franka Oumata</span></h3>	
				</div>
				<div className="grid__item" >
                <img className="grid__item-img" src={img7}/>
					<h3 className="grid__item-title oh"><span className="oh__inner">Manata Poly</span></h3>
				</div>
				<div className="grid__item" >
                <img className="grid__item-img" src={img8}/>
					<h3 className="grid__item-title oh"><span className="oh__inner">Ghata Manabra</span></h3>
				</div>
				<div className="grid__item" >
					<img className="grid__item-img" src={img9}/>
					<h3 className="grid__item-title oh"><span className="oh__inner">Tamara Shubaya</span></h3>
				</div>
				<div className="grid__item" >
                <img className="grid__item-img" src={img10}/>
					<h3 className="grid__item-title oh"><span className="oh__inner">Linda Christa</span></h3>
				</div>
				<div className="grid__item" >
                <img className="grid__item-img" src={img11}/>
					<h3 className="grid__item-title oh"><span className="oh__inner">Daniela Walters</span></h3>
				</div>
				<div className="grid__item" >
				<img className="grid__item-img" src={img12}/>
					<h3 className="grid__item-title oh"><span className="oh__inner">Maria Del Mar</span></h3>
				</div>
			</div>
  )
}

export default Afterclick