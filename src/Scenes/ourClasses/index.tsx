import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
import { ClassType } from "@/shared/types";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "This low-impact workout emphasizes proper posture and alignment, making it suitable for all fitness levels.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Find your balance with our various yoga classes, including Hatha, Vinyasa, and Yin Yoga. ",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Push your limits with our HIIT classes, consisting of short bursts of intense exercise followed by periods of rest.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Join us for a fun and energetic dance workout that combines Latin and international music with easy-to-follow dance moves",
    image: image4,
  },
  {
    name: "Fitness Training Classes",
    // description:"Lorem ipsum dolor sit amet, consectetur adios llama laboris nisi ut aliquip ex ea commodo consequat",
    image: image5,
  },
  {
    name: " Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adios llama laboris nisi ut aliquip ex ea commodo consequat",
    image: image6,
  },
];

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40" id="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -70 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              At Swinny Gym, we believe in providing a holistic approach to
              fitness. Our diverse range of classes are designed to cater to all
              fitness levels, whether you’re a beginner to start your fitness or
              an experienced athlete seeking to challenge yourself. Explore our
              exciting offerings and find the perfect fit for your goals!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
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
  );
};

export default OurClasses;
