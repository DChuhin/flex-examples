type Example = {
  name: string,
  description: string,
  items?: number,
}

export const DEFAULT_EXAMPLE: Example = {
  name: 'no-flex',
  description: 'Default display:block is applied. Block elements take full width and height stretched to content',
};

export const FLEX_EXAMPLES: Example[] = [
  DEFAULT_EXAMPLE,
  {
    name: 'default-flex',
    description: 'Default flex behavior. Element size for Main Axis direction (here width) is calculated based on content. For Cross Axis (here height) element size is full container size',
  },
  {
    name: 'reverse',
    description: 'Same as previous, but Main Axis is reversed by flex-direction: row-reverse',
  },
  {
    name: 'column-direction',
    description: 'flex-direction: column. Elements take full width (Cross Axis) and height based on element content (Main Axis)',
  },
  {
    name: 'mobile-layout',
    description: 'Crossover to mobile view is at 650px. flex-direction changes to column above 650px. flex: 1 on elements makes them take full width. Height 100vh makes container take full screen height',
    items: 3,
  },
  {
    name: 'no-wrap',
    description: 'Though element width is 200px, it is truncated to fit container size, because wrapping elements is forbidden by default (flex-wrap: nowrap)',
  },
  {
    name: 'wrap',
    description: 'flex-wrap: wrap allows wrapping elements when they exceed container size. Element width: 50% makes 2 element take full width and next element is wrapped to another row'
  },
  {
    name: 'wrap-reverse',
    description: 'flex-wrap: wrap-revers allows to reverse Cross Axis',
  },
  {
    name: 'column-wrap',
    description: 'flex-direction: column. flex-wrap: wrap. Container limited height: 100vh. If no height limit, container would be stretched instead of wrapping. Element width: 40%. Play with screen height to see effect',
  },
  {
    name: 'margin-wrap',
    description: 'flex-direction: row. flex-wrap: wrap. Width is reduced by margin. Container padding 5px adds 5px space to make 10px between container and element to have same 10px as between elements (2x margins)'
  },
  {
    name: 'gap',
    description: 'Same as previous, but using gap. Element width: calc((100% + 10px) / 3 - 10px). Here +10 px to compensate additional 5px padding from each side which were part of width in prev example. -10px because of gap'
  },
  {
    name: 'align',
    description: 'Use this example to play with justify-content and align-items. Note: container height is increased to stretch container to have space for justify-content. Width of container is 100% by default as it would be block element (flex here behaves same as block). align-items: center disables default value which is stretch, so elements do not take full width (are not stretched to full Cross Axis)',
    items: 4,
  },
  {
    name: 'align-content',
    description: 'align-content: center. align-content works only for flex-wrap: wrap. Default value: stretch - stretches all elements for Cross Axis to fulfil container. align-content: center puts elements to center for Cross Axis leaving spaces',
  },
  {
    name: 'align-self',
    description: 'align-self allows to set align-items but individually for each item',
    items: 4,
  }
];