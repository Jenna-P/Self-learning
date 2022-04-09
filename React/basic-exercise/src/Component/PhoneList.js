import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo';

export default class PhoneList extends Component {
    static defaultProps = {
        data: []
    }

  render() {
      const { data, onRemove, onUpdate } = this.props;   //data from input value
      const list = data.map(info => (<PhoneInfo onRemove= {onRemove} info={info} key={info.id} onUpdate={onUpdate} />)) //info : tings in data array
    return (
      <div>
        {list}
      </div>
    )
  }
}
