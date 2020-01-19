import Error from './Error';

export default class HttpErrorResponse implements Error {
  public status = 0;

  public message = '';
}
