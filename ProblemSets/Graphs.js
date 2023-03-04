// "week - 5"
//Graphs:
// a non-directional data structure that holds an adjacency list 
class Graph {
    constructor() {
        this.adjList = {};
    }
    //add vertex (node / data-point)
    addVertex(vertex){
        // if the adjList does not contain the vertex we are trying to add
        // then add it into the 
        if (!this.adjList[vertex]) this.adjList[vertex] = []
    }
    // removeVertex(vertex){

    // }
    // add edge - connection between the verteciex
    // pass in which vertices are being connected 
    addEdge(v1, v2) {
        //
        // console.log(this.adjList[v1])
        this.adjList[v1].push(v2)
        // console.log(this.adjList[v2])
        this.adjList[v2].push(v1)
    }
    // removeEdge(v1, v2) {}
    //DFSRecursive()
    //DFSIterative()
    //Challenge1: //iterative approach
    getOddValsIter(start){
        //initialize stack, result, visited, currentVertex to keep track of current values/vertex
        let stack = [start]
        let result = [];
        let visited = {};
        let curVertex;
        visited[start] = true;

        //while stack has length perform search via adjList, adding new vetices to the visited list. Pushing odd values into the results array
        while (stack.length) {
            // set the curVertex to last item in stack
            curVertex = stack.pop()
            //if curVertex is odd push it to results
            if (curVertex %2 !== 0) result.push(curVertex)
            // console.log(result)
            
            //for each neighbor in the adjList for that vertex, check if we have visited? if not add to visited & push to stack
            this.adjList[curVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }
    getOddValsRec(start){
        //list to store values
        let result = [];
        // store visited vertices 
        let visited = {};

        let adjList = this.adjList;
        //callback function immediately invoked by the start call 
        (function dfsOdd(vertex){
            //break case - to exit recursion -> if theres no vertex left
            if(!vertex) return null;
            //set visited of the vertex to be true
            visited[vertex] = true;
            //if the vertex is off push it to the results array
            if(vertex %2 !== 0) result.push(vertex)
            //for each neighbor recursively call same function dfsOdd(neighbor) if not already visited
            adjList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) return dfsOdd(neighbor)
            })
        })(start)
        return result
    }
    //challenge 2
    getEvenValsIter(start){
        //bfs
        //intitialize queue with starting ver
        //initialize result, visited, current vertex
            const queue = [start];
            const results = [];
            const visited = {};
            let curVertex;
            visited[start] = true;

            //while there are still vertecies to check in the queue...
            while (queue.length) {
                //set curVertex to be the first item in the queue. If its even
                // push it to results
                const curVertex = queue.shift();
                if (curVertex %2 == 0) results.push(curVertex);

                //for each vertex in the adj list, check to see if its been visited. If not visited. 
                this.adjList[curVertex].forEach(neighbor => {
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        queue.push(neighbor)
                    }
                })
            }
            return results

    }
    getEvenValsRec(start){
        // initialize stored final results 
        let results = [];
        // track what verticies have already been visited 
        let visited = {};
        let adjList = this.adjList;

        // recursively call function 
        (function bfsEven(vertex){
            // break case / success condition - no more vertices to check
            if(!vertex) return null;
            //if you have a vertex add it to the visited object
            visited[vertex] = true;
            
            //if the vertex is even push it into results 
            if(vertex %2 == 0) results.push(vertex)

            // check all of the neighbors in the adjList
            adjList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) return bfsEven(neighbor)
            })
        })(start)

        return results
    }
    depthFirstSearch(start){
        // create a list to strore the end result to return later
        // create an object to store the visited verticies 
        //point to adjList (easier code)
        let result = [];
        let visited = {};
        let adjList = this.adjList;

        // recursively call function
        (function dfs(vertex){
            //break case - success condition
            if(!vertex) return null;
            //mark that you have visited the vertex;
            visited[vertex] = true;
            //add this vertex to the result array
            result.push(vertex)
            //for each neighbor within that vertex's adjList, recursively call the same function 
            adjList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) return dfs(neighbor)
            })
        })(start)

        return result
    }
}
let testGraph = new Graph();
testGraph.addVertex("1")
testGraph.addVertex("2")
testGraph.addVertex("3")
testGraph.addVertex("4")
testGraph.addVertex("5")
testGraph.addVertex("6")
testGraph.addEdge("1", "2")
testGraph.addEdge("1","3") 
testGraph.addEdge("2","4") 
testGraph.addEdge("3","5") 
testGraph.addEdge("4","5") 
testGraph.addEdge("4","6") 
testGraph.addEdge("5","6") 
console.log(testGraph)
console.log(testGraph.getOddValsIter("1"))
console.log(testGraph.getOddValsRec("1")) // not in order?
console.log(testGraph.getEvenValsRec("1"))
console.log(testGraph.getEvenValsIter("1"))

// Challenge 1: 
// Challenge 1: Using the DFS (recursive or iterative) method on a undirected, unweighted graph, create a method 
// that returns all the odd valued vertices, for example, with the following   
 
// let g = new Graph(); 
 
// g.addVertex("1") 
// g.addVertex("2") 
// g.addVertex("3") 
// g.addVertex("4") 
// g.addVertex("5") 
// g.addVertex("6") 
 
// g.addEdge("1","2") 
// g.addEdge("1","3") 
// g.addEdge("2","4") 
// g.addEdge("3","5") 
// g.addEdge("4","5") 
// g.addEdge("4","6") 
// g.addEdge("5","6") 
 
//          1 
//        /   \ 
//       2     3 
//       |     | 
//       4 --- 5 
//        \   / 
//          6 
 
// RESULT: [1, 3, 5] 
//stack: []
//curVertex: 2
 //result:[1, 3, 5]
 //visited:{ 1: true, 2: true, 3:true, 5: true, 4: true, 6: true }

// Challenge 2: Using the BFS (recursive or iterative) method on a undirected, unweighted graph, create a method 
// that returns all the even valued vertices, for example, with the following   
 
// let g = new Graph(); 
 
// g.addVertex("1") 
// g.addVertex("2") 
// g.addVertex("3") 
// g.addVertex("4") 
// g.addVertex("5") 
// g.addVertex("6") 
 
// g.addEdge("1","2") 
// g.addEdge("1","3") 
// g.addEdge("2","4") 
// g.addEdge("3","5") 
// g.addEdge("4","5") 
// g.addEdge("4","6") 
// g.addEdge("5","6") 
 
//          1 
//        /   \ 
//       2     3 
//       |     | 
//       4 --- 5 
//        \   / 
//          6 
 
// RESULT: [2, 4, 6] 
 

// Challenge 3: 
// You are given a connected undirected graph. Perform a Depth first Traversal of the graph. 
// Note: Use a recursive approach to find the DFS traversal of the graph starting from the Oth vertex from left to right according to the graph.
// please see accompanying pdf file
// output: 0 2 4 3 1 
// explanation:
// adjList : {
//  0 : [ 2,3,1]
//  1 : [0]
//  2 : [0, 4]
//  3 : [0]
//  4 : [2]
// }
// so starting from 0 it will go to 2 then 4 and then 3 and 1 thus dfs will be 0 2 4 3 1 
let chal3G = new Graph();
chal3G.addVertex('0');
chal3G.addVertex('1');
chal3G.addVertex('2');
chal3G.addVertex('3');
chal3G.addVertex('4');

chal3G.addEdge('0', '2');
chal3G.addEdge('0', '3');
chal3G.addEdge('0', '1');
chal3G.addEdge('2', '4');

console.log(chal3G);
console.log(chal3G.depthFirstSearch('0'));
