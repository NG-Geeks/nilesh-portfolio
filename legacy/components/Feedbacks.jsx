import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { github } from "../assets";
import { driv } from "../assets";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  description,
  company,
  image,
}) => (
  // <motion.div
  //   variants={fadeIn("", "spring", index * 0.5, 0.75)}
  //   className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  // >
  //   <p className='text-white font-black text-[48px]'>"</p>

  //   <div className='mt-1'>
  //     <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

  //     <div className='mt-7 flex justify-between items-center gap-1'>
  //       <div className='flex-1 flex flex-col'>
  //         <p className='text-white font-medium text-[16px]'>
  //           <span className='blue-text-gradient'>@</span> {name}
  //         </p>
  //         <p className='mt-1 text-secondary text-[12px]'>
  //           {designation} of {company}
  //         </p>
  //       </div>

  //       <img
  //         src={image}
  //         alt={`feedback_by-${name}`}
  //         className='w-10 h-10 rounded-full object-cover'
  //       />
  //     </div>
  //   </div>
  // </motion.div>
  <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-6xl sm:w-[360px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(company, "_blank")}
            className='black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={driv}
              alt='source code'
              className='w-9 h-19 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      {/* <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div> */}
    </Tilt>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-4xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>My Journey</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Certifications.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingN} -mt-20 pb-14  flex flex-wrap gap-10`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
