interface Product{
    id?: string;
    image: string
	productName: string
	price: number
}

export interface ProductInventory extends Product{
    seller: string
    phoneSeller: string
    inventoryStatus?: Status
}


export type Status= 'In Inventory'|'Sold Out' |'Pending'| 'Delivered';