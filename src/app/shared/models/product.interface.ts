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


export interface ProductToCart extends ProductInventory{
    inCart?:boolean;
}

export type Status= 'In Inventory'|'Sold Out' |'Pending'| 'Delivered' | 'Approved' | 'Rejected' | 'For Delivery';