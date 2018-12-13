import gql from 'graphql-tag';

export const GetProfile = gql`
    query GetProfile {
        getProfile {
            description
            id
            title
        }
    }
`;
