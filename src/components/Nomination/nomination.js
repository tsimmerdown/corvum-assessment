import React, { useState } from "react";
import "./nomination.css"
import { motion } from "framer-motion"

const Nomination = (props) => {

    const [showClose, setShowClose] = useState(false);

    const removeNominations = () => {
        var newArr = props.nominationArr.filter(nomination => nomination.id !== props.nomination.id)
        props.setNominationArr(newArr)
    }

    return <motion.div className="nomination-cont"
        onMouseEnter={() => setShowClose(true)}
        onMouseLeave={() => setShowClose(false)}
        whileTap={{
            scale: 0.7
        }}
    >
        {`${props.nomination.title} (${props.nomination.year})`}
        {showClose && <motion.div className="close-cont" 
            onClick={() => {
                removeNominations();
            }}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ease: "easeOut", duration: 0.3 }}
        />}
    </motion.div>
}

export default Nomination;