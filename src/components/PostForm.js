import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postActions';

class PostForm extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            title:'',
            body: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value,
        });
    }
    onSubmit(e){
  e.preventDefault();

  const postData = {
      title: this.state.title,
      body: this.state.body,
  }
   this.props.createPost(postData);

    }

  render() {
    return (
      <div>
        <h1>add post</h1>
        <form onSubmit={this.onSubmit}> 
            <div>
                <label>Title:</label><br/>
                <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
            </div>
            <br/>
            <div>
                <label>Body:</label><br/>
                <textarea name="body" value={this.state.body} onChange={this.onChange}/>
            </div>
            <br/>
            <button type="submit">submit</button>
        </form>
       
      </div>
    )
  }
}

PostForm.propTypes = {
createPost :PropTypes.func.isRequired,

}
export default connect(null, {createPost})(PostForm);