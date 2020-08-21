import pkg from 'graphql-request';
const { request } = pkg;
import gql from 'graphql-tag';

export default {
  getTopics: () => {
    const query = gql`
      {
        getClassHierarchy(rootClassName: "Collection", searchParam: "") {
          label
          classname
          parentclassname
          parentclasslabel
        }
      }
    `;

    return request('https://service.ontology.attest.cloud/', query);
  },
};
