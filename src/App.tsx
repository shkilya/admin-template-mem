import React, {FC} from 'react';
import './App.css';
import {Admin, Datagrid, EditButton, List, Resource, TextField} from "react-admin";
import simpleRestProvider from 'ra-data-simple-rest';


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
        <Admin dataProvider={simpleRestProvider(baseURL)}>
            <Resource name="blog" list={PostList}/>
            <Resource name="test" list={() => (<>cxzxzc</>)}/>
        </Admin>
    );
}

export default App;
