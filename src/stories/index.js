import React from 'react';
// import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
// import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { Button, Welcome } from '@storybook/react/demo';
import Schedule  from '../components/Schedule';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Schedule', module).add('default', () => <Schedule></Schedule>);

// storiesOf('Button', module)
//   .addDecorator(withKnobs)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>   </Button>)
//   .add('Interactive demo', () => <Button disabled={boolean('Disabled', false)}>{text('Button text', 'Default')}</Button>)
//   .add('Interactive demo 2', withInfo('doc string about my button component')(() =>
//     <Button disabled={boolean('Disabled', false)}>{text('Button text', 'Default')}</Button>
//   ))