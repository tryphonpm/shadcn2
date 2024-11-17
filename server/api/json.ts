// https://jsonplaceholder.typicode.com/

const contentType = "application/json"

export default defineEventHandler(async (event) =>  {
  try {
    // const { token, db, cLayout, cQuery } = getQuery(event);
    // const sessionToken = "Bearer " + token

    const sessionsRequest = "https://jsonplaceholder.typicode.com/todos"
    // console.log("event sessionsRequest : ", sessionsRequest)

    const data: any = await $fetch(sessionsRequest as string)
      //console.log("event data : ", data)
       return {
        data : data
        }
    } catch (error) {
      console.log('event error : ', error)
    }
});