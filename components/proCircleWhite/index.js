import Image from "next/image";
import Pro from "../../asset/img/Pro.png";
import ProWhite from "../../asset/img/ProWhite.png";

export default function ProCircleWhite({
  Wtop = "",
  Wright = "",
  Wleft = "",
  Wbottom = "",
}) {
  const proWhite = {
    position: "absolute",
    top: `${Wtop}`,
    right: `${Wright}px`,
    left: `${Wleft}px`,
    bottom: `${Wbottom}px`,
    
  };
  return (
    <div style={proWhite} className="ProWhiteNone">
      <Image src={ProWhite} alt="" id="ProCicyle" />
    </div>
  );
}
