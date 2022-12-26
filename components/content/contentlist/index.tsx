import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import { JSONTree } from "react-json-tree";
import Link from "next/link";
import ContentCard from "./ContentCard";

export type Props = {};

const Contents: React.FC<Props> = () => {
  const { loading, error, data } = useQuery(gql`
    query Contents {
      contents {
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
  `);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  /* Canvas */
  /* |- App */

  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl">Contents</h1>
      <ul className="flex flex-col gap-3">
        {data.contents.map(({ slug, id, name, slices }: any) => (
          <Link href={`dashboard/${slug}`} key={id}>
            <ContentCard data={{ id, slug, name, slices }} />
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Contents;
