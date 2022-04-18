import Image from "next/image";
import Pro from "../../asset/img/Pro.png";
import ProWhite from "../../asset/img/ProWhite.png";

export default function ProCircleGold({
  Gtop = "",
  Gright = "",
  Gleft = "",
  Gbottom = "",
}) {
  const proGolid = {
    position: "absolute",
    top: `${Gtop}px`,
    right: `${Gright}px`,
    left: `${Gleft}px`,
    bottom: `${Gbottom}px`,
  };
  return (
    <div style={proGolid} className="ProGoldNone">
      <Image src={Pro} alt="" id="ProCicyle" />
    </div>
  );
}
