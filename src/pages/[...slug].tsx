import * as React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Error from "next/error";
import {
  getAllTagsPaths,
  getAllIndexPaths,
  generateManifest,
  generatePostsJSONFeed,
} from "../../scripts";
import { Layouts } from "../layouts/layouts";
import * as Marmalade from "../types/marmalade";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { frontMatter as pages } from "../pages/**/*.{md,mdx}";

export const getStaticPaths: GetStaticPaths = async () => {
  const tagsPaths = await getAllTagsPaths(pages);
  const indexPaths = await getAllIndexPaths(pages);

  // Generate Assets which require pages
  await generateManifest();
  await generatePostsJSONFeed(pages);

  const paths = [...tagsPaths, ...indexPaths];

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<IndexPageProps> = async context => {
  const tagsPaths = await getAllTagsPaths(pages);
  const indexPaths = await getAllIndexPaths(pages);

  const errorProps = { props: { error: true } };

  if (!context.params || !context.params.slug) {
    return errorProps;
  }

  const slug = context.params.slug;
  const slugPath = Array.isArray(slug) ? `/${slug.join("/")}` : `/${slug}`;

  if (indexPaths.includes(slugPath)) {
    const posts = pages.filter((page: Marmalade.FrontMatterExtended) =>
      page.__resourcePath.includes(`src/pages${slugPath}`)
    );

    return {
      props: {
        title: `${slug}`,
        posts,
      },
    };
  }

  if (tagsPaths.includes(slugPath)) {
    const tagIndex = slug.indexOf("tag");
    const tagDirIndex = (tagIndex - 1) % slug.length;
    const tagNameIndex = (tagIndex + 1) % slug.length;
    const tagDir = slug[tagDirIndex];
    const tagName = slug[tagNameIndex];

    const posts = pages.filter(
      (post: Marmalade.FrontMatterExtended) =>
        post.tags && post.tags.includes(tagName)
    );

    return {
      props: {
        title: `${tagDir} posts filed under "${tagName}"`,
        posts,
      },
    };
  }

  return errorProps;
};

type IndexPageProps = {
  error?: boolean;
  posts?: Marmalade.FrontMatterExtended[];
};

const IndexPage: React.FC<IndexPageProps & NextPage> = ({
  error,
  ...props
}) => {
  return error ? (
    <Error statusCode={404} />
  ) : (
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    <Layouts layout="index" {...props} />
  );
};

export default IndexPage;
