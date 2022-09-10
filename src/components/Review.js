import React, {Component} from 'react';

//individual review "object" that would be placed into the review list
export default class Review extends Component  {
    render() {
        return (
            <div className='container'>

                <div>
                    {
                        this.props.Review
                    }
                </div>
            </div>
        )
    }
}