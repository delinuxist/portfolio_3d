'use client'
import { motion } from 'framer-motion'
import { styles } from './utils/style'
import { services } from '../core/constants'
import { fadeIn, textVariant } from './utils/motion'
import withSectionWrapper from './hoc/WithSectionWrapper'
import { ServiceCard } from './cards'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.div variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci dolores dicta obcaecati suscipit temporibus, consectetur eaque maiores vitae. Magni, ipsa accusantium dolores inventore quibusdam, ex voluptas doloribus sequi eligendi tempora asperiores deserunt et architecto eaque aliquam neque soluta facere nisi ad quas nesciunt magnam? Quae aliquam non repellendus vitae a illo quod dolore mollitia amet perferendis, reiciendis deleniti suscipit, at voluptatibus. Minus porro adipisci alias beatae impedit assumenda consequatur deserunt at magni. Tempore reiciendis voluptatem quidem dolorum vero tenetur qui aut quae quos vitae, omnis doloribus optio aliquid! Illo quisquam facere cumque. Eius velit assumenda rerum ipsam perferendis deleniti?
      </motion.div>
      <div className='flex flex-wrap gap-10 mt-20 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default withSectionWrapper(About);