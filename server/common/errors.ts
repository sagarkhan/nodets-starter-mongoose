import { HttpStatus } from './constants';

type ErrorSchema = {
  status: number;
  name: string;
  message: string;
  body: any;
};

class HttpErrors {
  error: ErrorSchema;

  constructor() {
    this.error = {
      status: 0,
      name: '',
      message: '',
      body: {},
    };
  }

  BadRequest(message = '', body = {}): Error {
    this.error.status = HttpStatus.BAD_REQUEST;
    this.error.name = 'BAD_REQUEST';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  Unauthorized(message = '', body = {}): Error {
    this.error.status = HttpStatus.UNAUTHORIZED;
    this.error.name = 'UNAUTHORIZED';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  PaymentRequired(message = '', body = {}): Error {
    this.error.status = HttpStatus.PAYMENT_REQUIRED;
    this.error.name = 'PAYMENT_REQUIRED';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  Forbidden(message = '', body = {}): Error {
    this.error.status = HttpStatus.FORBIDDEN;
    this.error.name = 'FORBIDDEN';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  NotFound(message = '', body = {}): Error {
    this.error.status = HttpStatus.NOT_FOUND;
    this.error.name = 'NOT_FOUND';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  MethodNotAllowed(message = '', body = {}): Error {
    this.error.status = HttpStatus.METHOD_NOT_ALLOWED;
    this.error.name = 'METHOD_NOT_ALLOWED';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  NotAcceptable(message = '', body = {}): Error {
    this.error.status = HttpStatus.NOT_ACCEPTABLE;
    this.error.name = 'NOT_ACCEPTABLE';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  ProxyAuthenticationRequired(message = '', body = {}): Error {
    this.error.status = HttpStatus.PROXY_AUTHENTICATION_REQUIRED;
    this.error.name = 'PROXY_AUTHENTICATION_REQUIRED';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  RequestTimeout(message = '', body = {}): Error {
    this.error.status = HttpStatus.REQUEST_TIMEOUT;
    this.error.name = 'REQUEST_TIMEOUT';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  Conflict(message = '', body = {}): Error {
    this.error.status = HttpStatus.CONFLICT;
    this.error.name = 'CONFLICT';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  Gone(message = '', body = {}): Error {
    this.error.status = HttpStatus.GONE;
    this.error.name = 'GONE';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  LengthRequired(message = '', body = {}): Error {
    this.error.status = HttpStatus.LENGTH_REQUIRED;
    this.error.name = 'LENGTH_REQUIRED';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  PreconditionedFailed(message = '', body = {}): Error {
    this.error.status = HttpStatus.PRECONDITION_FAILED;
    this.error.name = 'PRECONDITION_FAILED';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  PayloadTooLarge(message = '', body = {}): Error {
    this.error.status = HttpStatus.PAYLOAD_TOO_LARGE;
    this.error.name = 'PAYLOAD_TOO_LARGE';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  UriTooLong(message = '', body = {}): Error {
    this.error.status = HttpStatus.URI_TOO_LONG;
    this.error.name = 'URI_TOO_LONG';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  UnsupportedMediaType(message = '', body = {}): Error {
    this.error.status = HttpStatus.UNSUPPORTED_MEDIA_TYPE;
    this.error.name = 'UNSUPPORTED_MEDIA_TYPE';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  RequestedRangeNotSatisfiable(message = '', body = {}): Error {
    this.error.status = HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE;
    this.error.name = 'UNSUPPORTED_MEDIA_TYPE';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  ExpectionFailed(message = '', body = {}): Error {
    this.error.status = HttpStatus.EXPECTATION_FAILED;
    this.error.name = 'EXPECTATION_FAILED';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  Teapot(message = '', body = {}): Error {
    this.error.status = HttpStatus.I_AM_A_TEAPOT;
    this.error.name = 'I_AM_A_TEAPOT';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  Unprocessable(message = '', body = {}): Error {
    this.error.status = HttpStatus.UNPROCESSABLE_ENTITY;
    this.error.name = 'UNPROCESSABLE_ENTITY';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  ResourceLock(message = '', body = {}): Error {
    this.error.status = HttpStatus.RESOURCE_LOCK;
    this.error.name = 'RESOURCE_LOCK';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  TooManyRequests(message = '', body = {}): Error {
    this.error.status = HttpStatus.TOO_MANY_REQUESTS;
    this.error.name = 'TOO_MANY_REQUESTS';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  InternalError(message = '', body = {}): Error {
    this.error.status = HttpStatus.INTERNAL_SERVER_ERROR;
    this.error.name = 'INTERNAL_SERVER_ERROR';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  NotImplemented(message = '', body = {}): Error {
    this.error.status = HttpStatus.NOT_IMPLEMENTED;
    this.error.name = 'NOT_IMPLEMENTED';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  BadGateway(message = '', body = {}): Error {
    this.error.status = HttpStatus.BAD_GATEWAY;
    this.error.name = 'BAD_GATEWAY';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  ServiceUnavailable(message = '', body = {}): Error {
    this.error.status = HttpStatus.SERVICE_UNAVAILABLE;
    this.error.name = 'SERVICE_UNAVAILABLE';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  GatewayTimeout(message = '', body = {}): Error {
    this.error.status = HttpStatus.GATEWAY_TIMEOUT;
    this.error.name = 'GATEWAY_TIMEOUT';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }

  HttpVersionNotSupported(message = '', body = {}): Error {
    this.error.status = HttpStatus.HTTP_VERSION_NOT_SUPPORTED;
    this.error.name = 'HTTP_VERSION_NOT_SUPPORTED';
    this.error.message = message;
    this.error.body = body;
    return this.error;
  }
}

export default new HttpErrors() as HttpErrors;
