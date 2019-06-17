import React, { Component } from 'react';
import './App.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
class App extends Component {
  state = { 
    data:[],
    columns: [{
      dataField: 'id',
      text: 'ID',
      sort:true
    }, {
      dataField: 'Zone',
      text: 'Zone'
    }, {
      dataField: 'Total_Price',
      text: 'Total Price'
    }, {
      dataField: 'Status',
      text: 'Status'
    }, {
      dataField: 'PAYMENT',
      text: 'Payment'
    },{
      dataField: 'Items',
      text: 'Items'
    }]
   }

   
   componentDidMount= async () => {
     const api_call= await fetch('http://localhost:4000/api/v1/data');
     const res= await api_call.json();
     this.setState({data:res.data});
     console.log(this.state.data[0]);
      
   }
  
  render() { 
   
    return ( <div className='container'>
      <div><h1>List of data</h1></div> <BootstrapTable  striped
      hover keyField='id' data={ this.state.data } columns={ this.state.columns }  pagination={ paginationFactory() }/></div> );
  }
}
 
export default App;
