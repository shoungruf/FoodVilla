import React from "react";


class ProfileClass extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            count : 0,
            userInfo: {
                name : "" ,
                location : ""
            }
        };
      
        console.log("Constructor")
    }

   async componentDidMount(){

        const jsonObj = await fetch("https://api.github.com/users/shoungruf");

        const dataObj = await jsonObj.json();

        console.log(dataObj);
        this.setState({
            userInfo: dataObj
        });

        this.timer = setInterval(()=>{
            console.log("abc");
        }, 1000);

        console.log("Component did mount");

    }

    componentDidUpdate(){
       console.log("Update rendered");
     
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        const {count} =  this.state;
        console.log("Render");
       
        return (
            <>
            <div className="grid grid-flow-row">
            <h1 className="text-bold">Profile class based component </h1>
            <button onClick={()=>{
                this.setState({
                    count : count+1
                });
                className="border-orange-200 round"
            }}>Count </button>
            <h2> name : {this.state.userInfo.name}</h2>
            <h2> location : {this.state.userInfo.location}</h2>
            <h2> count : {this.state.count}</h2>
            </div>

            </>
        )
    }
};

export default ProfileClass;