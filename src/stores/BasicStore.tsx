export default class BasicStore {
  public allStores = {}

  constructor(stores: any){
    this.allStores = stores
  }

  getStore(storeName: string) {
    return this.allStores[storeName]
  }
}