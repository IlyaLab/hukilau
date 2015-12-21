Download latest version of [DBImport Utility](http://code.google.com/p/hukilau/downloads/list) or [Build using instructions below](#Build_DBImport_Utility.md).

## Usage ##
  1. Create Graph Database import configuration from [template](http://code.google.com/p/hukilau/source/browse/utils/src/main/resources/graphDB.config)
```
{
    db:{
        rootPath: "/local/path/to/your/new/database/example.db",
	nodeTypes:[
	    {
	        name: "node_type_a",
		comment: "node properties will be typed as string unless specified in items",
		items:[
                       { name: "node_property_a", type: "string" },
                       { name: "node_property_b", type: "int" },
                       { name: "node_property_c", type:"int" }
                  ]
            },
            { name: "node_type_b", comment: "all node properties will be typed as string" },
            { name: "node_type_c", comment: "all node properties will be typed as string" }
        ],
	edgeTypes:[
	    { name: "edge_type_a", comment: "all edge properties will be typed as string" },
	    {
	        name: "edge_type_b",
	        comment: "edge properties will be typed as string unless specified in items",
	        items:[
	            { name: "edge_property_a", type: "double" },
	            { name: "edge_property_b", type: "int" }
                ]
            }
        ]
    },
    nodeFiles:[
	{ location:"/local/path/to/your/files/file_a.txt", type:"node_type_a"},
	{ location:"/local/path/to/your/files/file_b.txt", type:"node_type_b"},
	{ location:"/local/path/to/your/files/file_c.txt", type:"node_type_c"}
    ],
    edgeFiles:[
	{ location:"/local/path/to/your/files/file_d.txt", type:"edge_type_a"},
	{ location:"/local/path/to/your/files/file_e.txt", type:"edge_type_b"}
    ]
}
```
  1. Configure Graph Database import configuration file (example.config)
    * Need at least one node\_type file and one edge\_type file
    * Include as many node\_types and edge\_types as needed
    * Specify node and edge property types, all non-specified columns will be typed as string
  1. Execute import utility:
```
   java -jar lib/DBImport.jar example.config
```

## Build DBImport Utility ##
  * [Checkout project](http://code.google.com/p/hukilau/source/checkout)
  * Use [Maven 2.x or 3.x](http://maven.apache.org/download.html) to build project
    * activate DBImport profile to build utility
```
   mvn clean install -PDBImport
```
  * The DBImport utility will be installed under
```
   $HUKILAU_HOME/utils/target/DBImport-jar-with-dependencies.jar
```
  * Move/rename DBImport utility (jar) as needed