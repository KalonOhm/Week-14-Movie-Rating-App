import React, {Component} from 'react';
// import StarRating from './StarRating'; broken
import Review from './Review';


//form for adding your new reviews to the page
//<div> container holds a <form> that lets you input text, and a submit button that saves that text to the page. 
//under that would be the review list
//can add a star rating to your reviw. 
export default class ReviewForm extends Component  {

    constructor(props){
        super(props);
        
        //initialize form with empty state in the fields
        this.state = {
            reviewer: '',
            reviewText: '',
            ratingStars: '',
        }
    };


    onSubmit = (e) => {
        e.preventDefault(); //don't want submitting to reset page
        //this.props.myfunc(e);
        console.log("this is my string", this.state.reviewer)
        // this.props.submitReview(this.state.reviewer); //allows users to "sign" their review, instead of leaving anonymous
        
        // this.props.submitReview(this.state.reviewText); //actual review content
        
        const resetInput = {reviewer: '', reviewText: ''} //reset input field to empty
    }

    //onChange each input needs an onChange property onChange-{onChange etc}
    onChange = (e) => {
        this.setState({reviewer: e.target.value})
        console.log("events", e.target.value)
    }
    

    render() {
        return (
            <>
            <h3>   What's your take?</h3>
            <form className='form'>
             
                <input type="text" onChange={this.onChange} value={this.state.reviewer } name="reviewer" className='form-control' label="User Name"/> 

                <textarea className='form-control' name="reviewText" label="Write a review"/>

                <button type="button" onClick={this.onSubmit}>Submit Review</button>
            </form>
            </>
        )
    }
}

