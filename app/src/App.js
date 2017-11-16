import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import FormErrors from "./FormErrors";

class App extends Component {

    constructor() {
        super();

        this.state = {
            thumbnail: '',
            title: '',
            description: '',
            contentCategory: '',
            tags: [],
            providerName: '',
            titleValid: false,
            descriptionValid: false,
            contentCategoryValid: false,
            tagsValid: false,
            providerNameValid: false
        }
    }

    componentDidMount() {
        axios.get(` https://schul-cloud.org:8080/content/resources/59919169c9df580090bc0815`,
            {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJhY2NvdW50SWQiOiIwMDAwZDIzMTgxNmFiYmE1ODQ3MTRjOWYiLCJ1c2VySWQiOiIwMDAwZDIzMTgxNmFiYmE1ODQ3MTRjOWUiLCJpYXQiOjE1MTA3MzUwNjIsImV4cCI6MTUxMzMyNzA2MiwiYXVkIjoiaHR0cHM6Ly9zY2h1bC1jbG91ZC5vcmciLCJpc3MiOiJmZWF0aGVycyIsInN1YiI6ImFub255bW91cyJ9.OKdBL4TJVc9weiF7l-tv6fT7oFrFiCvAOyqey141NPM'}})
            .then(res => {
                alert(JSON.stringify(res.data));
                this.setState(res.data);
            });
    }

    handleOnChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className={'container'}>
                <form>
                    <div className={'panel panel-default'}>
                        <FormErrors/>
                    </div>
                    <img src={this.state.thumbnail} alt={'Thumbnail'}>
                    </img>
                    <div className={'form-group'}>
                        <label>Title:</label>
                        <input className={'form-control'} name={'title'}
                               required pattern={'.{1,10}'} value={this.state.title}
                               onChange={(event) => this.handleOnChange(event)}/>
                    </div>
                    <div className={'form-group'}>
                        <label>Description:</label>
                        <input className={'form-control'} name={'description'} required value={this.state.description}
                               onChange={(event) => this.handleOnChange(event)}/>
                    </div>
                    <div className={'form-group'}>
                        <label>Content Category:</label>
                        <input className={'form-control'} name={'contentCategory'} required
                               value={this.state.contentCategory} onChange={(event) => this.handleOnChange(event)}/>
                    </div>
                    <div className={'form-group'}>
                        <label>Tags:</label>
                        <input className={'form-control'} name={'tags'} required value={this.state.tags}
                               onChange={(event) => this.handleOnChange(event)}/>
                    </div>
                    <div className={'form-group'}>
                        <label>Provider:</label>
                        <input className={'form-control'} name={'providerName'} required value={this.state.providerName}
                               onChange={(event) => this.handleOnChange(event)}/>
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}

export default App;
