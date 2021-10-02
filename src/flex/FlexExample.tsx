import React from 'react';
import FlexExampleView from 'flex/FlexExampleView';
import { useAppState, useKey } from 'util/utilHooks';

import './flex-example.css';
import './examples/default-flex.css';
import './examples/reverse.css';
import './examples/column-direction.css';
import './examples/mobile-layout.css';
import './examples/no-wrap.css';
import './examples/wrap.css';
import './examples/wrap-reverse.css';
import './examples/column-wrap.css';
import './examples/margin-wrap.css';
import './examples/gap.css';
import './examples/align.css';
import './examples/align-content.css';
import './examples/align-self.css';

const DEFAULT_ITEMS = 8;

interface Props {
  className?: string,
  description: string,
  items?: number,
}

const FlexExample = ({ className = '', items = DEFAULT_ITEMS, description }: Props) => {
  const { isDescriptionVisible, toggleDescriptionVisible } = useAppState();
  useKey('KeyT', toggleDescriptionVisible);
  return <FlexExampleView
    className={className}
    description={description}
    showDescription={isDescriptionVisible}
    items={items}
  />
}

export default FlexExample;