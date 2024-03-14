class Bag {
    #owner;

    constructor(weight, id){
        this.weight = weight;
        this.id = id;
        this.#owner = null;
    }

    getOwner(){
        return this.#owner;
    }

    assignOwner(newOwner){
        this.#owner = newOwner;
    }

}


module.exports = Bag;