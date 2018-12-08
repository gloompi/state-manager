import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Route } from 'react-router-dom'

import './style.scss'
import Section from './Section'

interface Props {
  list: {
    data: Array<{}>,
    loaded: boolean,
    fetch: (section: string) => void,
  },
}

class SectionOne extends React.Component<Props> {
  public render() {
    const { list } = this.props
    return (
      <div className='section-wrapper'>
        <Route
          path='/section-1'
          component={(props: any) => <Section list={list} section='section-1' {...props} />}
        />
        <Route
          path='/section-2'
          component={(props: any) => <Section list={list} section='section-2' {...props} />}
        />
      </div>
    )
  }
}

export default inject('list')(observer(SectionOne))
