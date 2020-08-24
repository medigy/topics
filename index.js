import { fetchUtils } from 'react-admin';
const httpClient = fetchUtils.fetchJson;
const topicOwlUrl = 'https://service.ontology.attest.cloud/';
export default {
  getTopics: () => {
    const JsonUrl =
      topicOwlUrl +
      '?query=query%20%7B%0A%20%20getClassHierarchy%28rootClassName%3A%22Collection%22%2CsearchParam%3A%22%22%29%7B%0A%20%20%20%20parentclassname%0A%20%20%20%20parentclasslabel%0A%20%20%20%20classname%0A%20%20%20%20label%0A%20%20%20%20description%0A%20%20%20%20subclassname%0A%20%20%20%20subclasslabel%0A%20%20%20%20subclassdescription%0A%20%20%20%0A%20%20%7D%0A%7D';
    const getParams = {
      getListApi: JsonUrl,
    };
    return httpClient(JsonUrl).then(({ headers, json }) => ({
      data: json.data.getClassHierarchy,
    }));
  },
};
