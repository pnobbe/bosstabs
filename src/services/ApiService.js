/**
 * Api Service
 * This is a API service class that uses fetch and promises.
 */
export default class ApiService {
  constructor() {
    this.baseUrl = 'http://dnd5eapi.co/api/'
  }

  /**
   * Sample Get Fetch using HTTP Bin
   *
   * @example
   var service = new sampleWebService();
   service.Get().then((success => {
        console.log(success);
      }))
   * @memberof sampleWebService
   * @returns {Promise<any>} returns a Promise
   */
  getClasses() {
    let url = this.baseUrl + 'classes'
    return new Promise((resolve, reject) => {
      // We fetch the API endpoint
      fetch(url, {
        mode: 'no-cors' // 'cors' by default()
      }).then((response) => {
        response.json();
      }).then((data) => {
        console.log(data);
        resolve(data);
      }).catch(err => {
        // Service Error
        reject(err);
      })
    })
  }

  /**
   * Sample Get Fetch using HTTP Bin
   *
   * @example
   var service = new sampleWebService();
   service.Get().then((success => {
        console.log(success);
      }))
   * @memberof sampleWebService
   * @returns {Promise<any>} returns a Promise
   */
  getClass (classId) {
    let url = this.baseUrl + 'classes/' + classId
    return new Promise((resolve, reject) => {
      // We fetch the API endpoint
      fetch(url).then((response) => {
        resolve(response.text())
      }).catch(err => {
        // Service Error
        reject(err)
      })
    })
  }
}
