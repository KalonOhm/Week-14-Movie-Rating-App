import React, {Component} from 'react';


//individual review "object" that would be placed into the review list
export default class Review extends Component  {
    //constructor
    constructor(props){
        super(props);
        this.state={
            reviewList: []
        }
    }

    submitReview = (newReview) => {
        this.setState = ({ review: this.state.review.concat(newReview)});
    }

    render() {
        return (
            <>
                    {
                        this.props.reviewList.map((review) => (
                            <div className='card'>
                                <div className='card-header'>{this.newReview.userName}</div>
                                <div className='card-body'>{this.state.reviewTextContent}</div>
                            </div>
                        ))
                    }
            </>
        );
    }
}