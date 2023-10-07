import React from 'react';


class Form extends React.Component {


    //function called when user clicks button 


    //render (where all html lives)
    render() {
        return (
            <div className="container">
                <h1>Find Out Your Spotify's Top 5 <br/>
                    Of The Month!</h1>
                    <button className='btn-primary' type="button">
                        {
                            <span>get started</span>
                        }
                    </button>
                
            </div>

        );
    }

}

export default Form;