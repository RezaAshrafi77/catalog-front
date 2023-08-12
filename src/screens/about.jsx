import {
  MdChevronLeft,
  MdOutlineLocationOn,
} from "react-icons/md";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TbPhoneCall, TbBrandInstagram } from "react-icons/tb";
import { Navbar, Button, Image } from "~/components";

export const About = ({ template }) => {
  const navigation = useNavigate();
  return (
    <div className="flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden bg-gradient px-[8vw] text-white">
      <Navbar
        classNames="!pt-8 text-white !px-0"
        leading={<div></div>}
        actions={[
          <Button
            icon={<MdChevronLeft size={"11vw"} />}
            events={{ onSubmit: () => navigation(-1) }}
            className="text-white"
          />,
        ]}
        title="اطلاعات تماس"
      />
      <ul className="flex flex-col w-full divide-y divide-white divide-opacity-20 my-[2vh]">
        <li className="flex items-center gap-4 py-6">
          <TbPhoneCall size="7vw" color="white" />
          <a
            href={`tel::${template?.cellNumber || "09360467907"}`}
            className="text-base !text-info-2-dark"
          >
            {template?.cellNumber || "09360467907"}
          </a>
        </li>
        <li className="flex items-center gap-4 py-6">
          <TbBrandInstagram size="7vw" color="white" />
          <a
            href={template?.instagramID}
            target="_blank"
            className="text-base !text-info-2-dark"
          >
            {template?.instagramID || "آیدی اینستاگرام"}
          </a>
        </li>
        <li className="flex gap-4 py-6">
          <MdOutlineLocationOn size="7vw" color="white" />
          <p className="text-base text-white flex-1 leading-6">
            {template?.address || "آدرس مورد نظر"}
          </p>
        </li>
      </ul>
      <a href="https://www.google.com/maps/@35.843,50.967,20z" target="_blank">
        <Image
          src="https://api.neshan.org/v2/static?key=service.JK66CWU8gRCNgGhWAEuTM82fanbBPxBJgpfrp1Lk&type=standard-day&zoom=16&center=35.843,50.967&width=100&height=100&marker=red"
          classNames={"w-full h-[80vw] rounded-3xl"}
        />
      </a>
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template.template,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
