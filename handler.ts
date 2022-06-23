import { baseService } from './src/main/baseService'

interface Response {
  statusCode: number;
  body: any;
}

const handler = async (event: any): Promise<Response> => {
  let response: Response = {
    statusCode: 500,
    body: ''
  };

  try {
    let base = baseService()
    response.body = JSON.stringify(base)
    response.statusCode = 200
  } catch (error: any) {
   response.body = JSON.stringify(error);
  }
  return response
};

export { handler }