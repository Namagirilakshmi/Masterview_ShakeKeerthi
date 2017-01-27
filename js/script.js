var Wrapper=React.createClass({

   getInitialState:function(){
        return {
            data: ''
              }
    },
    setInfo:function(a){
      this.setState({
        data:a
       })
    },
    // To load json data
    componentWillMount: function(){
      $.ajax({
        dataType: "json",
        url: "data/data.json",
      success: function(result){
          this.setInfo(result);
        }.bind(this)
      });
    },
    // click function of li starts
    dinoValues:function(indexval,obj,objname){
     // responsive for mobile view
     var w=window.matchMedia("(min-width: 400px)" && "(max-width:768px)");
     if (w.matches) {
        $('.outerCover').css({"display":"none"});
        $('.innerCover').css({"display":"block"});

        var btn="<button class='btnclass btn btn-primary'>back</button>";
         
  }
 
 if (window.matchMedia("(min-width: 769px)").matches){
    $('.innerCover').html("");
}
w.addListener(function(change){
  if(change.matches){
        $('.innerCover').css({"display":"none"});  
        $('.outerCover').css({"display":"block"});  
        $('.innerCover').html("");
        }
        
  else{
          $('.outerCover').css({"display":"block"});
          $('.btnclass').remove();
          $('.innerCover').css({"display":"block"});

      }     
 })
    // fetching description for clicked element
      $('.innerCover').css({"display":"block"});
      $('.innerCover').append("<p class='headingalign'>"+objname+"</p>");
      $.each(obj,function(k,v){
          $('.innerCover').append("<p>"+k+" : "+v+"</p>");
      });
      // appending button in responsive
      if (w.matches) {
         $('.innerCover').append(btn);
         $('.btnclass').click(function(){
              $('.innerCover').html("");
              $('.outerCover').css({"display":"block"});
              $('.innerCover').css({"display":"none"});
          })  
                   } 
                        },

    render:function(){
      var key=Object.keys(this.state.data);
      var val=Object.values(this.state.data);
      
      var z=key.map(function(text,i){
          return(        
            <li className ="borderalign" onClick={this.dinoValues.bind(this,i,val[i],text)}>{text}</li>
            )
        },this);
        return (
          <div> 
            <h1>SPECIES OF DINOSAURS</h1>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 outerCover">{z}</div>
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 innerCover"></div>
          </div>
          )
    }
        });
ReactDOM.render(<Wrapper />,document.getElementById('wrap'));


