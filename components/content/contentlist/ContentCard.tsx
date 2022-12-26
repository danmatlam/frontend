import { IContent } from "../../../store/schema";
import Slices from "../slicelist";

export type Props = {
  data: IContent;
};
const ContentCard: React.FC<Props> = ({ data: { id, slug, name, slices } }) => {
  return (
    <div className="p-3 rounded-md ps-bg-card h-36">
      <h2>{name}</h2>
      <Slices data={slices} />
    </div>
  );
};
export default ContentCard;
