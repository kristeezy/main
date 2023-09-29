/* 1. HTTP stands for Hypertext Transfer Protocol and it is how the web browsers 
and servers communicate.
2. Short for Uniform Resource Locator, a URL is an address for some internet resource.
3. DNS stands for domai8n name system that takes URLs amd converts into IP addresses.
4.  A query string allows you to pass key-value pairs into the URL in the format: ?key1=value1&key2=value2
5.  HTTP verbs - POST and GET. GET is a request that does not make changes to the server
while POST is sending some data to server that makes changes.
6. An HTTP request is a request from a client to a server which follows the HTTP protocol
7. An HTTP response is a response from a server to a client which follows the HTTP protocol.
8. Headers provide additional information about the request or the response. 
Examples of response headers include Content-Type, Last-Modified, Set-Cookie, Cache-Control.
Examples of request headers include Host, User-Agent, Accept, Cookie, Cache-Control.
9. First, your browser “resolves” the name into an IP address using DNS
Next, your browser makes a request to that IP address, including headers (info about browser, any previous cookies, and other things)
Then the server sends a response (typically, HTML, with a status code (200 if it was sucessful)
The browser makes a DOM from that HTML, and finds any other resources needed (images, CSS, JavaScript, etc)
Finally, The browser makes separate HTTP requests for those resources and receives response from the server for each
*/

