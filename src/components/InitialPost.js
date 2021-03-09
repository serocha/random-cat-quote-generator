import React, { Component } from 'react';
import axios from 'axios';
/* The purpose of Post is just to upload data to the Firebase database. Easier to write in editor. */
class InitPost extends Component {
    state = { 
        data: {
            'North America': [
                {
                    author: '', 
                    quotes: [
                        
                    ]
                },
                {
                    author: 'Mark Twain',
                    quotes: [
                        "A man who carries a cat by the tail learns something he can learn in no other way."
                    ]
                },
                {
                    author: '',
                    quotes: [

                    ]
                }
            ],
            'Europe': [
                {
                    author: '',
                    quotes: [

                    ]
                },
                {
                    author: '',
                    quotes: [
                        "The smallest feline is a masterpiece."
                    ]
                },
                {
                    author: '',
                    quotes: [
                        "The ideal of calm exists in a sitting cat.",
                    ]
                },
                {
                    author: '',
                    quotes: [
                    ]
                }
            ],
            'Asia': [
                {
                    author: '',
                    quotes: [
                    ]
                },
                {
                    author: '',
                    quotes: [
                    ]
                },
                {
                    author: '',
                    quotes: [
                    ]
                }
            ],
            'Middle-East': [
                {
                    author: '',
                    quotes: [
                    ]
                },
                {
                    author: '',
                    quotes: [
                    ]
                },
                {
                    author: '',
                    quotes: [
                    ]
                }
            ],
            'Africa': [
                {
                    author: '',
                    quotes: [
                    ]
                },
                {
                    author: '',
                    quotes: [
                    ]
                },
                {
                    author: '',
                    quotes: [
                    ]
                }
            ],
            'Australia': [
                {
                    author: '',
                    quotes: [
                    ]
                },
                {
                    author: '',
                    quotes: [
                    ]
                },
                {
                    author: '',
                    quotes: [
                    
                    ]
                }
            ]
        }
    }

    post = () => {
        const data = this.state.data;
        axios.patch('https://fcc-random-quote-default-rtdb.firebaseio.com/quotes.json', data)
        .then( response => console.log(response))
        .catch( error => console.log(error));

    };

    render () {
        return (
            <div>
                <button onClick={ ()=> this.post() }>Post Updated Quotes</button>
            </div>
        )
    }
}

export default InitPost;