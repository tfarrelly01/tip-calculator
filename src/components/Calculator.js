import { Card } from '@twilio-paste/core';
import { TipSelectContainer } from '../containers/TipSelectContainer';

import { MenuItemsContainer } from '../containers/MenuItemsContainer';
// import { MenuItems } from './MenuItems';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
// import { NewItemForm } from './NewItemForm';
import { SummaryContainer } from '../containers/SummaryContainer';
// import { Summary } from './Summary';


const Calculator = () => {
  return (
    <Card>
      <NewItemFormContainer />
      {/*<NewItemForm />*/}
      <MenuItemsContainer />
      {/*<MenuItems items={items} />*/}
      <TipSelectContainer />
      <SummaryContainer />
      {/*<Summary />*/}
    </Card>
  );
};

export default Calculator;
