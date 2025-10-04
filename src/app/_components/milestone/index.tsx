import { LayoutHeader } from "./_components/layout-header";
import Timeline from "./_components/timeline";

const MileStone = () => {
  return (
    <div>
      <LayoutHeader />

      <div className="px-[18px] pb-[60px]">
        <p className="text-lg lg:text-4xl font-bold text-center px-9 py-[60px]">
          Since inception in 2019, Asido Foundation has led bold advocacy for
          mental health reforms. These range from public awareness campaigns to
          the passing of the 2021 Mental Health Act.
        </p>

        <Timeline />
      </div>
    </div>
  );
};

export default MileStone;
