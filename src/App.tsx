import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { data } from './datasource';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
    GridComponent, Filter, Inject, 
} from '@syncfusion/ej2-react-grids';
import './App.css';

let list: Object[] = data;

let columns = [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 180 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 180 },
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 180 },
    { field: 'ShipName', headerText: 'Ship Name', width: 180 },
   ];

export default class App extends React.Component<{}, {}> {

    render() {
        return (
            <Tabs className="feature-tabs">
              <TabList>
                        <Tab>I by feature</Tab>
                        <Tab>c by tests</Tab>
                    </TabList>
                    
                    <TabPanel>
            <GridComponent dataSource={list} columns={columns} allowSorting={true} height={'300'} >

                <Inject services={[Filter]} />
            </GridComponent>
                </TabPanel>

                <TabPanel>
                         <GridComponent  columns={columns} height={'300'} />
                                                         
                    </TabPanel>
                  </Tabs>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('grid'));