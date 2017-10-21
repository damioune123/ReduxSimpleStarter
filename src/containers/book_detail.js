import React, { Component } from 'react';
import { connect } from 'react-redux';
class BookDetail extends Component{
    constructor(props){
        super(props);

    }
    render(){
        //attention quand l'appli boot, le select book vaut null (dans le state)
        if(!this.props.book){
            return <div>Select a book to get started !  </div>
        }
        return (
            <div>
                <h3> Detail for : </h3>
                <div>Title : {this.props.book.title }</div>
                <div>Pages : {this.props.book.pages} </div>
            </div>
        )
    }
}

function mapStateToPops(state) {
    return {
        book : state.activeBook
    };

}

export default connect(mapStateToPops)(BookDetail)