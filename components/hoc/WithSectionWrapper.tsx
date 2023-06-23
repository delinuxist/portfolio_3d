import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../utils/style';
import { staggerContainer } from '../utils/motion';

interface WithSectionWrapperProps {
  pageId: string;
}

const withSectionWrapper = <P extends object>(Component: React.ComponentType<P>) =>
  class WithSectionWrapper extends React.Component<& WithSectionWrapperProps> {
    render() {
      return (
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
          <span className='hash-span' id={this.props.pageId}>&nbsp;</span>
          <Component {...this.props as P} />
        </motion.section>
      )
    }
  }


export default withSectionWrapper;