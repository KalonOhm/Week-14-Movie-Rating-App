import React, {Component} from 'react';
import Review from './Review';
//import ReviewForm from './ReviewForm';

//list of reviews underneath the write-review form

export default class ReviewList extends Component  {
    //constructor for the list of reviews
    constructor(props){
        super(props);

        this.state = {
            reviewer: props.reviewer,
            reviewText: props.reviewText,
            reviewRating: props.reviewRating,
        }
    };


    render() {
        let reviews = [];

        if (this.state.reviews) {
            for (let review of this.state.reviews){
                reviews.push(<Review {...review}/>)
                
            }
        }


        return (
            <div className='container'>
                <Review />
            </div>
        
        
        )
    }
}