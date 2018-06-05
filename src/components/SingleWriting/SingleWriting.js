import React, { Component } from 'react';
import './SingleWriting.css';
import axios from 'axios';

class SingleWriting extends Component {
    constructor(props){
        super(props);
        this.formateDate = this.formateDate.bind(this);
        this.state = {
            title : '',
            content: '',
            date: '',
        }
    }

    formateDate(inputDate){
        var inputDateFormatted = inputDate.split("T")[0].split("-");
        var monthNumber = inputDateFormatted[1];
        var monthString;               
        switch(Number(monthNumber)){
            case 1:
                monthString = "JAN";
                break;
            case 2:
                monthString = "FEB";
                break;
            case 3:
                monthString = "MAR";
                break;
            case 4:
                monthString = "APR";
                break;
            case 5:
                monthString = "MAY";
                break;
            case 6:
                monthString = "JUN";
                break;
            case 7:
                monthString = "JUL";
                break;
            case 8:
                monthString = "AUG";
                break;
            case 9:
                monthString = "SEP";
                break;
            case 10:
                monthString = "OCT";
                break;
            case 11:
                monthString = "NOV";
                break;
            case 12:
                monthString = "DEC";
                break;                    
            default:
                monthString = " ";

        }
        
        return `${inputDateFormatted[2]} ${monthString} ${inputDateFormatted[0]}`;
    }

    componentDidMount(){
        axios(`https://blog.shakil.me/wp-json/wp/v2/posts?slug=${this.props.match.params.slug}`)
        .then((response) => {
            const title = response.data["0"].title.rendered;
            const content = response.data["0"].content.rendered;
            const date = response.data["0"].modified;
            const formattedDate = this.formateDate(date);
            document.title = title;
            this.setState({
                title: title,
                content: content,
                date: formattedDate
            });
        })
        .catch((err) => {
            console.log(err);
        } );
    }

    render () {
        return (
            <div className="Single-Content">
              <h1 className="Post-Title">{this.state.title}</h1>
              <div className="Post-Date">{this.state.date}</div>
              <div className="Post-Content" dangerouslySetInnerHTML={ {__html:this.state.content} } ></div>  
            </div>
        )
    }
}

export default SingleWriting;