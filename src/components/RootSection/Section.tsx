import * as React from 'react'
import { observer } from 'mobx-react'
import { NavLink, Route } from 'react-router-dom'

import './style.scss'

import ChildrenSection from '../ChildrenSection'

interface Props {
  list: {
    data: Array<{}>,
    loaded: boolean,
    fetch: (section: string) => void,
  },
  match: { isExact: boolean, path: string },
  section: string,
}

interface person {
  id: number,
  name: string,
}

class SectionOne extends React.Component<Props> {

  componentDidMount() {
    const {
      list: { loaded, fetch },
      section
    } = this.props
    if (!loaded[section]) fetch(section)
  }

  public render() {
    const {
      list: { loaded, data },
      match: { path, isExact },
      section,
    } = this.props
    if (!loaded[section]) return <div>...Loading</div>
    if (!isExact) return <Route path={`${path}/:id`} component={ChildrenSection} />
    return (
      <div className={section}>
        <ul className='list'>
          {data[section].map(({ id, name }: person) => (
            <li key={id} className='list__item'>
              <NavLink
                to={`/${section}/${id}`}
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

export default observer(SectionOne)
