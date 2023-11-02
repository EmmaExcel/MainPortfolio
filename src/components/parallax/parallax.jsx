import { motion ,useScroll,useTransform} from "framer-motion"
import "./parallax.css"
import { useRef } from "react"

export const Parallax = () => {

  const ref = useRef();
  const {scrollYProgress}= useScroll({
    target:ref,
    offset:["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0,1], ["-100%", "500%"])
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"])
  return (
    <>
        <section ref={ref} className="parallax">
            <div className="parallaxContainer">
            <motion.h1 style={{y: yText }} className="h1">WHO AM I ?</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets"></motion.div>
            <motion.div className="stars"></motion.div>
            </div>
        </section>
    </>
  )
}
