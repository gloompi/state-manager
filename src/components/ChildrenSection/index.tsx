import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { NavLink } from 'react-router-dom'

interface Props {
  list: {
    data: Array<{}>,
    loaded: boolean,
    fetch: (section: string | number) => void,
    setLoaded: (name: string | number, value: any) => void,
  },
  match: { 
    params: { id: number | string },
    path: string,
  },
}

interface person {
  id: number,
  name: string,
}

class ChildrenSection extends React.Component<Props> {
  componentDidMount() {
    const {
      match: { params: { id } },
      list: { loaded, fetch },
    } = this.props
    if (!loaded[id]) fetch(id)
  }

  componentWillUnmount() {
    const {
      match: { params: { id } },
      list: { setLoaded },
    } = this.props
    setLoaded(id, false)
  }

  render() {
    const {
      match: { params: { id }, path },
      list: { loaded, data },
    } = this.props
    const sectionPath = path.replace('/:id', '')
    if (!loaded[id]) return <div>...Loading</div>
    return (
      <div>
        <ul className='list'>
          {data[id].map(({ id, name }: person) => (
            <li key={id} className='list__item'>
              <NavLink
                to={`${sectionPath}/${id}`}
                className='list__link'
                activeClassName='active'
                exact
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default inject('list')(observer(ChildrenSection))
