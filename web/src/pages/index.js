import React from "react";
import { graphql, Link } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";

import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      subtitle
      description
      keywords
    }
    quizzes: allSanityQuizzes(limit: 6, sort: { fields: [title], order: DESC }) {
      edges {
        node {
          title
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const quizNodes = (data || {}).quizzes ? mapEdgesToNodes(data.quizzes) : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  console.log("quizNodes.title", quizNodes);
  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1>Welcome to {site.title}</h1>
        <h2>{site.subtitle}</h2>
        {quizNodes && <Link>{quizNodes.title}</Link>}
      </Container>
    </Layout>
  );
};

export default IndexPage;
