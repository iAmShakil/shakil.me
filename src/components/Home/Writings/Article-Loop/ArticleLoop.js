import React, {Component} from 'react';
import ArticleLink from './ArticleLink';
import axios from 'axios';

class ArticleLoop extends Component{

    constructor(props){
        super(props);
        this.formateDate = this.formateDate.bind(this);
        this.state = {
            postData: [],
        }
    }

    formateDate(inputDate){
        var inputDate = inputDate.split("T")[0].split("-");
        var monthNumber = inputDate[1];
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
        
        return `${inputDate[2]} ${monthString} ${inputDate[0]}`;
    }

    componentDidMount(){
        axios(`https://shakil.me/blog/wp-json/wp/v2/posts`)
        .then((response) => {
            this.setState({
                postData: response.data,
            });
            console.log(this.state.postData);
        })
        .catch((err) => {
            console.log(err);
        } );
    }
    render(){
        return (
            <div>
                <ul>
                    {
                        this.state.postData.map( (data) => { 
                            return <li key={data.slug}><ArticleLink link={`/blog/${data.slug}`} text={data.title.rendered} /><span className="Loop-Date">{this.formateDate(data.date)}</span></li>                            
                        })
                    }
               </ul>
            </div>
        )
    }
}
export default ArticleLoop;