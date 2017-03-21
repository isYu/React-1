  var React = require('react');
  var ReactDom = require('react-dom');
  // var App = React.createClass({
   //    getDefaultProps: function () {
   //    	 return {
   //    	 	name: "Yu"
   //    	 }
   //    },
	  // getInitialState: function () {
	  // 	 return{ 
	  // 	  	 open:true
	  // 	 }
	  // },
   //    componentWillMount: function () {

   //    },
   //    componentDidMount: function () {

   //    },
   //    shouldComponentUpdate: function (nextProps, nextState) {
   //        if(nextState){
   //        	  return false; 
   //        }
   //    	  return true;
   //    },
   //    componentWillUpdate: function () {

   //    },
  	//   onChangeColor: function () {
  	//        var flag = !this.state.open;
  	//        this.setState({
  	//      	 open:flag
  	//       })
  	//   },
  	//   var fontColor = {
  	//   	  color: 'red'
  	//   },
  	//   if(!this.state) {
  	//   	  fontColor.color = 'green'
  	//   },
   //    render:function () {
  	//       return (
  	//   	  <div className={'duyi'} style={fontColor}>
   //        <h1>Cst</h1>
   //        <p>haha</p>
  	//   	  </div>
  	//   	)	
	  // }
  // });
  var Mask = React.createClass({
  	  getDefaultProps: function () {
  	  	return {
  	  		style: {
  	  			width: '100%',
  	  			opacity: 0.5,
  	  			background: '#000',
  	  			height: '100%',
  	  			display: 'none',
  	  			position:'absolute',
  	  			left: 0,
  	  			top: 0,
  	  			bottom: 0,
  	  			right: 0
  	  		}
  	  	}
  	  },
  	  render: function () {
  	  	var style = Object.assign({},this.props.style)
  	    if(this.props.openFlag){
          style.display = 'block'
  	  }
  	  	 return (
             <div style={style}>
                {this.props.children}
             </div>	
  	  	  )
  	 }
  });
  var Info = React.createClass({
  	  getDefaultProps: function () {
  	  	return {
  	  	    message: 'hello world',
  	  	    style: {
  	  	    	margin:'100px auto',
  	  			textAlign: 'center',
  	  			height: '150px',
  	  			lineHeight: '150px',
  	  			color: '#000',
  	  			background: '#f40'
  	  		}
  	    }
  	  },  
  	  render: function () {
  	  	  return (
             <div onClick={this.props.onHandleClick} style={this.props.style}>{this.props.message}</div>	
  	  	  )
  	 }
  });
  var ButtonDialog = React.createClass({
  	  getInitialState: function () {
  	  	return {
             open: false
  	  		}
  	  },
  	  onChangeState: function () {
  	  	var flag = !this.state.open;
  	  	this.setState ({
            open: flag
  	  	})
  	  },
      render: function () {
      	 return (
      	 	<div>	
              <button onClick={this.onChangeState}>Dialog</button>
              <Mask openFlag={this.state.open}>
                <Info onHandleClick={this.onChangeState}></Info>
              </Mask>
             </div>
      	 	)
      }
  });
  ReactDom.render(
     <ButtonDialog/>,
     document.getElementById('root')
  );