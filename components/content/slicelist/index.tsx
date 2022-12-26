import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import { JSONTree } from "react-json-tree";
import Link from "next/link";
import ContentCard from "./SliceCard";
import { ISlice } from "../../../store/schema";
import SliceCard from "./SliceCard";

export type Props = {
  data: ISlice[];
};

const Slices: React.FC<Props> = ({ data }) => {
  return (
    <ul className="flex gap-3 overflow-y-scroll py-3">
      {data.map((slice: ISlice) => (
        <SliceCard data={slice} />
      ))}
    </ul>
  );
};

export default Slices;
