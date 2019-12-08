import React from 'react';
import Tree from 'react-d3-tree';

const myTreeData = [
  {
    "name": "Top Level",
    "parent": "null",
    "children": [
      {
        "name": "Level 2: A",
        "parent": "Top Level",
        "children": [
          {
            "name": "Son of A",
            "parent": "Level 2: A"
          },
          {
            "name": "Daughter of A",
            "parent": "Level 2: A"
          }
        ]
      },
      {
        "name": "Level 2: B",
        "parent": "Top Level"
      }
    ]
  }
];

class TreeGraph extends React.Component {

    render() {
        return (
          <>
            <div id="treeWrapper" style={{width: '50em', height: '20em'}}>

                <Tree data={myTreeData} />  

            </div>
          </>
        );
      }
    }
    
    export default TreeGraph;