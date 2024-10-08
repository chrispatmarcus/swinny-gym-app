import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "state of the art Facilities",
    description:
      "Include cutting edge exercise equipment, such as advanced cardio machines, free weights,and strenght.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "state of luxury",
    description:
      "luxurious locker rooms, saunas, steam rooms, and recovery zones with massage chairs or crotherapy",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "We offer a variety of group fitness classes, like yoga,spinning and HIIT led by certified trainers",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <div>
      <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
          {/* HEADER SECTION */}
          <div>
            <HText>MORE THAN JUST A GYM.</HText>
            <p className="my-5 text-sm ">
              We provide world class fitness equipment, trainers and classes to
              get you to your ultimate fitness goals with ease. we provide true
              care into each and every member.
            </p>
          </div>
          {/* BENEFITS SECTION */}
          <motion.div
            className="mt-5 items-center md:flex  justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={container}
          >
            {benefits.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
          {/* GRAPHICS AND DESCRIPTION */}
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex ">
            {/* GRAPHIC */}
            <img
              className="mx-auto "
              alt="benefits-page graphic"
              src={BenefitPageGraphic}
            />
            {/* DESCRIPTION */}
            <div>
              {/* TITLE */}
              <div className="relative">
                <div className="before:absolute:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <HText>
                      MILLIONS OF HAPPY MEMBERS GETTING{" "}
                      <span className="text-primary-500">FIT</span>
                    </HText>
                  </motion.div>
                </div>
              </div>
              {/* DESCRIPTION */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="my-5">
                  Every year, millions of people join gyms worldwide, motivated
                  by the desire to improve their health, fitness, and overall
                  well-being. Whether it's to build strenght, lose weight, or
                  simply stay active, gyms offer a supportive environment where
                  individuals can persue thier goals with access to top-notch
                  equipment, expert guidance and a community of like-minded
                  individuals.
                </p>
                <p className="mb-5">
                  driven by the desire to transform their lives through
                  fitness.Millions of people from beginners looking to start
                  thier health journey to second athletes pushing their limits,
                  swinny gym cater to all levels of experience. The growing
                  popularity of gym memberships highlights a collective
                  commitment to not just physical health, but also mental
                  well-being.
                </p>
              </motion.div>
              {/* BUTTON */}
              <div className="relative mt-15">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join now
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Benefits;
