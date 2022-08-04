import React from 'react';
import { Link } from 'react-router-dom';

class UpdateE extends React.Component{
    constructor(){
        super();
        this.state={
            N_Etudiant:'',
            Nom_Prenom:'',
            Email:'',
            Date_de_naissance:'',
            Pays_de_naissance:'',
            Adresse:''
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
    fetchData(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/Etudiant/'+id+ '/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                N_Etudiant:data.N_Etudiant,
                Nom_Prenom:data.Nom_Prenom,
                Email:data.Email,
                Date_de_naissance:data.Date_de_naissance,
                Pays_de_naissance:data.Pays_de_naissance,
                Adresse:data.Adresse
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    // Submit Form
    submitForm(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/Etudiant/'+id,{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
    }

    render(){
        return (
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>N_Etudiant</th>
                        <td>
                            <input value={this.state.N_Etudiant} name="N_Etudiant" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Nom et Prenom</th>
                        <td>
                        <input value={this.state.Nom_Prenom} name="Nom_Prenom" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                        <input value={this.state.Email} name="Email" onChange={this.changeHandler} type="email" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Date_de_naissance</th>
                        <td>
                        <input value={this.state.Date_de_naissance} name="Date_de_naissance" onChange={this.changeHandler} type="date" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Pays_de_naissance</th>
                        <td>
                        <input value={this.state.Pays_de_naissance} name="Pays_de_naissance" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Adresse</th>
                        <td>
                        <input value={this.state.Adresse} name="Adresse" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <Link to={'/Etudiant'} className="btn btn-dark"type="submit" onClick={this.submitForm}> Update </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default UpdateE;