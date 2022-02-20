// import constants from 'constants'

const BASE = 'data';

// Entities
const QUESTION = 'questions';

// -----------------
// Generic APIs
// -----------------
const getThings = (entityName: string) => {
  const url = `/${BASE}/${entityName}.json`;

  return () => fetch(url);
};

const getThing = (entityName: string) => (entityId: string) => fetch(`/${entityName}/${entityId}`);

// const createThing = (entityName) => {
//   return (entity) => {
//     return axios.post(`/${entityName}`, entity)
//   }
// }

// const updateThing = (entityName) => {
//   return (id, entity) => {
//     return axios.put(`/${entityName}/${id}`, entity)
//   }
// }

// const updateThingPartially = (entityName) => {
//   return (partOfEntity) => {
//     return axios.patch(`/${entityName}/${partOfEntity.id}`, partOfEntity)
//   }
// }

// const deleteThing = (entityName) => {
//   return (entityId) => {
//     return axios.delete(`/${entityName}/${entityId}`)
//   }
// }

// const getNestedThings = (firstEntityName, secondEntityName) => {
//   return (id, params) => {
//     return axios.get(`/${firstEntityName}/${id}/${secondEntityName}`, { params })
//   }
// }

// const createNestedThing = (firstEntityName, secondEntityName) => {
//   return (id, entity) => {
//     return axios.post(`/${firstEntityName}/${id}/${secondEntityName}`, entity)
//   }
// }

// -----------------
// Sample APIs
// -----------------

export const fetchQuestions = getThings(QUESTION);

export const fetchQuestion = getThing(QUESTION);

// export const createSample = createThing(QUESTION)

// export const updateSample = updateThing(QUESTION)

// export const updateSamplePartially = updateThingPartially(QUESTION)

// export const deleteSample = deleteThing(QUESTION)

// // -----------------
// // Generic Error handling
// // -----------------
// export const parseError = (error) => {
//   if (error.response) {
//     // The request was made and the server responded with a status code
//     // that falls out of the range of 2xx
//     const {
//       // data,
//       status,
//       // headers,
//     } = error.response
//     switch (status) {
//       case 400:
//         return {
//           status,
//           error: constants.ERROR.BAD_REQUEST,
//         }
//       case 401:
//         return {
//           status,
//           error: constants.ERROR.UNAUTHORIZED,
//         }
//       case 403:
//         return {
//           status,
//           error: constants.ERROR.FORBIDDEN,
//         }
//       case 404:
//         return {
//           status,
//           error: constants.ERROR.NOT_FOUND,
//         }
//       case 503:
//         return {
//           status,
//           error: constants.ERROR.SERVICE_UNAVAILABLE,
//         }
//       default:
//         return {
//           status,
//           error: constants.ERROR.INTERNAL_SERVER,
//         }
//     }
//   } else if (error.request) {
//     // The request was made but no response was received
//     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//     // http.ClientRequest in node.js
//     return {
//       error: constants.ERROR.OFFLINE,
//     }
//   } else {
//     // Something happened in setting up the request that triggered an Error
//     return {
//       error: constants.ERROR.UNKNOWN,
//     }
//   }
// }
