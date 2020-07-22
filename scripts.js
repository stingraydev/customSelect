import { Select } from './select/select';
import './select/styles.scss';

const select = new Select('#select', {
  placeholder: 'Выбери пожалуйста элемент',
  data: [
    {id: '1', value: 'React'},
    {id: '2', value: 'Angular'},
    {id: '3', value: 'Vue'},
    {id: '4', value: 'React Native'},
    {id: '5', value: 'Next'},
    {id: '6', value: 'Nest'},
  ],
  selectedId: '4',
  onSelect(item) {
    console.log('Selected item:', item);
  }
});

window.s = select;