import React, {FC} from 'react';
import './App.css';
import {Admin, Datagrid, EditButton, List, Resource, TextField} from "react-admin";
import jsonServerProvider from 'ra-data-json-server';


const baseURL = 'http://localhost:8030';

const PostList: FC = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="title"/>
                <TextField source="description"/>
                <EditButton basePath="/posts"/>
            </Datagrid>
        </List>
    )
}


function App() {
    return (
        <Admin dataProvider={jsonServerProvider(baseURL)}>
            <Resource name="blog" list={PostList}/>
            <Resource name="test" list={() => (<>cxzxzc</>)}/>
        </Admin>
    );
}

export default App;
