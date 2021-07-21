import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table';
import ImportForm from './ImportForm';
import { Typography } from '@material-ui/core';

function App() {

  const [data, setData] = useState([])
	const columns = [
		{ title: "ID", field: "id" },
		{ title: "Title", field: "title" },
		{ title: "Teaming Stage", field: "teaming_stage" },
		{ title: "Appears (Day)", field: "appears_day" },
		{ title: "Frequency", field: "frequency" },
		{ title: "Type", field: 'type' },
		{ title: "Role", field: 'role_id' },
		{ title: "Required?", field: 'is_required' },
		{ title: "Conditions", field: 'conditions' },
		{ title: "Mapping", field: 'mapping_id' }
	]

	useEffect(() => {
		fetch("https://aqueous-falls-61838.herokuapp.com/api/v1/questions")
		.then(resp => resp.json())
		.then(resp => { setData(resp) })
	}, [])

  return (
    <div className="App">
      <React.StrictMode>
        <header className="App-header">
          <div className = "App">
            <Typography variant="h1" align="center">React Rails Assignment</Typography>
            <hr />
            <ImportForm/>
            <hr />
            <h4 align='center'>Display Quetions Table</h4>
            <MaterialTable
              title="Questions"
              data={data}
              columns={columns}
            />
          </div>
        </header>
      </React.StrictMode>
    </div>
  );
}

export default App;
