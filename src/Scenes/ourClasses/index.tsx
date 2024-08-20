import { SelectedPage } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './Class';
import { ClassType } from '@/shared/types';

const classes:Array<ClassType> =[
    {
        name:"Weight Training Classes",
        description:"Lorem ipsum dolor sit amet, consectetur adios llama laboris nisi ut aliquip ex ea commodo consequat",
        image:image1,
    },
     {
        name:"Yoga Classes",
        // description:"Lorem ipsum dolor sit amet, consectetur adios llama laboris nisi ut aliquip ex ea commodo consequat",
        image:image2,
    },
     {
        name:"Ab Core Classes",
        description:"Lorem ipsum dolor sit amet, consectetur adios llama laboris nisi ut aliquip ex ea commodo consequat",
        image:image3,
    },
    {
        name:"Adventure Classes",
        description:"Lorem ipsum dolor sit amet, consectetur adios llama laboris nisi ut aliquip ex ea commodo consequat",
        image:image4,
    },
    {
        name:"Fitness Training Classes",
        // description:"Lorem ipsum dolor sit amet, consectetur adios llama laboris nisi ut aliquip ex ea commodo consequat",
        image:image5,
    },
    {
        name:" Training Classes",
        description:"Lorem ipsum dolor sit amet, consectetur adios llama laboris nisi ut aliquip ex ea commodo consequat",
        image:image6,
    },
    

]




interface Props {
    setSelectedPage: (value:SelectedPage) => void
    
}

const OurClasses = ({setSelectedPage}: Props) => {
    return (
       <section className='w-full bg-primary-100 py-40' id='ourclasses'>
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
           <motion.div 
           className='mx-auto w-5/6' 
            initial="hidden"
                     whileInView='visible'
                     viewport={{once:true, amount:0.4}}
                     transition={{duration:0.7}}
                     variants={{
                        hidden:{opacity:0, x:-70 },
                        visible:{opacity:1, x:0 },

                    }}
           >
            <div className='md:w-3/5'>
                <HText>OUR CLASSES</HText>
                <p className='py-5'>dksjksjksjdksj sdskjdksjdk dskdksjdksd kjdksjdks kjak djkjdak ajakjsakj ajdkjakd
                    akjdakjd akdakjdakjd adkajdkan jdkajdkajd akjdkajdka adkajdkajd adakjdakjd adjkajdkaj
                    jdakdakjdka akdkajdkajdk adajkjdak ghhhhhhhhhhhhhhhhhhhhhhhhc hghhgh ghghghgh hghghghgh hghghghgh
                    vvghghg ghghghgh hghghghgh hghghghghv ghghghghghigghil ygygyihvivffvtfkhv ggftcfgygyg  gyygyftfyy
                </p>
                </div>
            </motion.div> 
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item: ClassType, index)=>(
                        <Class 
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        />
                    ))}

                </ul>
            </div>
        </motion.div>

       </section>
    )
}

export default OurClasses
