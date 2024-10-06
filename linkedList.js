class linkedList {
    constructor (){
        this.list = []
    }

    append(value){
        this.list.push(new Node(value))
        // rearrange nextnodes
        this.list.forEach((node,index) => {
            node.nextNode = this.list[index+1]
        });
    }

    prepend(value){
        this.list.unshift(new Node(value))
        // rearrange nextnodes
        this.list.forEach((node,index) => {
            node.nextNode = this.list[index+1]
        });
    }

    size(){
        return this.list.length
    }
    
    head(){
        return this.list[0]
    }

    tail(){
        return this.list[this.list.length]
    }

    at(index){
        return this.list[index]
    }

    pop(){
        this.list.pop()
        this.list[this.list.length-1].nextNode = null
    }
    
    contains(value){
        this.list.forEach(node => {
            if(node.value == value) return true
        })
        return false
    }

    find(value){
        this.list.forEach((node,index) => {
            if(node.value == value) return index
        })
    }

    toString(){
        let string = ""
        this.list.forEach((node,index) => {
            if(index == this.list.length-1) {
                string += "( " + node.value + " ) -> null"
            }
            else{
                string += "( " + node.value + " ) -> "
            } 
        });
        return string
    }
    
    insertAt(value, index){
        this.list[index] = new Node(value,this.list[index+1])
        this.list[index-1].nextNode = this.list[index]
    }

    removeAt(index){
        this.list.splice(index, 1);
        // rearrange nextnodes
        this.list.forEach((node,index) => {
            node.nextNode = this.list[index+1]
        });
    }
}

class Node {
    constructor(value = null,nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}

export  { linkedList }