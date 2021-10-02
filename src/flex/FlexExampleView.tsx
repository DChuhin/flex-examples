import React from 'react';
import classNames from 'classnames';

import './flex-example.css';

interface Props {
  className?: string,
  description: string,
  items?: number,
  showDescription: boolean,
}

const FlexExampleView = ({ className, items, description, showDescription }: Props) => (
  <div className={className}>
    {showDescription && <div className="flex-example-description">{description}</div>}
    <div className="flex-container">
      {
        Array.from(Array(items).keys()).map(i => (
          <div key={i} className={classNames('flex-item', `item-${i + 1}`)}>
            {i + 1}
          </div>
        ))
      }
    </div>
  </div>
)

export default FlexExampleView;