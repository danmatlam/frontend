import { IContent, ISlice } from "../../../store/schema";

export type Props = {
  data: ISlice;
};
const SliceCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="ps-bg-app p-2 rounded-md  min-w-max">
      <h2>{data.text}</h2>
    </div>
  );
};

export default SliceCard;
