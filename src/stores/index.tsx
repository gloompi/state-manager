import BasicStore from './BasicStore'

const stores = {}

Object.assign(stores, {
  basicStore: new BasicStore(stores),
})

export default stores