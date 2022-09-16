import {CallbackComponent} from './callback.component';
import {Meta} from '@storybook/angular/types-6-0';

export default {
  title: 'Callback',
  component: CallbackComponent,
  argTypes: {}
} as Meta;

const Template = (args:any) => ({
  props: args
});

const youGotClickedFn: Function = (): void => {
  console.log('You got clicked');
  alert('You got clicked');
}

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  parentCallbackFn: youGotClickedFn
}
