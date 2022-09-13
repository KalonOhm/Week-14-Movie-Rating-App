import React, {Component} from 'react';
import StarRating from './StarRating';
import Review from './Review';


//form for adding your new reviews to the page
//<div> container holds a <form> that lets you input text, and a submit button that saves that text to the page. 
//under that would be the review list
//can add a star rating to your reviw. 
export default class ReviewForm extends Component  {

    constructor(props){
        super(props);

        this.state = {
            reviewer: props.reviewer,
            reviewContent: props.reviewContent,
            ratingStars: props.ratingStars,
        }
    };


    // onSubmit = (e) => {
    //     e.preventDefault; //don't want submitting to reset page
    //     this.props.submitReview(this.state.userNameValue); //allows users to "sign" their review, instead of leaving anonymous
    //     this.props.submitReview(this.state.reviewTextContent); //actual review content
    //     const resetInput = {userName: '', reviewText: ''} //reset input field to empty
    // }

    

    
    render() {
        return (
            <>
            <h3>   What's your take?</h3>
            <div className='form'>
             
                <input type="text" value={this.state.userName } name="user" className='form-control' label="User Name"/> 

                <textarea className='form-control' name="reviewContent" label="Write a review"/>

                <button type="button" onClick={this.onSubmit}>Submit Review</button>
            </div>
            </>
        )
    }
}

