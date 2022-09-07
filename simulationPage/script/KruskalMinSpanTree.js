function MinSpanTree()
{   if(nodes.length>edges.length)
    {
        window.alert("Make sure the graph is closed");
    }
   else{
    if(nodes.length==0)
    window.alert("Please Add Node");
    if(edges.length==0)
    window.alert("Please Add an Edge");
    
    var sortedEdges = Sort_The_Edges(arr_edges);
    console.log(sortedEdges);
    var MinSpanEdges= Remove_Loop_From_Edges(sortedEdges);
    console.log("answer is-------------");
    console.log(MinSpanEdges);
    edges.clear();
    arr_edges=MinSpanEdges;
    edges.add(MinSpanEdges);
   }
}

function Sort_The_Edges(e){
    console.log("after sorting");
    var sortededges=e.sort(function(a,b){
    return parseInt(a.label)-parseInt(b.label);
    });
    return sortededges;
}


function Remove_Loop_From_Edges(sortedEdges)
{var visited_nodes= new Array(nodes.length).fill(-1);
var result=[];
     sortedEdges.forEach(element => {
     if(Find(visited_nodes,element["from"]-1)!=Find(visited_nodes,element["to"]-1))     
{
    result.push(element);
    Union(Find(visited_nodes,element["from"]-1),Find(visited_nodes,element["to"]-1),visited_nodes);

}


});
return result;

}

function Find(visited_nodes,n)
{
if(visited_nodes[n]==-1)
{
    return n;
}
return Find(visited_nodes,visited_nodes[n]);
}

function Union(s1,s2,visited_nodes)
{visited_nodes[s1]=s2;

}