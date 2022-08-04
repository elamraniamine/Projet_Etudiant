import React from 'react';
import { Link } from 'react-router-dom';
class AddM extends React.Component{
    constructor(){
        super();
        this.state={
            Nom:'',
            Coef:'',
            Total_Heures_Cm:'',
            Total_Heures_Td:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    submitForm(){
        fetch('http://127.0.0.1:8000/Matiere/',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState({
            Nom:'',
            Coef:'',
            Total_Heures_Cm:'',
            Total_Heures_Td:''
        });
    }

    render(){
        return (
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Nom</th>
                        <td>
                            <input value={this.state.Nom} name="Nom" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Coef</th>
                        <td>
                            <input value={this.state.Coef} name="Coef" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Total_Heures_Cm</th>
                        <td>
                            <input value={this.state.Total_Heures_Cm} name="Total_Heures_Cm" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Total_Heures_Td</th>
                        <td>
                            <input value={this.state.Total_Heures_Td} name="Total_Heures_Td" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <Link to={'/Matiere'} className="btn btn-dark"type="submit" onClick={this.submitForm}> Envoyer
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default AddM;