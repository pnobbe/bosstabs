/**
 * Api Service
 * This is a API service class that uses fetch and promises.
 */
export default class ApiService {
  constructor () {
    this.baseUrl = 'http://services.runescape.com/m=itemdb_oldschool'
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
  getItem (itemId) {
    let url = this.baseUrl + '/api/catalogue/detail.json?item=' + itemId
    return new Promise((resolve, reject) => {
      // We fetch the API endpoint
      fetch(url).then((response) => {
        if (response.status !== 200) {
          // Not success
          resolve(response.text())
        } else {
          // success
          resolve(response.text())
        }
      }).catch(err => {
        // Service Error
        reject(err)
      })
    })
  }
}
