import React, {Component} from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';

//list of reviews undernead the write-review form

export default class ReviewList extends Component  {
    //constructor for the list of reviews
    constructor(props){
        super(props);

        this.state = {
            reviewer: props.reviewer,
            reviewContent: props.reviewContent,
            reviewRating: props.reviewRating,
        }
    };


    render() {
        let reviews = [];
        let i = 0;

        if (this.state.reviews) {
            for (let Review of this.state.reviews){
                i++;
                reviews.push(<ReviewList key={index} {...Review} />);
            }
        }


        return (
            <div className='container'>
                {this.props.ReviewList.map((Review) => (
                    
                ))}
            </div>
        
        
        )
    }
}