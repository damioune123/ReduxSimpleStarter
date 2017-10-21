import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux';

class BookList extends Component{

    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li
                    onClick={()=> this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }


    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //Whatever is returned  will show up  as props inside booklists
    return{
        books: state.books
    };
};

function mapDispatchToProps(dispatch){
    //whenever selectBook is called , the result should be passed to all of our reducers
    // la méthode selectbook (action creator) sera disponible dans le container dans les props*
    return bindActionCreators({ selectBook : selectBook}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);