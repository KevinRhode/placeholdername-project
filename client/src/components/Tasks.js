import React, { Component } from "react";
import Auth from "../utils/auth";
import TaskList from "./TaskList";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_TASK } from "../utils/mutations";
import { QUERY_ALL_TASKS } from "../utils/queries";


const Tasks = () => {
    const [formState, setFormState] = useState({ taskname: '', location: '' });
    const { loading, err, data } = useQuery (QUERY_ALL_TASKS);
    const [createTask, { error }] = useMutation(CREATE_TASK);
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    const authContext = {
        headers:{Authorization: `Bearer ${token}`}
      };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await createTask({
              variables: {taskname:"Test",location:"Location"},
              context: authContext
            });
          } catch (e) {
            console.log(e);
          }
    };

    if (loading) {
    return (
        <div className="Tasks">
            <div className="header">
                <form>
                    <input placeholder="enter task" onChange={handleChange}></input>
                    <button type="submit" onClick={handleFormSubmit}>add</button>
                </form>
            </div>
            <div className="content">
            Loading...
        </div>
        </div>
    );
}
}

export default Tasks;