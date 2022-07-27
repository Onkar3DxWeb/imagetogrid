import React from 'react'
import img from '../img/1.jpg'
import '../components/Home.css'
import { motion } from 'framer-motion'
import Afterclick from './Afterclick'

const Home = () => {

    const main_bg = {
        visible: { y: 0, opacity: 1 },
        hidden: { opacity: 1, backgroundColor: '#ffffff' },
        transition:{
            delay: 2
        }
    }

    const main_image = {
        visible: { y: 0, opacity: 1 },
        animate: {
            y: 0, opacity: 1, scale: 0.2,
            transition: {
                delay:2,
                duration: 5,
            },
        }
    }

    const word1 = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay:2,
                duration: 5,
            },
        },
    }

    const word2 = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay:2,
                duration: 5,
            },
        },
    }
    return (
        <div>
            <motion.div variants={main_bg} initial="visible" animate="hidden" transition={{duration:5}} className="content">
                <div className="content__item">
                    <motion.div variants={main_image} initial="visible" animate="animate" className="content__item-img"><img src={img} alt="" /></motion.div>
                    <h2 className="content__item-title">
                        <motion.span variants={word1} initial="visible" animate="hidden">Siobhan</motion.span>
                        <motion.span variants={word2} initial="visible" animate="hidden">O'dwaya</motion.span>
                    </h2>
                    <button className="content__enter unbutton button-circle">
                        <motion.span
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{delay:3}}
                            className="button-circle__text"><span data-text="Enter">Enter</span></motion.span>
                        <svg className="button-circle__deco" viewBox="0 0 100 100">
                            <motion.circle
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{delay:3}}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} vector-effect="non-scaling-stroke" cx="50" cy="50" r="48" />
                        </svg>
                    </button>
                </div>
                
            </motion.div>
            
          <Afterclick/>
        </div>
    )
}

export default Home