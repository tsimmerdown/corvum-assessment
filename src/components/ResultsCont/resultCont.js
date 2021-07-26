import React, { useState, useEffect } from "react";
import "./resultsCont.css"
import { motion } from "framer-motion"

const ResultCont = (props) => {

    const [show, setShow] = useState(false);
    const [disable, setDisable] = useState(false);

    const nominationHandler = () => {
        props.setNominationArr(
            [...props.nominationArr,
            {
                title: props.result.Title,
                year: props.result.Year,
                id: props.result.imdbID
            }
            ]
        )
    }

    useEffect(() => {
        const disableHandler = () => {
            if (props.nominationArr.length < 5) {
                for (let i = 0; i < props.nominationArr.length; i++) {
                    if (props.nominationArr[i].id === props.result.imdbID) {
                        setDisable(true);
                        return
                    }
                }
                setDisable(false);
            } else {
                setDisable(true);
            }
        }
        disableHandler();
    }, [props.nominationArr, props.result.imdbID])

    return <div className="cont"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
    >
        {
            props.result.Poster !== "N/A" ?
                <motion.div className="movieImg"
                    whileHover={{
                        opacity: 0.3,
                        transition: { ease: "easeOut", duration: 0.3 }
                    }}
                    style={{ backgroundImage: `url(${props.result.Poster})` }} />
                : <div className="noMovieImg" />
        }
        {show && <motion.div className="movie-hover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.3 }}>
            <div className="movie-text">
                <h2>{props.result.Title}</h2>
                <p>Year of Release: {props.result.Year}</p>
            </div>
            {!disable &&
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "1px 1px 3px rgba(255, 255, 255, 0.7), -1px -1px 3px rgba(255, 255, 255, 0.7)",
                        transition: { ease: "easeOut", duration: 0.3 }
                    }}
                    whileTap={{
                        scale: 0.8
                    }}
                    onClick={() => {
                        nominationHandler()
                    }}
                >
                    Nominate
                </motion.button>
            }
        </motion.div>
        }
    </div>
}

export default ResultCont;