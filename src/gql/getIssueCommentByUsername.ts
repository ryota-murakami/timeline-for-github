import { gql } from 'graphql-request'

export default gql`
  query getIssueComments($user: String!) {
    search(query: user, type: ISSUE, first: 30) {
      issueCount
      edges {
        node {
          ... on Issue {
            isReadByViewer
            number
            title
            url
            repository {
              description
              name
              owner {
                ... on Organization {
                  name
                }
                ... on User {
                  name
                }
              }
            }
            reactions {
              totalCount
            }
            ... on Comment {
              body
              ... on IssueComment {
                url
                updatedAt
              }
            }
          }
        }
      }
    }
  }
`
