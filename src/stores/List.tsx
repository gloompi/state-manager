import { observable, action } from 'mobx'
import { debounce } from 'lodash'
import { name } from 'faker'

class List {
  @observable data: object = {}
  @observable loaded: object = {}
  
  @action fetch = (section: string): void => {
    const promise = new Promise((resolve: () => void) => {
      debounce(resolve, 5000)()
    })

    promise.then(() => {
      const data = []
      for (let i = 0; i < 10; i++) {
        data.push({
          id: Math.random() + Date.now(),
          name: name.findName()
        })
      }
      this.data[section] = data
      this.loaded[section] = true
    })
  }

  @action setLoaded = (name: string, value: any): void => {
    this.loaded[name] = value
  }
}

export default List
