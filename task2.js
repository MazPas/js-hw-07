const inventory = {
    items: ["Knife", "Gas mask"],
    add(itemName) {
        console.log(`Adding ${itemName} to inventory`);
        this.items.push(itemName);
    },
    remove(itemName) {
        console.log(`Removing ${itemName} from inventory`);
        this.items = this.items.filter((item) => item !== itemName);
    },
};

const invokeInventoryAction = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action(itemName); 
};

invokeInventoryAction("Medkit", function (itemName) {
    inventory.add(itemName); 
});
console.log(inventory.items); 

invokeInventoryAction("Gas mask", function (itemName) {
    inventory.remove(itemName); 
});
console.log(inventory.items); 
