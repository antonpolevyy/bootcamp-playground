import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import Button from './Button';

export const buttonSettings = {
  name: 'Im a Button',
  type: 'primary'
};

export const actions = {
  onPinTask: action('onClick'),
  onArchiveTask: action('onArchiveTask'),
};

  
storiesOf('Button', module)
  .add('default', () => 
    <div>
      <Button buttonName={buttonSettings.name} />

      <pre style={{border: '1px solid #eee'}}>
        {`
            <Button buttonName={buttonSettings.name} />
        `}
      </pre>
    </div>
  )
  .add('Submit', () => 
  <div>
      <Button buttonName="Submit" buttonType="Submit" />
  </div>
  )
  .add('Cancel', () => 
  <div>
      <Button buttonName="Cancel" buttonType="Cancel" />
  </div>
  )
// .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
// .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);