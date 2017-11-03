var searchIndex = {};
searchIndex["web_push"] = {"doc":"Web Push","items":[[3,"WebPushResponse","web_push","",null,null],[3,"WebPushClient","","",null,null],[3,"WebPushMessage","","",null,null],[12,"gcm_key","","",0,null],[12,"endpoint","","",0,null],[12,"ttl","","",0,null],[12,"payload","","",0,null],[12,"service","","",0,null],[3,"WebPushMessageBuilder","","",null,null],[3,"WebPushPayload","","",null,null],[12,"content","","",1,null],[12,"crypto_headers","","",1,null],[12,"content_encoding","","",1,null],[4,"WebPushError","","",null,null],[13,"Unspecified","","An unknown error happened encrypting the message,",2,null],[13,"Unauthorized","","Please provide valid credentials to send the notification",2,null],[13,"BadRequest","","Request was badly formed",2,null],[13,"ServerError","","Contains an optional `Duration`, until the user can retry the request",2,null],[13,"NotImplemented","","The feature is not implemented yet",2,null],[13,"InvalidUri","","The provided URI is invalid",2,null],[13,"TimeoutError","","The request timed out",2,null],[13,"EndpointNotValid","","The URL specified is no longer valid and should no longer be used",2,null],[13,"EndpointNotFound","","The URL specified is invalid and should not be used again",2,null],[13,"PayloadTooLarge","","Maximum allowed payload size is 3800 characters",2,null],[13,"TlsError","","Could not initialize a TLS connection",2,null],[13,"InvalidPackageName","","Make sure the message was addressed to a registration token whose package name matches the value passed in the request (Google).",2,null],[13,"InvalidTtl","","The TTL value provided was not valid or was not provided",2,null],[13,"MissingCryptoKeys","","The request was missing required crypto keys",2,null],[13,"InvalidCryptoKeys","","One or more of the crytpo key elements are invalid.",2,null],[13,"InvalidResponse","","Corrupted response data",2,null],[13,"Other","","",2,null],[4,"ContentEncoding","","",null,null],[13,"AesGcm","","",3,null],[13,"Aes128Gcm","","",3,null],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",4,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"new","","",5,{"inputs":[{"name":"handle"}],"output":{"name":"result"}}],[11,"send","","Sends a notification. Never times out.",5,{"inputs":[{"name":"self"},{"name":"webpushmessage"}],"output":{"name":"webpushresponse"}}],[11,"send_with_timeout","","Sends a notification with a timeout. Triggers `WebPushError::TimeoutError` if the request takes too long.",5,{"inputs":[{"name":"self"},{"name":"webpushmessage"},{"name":"duration"}],"output":{"name":"timeout"}}],[11,"call","","",5,null],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"webpusherror"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"self"},{"name":"webpusherror"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",2,{"inputs":[{"name":"jsonerror"}],"output":{"name":"webpusherror"}}],[11,"from","","",2,{"inputs":[{"name":"fromutf8error"}],"output":{"name":"webpusherror"}}],[11,"from","","",2,{"inputs":[{"name":"urierror"}],"output":{"name":"webpusherror"}}],[11,"from","","",2,{"inputs":[{"name":"timeouterror"}],"output":{"name":"webpusherror"}}],[11,"from","","",2,{"inputs":[{"name":"unspecified"}],"output":{"name":"webpusherror"}}],[11,"from","","",2,{"inputs":[{"name":"error"}],"output":{"name":"webpusherror"}}],[11,"short_description","","",2,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"description","","",2,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"webpushpayload"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"webpushpayload"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a builder for generating the web push payload.",6,null],[11,"set_ttl","","How long the server should keep the message if it cannot be delivered currently. If not set, the message is deleted immediately on failed delivery.",6,{"inputs":[{"name":"self"},{"name":"u32"}],"output":null}],[11,"set_gcm_key","","For Google's push service, one must provide an API key from Firebase console.",6,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[11,"set_payload","","If set, the client will get content in the notification. Has a maximum size of 3800 characters.",6,null],[11,"build","","Builds and if set, encrypts the payload. Any errors will be `Undefined`, meaning something was wrong in the given public key or authentication.",6,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"from","","",2,{"inputs":[{"name":"gcmerror"}],"output":{"name":"webpusherror"}}]],"paths":[[3,"WebPushMessage"],[3,"WebPushPayload"],[4,"WebPushError"],[4,"ContentEncoding"],[3,"WebPushResponse"],[3,"WebPushClient"],[3,"WebPushMessageBuilder"]]};
initSearch(searchIndex);
