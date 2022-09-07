var nodename=document.getElementById("NodeName");
var edgeweight=document.getElementById("EdgeWeight");

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  function AddNodePop()
  {
      var blur=document.getElementById("blur");
      blur.classList.toggle("active");
      var popupNode=document.getElementById("popupNode");
  
      if (popupNode.style.visibility=== "hidden") {
        popupNode.style.visibility = "visible";
        popupNode.style.transition= "0.5s"
        popupNode.style.top= "15%"
        popupNode.style.opacity= 1


      } else {
        popupNode.style.visibility = "hidden";
        popupNode.style.transition= "0.5s"
        popupNode.style.top= "0px"
        popupNode.style.opacity= 0



      }
      
  }

  function AddEdgePop()
  {
      var blur=document.getElementById("blur");
      blur.classList.toggle("active");
      var popupEdge=document.getElementById("popupEdge");
  
      if (popupEdge.style.visibility=== "hidden") {
        popupEdge.style.visibility = "visible";
        popupEdge.style.transition= "0.5s"
        popupEdge.style.top= "15%"
        popupEdge.style.opacity= 1


      } else {
        popupEdge.style.visibility = "hidden";
        popupEdge.style.transition= "0.5s"
        popupEdge.style.top= "0px"
        popupEdge.style.opacity= 0



      }
  }

  function AddAlgoPop()
  {
      var blur=document.getElementById("blur");
      blur.classList.toggle("active");
      var popupAlgo=document.getElementById("popupAlgo");
  
      if (popupAlgo.style.visibility=== "hidden") {
        popupAlgo.style.visibility = "visible";
        popupAlgo.style.transition= "0.5s"
        popupAlgo.style.top= "15%"
        popupAlgo.style.opacity= 1


      } else {
        popupAlgo.style.visibility = "hidden";
        popupAlgo.style.transition= "0.5s"
        popupAlgo.style.top= "0px"
        popupAlgo.style.opacity= 0



      }
  }
  function AddCodePop()
  {
      var blur=document.getElementById("blur");
      blur.classList.toggle("active");
      var popupCode=document.getElementById("popupCode");
      if (popupCode.style.visibility=== "hidden") {
        popupCode.style.visibility = "visible";
        popupCode.style.transition= "0.5s"
        popupCode.style.top= "15%"
        popupCode.style.opacity= 1


      } else {
        popupCode.style.visibility = "hidden";
        popupCode.style.transition= "0.5s"
        popupCode.style.top= "0px"
        popupCode.style.opacity= 0



      }
  }
  function CancelEdgePop(){
    AddEdgePop();
      selectedItems=[];
     
  }



var arr_nodes=Array();
var arr_edges=Array();

var nodes=new vis.DataSet();
var edges=new vis.DataSet();

var selectedItems=Array();
var counter=0;

function CreateNode()
{

    if(nodename.value!="")
    { 
   
      AddNodePop();
        counter=counter+1;
  var node={ id:counter, label: "\n"+nodename.value,shape:"dot",borderWidth:15,size:20,x:0,y:-100,
     color: {
         background:'#04FF3B',
         border: '#FFFFFF',
     } ,
     shadow:{
   enabled: true,
   color: 'rgba(0,0,0,0.5)',
   size:20,
   x:5,
   y:10
  },
   };
   arr_nodes.push(node);
   nodes.clear();
   nodes.add(arr_nodes);
}
else
window.alert("Please write a node name");
}
$('#addnode').on("click",function(){
AddNodePop();
 
   
});
 // create an array with nodes


 // var nodes = new vis.DataSet([
 //   { id: 1, label: "Node 1",shape:"dot",borderWidth:10,
 //   color: {
 //       background:'#F5E65F',
 //       border: '#888888',
 //   } },
 //   { id: 2, label: "Node 2",size:70,shape:"dot" },
 //   { id: 3, label: "Node 3" },
 //   { id: 4, label: "Node 4" },
 //   { id: 5, label: "Node 5" },
 // ]);

 // create an array with edges
 // var edges = new vis.DataSet([
 //   { from: 1, to: 3 },
 //   { from: 1, to: 2 },
 //   { from: 2, to: 4 },
 //   { from: 2, to: 5 },
 //   { from: 3, to: 3 },
 // ]);

 // create a network

  
 var container = document.getElementById("mynetwork");
 var data = {
   nodes: nodes,
   edges: edges,
 };
 var options = {
   physics:{enabled:true
, repulsion: {
 centralGravity: 10,
 // springLength: 500,
 // springConstant: 0.01,
 // nodeDistance: 100,
 // damping: 0.09
},
},
 };
 var network = new vis.Network(container, data, options);

function CreateEdge(params)
{
  if(isNaN(edgeweight.value)){
  alert("Edge Weight should be an integer")
}else{
  if(edgeweight.value!="")
    {AddEdgePop();
    var edge= { from: selectedItems[0], to: selectedItems[1],color:"#000000",length:200,label:edgeweight.value,
   
};
    arr_edges.push(edge);
    edges.clear();
    edges.add(arr_edges);
    selectedItems=[];
    }else
    {window.alert("Please add edge weight");
   }
  }
}

 network.on("select", function (params) {
     if(params.nodes.length==0)
     {selectedItems=[];
         console.log("window selected")
     }
     if(params.nodes.length==1)
     {console.log("node selected");
    if(selectedItems.length==0||selectedItems.length==1)
    {   if(selectedItems.length==1) 
    {selectedItems.push(params.nodes[0]);
        AddEdgePop();
        }
    else
    selectedItems.push(params.nodes[0]);
    
    }
    //select node event
    if (params.nodes[0] == 2) {
    console.log('click event on 2!');
    }
  }
});

