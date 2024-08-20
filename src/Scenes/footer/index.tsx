import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/Logo.png";
interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({}: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5 ">
            alslakslaslasl saskjaksjaks asakjska saskajska sjaksjaks ajskajskaj
            askajska saskajska askaskajskaj ajskajska sjaksjkajs ajsakjskajs
            ajsakjskajsk sjkajsjkj asjakjsakjskajj
            jaksakjkjsakjskajskjksjakjksjakjsnakjskajska sajkjskajsjakjs.
          </p>
          <p>@Swinny ALL Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">swinny is the best gym</p>
          <p className="my-5">somewhere so fine and strong</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">massa orci senectus</p>
          <p>(237)673-543433</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
