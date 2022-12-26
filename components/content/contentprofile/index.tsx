import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import { JSONTree } from "react-json-tree";
import Link from "next/link";
import ContentCard from "../contentlist/ContentCard";

export type Props = {
  slug: string;
};

const CONTENT_QUERY = gql`
  query Content($slug: String!) {
    content(slug: $slug) {
      id
      slug
      name
      slices {
        id
        contentId
        markdown
        text
        order
      }
    }
  }
`;

const ContentProfile: React.FC<Props> = ({ slug }) => {
  const { data, loading, error } = useQuery(CONTENT_QUERY, {
    variables: { slug: slug },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  /* Canvas */
  /* |- App */

  return <ContentCard data={data.content} />;
};

export default ContentProfile;
