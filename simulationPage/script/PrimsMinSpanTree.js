function MinSpanTree(){
  if(nodes.length>edges.length)
  {
      window.alert("Make sure the graph is closed");
  }
   else{
      var Adj_Matrix=createAdjMat();
    var Adj_Min_Span_List=createMinSpanMat(Adj_Matrix);
    console.log("min span list is------------");
    console.log(Adj_Min_Span_List);
    var edgeArray=[];
    for(var from in Adj_Min_Span_List)
    {
      length=Adj_Min_Span_List[from].length;
      for(var to=1;to<length;to=to+2)
      { var edge= { from:Number(from)+1, to:Adj_Min_Span_List[from][to]+1,color:"#000000",length:200,label:Adj_Min_Span_List[from][to-1].toString()};
        edgeArray.push(edge);

      }

    }
   
    console.log(edgeArray);
    edges.clear();
    arr_edges=edgeArray;
    edges.add(edgeArray);
   }

}

function createAdjMat()
{
  if(nodes.length==0)
  window.alert("Please Add Node");
  if(edges.length==0)
  window.alert("Please Add an Edge");
  if(nodes.length!=0&&edges.length!=0)
  {    console.log(typeof arr_edges[0]["from"]);

    var Adj_Matrix=new Array(nodes.length).fill(0).map(() => new Array(nodes.length).fill(0));
    arr_edges.forEach(element => {
      Adj_Matrix[element["from"]-1][element["to"]-1]=parseInt(element["label"]);
      Adj_Matrix[element["to"]-1][element["from"]-1]=parseInt(element["label"]);
    });
    return Adj_Matrix;
    var arrText='';
    for (var i = 0; i < nodes.length; i++) {
      for (var j = 0; j < nodes.length; j++) {
          arrText+=Adj_Matrix[i][j]+' ';
      }
      console.log(arrText);
      arrText='';
  }
  }
}

function createMinSpanMat(Adj_Matrix)
{
  var visited_Nodes=Array(nodes.length).fill(0);
  var visnodes=Array();
  var min_i=0;
  var min_j=0;
  Adj_Matrix[min_i][min_j]=9999;

  var Adj_Min_Span_List={};
  for(var k=0;k<nodes.length;k++)
  Adj_Min_Span_List[k]=new Array();
  
  
  visited_Nodes[0]=1;
  visnodes.push(0);
  for(var m=0; m<nodes.length-1;m++)
  {min_j=0;
    min_i=0;
  visnodes.forEach((i)=>{
  findMin(i);
  });
  visited_Nodes[min_j]=1;
  visnodes.push(min_j);
  console.log("min i is----------------------");
  console.log(min_i);
  console.log(Adj_Min_Span_List[min_i]);
  Adj_Min_Span_List[min_i].push(Adj_Matrix[min_i][min_j]);
  Adj_Min_Span_List[min_i].push(min_j);

}
function findMin(i)
{
  for(var j =0;j<nodes.length;j++)
  {
    if(Adj_Matrix[i][j]!=0&&visited_Nodes[j]!=1&&Adj_Matrix[i][j]<Adj_Matrix[min_i][min_j])
    {     min_j=j;
          min_i=i;
   
    }
  }

}
return Adj_Min_Span_List;
}


    
        
            
        
        
        
